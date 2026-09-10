# Munich Tech Sauna

Source and static build of the Munich Tech Sauna community website.

The site was exported from [Lovable](https://lovable.dev/projects/2924ab99-ce7d-41ab-b32d-b4763cea5002) on September 10, 2026. It includes the current design, logo, favicon, photos, and live Luma calendar embed.

## What is in this repository?

- `src/` — editable React and TanStack Start source.
- `src/assets/` — the actual image files, including assets downloaded separately from Lovable.
- `public/` — favicon files, web manifest, and the existing custom domain configuration.
- `docs/` — the complete, pre-rendered website served by GitHub Pages.

GitHub Pages is configured to use **main → /docs**, with `www.techsauna.dev` as its custom domain. The domain currently points to a separate Netlify deployment, so updating GitHub Pages alone does not change the site shown at that domain. The included `netlify.toml` also builds and publishes the static `docs/` output when this repository is connected to Netlify. The earlier Svelte site remains available in Git history.

## Run locally

Install Node.js 22.12 or newer, then run:

```sh
npm ci
npm run dev
```

## Publish an update

```sh
npm run build
```

This builds the app and replaces `docs/` with the ready-to-publish site. Commit your source changes **and the updated docs folder**, then push or merge them into `main`. GitHub Pages deploys the committed files. Check the repository's Actions tab for the deployment result.

Do not upload only the source files: GitHub Pages needs the generated `docs/` files.

## Editing in Lovable

This is a one-time export into the existing `hansamann/mts` repository. It does **not** establish automatic two-way sync with Lovable. Future edits in Lovable must be exported and rebuilt here before they appear on the live website.

Lovable's GitHub connection creates a new repository. Keep this distinction in mind before enabling it.

## Build notes

The homepage is pre-rendered to HTML during the build. GitHub serves only the static client output. The server build is not published. Images are bundled locally, so the website does not depend on Lovable's private editor or asset routes. Luma supplies the live event calendar; Google Fonts supplies the existing typefaces.
