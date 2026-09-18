# Spencer Michaelson — Engineering Portfolio

A photographic, editorial portfolio with eight detailed project stories. Original photographs, drawings, schematics, and test plots are integrated into the narrative. The website is static, self-contained, and ready for a later GitHub Pages deployment.

**Local preview:** http://localhost:4173/index.html

## Run locally

From this folder, with Node.js installed:

```text
npm run build
npm run check
npm start
```

Open http://localhost:4173. The server listens on `127.0.0.1` and serves only `dist/`. No package installation is required. There are no analytics, external fonts, CDN scripts, or runtime services.

## Project sequence

1. **Apollyon I** — propulsion, structural decisions, team leadership, and the field recovery-system rebuild behind a first-place flight.
2. **Hat Trick** — independent fabrication and integration; all six flight results; the failure investigations and changes that led to two complete recoveries.
3. **Atlas** — the custom PCB architecture, components, design revisions, assembled-board tests, LED fault, and remaining development.
4. **Gladius III** — the ten-motor trade, structural studies, manufacturing, and final simulation-to-flight comparison.
5. **Jolly Roger** — sensing circuits, the winch and encoder, calibration, autonomous operation, field measurements, and limitations discovered on the water.
6. **Drone Lab** — beam-mapping flight objectives, forward modeling, trajectory reconstruction, attitude analysis, and a 40-plus-flight test loop.
7. **Unknown Rider** — the N1000W redesign, preliminary analyses, materials, evolving avionics architecture, and procurement plan.
8. **Project Robocop** — PCB rework, switch preparation, acoustic treatment, fit checks, and verification of the restored keyboard.

The homepage connects those projects with education, team leadership, research, and professional experience. Gladius follows Hat Trick and Atlas, ahead of Jolly Roger and Drone Lab.

## Design and content

- Locally bundled Newsreader and Manrope; a near-white, forest-green palette.
- A real Apollyon team photograph leads the homepage.
- 121 distinct project images appear within the stories and homepage. Repeated source images are consolidated; the generic school emblem is retained in the asset manifest but is not shown as project work.
- Technical figures retain their complete frames. Portrait photographs use layouts suited to their proportions. Keyboard photographs reproduce the rotation used in the original PDF.
- Case studies have chapter navigation and optional image enlargement. The simulator, synthetic diagrams, animated plots, and separate evidence archives have been removed.
- HTML contains the complete project content. JavaScript supports the mobile menu, chapter indication, and image enlargement.

## Editing guide

| File | Purpose |
| --- | --- |
| `src/stories/*.mjs` | Each project's narrative, figures, captions, and tables |
| `src/stories.mjs` | Project-story imports |
| `projects.json` | Project order, roles, status, summary metrics, and tools |
| `gallery.json` | Asset names, source pages, dimensions, and thumbnail dimensions |
| `flights.json` | Hat Trick's six-flight source record, checked during validation |
| `build.mjs` | Homepage, shared layout, navigation, and HTML generation |
| `src/styles.css` | Typography, colors, image framing, and responsive layouts |
| `src/site.js` | Menu, chapter tracking, and image viewer |
| `dist/assets/` | Original project imagery, thumbnails, documents, and fonts |
| `check.mjs` | Local page, link, asset, and syntax checks |

Run `npm run build` after an edit, then reload the preview. The `dist/` folder is the complete website; its assets are also the local asset source for rebuilding. No paths into Downloads or the original PDFs are needed to run or rebuild the site.

The résumé download is the supplied August 28, 2026 document. The website contains the later Atlas and Unknown Rider updates. The opportunities workbook informed emphasis and is not included.

## GitHub Pages, when ready

Nothing has been published. A manually triggered workflow is included at `.github/workflows/pages.yml`.

Place this folder's contents in the chosen repository, configure GitHub Pages to use GitHub Actions, and run **Publish portfolio to GitHub Pages**. The workflow builds and checks the site before deploying `dist/`. All site links are relative, supporting a repository subpath.

## Design research

The redesign drew on these specific references:

- [Teenage Engineering — OP–1 field](https://teenage.engineering/products/op-1): give the actual object visual priority; place explanation beside the relevant product image.
- [Rimac — Nevera](https://www.rimac-automobili.com/nevera/): move from the completed machine into the engineering and manufacturing decisions behind it.
- [Arun Venkatesan — DIY modular charging station](https://arun.is/blog/diy-modular-charging-station/): a readable personal project account organized around constraints, design choices, construction, and lessons.
- [James Dyson Award — ENSO](https://www.jamesdysonaward.org/2025/project/enso-built-to-return): explain the problem, development process, and iteration with concrete project detail.

No reference-site artwork, code, or models were copied. All project imagery comes from the supplied records. Newsreader and Manrope use the SIL Open Font License; their license files are included in `licenses/` and `dist/licenses/`.

See `REVIEW.md` for the three review passes and their findings.
