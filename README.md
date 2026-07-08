# Vinomial-homepage

Static homepage for Binomial.

## Vercel migration

This repository can be deployed to Vercel as a static site with no build step.

Recommended Vercel project name:

- `vinomial-homepage`

Recommended deploy flow:

1. Import `Binomial58/Vinomial-homepage` into Vercel from GitHub.
2. Set the project name to `vinomial-homepage` during import, or rename it later from the Vercel project settings.
3. Keep the framework preset as `Other` or let Vercel auto-detect the static site.
4. Leave the build command empty.
5. Leave the output directory empty.

Notes:

- `vercel.json` enables `cleanUrls`, so `blog.html` is served as `/blog`.
- The repository name does not need to match the Vercel project name.
- If you later add a custom domain, configure it in the Vercel project under `Settings > Domains`.
