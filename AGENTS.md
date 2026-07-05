# MD Manager - Project Instructions

## Project Overview
MD Manager is a Markdown-based static site generated with **Astro 7**. It serves as a personal knowledge base or blog with full-text search, tagging, and dark mode support.

### Key Technologies
- **Framework:** [Astro 7](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Search:** [Pagefind](https://pagefind.app/) (Static full-text search)
- **Icons:** [Lucide Astro](https://lucide.dev/guide/astro)
- **Content Management:** Astro Content Layer (Markdown files in `src/content/posts`)

### Architecture
- **Content:** Markdown files are located in `src/content/posts`. Metadata is defined in `src/content.config.ts`.
- **Pages:**
  - `/`: Home page with search and recent posts.
  - `/posts/[slug]`: Individual post pages.
  - `/tags`: Index of all unique tags.
  - `/tags/[tag]`: Filtered posts by tag.
- **Search:** Pagefind indexes the `dist` directory after the build. The search UI is integrated via a custom component in `src/components/Search.astro`.
- **Dark Mode:** Class-based dark mode (`.dark` class on `<html>`). Managed via a script in `src/layouts/BaseLayout.astro` and a toggle in `src/components/Header.astro`. Tailwind 4 configuration is handled via `@custom-variant dark` in `src/styles/global.css`.

---

## Building and Running

### Development
```bash
pnpm dev
```
Starts the local development server. Note: Search functionality requires a build to generate the Pagefind index.

### Production Build
```bash
pnpm build
```
Generates the static site in the `dist` directory and automatically triggers `pnpm postbuild` to run Pagefind indexing.

### Preview
```bash
pnpm preview
```
Previews the production build locally.

---

## Development Conventions

### Content Structure
- All Markdown files must be placed in `src/content/posts`.
- Required Frontmatter:
  ```yaml
  title: string
  description: string
  pubDate: date
  tags: string[]
  draft: boolean (optional)
  ```

### Styling
- Use **Tailwind CSS 4** utility classes.
- Dark mode styles should be prefixed with `dark:`.
- Global styles and Tailwind configuration are located in `src/styles/global.css`.

### Components
- Place reusable components in `src/components`.
- Use **Lucide Astro** for icons.
- Ensure all components support dark mode.

### Search
- Content intended for search indexing must be wrapped in an element with the `data-pagefind-body` attribute (currently implemented in `src/pages/posts/[...slug].astro`).

### Markdown Processing
- We use the default Rust-powered **Sätteri** Markdown processor introduced in Astro 7.
- External links are automatically formatted (adding `target="_blank"`, `rel="noopener noreferrer"`, and a `🔗` icon suffix) via a custom HAST plugin (`satteriExternalLinksPlugin`) in `astro.config.mjs`. Do not apply these properties manually or install legacy `rehype` plugins.
