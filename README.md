# Super AI website

A bespoke, responsive Next.js 16 website for Super AI: practical AI education and AI-powered digital marketing.

## Deploy

Run `npm install` then `npm run build`. Deploy the repository with Vercel (Add New → Project → import repository). Configure `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WEB3FORMS_KEY` from `.env.example`.

The prebuild step generates the complete Next.js app, route pages, styling and original SVG artwork from `build-site.mjs`. See `IMAGES.md` for the art register and `QA-STATUS.md` for the current verification status.

Contact submissions require a Web3Forms key. Without one, the form explains that setup is required; it does not claim to have sent a message.
