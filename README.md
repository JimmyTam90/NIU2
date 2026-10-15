# niu (Spoke) for primegearlab.com/niu

Next.js 14.2.35, App Router, JavaScript, Tailwind 3. `basePath: '/niu'`; pages stay in `app/` (no `app/niu/` folder).
Public files are served at `/niu/logo.png`, `/niu/favicon.ico`, etc. (they live in `public/`). Use `pub()` from `lib/site-config.js` for plain `<a>`/`<img>` paths; `next/link` adds `/niu` itself.

Hub `vercel.json` must forward the subpath WITH the prefix to the Spoke:

    { "rewrites": [ { "source": "/niu/:path*", "destination": "https://<SPOKE-DOMAIN>.vercel.app/niu/:path*" } ] }

`/niu/:path*` also matches `/niu`. Without this rule, `/niu/_next/static/*` (CSS and JS) 404s and the page renders unstyled.
Env: `NEXT_PUBLIC_SITE_URL` (default https://primegearlab.com), optional GA/Ads/Pixel IDs.
