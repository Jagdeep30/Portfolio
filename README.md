# jagdeepsingh.dev

Personal site — a single reading column, dark and light.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 (CSS-first config, tokens in `src/app/globals.css`)
- `next/font` self-hosting Newsreader + JetBrains Mono
- Deployed on Vercel

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Where things live

| Path | What |
|---|---|
| `src/content/site.ts` | **All copy and data.** Edit this, not the components. |
| `src/app/globals.css` | Theme tokens for both themes, base type, reveal animation. |
| `src/components/` | One file per section. |
| `design/` | The design canvas sources (`Main.dc.html` = dark, `Light.dc.html` = light). |

Changing what the site says is a one-file job: `src/content/site.ts`.

## Theme

`data-theme` on `<html>` is set by an inline script in `src/app/layout.tsx`
before first paint, so there is no flash. It resolves to the visitor's stored
choice, else their OS preference. The toggle writes to `localStorage`.
