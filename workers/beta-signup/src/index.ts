interface Env {
  LARK_APP_ID: string;
  LARK_APP_SECRET: string;
  LARK_BASE_TOKEN: string;
  LARK_TABLE_ID: string;
  LARK_CHAT_ID: string;
  LARK_BASE_URL: string;
  ALLOWED_ORIGINS: string;
}

interface SignupPayload {
  email?: unknown;
  locale?: unknown;
  pageUrl?: unknown;
  referrer?: unknown;
  website?: unknown;
}

interface LarkResponse<T> {
  code: number;
  msg: string;
  data?: T;
}

interface TokenResponse {
  code: number;
  msg: string;
  tenant_access_token?: string;
  expire?: number;
}

interface WorkerExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

let tokenCache: { token: string; expiresAt: number } | undefined;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LARK_API = 'https://open.feishu.cn/open-apis';

const worker = {
  async fetch(request: Request, env: Env, ctx: WorkerExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/health' && request.method === 'GET') {
      return json({ ok: true, service: 'rova-beta-signup' });
    }

    if (url.pathname !== '/v1/beta-signups') {
      return json({ ok: false, error: 'not_found' }, 404);
    }

    const corsHeaders = getCorsHeaders(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return json({ ok: false, error: 'method_not_allowed' }, 405, corsHeaders);
    }

    if (!isAllowedOrigin(request, env)) {
      return json({ ok: false, error: 'origin_not_allowed' }, 403, corsHeaders);
    }

    const contentType = request.headers.get('content-type') ?? '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return json({ ok: false, error: 'unsupported_media_type' }, 415, corsHeaders);
    }

    let payload: SignupPayload;
    try {
      payload = (await request.json()) as SignupPayload;
    } catch {
      return json({ ok: false, error: 'invalid_json' }, 400, corsHeaders);
    }

    // Honeypot fields are intentionally reported as successful to avoid teaching bots.
    if (typeof payload.website === 'string' && payload.website.trim()) {
      return json({ ok: true }, 202, corsHeaders);
    }

    const email = normalizeEmail(payload.email);
    if (!email) {
      return json({ ok: false, error: 'invalid_email' }, 400, corsHeaders);
    }

    const locale = payload.locale === 'cn' ? 'cn' : 'en';
    const pageUrl = normalizeUrl(payload.pageUrl);
    const referrer = normalizeUrl(payload.referrer);
    const appliedAt = Date.now();
    const requestId = crypto.randomUUID();

    try {
      const accessToken = await getTenantAccessToken(env);
      const existingRecordId = await findExistingRecord(accessToken, env, email);

      if (existingRecordId) {
        return json({ ok: true, duplicate: true }, 200, corsHeaders);
      }

      const recordId = await createRecord(accessToken, env, {
        email,
        locale,
        pageUrl,
        referrer,
        appliedAt,
      });

      ctx.waitUntil(
        sendNotification(accessToken, env, {
          email,
          locale,
          pageUrl,
          referrer,
          appliedAt,
          recordId,
          requestId,
        }).catch((error) =>
          console.error('Lark notification failed', {
            requestId,
            error: formatError(error),
          }),
        ),
      );

      return json({ ok: true }, 201, corsHeaders);
    } catch (error) {
      console.error('Beta signup failed', { requestId, error: formatError(error) });
      return json({ ok: false, error: 'upstream_unavailable' }, 503, corsHeaders);
    }
  },
};

function formatError(error: unknown): string {
  return error instanceof Error ? `${error.name}: ${error.message}` : String(error);
}

export default worker;

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const email = value.trim().toLowerCase();
  if (email.length < 3 || email.length > 254 || !EMAIL_PATTERN.test(email)) return null;
  return email;
}

function normalizeUrl(value: unknown): string {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
    return url.toString().slice(0, 1000);
  } catch {
    return '';
  }
}

