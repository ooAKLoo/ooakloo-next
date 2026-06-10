const ORBIT_ENDPOINT =
  process.env.NEXT_PUBLIC_ORBIT_API_URL || 'https://orbit-api.yangdongjuooakloo.workers.dev';

const ORBIT_APP_ID = 'com.dongju.ooakloo';
const STORAGE_KEY = 'orbit_distinct_id';

export interface SendOrbitFeedbackOptions {
  content: string;
  contact?: string;
  attachment?: File | null;
}

function getOrCreateDistinctId(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (existing) {
      return existing;
    }

    const id = window.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
    window.localStorage.setItem(STORAGE_KEY, id);
    return id;
  } catch {
    return null;
  }
}

function getPlatform(): string {
  if (typeof navigator === 'undefined') {
    return 'web';
  }

  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('iphone') || ua.includes('ipad')) return 'ios';
  if (ua.includes('android')) return 'android';
  if (ua.includes('mac')) return 'macos';
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux')) return 'linux';
  return 'web';
}

function getDeviceInfo() {
  return {
    platform: getPlatform(),
    app_version: 'web',
    distinct_id: getOrCreateDistinctId(),
  };
}

export async function sendOrbitFeedback(options: SendOrbitFeedbackOptions): Promise<boolean> {
  const url = `${ORBIT_ENDPOINT}/v1/${ORBIT_APP_ID}/feedback`;
  const deviceInfo = getDeviceInfo();

  const response = options.attachment
    ? await sendMultipartFeedback(url, options, deviceInfo)
    : await sendJsonFeedback(url, options, deviceInfo);

  return response.ok;
}

async function sendJsonFeedback(
  url: string,
  options: SendOrbitFeedbackOptions,
  deviceInfo: ReturnType<typeof getDeviceInfo>
): Promise<Response> {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: options.content,
      contact: options.contact,
      device_info: deviceInfo,
    }),
  });
}

async function sendMultipartFeedback(
  url: string,
  options: SendOrbitFeedbackOptions,
  deviceInfo: ReturnType<typeof getDeviceInfo>
): Promise<Response> {
  const formData = new FormData();
  formData.append('content', options.content);
  if (options.contact) {
    formData.append('contact', options.contact);
  }
  formData.append('device_info', JSON.stringify(deviceInfo));
  if (options.attachment) {
    formData.append('attachments', options.attachment, options.attachment.name);
  }

  return fetch(url, {
    method: 'POST',
    body: formData,
  });
}
