/* app/page.tsx  —  Server Component.
 *
 * Lists every guide found in /public (see scan-public.ts) plus anything in
 * EXTERNAL below.
 *
 * Locking is decided by app/api/unlock/codes.json: if a guide's id is a key in
 * there it asks for a code, otherwise it opens straight away. Only the list of
 * locked ids is sent to the browser. The codes themselves never leave the
 * server.
 */

import CODES from './api/unlock/codes.json';
import Library, { type Guide } from './library-client';
import { scanPublic } from './scan-public';

/* The scan reads the filesystem, so it has to happen while /public exists:
   during next build. Keep this page static and it will. */
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
  const guides = [...scanPublic(), ...EXTERNAL];

  /* Object.keys only. The codes themselves must not cross into the browser. */
  const lockedIds = Object.keys(CODES as Record<string, string>);

  return <Library guides={guides} lockedIds={lockedIds} />;
}
