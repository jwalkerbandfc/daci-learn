# Flutter Masterclass — Live from GitHub

An interactive, **sequenced** Flutter tutorial where every piece of course content — lesson text, Dart examples, and the code inside the embedded DartPad — is pulled dynamically from this GitHub repository at runtime. Update a `.dart` file, push, and every learner sees the change on their next load. No rebuild, no redeploy of the app itself.

## How it works

```
Browser                          GitHub (this repo)
───────                          ──────────────────
index.html + app.js  ──fetch──▶  manifest.json        (the lesson sequence)
                     ──fetch──▶  lessons/NN-*.md      (lesson content)
                     ──fetch──▶  examples/NN_*.dart   (source viewer)
DartPad iframe       ──fetch──▶  examples/NN_*.dart   (?gh_owner=&gh_repo=&gh_path=)
```

- **`manifest.json`** defines the course order. Lesson *N+1* stays 🔒 locked until lesson *N* is marked complete — progress is saved in the browser (localStorage) and survives refreshes.
- **DartPad** loads each example directly from GitHub via its native `gh_owner` / `gh_repo` / `gh_path` / `gh_ref` URL parameters, so the repo is the single source of truth for both the source viewer and the live editor.
- The Dart examples build one app across the course — **Campus Coffee** — so the sequence carries a narrative: hello world → widgets → lists → state → navigation → theming → async → a broken till to debug.

## Repository layout

```
flutter-masterclass/
├── index.html          The tutorial app (deploy anywhere static)
├── styles.css
├── app.js              ← set your GitHub owner/repo/branch here
├── manifest.json       Lesson sequence, challenge text, hints
├── lessons/            Markdown lesson content (fetched at runtime)
│   └── 01-getting-started.md … 08-debugging.md
└── examples/           Runnable single-file Flutter apps (fetched at runtime)
    └── 01_getting_started.dart … 08_debugging.dart
```

## Setup

### 1. Create the GitHub repo and push

The repo **must be public** — both `raw.githubusercontent.com` and DartPad's GitHub loader only work on public repos.

```bash
cd flutter-masterclass
git init
git add .
git commit -m "Flutter Masterclass: sequenced tutorial with GitHub-backed content"
gh repo create flutter-masterclass --public --source=. --push
# …or create it in the GitHub UI, then:
# git remote add origin https://github.com/<you>/flutter-masterclass.git
# git branch -M main && git push -u origin main
```

### 2. Point the app at your repo

Open `app.js` and edit the three lines at the top:

```js
const GITHUB = {
    owner: 'your-github-username',
    repo: 'flutter-masterclass',
    branch: 'main',
};
```

Commit and push that change too. (For a quick test without editing, you can override via the URL: `index.html?owner=you&repo=flutter-masterclass&branch=main`.)

### 3. Deploy the front end

Any static host works, since the app is three files. Two easy options:

**GitHub Pages** (same repo, zero extra infra):
Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / root. Your tutorial appears at `https://<you>.github.io/flutter-masterclass/`.

**Cloudflare Pages** (Git-connected):
Create a Pages project connected to the repo, framework preset *None*, build command empty, output directory `/`. Since content is fetched from GitHub at runtime, pushes to `lessons/` or `examples/` don't even need a Pages build to take effect — only changes to the three app files do.

### 4. Open it

You should see the lesson list build itself from `manifest.json`, with lesson 1 unlocked and the rest locked. If the repo isn't reachable, the app shows a setup checklist with the exact URL it tried.

## Editing the course

- **Change an example:** edit the `.dart` file, push. Done — the source pane and DartPad both pick it up (DartPad and browsers cache briefly; a hard refresh forces it).
- **Add a lesson:** add a `.md` + `.dart` file, then append an entry to `manifest.json`'s `lessons` array. The sequence, locks and progress bar adapt automatically.
- **Tip/warning callouts:** in lesson markdown, blockquotes starting with `💡` render as tip boxes and `⚠️` as warning boxes.

## Notes & limitations

- DartPad supports single-file Flutter apps with a fixed set of packages — keep examples to one `main.dart` with `package:flutter/material.dart` (plus DartPad's built-in packages).
- Unauthenticated GitHub raw fetches are rate-limited per client IP; normal classroom use is fine, but hammering refresh may briefly 429.
- Progress is stored per-browser under a key namespaced to `owner/repo`, so pointing the app at a different repo starts fresh. The ↺ button in the sidebar clears it.
