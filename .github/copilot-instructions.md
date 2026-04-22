# Portfolio Project Guidelines

## Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **UI**: MUI v7 with Emotion
- **CMS**: Prismic (via `@prismicio/next` and `@prismicio/react`)
- **Animation**: Framer Motion
- **Language**: TypeScript

## Architecture

- Route group `(dashboard)` wraps all pages with a shared layout and footer
- CMS content is fetched via Prismic client in `src/lib/prismicio.ts`
- Slice types live in `src/lib/prismicio/types.ts`

## Conventions

- Use MUI components for layout and typography
- Use `next/link` with `passHref` for navigation
- Keep pages as Server Components where possible; opt into client only when interactivity is needed
