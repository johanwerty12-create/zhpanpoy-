# The Craft

The Craft is a lightweight, static massage-learning app for beginners. It includes 13 lessons, individual visual Quick Practices, quizzes, nine routines, timers, safety guidance, and private progress stored in the browser. The Follow Along player shows a matching visual at every step, gentle transitions, pause/resume, and locally saved completion. The hand curriculum teaches 15 distinct techniques with unique visuals; the Pressure Points reference reviews 18 body areas and teaches six landmark-based traditional points with safety boundaries. There is no account, database, build step, or dependency installation.

## Run locally

Install Node.js, then run this from the project folder:

```bash
node dev-server.js
```

Open <http://127.0.0.1:4173>. Stop the server with `Ctrl+C`. The small local server serves the static files and maps app routes back to `index.html`, so clean URLs work during development too.

## Project layout

- `index.html` — app shell, shared metadata, and stylesheet/script loading
- `app.js` — course lesson data, local progress, path routing, metadata, and shared events
- `product-pass.js` — page renderers, Quick Practice, technique/routine/body-area data, and interactions
- `styles.css`, `product-pass.css` — base styles and responsive product improvements
- `relaxation-coach.js` — staged lesson practices and the routine Follow Along player, comfort checks, and timer controls
- `hand-massage.js` — dedicated palm/finger teaching, a guided hand routine, and the existing verified LI4 lesson
- `design-polish.css` — warm, readable presentation with consistent cards and responsive layouts
- `QUALITY-AUDIT.md` — instruction/visual review scope, sources, and verification limitations
- `assets/` — optimized WebP instructional photos
- `dev-server.js` — dependency-free local static server with SPA route fallback
- `vercel.json` — static root output and clean-route rewrites for Vercel

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import the GitHub repository and select this repository as the project root.
4. Use **Other** as the framework preset. Leave the build and install commands empty; set the output directory to `.` (the repository root).
5. Choose **Deploy**. Vercel serves the existing HTML, CSS, JavaScript, and image files directly; `vercel.json` rewrites app routes such as `/lessons/9` to the app shell so refreshes work.
6. Open the generated `.vercel.app` domain to check the live site.

There is no production compilation step for this architecture. Before deployment, validate the JavaScript with `node --check app.js` and `node --check product-pass.js`, then run the local server and check the routes and interactions.

Also check `node --check relaxation-coach.js` and run `node tools/check-relaxation.cjs` for page/asset checks and timer regressions. Keep the asset version query in `index.html` updated when publishing another instruction change so previously cached scripts do not mask the release.

The dedicated `/hand-massage` and `/pressure-points` pages are linked in navigation and on the home page. `/pressure-points#point-li4` opens the hand point directly. The routines page includes the 8-minute 15-step hand sequence and a 3-minute, six-landmark educational tour. Check `node --check hand-massage.js` too.

Progress is saved only in the current browser with `localStorage`; it does not sync between devices. The lessons are educational guidance, not medical diagnosis or treatment, and emphasize gentle pressure and stopping when comfort changes.
