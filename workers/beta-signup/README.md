# Rova Beta Signup Worker

Cloudflare Worker endpoint for the public beta application form.

## Endpoints

- `GET /health`
- `POST /v1/beta-signups`

Production hostname: `waitlist.wojeeo.com`.

## Required secret

```bash
wrangler secret put LARK_APP_SECRET \
  --name rova-beta-signup \
  --config workers/beta-signup/wrangler.jsonc
```

The Feishu app must have application-identity permissions for:

- `base:record:read`
- `base:record:create`
- `im:message:send_as_bot`

The app bot must also be an editable collaborator of the configured Base and a member of the configured notification chat.

## Local development

Create `workers/beta-signup/.dev.vars` with `LARK_APP_SECRET`, then run:

```bash
npm run worker:dev
```
