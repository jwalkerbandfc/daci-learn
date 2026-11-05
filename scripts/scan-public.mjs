/* scripts/scan-public.mjs
 *
 * Looks inside /public and writes the guide list to a JSON file that the page
 * imports. Run by "prebuild" in package.json, so it happens before next build.
 *
 * Why a script and not a server component: on Cloudflare the page can be
 * rendered inside a worker, where there is no real filesystem to read. Doing
 * the scan here means the list is already a plain file by then, and it works
 * the same on any host.
 *
 *   public/ipad/index.html      ->  a guide at /ipad
 *   public/normalise-it.html    ->  a guide at /normalise-it.html
 *
 * Card text comes from an optional meta.json inside each folder. Without one
 * the folder still appears, titled from its name.
 *
 * To keep a folder out of the library, either put "ignore": true in its
 * meta.json, or drop an empty file called .ignore inside it.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');

/* Where the list is written. Change this if your app folder is elsewhere. */
const OUT = fs.existsSync(path.join(ROOT, 'src', 'app'))
  ? path.join(ROOT, 'src', 'app', 'guides.generated.json')
  : path.join(ROOT, 'app', 'guides.generated.json');

/* Folders in /public that are not guides. */
const IGNORE = new Set([
  'files', 'images', 'img', 'assets', 'fonts', 'media', 'icons', 'downloads', 'static',
]);

/* Top-level .html files that are not guides. */
const IGNORE_FILES = new Set(['404.html', '500.html', 'index.html']);

function pretty(slug) {
  return slug
    .replace(/\.html?$/i, '')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => (w.length <= 3 && w === w.toUpperCase() ? w : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

function readMeta(dir) {
  try {
    const parsed = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function toGuide(id, href, meta) {
  return {
    id,
    href,
    title: typeof meta.title === 'string' && meta.title ? meta.title : pretty(id),
    topic: typeof meta.topic === 'string' && meta.topic ? meta.topic : 'Other',
    level: typeof meta.level === 'string' && meta.level ? meta.level : 'Beginner',
    theme: typeof meta.theme === 'string' ? meta.theme : '',
    look: typeof meta.look === 'string' ? meta.look : 'plain',
    overview: typeof meta.overview === 'string' ? meta.overview : '',
    learn: Array.isArray(meta.learn) ? meta.learn.filter((x) => typeof x === 'string').slice(0, 6) : [],
    ...(typeof meta.order === 'number' ? { order: meta.order } : {}),
  };
}

export function scanPublic(root = PUBLIC) {
  let entries;
  try {
    entries = fs.readdirSync(root, { withFileTypes: true });
  } catch {
    return []; /* no public folder: write an empty list rather than fail the build */
  }

  const found = [];

  for (const entry of entries) {
    const name = entry.name;
    if (name.startsWith('.') || name.startsWith('_')) continue;

    if (entry.isDirectory()) {
      if (IGNORE.has(name.toLowerCase())) continue;
      const dir = path.join(root, name);
      if (!fs.existsSync(path.join(dir, 'index.html'))) continue;
      /* An empty .ignore file hides a folder with no meta.json in it. */
      if (fs.existsSync(path.join(dir, '.ignore'))) continue;
      const meta = readMeta(dir);
      if (meta.ignore || meta.hidden || meta.draft) continue;
      found.push(toGuide(name, `/${name}`, meta));
      continue;
    }

    if (entry.isFile() && /\.html?$/i.test(name) && !IGNORE_FILES.has(name.toLowerCase())) {
      found.push(toGuide(name.replace(/\.html?$/i, ''), `/${name}`, {}));
    }
  }

  found.sort((a, b) => {
    const ao = a.order ?? 500;
    const bo = b.order ?? 500;
    return ao !== bo ? ao - bo : a.title.localeCompare(b.title);
  });
  return found;
}

/* Only write the file when run as a script, not when imported by a test. */
if (import.meta.url === `file://${process.argv[1]}`) {
  const guides = scanPublic();
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(guides, null, 2) + '\n');
  console.log(`[tutorial library] scanned ${PUBLIC}`);
  console.log(`[tutorial library] found ${guides.length} guide(s): ${guides.map((g) => g.href).join(', ') || 'none'}`);
  console.log(`[tutorial library] wrote ${path.relative(ROOT, OUT)}`);
}
