/* app/page.tsx  —  Server Component.
 *
 * Lists every guide found in /public plus anything in EXTERNAL below.
 *
 * The list of guides is built before the build starts, by
 * scripts/scan-public.mjs, which writes guides.generated.json next to this
 * file. Nothing here touches the filesystem, so it renders the same whether
 * Next prerenders the page or a worker does.
 *
 * Add this to package.json so the scan runs on every build:
 *
 *   "scripts": {
 *     "prebuild": "node scripts/scan-public.mjs",
 *     "build": "next build"
 *   }
 *
 * Locking is decided by app/api/unlock/codes.json: if a guide's id is a key in
 * there it asks for a code, otherwise it opens straight away. Only the list of
 * locked ids is sent to the browser. The codes themselves never leave the
 * server.
 */

import CODES from './api/unlock/codes.json';
import SCANNED from './guides.generated.json';
import Library, { type Guide } from './library-client';

export const dynamic = 'force-static';

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

export default function Page() {
  const guides: Guide[] = [...(SCANNED as Guide[]), ...EXTERNAL];

  /* Object.keys only. The codes themselves must not cross into the browser. */
  const lockedIds = Object.keys(CODES as Record<string, string>);

  return <Library guides={guides} lockedIds={lockedIds} />;
}
