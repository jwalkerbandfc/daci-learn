/* app/api/unlock/route.ts
 *
 * Checks a guide access code on the server, so the codes themselves are never
 * sent to the browser.
 *
 * Right now the codes come from codes.json sitting next to this file. It is
 * imported, not read from disk, so it works on every deployment target. The
 * trade-off is that changing a code means a redeploy.
 *
 * To move to Supabase later, replace the body of lookup() with the commented
 * version at the bottom. Nothing else changes.
 */

import { NextResponse } from 'next/server';
import CODES from './codes.json';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type CodeMap = Record<string, string>;

/** Ignore case, stray spaces and the dashes people type into code boxes. */
function normalise(s: string): string {
  return s.trim().toUpperCase().replace(/[\s-]+/g, '');
}

/** Compares the whole string every time rather than bailing out at the first
 *  wrong character. Network jitter makes remote timing attacks on a short code
 *  unrealistic anyway, but there is no reason to write the sloppy version. */
function matches(given: string, expected: string): boolean {
  const a = normalise(given);
  const b = normalise(expected);
  if (b.length === 0) return false;
  let diff = a.length ^ b.length;
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

async function lookup(id: string): Promise<string | null> {
  const codes = CODES as CodeMap;
  return Object.prototype.hasOwnProperty.call(codes, id) ? codes[id] : null;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { id, code } = (body ?? {}) as { id?: unknown; code?: unknown };
  if (typeof id !== 'string' || typeof code !== 'string' || id.length > 64 || code.length > 128) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const expected = await lookup(id);

  /* Same answer whether the guide is unknown or the code is simply wrong, so
     this cannot be used to discover which guides exist. */
  const ok = expected !== null && matches(code, expected);

  return NextResponse.json(
    { ok },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}

/* ── Swapping to Supabase ──────────────────────────────────────────────────
 *
 * 1. Make the table:
 *
 *      create table guide_codes (
 *        guide_id text primary key,
 *        code     text not null
 *      );
 *      alter table guide_codes enable row level security;
 *      -- no policies: only the service role can read it
 *
 * 2. Put these in your environment, NOT in NEXT_PUBLIC_ anything:
 *
 *      SUPABASE_URL=...
 *      SUPABASE_SERVICE_ROLE_KEY=...
 *
 * 3. Replace lookup() with:
 *
 *      import { createClient } from '@supabase/supabase-js';
 *
 *      const supabase = createClient(
 *        process.env.SUPABASE_URL!,
 *        process.env.SUPABASE_SERVICE_ROLE_KEY!,
 *        { auth: { persistSession: false } },
 *      );
 *
 *      async function lookup(id: string): Promise<string | null> {
 *        const { data, error } = await supabase
 *          .from('guide_codes')
 *          .select('code')
 *          .eq('guide_id', id)
 *          .maybeSingle();
 *        if (error) return null;
 *        return data?.code ?? null;
 *      }
 *
 * The service role key bypasses row level security, so it must only ever be
 * used in server code like this file. If it reaches the browser, anyone can
 * read and write every table in the project.
 * ───────────────────────────────────────────────────────────────────────── */
