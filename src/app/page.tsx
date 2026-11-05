/* app/page.tsx  —  Server Component.
 *
 * Scans /public at build time and lists whatever it finds:
 *
 *   public/ipad/index.html      → a guide at /ipad
 *   public/normalise-it.html    → a guide at /normalise-it.html
 *
 * Card text comes from an optional meta.json inside each folder. Without one
 * the folder still appears, titled from its name.
 *
 * Locking is decided by app/api/unlock/codes.json: if a guide's id is a key in
 * there it asks for a code, otherwise it opens straight away. Only the list of
 * locked ids is sent to the browser. The codes themselves never leave the
 * server.
 */

import fs from 'node:fs';
import path from 'node:path';
import CODES from './api/unlock/codes.json';
import Library, { type Guide } from './library-client';

/* The scan reads the filesystem, so it has to happen while /public exists:
   during next build. Keep this page static and it will. */
export const dynamic = 'force-static';

/* Folders in /public that are not guides. */
const IGNORE = new Set([
  'files', 'images', 'img', 'assets', 'fonts', 'media', 'icons', 'downloads', 'static',
]);

/* Top-level .html files that are not guides. */
const IGNORE_FILES = new Set(['404.html', '500.html', 'index.html']);

interface Meta {
  title?: string;
  topic?: string;
  level?: string;
  theme?: string;
  look?: string;
  overview?: string;
  learn?: string[];
  order?: number;
  hidden?: boolean;
}

/* Anything extra that is not a folder in /public: other people's sites, docs. */
const EXTERNAL: Guide[] = [
  {
    id: 'gradecalc',
    href: 'https://daci-learn.uk/PredictiveGradeCalculator.html',
    external: true,
    title: 'Degree Grade Calculator',
    topic: 'Tools',
    level: 'Beginner',
    theme: 'Calculator',
    look: 'plain',
    overview: 'Work out what you need in what is left to hit a grade boundary.',
    learn: [],
  },
];

function pretty(slug: string): string {
  return slug
    .replace(/\.html?$/i, '')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => (w.length <= 3 && w === w.toUpperCase() ? w : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

function readMeta(dir: string): Meta {
  try {
    const raw = fs.readFileSync(path.join(dir, 'meta.json'), 'utf8');
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as Meta) : {};
  } catch {
    return {};
  }
}

function toGuide(id: string, href: string, meta: Meta): Guide {
  return {
    id,
    href,
    title: typeof meta.title === 'string' && meta.title ? meta.title : pretty(id),
    topic: typeof meta.topic === 'string' && meta.topic ? meta.topic : 'Other',
    level: typeof meta.level === 'string' && meta.level ? meta.level : 'Beginner',
    theme: typeof meta.theme === 'string' ? meta.theme : '',
    look: typeof meta.look === 'string' ? meta.look : 'plain',
    overview: typeof meta.overview === 'string' ? meta.overview : '',
    learn: Array.isArray(meta.learn) ? meta.learn.filter((x): x is string => typeof x === 'string').slice(0, 6) : [],
    order: typeof meta.order === 'number' ? meta.order : undefined,
  };
}

export function scanPublic(root = path.join(process.cwd(), 'public')): Guide[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(root, { withFileTypes: true });
  } catch {
    return []; /* no public folder, or no filesystem: show nothing rather than crash */
  }

  const found: Guide[] = [];

  for (const entry of entries) {
    const name = entry.name;
    if (name.startsWith('.') || name.startsWith('_')) continue;

    if (entry.isDirectory()) {
      if (IGNORE.has(name.toLowerCase())) continue;
      const dir = path.join(root, name);
      if (!fs.existsSync(path.join(dir, 'index.html'))) continue;
      const meta = readMeta(dir);
      if (meta.hidden) continue;
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

export default function Page() {
  const guides = [...scanPublic(), ...EXTERNAL];

  /* Object.keys only. The codes themselves must not cross into the browser. */
  const lockedIds = Object.keys(CODES as Record<string, string>);

  return <Library guides={guides} lockedIds={lockedIds} />;
}