function getAllowedOrigins(env: Env): Set<string> {
  return new Set(
    env.ALLOWED_ORIGINS.split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
}

function isAllowedOrigin(request: Request, env: Env): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  if (getAllowedOrigins(env).has(origin)) return true;

  try {
    const hostname = new URL(origin).hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

function getCorsHeaders(request: Request, env: Env): HeadersInit {
  const origin = request.headers.get('origin');
  const allowOrigin = origin && isAllowedOrigin(request, env) ? origin : 'https://wojeeo.com';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body: unknown, status = 200, headers: HeadersInit = {}): Response {
  const responseHeaders = new Headers(headers);
  responseHeaders.set('Content-Type', 'application/json; charset=utf-8');
  responseHeaders.set('Cache-Control', 'no-store');
  responseHeaders.set('X-Content-Type-Options', 'nosniff');
  return new Response(JSON.stringify(body), { status, headers: responseHeaders });
}

async function getTenantAccessToken(env: Env): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) return tokenCache.token;

  const response = await fetch(`${LARK_API}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ app_id: env.LARK_APP_ID, app_secret: env.LARK_APP_SECRET }),
  });
  const result = (await response.json()) as TokenResponse;

  if (!response.ok || result.code !== 0 || !result.tenant_access_token) {
    throw new Error(`Lark token request failed: ${result.code} ${result.msg}`);
  }

  tokenCache = {
    token: result.tenant_access_token,
    expiresAt: Date.now() + Math.max((result.expire ?? 7200) - 120, 60) * 1000,
  };
  return tokenCache.token;
}

async function findExistingRecord(accessToken: string, env: Env, email: string): Promise<string | null> {
  const response = await larkFetch<{ record_id_list?: string[] }>(
    `${LARK_API}/base/v3/bases/${env.LARK_BASE_TOKEN}/tables/${env.LARK_TABLE_ID}/records/search`,
    accessToken,
    {
      method: 'POST',
      body: JSON.stringify({
        keyword: email,
        search_fields: ['邮箱'],
        select_fields: ['邮箱'],
        limit: 1,
      }),
    },
  );

  return response.data?.record_id_list?.[0] ?? null;
}

async function createRecord(
  accessToken: string,
  env: Env,
  data: { email: string; locale: 'cn' | 'en'; pageUrl: string; referrer: string; appliedAt: number },
): Promise<string> {
  const fields: Record<string, string | number | { link: string; text: string }> = {
    '邮箱': data.email,
    '申请时间': data.appliedAt,
    '状态': '新申请',
    '语言': data.locale,
  };
  if (data.pageUrl) fields['页面'] = { link: data.pageUrl, text: data.pageUrl };
  if (data.referrer) fields['来源页面'] = { link: data.referrer, text: data.referrer };

  const response = await larkFetch<{ record?: { record_id?: string } }>(
    `${LARK_API}/bitable/v1/apps/${env.LARK_BASE_TOKEN}/tables/${env.LARK_TABLE_ID}/records`,
    accessToken,
    { method: 'POST', body: JSON.stringify({ fields }) },
  );
  const recordId = response.data?.record?.record_id;
  if (!recordId) throw new Error('Lark record creation returned no record_id');
  return recordId;
}

async function sendNotification(
  accessToken: string,
  env: Env,
  data: {
    email: string;
    locale: 'cn' | 'en';
    pageUrl: string;
    referrer: string;
    appliedAt: number;
    recordId: string;
    requestId: string;
  },
): Promise<void> {
  const appliedAt = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(new Date(data.appliedAt));
  const lines = [
    '🌱 Rova Beta 新用户申请',
    `邮箱：${data.email}`,
    `语言：${data.locale}`,
    `时间：${appliedAt}`,
    data.pageUrl ? `页面：${data.pageUrl}` : '',
    data.referrer ? `来源：${data.referrer}` : '来源：直接访问',
    `名单：${env.LARK_BASE_URL}?table=${env.LARK_TABLE_ID}&record=${data.recordId}`,
  ].filter(Boolean);

  await larkFetch(
    `${LARK_API}/im/v1/messages?receive_id_type=chat_id`,
    accessToken,
    {
      method: 'POST',
      headers: { 'X-Request-Id': data.requestId },
      body: JSON.stringify({
        receive_id: env.LARK_CHAT_ID,
        msg_type: 'text',
        content: JSON.stringify({ text: lines.join('\n') }),
      }),
    },
  );
}

async function larkFetch<T = unknown>(
  url: string,
  accessToken: string,
  init: RequestInit,
): Promise<LarkResponse<T>> {
  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${accessToken}`);
  headers.set('Content-Type', 'application/json; charset=utf-8');

  const response = await fetch(url, { ...init, headers });
  const result = (await response.json()) as LarkResponse<T>;
  if (!response.ok || result.code !== 0) {
    throw new Error(`Lark API request failed: ${result.code} ${result.msg}`);
  }
  return result;
}
