# Ella Man Real Estate

Luxury real estate website for **Ella Man Real Estate** — Addis Ababa, Ethiopia.

## Project structure

```
Ethio-Best/
├── frontend/          # Next.js 16 app (deploy this folder on Vercel)
└── DEPLOYMENT.md      # Vercel setup, URL rename, auto-deploy
```

## Local development

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

- **Live URL:** [https://ella-man-real-estate.vercel.app](https://ella-man-real-estate.vercel.app)
- **Auto-deploy:** pushes to `main` deploy automatically when GitHub is linked to Vercel
- **Details:** see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Vercel plugin (Cursor)

```bash
npx plugins add vercel/vercel-plugin --target cursor --yes
```

Restart Cursor, then use `/vercel-plugin:deploy prod` to deploy from chat.
