# Products (local files)

This folder is where **local development** stores downloadable PDFs.

## Important

- PDFs are **gitignored** (see `/.gitignore`) so we don’t bloat GitHub with large binaries.
- For production, these should be delivered via **Stripe** + secure hosting (object storage / signed URLs), not committed to the repo.

## Setup

Copy your PDFs into:

- `public/products/ebooks/`
- `public/products/fitness/`

The app links are defined in `src/lib/products.ts`.
