# Ella Man Real Estate — Vercel Deployment

## Vercel plugin (Cursor)

The Vercel plugin is installed for Cursor. **Restart Cursor** so it loads.

Useful slash commands in chat:

- `/vercel-plugin:deploy` — preview deployment
- `/vercel-plugin:deploy prod` — production deployment
- `/vercel-plugin:status` — project status and recent deployments
- `/vercel-plugin:bootstrap` — link project, env vars, first deploy

## Automatic deployments

When the GitHub repo is connected to Vercel, **every push to `main`** triggers a production build automatically. No extra CI setup is required.

Ensure in [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings → Git**:

- Production Branch: `main`
- Root Directory: `frontend` (the Next.js app lives in this folder)

## Change the deployment URL to match the website name

The site brand is **Ella Man Real Estate**. The Vercel project name should be:

**`ella-man-real-estate`**

That gives the default URL:

**https://ella-man-real-estate.vercel.app**

### Rename an existing project (one-time)

1. Open [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project (may still be named `ethio-best` or similar)
3. Go to **Settings → General → Project Name**
4. Change it to **`ella-man-real-estate`**
5. Save — Vercel will redirect the old `*.vercel.app` URL to the new one

Or from the terminal (after `vercel login`):

```bash
cd frontend
vercel link
# Select the existing project, then rename in the dashboard
```

### Environment variable

In Vercel → **Settings → Environment Variables**, add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://ella-man-real-estate.vercel.app` |

Apply to **Production**, **Preview**, and **Development**.

## Manual deploy (optional)

```bash
cd frontend
vercel login
vercel link
vercel --prod
```

## Custom domain (optional)

To use `ellamanrealestate.com`:

1. Vercel → **Settings → Domains**
2. Add `ellamanrealestate.com` and `www.ellamanrealestate.com`
3. Point DNS records as shown by Vercel
