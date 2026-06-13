# Alejandro Tellez — Personal Website

Personal portfolio for **Alejandro Tellez**, Senior QA Engineer / SDET.

Built with **Next.js** (static export) + **Tailwind CSS**, deployed to GitHub Pages.

## Sections

- **Home** — intro, focus areas and selected work
- **Journey** — career timeline
- **Skills** — QA & test-automation tech stack
- **Projects** — case studies with impact metrics
- **Bookmarks** — curated articles and tools by topic

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
```

## Build & export

```bash
bun run build    # outputs static site to ./out
```

Pushing to `master` triggers the GitHub Actions workflow that builds and
publishes `./out` to the `gh-pages` branch.

## Content

Most editable content lives in plain data files:

- `src/lib/nav.ts` — profile, navigation, social links
- `src/lib/projects.ts` — projects / case studies
- `src/lib/skills.ts` — skill groups
- `src/lib/bookmark.ts` — bookmarks and categories
- `src/app/journey/page.tsx` — career timeline
