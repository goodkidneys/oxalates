# Oxalate Guide

A private, static reference site for a vegan low-oxalate diet: searchable oxalate values for 250+
curated foods and the full 433-row Harvard Nov 2023 table, low-oxalate recipes, and a recipe builder
that computes oxalate and nutrition totals. No build step, no framework, no server: plain HTML, CSS
and JavaScript served by GitHub Pages.

## Daily intake tracker

The *Intake* tab logs calcium, fluids, sodium and optionally oxalate per day on a calendar, with
targets, averages and a 30-day trend. Entries are stored in the browser (localStorage). To keep them
across devices, create a **private** GitHub repository and a fine-grained token limited to it with
*Contents: read and write*; enter both under *Sync, backup and restore* on the Intake page. Sync
merges both sides day by day (newest edit wins) into `intake.json` in that private repo. JSON and
CSV export/import are also available. Nothing about intake is ever written to this public repo.

## Set up hosting (one time)

1. Merge this branch into `main` (or push it there).
2. On GitHub open **Settings → Pages**. Under *Build and deployment* choose **Source: Deploy from a
   branch**, then **Branch: `main`**, folder **`/ (root)`**, and save.
3. After a minute the site is live at `https://goodkidneys.github.io/oxalates/`. Bookmark it; nothing
   links to it.

The repository must stay public for GitHub Pages on the free plan. Making it private requires a paid
GitHub plan (Pages is included in GitHub Pro).

## Privacy

- `index.html` carries `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`.
- `robots.txt` disallows all crawlers.
- There are no inbound links. Search engines do not list pages they cannot crawl and that carry
  `noindex`.
- Anyone who has the URL can read the site. There is no login. If you ever want one, a client-side
  passphrase gate is easy to add but only deters casual visitors; real access control would need
  a private repo plus a host that supports authentication.

## Layout

| Path | What it is |
|---|---|
| `index.html`, `styles.css`, `app.js` | the site |
| `data/foods.js` | curated food list (source of truth; see `CLAUDE.md` for the schema) |
| `data/harvard.js` | full Harvard Nov 2023 table, generated from the spreadsheet |
| `data/recipes.js` | recipes |
| `data/changelog.js` | every data change, with reasons |
| `docs/` | the Harvard spreadsheet, the evidence-guide PDF, research check reports |
| `tools/validate.js` | data checks (`node tools/validate.js`) |
| `tools/harvard_xlsx_to_js.py` | regenerate `data/harvard.js` from a new Harvard spreadsheet |
| `RECIPE_TEMPLATE.md` | recipe JSON format |
| `CLAUDE.md` | instructions for Claude Code sessions that maintain the site |

## Updating

**Add a recipe.** Open the site's *Recipe Builder*, pick ingredients, enter amounts, then either
*Publish to GitHub* (after saving a fine-grained personal access token with *Contents: read and
write* on this repository in the publisher settings, stored only in your browser) or *Copy JSON* and
paste it into `data/recipes.js` on GitHub, or into a Claude Code session with "add this recipe".

**Change or add foods, or re-check the data online.** Start a Claude Code session on this repository
and describe the change. `CLAUDE.md` tells it where things live and the checks to run.

**New Harvard spreadsheet.** Put it in `docs/`, run
`python3 tools/harvard_xlsx_to_js.py docs/<file>.xlsx`, review `git diff data/harvard.js`, commit.

Every push that touches data runs `tools/validate.js` in GitHub Actions.

## Local preview

Open `index.html` directly in a browser, or run `python3 -m http.server` in the folder and open
`http://localhost:8000/`.

## Disclaimer

Personal reference, not medical advice. Values come from the Harvard T.H. Chan oxalate table
(Nov 2023), the OHF list (Feb 2024) and the papers listed on the site's *Sources & Updates* page;
nutrition numbers are approximate USDA values.
