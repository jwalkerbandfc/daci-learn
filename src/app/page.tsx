'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/* ───────────────────────────────────────────────────────────────────────────
   Tutorial Library

   To add or change a guide, edit GUIDES below. Nothing else needs touching.

   locked: true  → the card asks for a code before it opens.
                   Codes live in app/api/unlock/codes.json and are checked on
                   the server, so they are never sent to the browser.
   href: null    → not hosted yet. The card shows as coming soon, no dead link.
   ─────────────────────────────────────────────────────────────────────────── */

type Topic = 'Databases' | 'Networking' | 'Coding' | 'Office & devices' | 'Study skills';
type Level = 'Beginner' | 'Intermediate' | 'Advanced';
type Look = 'db' | 'net' | 'code' | 'vs' | 'word' | 'win' | 'ipad';

interface Guide {
  id: string;
  title: string;
  topic: Topic;
  level: Level;
  look: Look;
  theme: string;
  href: string | null;
  locked?: boolean;
  external?: boolean;
  overview: string;
  learn: string[];
}

const GUIDES: Guide[] = [
  {
    id: 'normalise',
    title: 'Normalise It',
    topic: 'Databases',
    level: 'Beginner',
    look: 'db',
    theme: 'BTEC Unit 2',
    href: '/normalise-it.html',
    locked: true,
    overview:
      'Six jobs, same five steps each time. Take a flat file to three tables and a join table, then set the types, masks, validation and queries.',
    learn: [
      'Sort every field into the table it belongs to',
      'Primary keys, foreign keys, and keys you have to invent',
      'Data types, field sizes, input masks and validation rules',
      'A query grid that really runs, and a printable data dictionary',
    ],
  },
  {
    id: 'ipad',
    title: 'iPad Office Guide',
    topic: 'Office & devices',
    level: 'Beginner',
    look: 'ipad',
    theme: 'iPad style',
    href: '/ipad',
    locked: true,
    overview: 'Outlook, Word and Copilot on an iPad, with the touch gestures that make it quicker.',
    learn: [
      'Outlook: To, Cc and Bcc, flags and filters',
      'Word: text size, colours and fonts',
      'Printing and the Copilot app',
      'Pinch, press and hold, double and triple tap',
    ],
  },
  {
    id: 'digital',
    title: 'Digital Confidence Workshop',
    topic: 'Office & devices',
    level: 'Beginner',
    look: 'win',
    theme: 'Windows style',
    href: '/digital',
    locked: true,
    overview: 'A hands-on workshop on OneDrive, Teams and SharePoint, with practice files to work through.',
    learn: [
      'Where to save: OneDrive, Teams or SharePoint',
      'Sharing files instead of attaching them',
      'Practice documents, budgets and plans',
    ],
  },
  {
    id: 'github',
    title: 'GitHub in Visual Studio',
    topic: 'Coding',
    level: 'Beginner',
    look: 'vs',
    theme: 'Visual Studio 2022',
    href: '/github',
    locked: true,
    overview: 'Push and pull your first file with Git and GitHub, without leaving Visual Studio.',
    learn: [
      'Global settings: name, email and defaults',
      'Cloning a repository and choosing branches',
      'Commit, push, fetch, pull and merge conflicts',
    ],
  },
  {
    id: 'data',
    title: 'Data Handling',
    topic: 'Databases',
    level: 'Beginner',
    look: 'word',
    theme: 'Worksheet',
    href: '/data',
    locked: true,
    overview: 'Rename this entry to match whatever is in your /public/data folder.',
    learn: ['Edit the title, overview and bullets in GUIDES'],
  },

  /* Not hosted on this site yet. Drop the HTML into /public and set href. */
  {
    id: 'network',
    title: 'Network Principles',
    topic: 'Networking',
    level: 'Beginner',
    look: 'net',
    theme: 'Packet Tracer style',
    href: null,
    locked: true,
    overview: 'Build a network by dragging real equipment onto a diagram, wiring it up and sending a packet.',
    learn: [
      'Cabling, MAC and IP addressing, subnetting',
      'Switches, VLANs, trunks, routers, spanning tree',
      'DHCP, DNS, web servers, wireless and firewall rules',
    ],
  },
  {
    id: 'referencing',
    title: 'Referencing and Assessment Skills',
    topic: 'Study skills',
    level: 'Beginner',
    look: 'word',
    theme: 'Word style',
    href: null,
    locked: true,
    overview: 'Harvard referencing, breaking down a brief, building a template and checking a draft.',
    learn: ['Citations and quotes', 'Command words and a word plan', 'A ready-made Word template'],
  },
  {
    id: 'php',
    title: 'PHP Basics',
    topic: 'Coding',
    level: 'Beginner',
    look: 'code',
    theme: 'VS Code style',
    href: null,
    locked: true,
    overview: 'PHP from scratch with XAMPP: variables, functions, forms, sessions and a small JSON API.',
    learn: ['Variables, output, loops and functions', 'GET and POST with validation', 'Sessions and JSON endpoints'],
  },
  {
    id: 'laravel',
    title: 'Laravel Guide',
    topic: 'Coding',
    level: 'Intermediate',
    look: 'code',
    theme: 'VS Code style',
    href: null,
    locked: true,
    overview: 'Set up XAMPP, PHP and MySQL, then build a web app with Laravel.',
    learn: ['XAMPP, Composer and extensions', 'MySQL in phpMyAdmin', 'Models, controllers, Blade views and sign-in'],
  },
  {
    id: 'flutter',
    title: 'Flutter in Codespaces',
    topic: 'Coding',
    level: 'Beginner',
    look: 'code',
    theme: 'VS Code style',
    href: null,
    locked: true,
    overview: 'Learn Dart and Flutter with nothing to install, in a GitHub codespace.',
    learn: ['Dart basics, then widgets and state', 'A guided practice editor', 'Supabase sign-in and live data'],
  },
  {
    id: 'nextjs',
    title: 'Next.js Shop in Codespaces',
    topic: 'Coding',
    level: 'Intermediate',
    look: 'code',
    theme: 'VS Code style',
    href: null,
    locked: true,
    overview: 'Learn TypeScript, then build a shop with a basket, a headless CMS and a REST API.',
    learn: ['TypeScript basics', 'Next.js pages in a live preview', 'Supabase tables, rules and roles'],
  },
];

/* Small apps that are not tutorials. No code needed. */
const TOOLS = [
  { slug: 'raid', label: 'RAID Calculator', meta: 'Calculator', href: '/Raid-Calc' },
  { slug: 'rps', label: 'Rock Paper Scissors', meta: 'Game', href: '/RPS' },
  {
    slug: 'grade',
    label: 'Degree Grade Calculator',
    meta: 'Calculator',
    href: 'https://daci-learn.uk/PredictiveGradeCalculator.html',
  },
];

const DOWNLOADS = [
  { label: 'Guide PDF', href: '/files/guide.pdf', ext: 'pdf' },
  { label: 'Checklist', href: '/files/checklist.docx', ext: 'docx' },
  { label: 'Data Spreadsheet', href: '/files/data.xlsx', ext: 'xlsx' },
];

const TOPICS: Topic[] = ['Office & devices', 'Study skills', 'Coding', 'Networking', 'Databases'];

const UNLOCKED_KEY = 'tl-unlocked-v1';

// ─── Unlocked guides, remembered in this browser ──────────────────────────────

function readUnlocked(): string[] {
  try {
    const raw = localStorage.getItem(UNLOCKED_KEY);
    const list: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function writeUnlocked(list: string[]) {
  try {
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(list));
  } catch {
    /* private window: the code just gets asked for again next time */
  }
}

// ─── Preview art, drawn in CSS so there are no images to host ─────────────────

function Preview({ look }: { look: Look }) {
  const bars = (rows: Array<[number, number, number, string]>) =>
    rows.map((r, i) => <i key={i} style={{ left: r[0], top: r[1], width: r[2], height: 7, background: r[3] }} />);

  return (
    <div className={`tl-pv tl-pv-${look}`} aria-hidden="true">
      {look === 'ipad' && <i className="dev" />}
      {look === 'win' && (
        <>
          <i className="w" />
          <i className="t" />
          <i className="b1" />
          <i className="b2" />
          <i className="b3" />
        </>
      )}
      {look === 'vs' && (
        <>
          <i className="m" />
          <i className="se" />
          <i className="st" />
          {bars([
            [12, 30, 120, '#569cd6'],
            [12, 46, 180, '#d69d85'],
            [26, 62, 140, '#4ec9b0'],
            [26, 78, 100, '#dcdcaa'],
          ])}
        </>
      )}
      {look === 'code' && (
        <>
          <i className="s" />
          {bars([
            [50, 20, 90, '#569cd6'],
            [50, 36, 170, '#9cdcfe'],
            [64, 52, 140, '#ce9178'],
            [64, 68, 200, '#dcdcaa'],
            [50, 84, 110, '#c586c0'],
            [50, 100, 60, '#6a9955'],
          ])}
        </>
      )}
      {look === 'word' && (
        <>
          <i className="wt" />
          <i className="wr" />
          <i className="wp" />
          <i style={{ left: 96, top: 36, width: 110, height: 9, background: '#185abd', zIndex: 1 }} />
          {[52, 68, 84, 100].map((top, i) => (
            <i
              key={top}
              style={{ left: 96, top, width: [150, 170, 120, 160][i], height: 6, background: '#c8c6c4', zIndex: 1 }}
            />
          ))}
        </>
      )}
      {look === 'net' && (
        <>
          {[
            [163, 34, 2, 20],
            [50, 86, 221, 2],
            [163, 76, 2, 24],
            [49, 86, 2, 14],
            [269, 86, 2, 14],
          ].map((r, i) => (
            <i key={`w${i}`} className="wire" style={{ left: r[0], top: r[1], width: r[2], height: r[3] }} />
          ))}
          {[
            [134, 10, 60, 24],
            [124, 54, 80, 22],
            [24, 100, 52, 22],
            [134, 100, 60, 22],
            [244, 100, 52, 22],
          ].map((r, i) => (
            <i key={`b${i}`} className="box" style={{ left: r[0], top: r[1], width: r[2], height: r[3] }} />
          ))}
        </>
      )}
      {look === 'db' && (
        <>
          <i className="join" style={{ left: 26, top: 48, width: 108 }} />
          <i className="join" style={{ left: 160, top: 48, width: 108 }} />
          {[18, 126, 234].map((x, i) => (
            <span key={x}>
              <i className="tbl" style={{ left: x, top: 22, width: i === 1 ? 96 : 88, height: 88 }} />
              <i className="cap" style={{ left: x, top: 22, width: i === 1 ? 96 : 88, height: 14 }} />
              {[0, 1, 2, 3].map((k) => (
                <i
                  key={k}
                  className="row"
                  style={{ left: x + 7, top: 46 + k * 14, width: (i === 1 ? 82 : 74) - (k % 2) * 18, height: 6 }}
                />
              ))}
            </span>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Cards ────────────────────────────────────────────────────────────────────

function CardInner({ g, state }: { g: Guide; state: 'open' | 'locked' | 'soon' }) {
  return (
    <>
      <Preview look={g.look} />
      <div className="tl-body">
        <div className="tl-meta">
          <span className="tl-tag">{g.topic}</span>
          <span className="tl-tag plain">{g.level}</span>
          <span className="tl-tag plain">{g.theme}</span>
        </div>
        <h3>{g.title}</h3>
        <p>{g.overview}</p>
        <ul className="tl-learn">
          {g.learn.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <div className="tl-foot">
          {state === 'soon' && <span className="tl-soon">Not hosted yet</span>}
          {state === 'locked' && (
            <span className="tl-open is-locked">
              <span aria-hidden="true">🔒</span> Enter code
            </span>
          )}
          {state === 'open' && <span className="tl-open">Open guide&nbsp;↗</span>}
        </div>
      </div>
    </>
  );
}

function GuideCard({ g, unlocked, onAsk }: { g: Guide; unlocked: boolean; onAsk: (g: Guide) => void }) {
  if (!g.href) {
    return (
      <div className="tl-card is-soon">
        <CardInner g={g} state="soon" />
      </div>
    );
  }

  if (g.locked && !unlocked) {
    return (
      <button type="button" className="tl-card" onClick={() => onAsk(g)}>
        <CardInner g={g} state="locked" />
      </button>
    );
  }

  /* A plain anchor, not next/link: these are static files in /public, not routes. */
  return (
    <a
      className="tl-card"
      href={g.href}
      target={g.external ? '_blank' : undefined}
      rel={g.external ? 'noopener noreferrer' : undefined}
    >
      <CardInner g={g} state="open" />
    </a>
  );
}

function extIcon(ext: string) {
  if (ext === 'pdf') return { icon: '📄', colour: '#E53935' };
  if (ext === 'docx') return { icon: '📝', colour: '#1A73E8' };
  if (ext === 'xlsx') return { icon: '📊', colour: '#1B8040' };
  return { icon: '📁', colour: '#888' };
}

// ─── Code dialog ──────────────────────────────────────────────────────────────

function CodeDialog({
  guide,
  onClose,
  onUnlocked,
}: {
  guide: Guide;
  onClose: () => void;
  onUnlocked: (id: string) => void;
}) {
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  async function submit() {
    if (busy || !code.trim()) return;
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: guide.id, code }),
      });
      const data: { ok?: boolean } = await res.json();
      if (data.ok && guide.href) {
        onUnlocked(guide.id);
        window.location.assign(guide.href);
        return;
      }
      setError('That code is not right. Check it and try again.');
      setCode('');
      inputRef.current?.focus();
    } catch {
      setError('Could not check the code. Check your connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="tl-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="tl-dialog" role="dialog" aria-modal="true" aria-labelledby="tl-dlg-title">
        <h2 id="tl-dlg-title">{guide.title}</h2>
        <p>Enter the code your tutor gave you.</p>
        <input
          ref={inputRef}
          className="tl-input"
          type="text"
          value={code}
          inputMode="text"
          autoCapitalize="characters"
          autoComplete="off"
          spellCheck={false}
          placeholder="Access code"
          aria-label={`Access code for ${guide.title}`}
          aria-invalid={error ? true : undefined}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') void submit(); }}
        />
        {error && <p className="tl-err" role="alert">{error}</p>}
        <div className="tl-dlg-foot">
          <button type="button" className="tl-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="tl-btn primary" onClick={() => void submit()} disabled={busy || !code.trim()}>
            {busy ? 'Checking…' : 'Unlock'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [topic, setTopic] = useState<'All' | Topic>('All');
  const [q, setQ] = useState('');
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [asking, setAsking] = useState<Guide | null>(null);

  useEffect(() => setUnlocked(readUnlocked()), []);

  const unlock = useCallback((id: string) => {
    setUnlocked((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      writeUnlocked(next);
      return next;
    });
  }, []);

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return GUIDES.filter((g) => {
      if (topic !== 'All' && g.topic !== topic) return false;
      if (!needle) return true;
      return [g.title, g.overview, g.topic, g.level, ...g.learn].join(' ').toLowerCase().includes(needle);
    });
  }, [topic, q]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <main className="tl-wrap">
        <header className="tl-hero">
          <p className="tl-eyebrow">Training guides</p>
          <h1>Tutorial Library</h1>
          <p className="tl-lede">
            Every step-by-step guide in one place. Each one keeps your progress as you go.
          </p>
        </header>

        <div className="tl-bar">
          <div className="tl-chips" role="group" aria-label="Filter by topic">
            {(['All', ...TOPICS] as Array<'All' | Topic>).map((t) => (
              <button key={t} type="button" className="tl-chip" aria-pressed={topic === t} onClick={() => setTopic(t)}>
                {t}
              </button>
            ))}
          </div>
          <label className="tl-search" htmlFor="tl-q">
            <span aria-hidden="true">⌕</span>
            <input
              id="tl-q"
              type="search"
              value={q}
              placeholder="Search guides"
              aria-label="Search guides"
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
        </div>

        <div className="tl-grid">
          {shown.map((g) => (
            <GuideCard key={g.id} g={g} unlocked={unlocked.includes(g.id)} onAsk={setAsking} />
          ))}
        </div>
        {shown.length === 0 && <p className="tl-empty">No guides match. Try another topic or search.</p>}

        <h2 className="tl-sec">Tools</h2>
        <div className="tl-small">
          {TOOLS.map((t) => {
            const ext = t.href.startsWith('http');
            return (
              <a
                key={t.slug}
                className="tl-mini"
                href={t.href}
                target={ext ? '_blank' : undefined}
                rel={ext ? 'noopener noreferrer' : undefined}
              >
                <span className="tl-mini-ic">🧮</span>
                <span>
                  <b>{t.label}</b>
                  <small>{t.meta}</small>
                </span>
              </a>
            );
          })}
        </div>

        <h2 className="tl-sec">Downloads</h2>
        <div className="tl-small">
          {DOWNLOADS.map((f) => {
            const { icon, colour } = extIcon(f.ext);
            return (
              <a key={f.href} className="tl-mini" href={f.href} download>
                <span className="tl-mini-ic" style={{ color: colour }}>
                  {icon}
                </span>
                <span>
                  <b>{f.label}</b>
                  <small>.{f.ext}</small>
                </span>
              </a>
            );
          })}
        </div>
      </main>

      {asking && (
        <CodeDialog
          guide={asking}
          onClose={() => setAsking(null)}
          onUnlocked={(id) => {
            unlock(id);
            setAsking(null);
          }}
        />
      )}
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const CSS = `
.tl-wrap, .tl-scrim {
  --tl-bg: #f3f5f7; --tl-card: #fff; --tl-ink: #17202a; --tl-dim: #56636f;
  --tl-line: #dde2e7; --tl-accent: #0b6e6e; --tl-soft: #e3f1f0; --tl-warn: #9a5b00; --tl-bad: #b42318;
}
@media (prefers-color-scheme: dark) {
  .tl-wrap, .tl-scrim {
    --tl-bg: #11161b; --tl-card: #192027; --tl-ink: #e8edf1; --tl-dim: #9eabb7;
    --tl-line: #2a333c; --tl-accent: #4cc2b8; --tl-soft: #17302f; --tl-warn: #e3a84a; --tl-bad: #ff8a80;
  }
}
.tl-wrap {
  max-width: 1120px; margin: 0 auto; color: var(--tl-ink);
  font: 16px/1.55 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  padding: 40px max(16px, env(safe-area-inset-left,0px)) 72px max(16px, env(safe-area-inset-right,0px));
}
.tl-wrap * { box-sizing: border-box; }
.tl-hero h1 { font-size: clamp(28px, 5vw, 42px); line-height: 1.08; letter-spacing: -.02em; font-weight: 700; margin: 0; }
.tl-eyebrow { font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--tl-accent); font-weight: 700; margin: 0 0 10px; }
.tl-lede { color: var(--tl-dim); max-width: 60ch; margin: 10px 0 0; font-size: 17px; }

.tl-bar { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin: 28px 0 18px; }
.tl-chips { display: flex; flex-wrap: wrap; gap: 6px; flex: 1; min-width: 0; }
.tl-chip { border: 1px solid var(--tl-line); background: var(--tl-card); color: var(--tl-ink);
  border-radius: 99px; padding: 7px 15px; font: 14px inherit; cursor: pointer; min-height: 38px; }
.tl-chip[aria-pressed="true"] { background: var(--tl-ink); color: var(--tl-bg); border-color: var(--tl-ink); }
.tl-search { display: flex; align-items: center; gap: 8px; border: 1px solid var(--tl-line);
  background: var(--tl-card); border-radius: 99px; padding: 6px 14px; width: 260px; max-width: 100%; min-height: 38px; }
.tl-search input { border: 0; background: none; font: 15px inherit; color: var(--tl-ink); outline: 0; width: 100%; min-width: 0; }

.tl-grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr)); }
.tl-card { background: var(--tl-card); border: 1px solid var(--tl-line); border-radius: 14px;
  display: flex; flex-direction: column; overflow: hidden; min-width: 0;
  text-decoration: none; color: inherit; text-align: left; padding: 0; font: inherit; cursor: pointer; }
.tl-card:hover { border-color: var(--tl-accent); }
.tl-card:focus-visible { outline: 3px solid var(--tl-accent); outline-offset: 2px; }
.tl-card.is-soon { opacity: .62; cursor: default; }
.tl-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.tl-meta { display: flex; flex-wrap: wrap; gap: 6px; font-size: 12.5px; }
.tl-tag { background: var(--tl-soft); color: var(--tl-ink); border-radius: 6px; padding: 2px 8px; }
.tl-tag.plain { background: none; border: 1px solid var(--tl-line); color: var(--tl-dim); }
.tl-card h3 { font-size: 21px; line-height: 1.15; font-weight: 700; letter-spacing: -.01em; margin: 0; }
.tl-card p { margin: 0; color: var(--tl-dim); }
.tl-learn { margin: 0; padding-left: 18px; font-size: 14.5px; display: grid; gap: 3px; }
.tl-foot { margin-top: auto; padding-top: 8px; }
.tl-open { display: inline-flex; align-items: center; gap: 6px; background: var(--tl-accent); color: #fff;
  border-radius: 10px; padding: 9px 15px; font-weight: 700; font-size: 14px; }
.tl-open.is-locked { background: none; color: var(--tl-ink); border: 1px solid var(--tl-line); }
.tl-soon { font-size: 13.5px; color: var(--tl-warn); }
.tl-empty { border: 1px dashed var(--tl-line); border-radius: 14px; padding: 22px; color: var(--tl-dim); text-align: center; }

.tl-sec { font-size: 20px; font-weight: 700; margin: 36px 0 12px; }
.tl-small { display: grid; gap: 8px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 230px), 1fr)); }
.tl-mini { display: flex; align-items: center; gap: 10px; background: var(--tl-card);
  border: 1px solid var(--tl-line); border-radius: 12px; padding: 11px 13px;
  text-decoration: none; color: inherit; min-height: 56px; }
.tl-mini:hover { border-color: var(--tl-accent); }
.tl-mini-ic { font-size: 19px; flex: none; }
.tl-mini b { display: block; font-size: 14.5px; font-weight: 600; }
.tl-mini small { color: var(--tl-dim); font-size: 12px; }

.tl-scrim { position: fixed; inset: 0; z-index: 100; background: rgba(8,14,22,.5);
  display: flex; align-items: center; justify-content: center; padding: 16px;
  font: 16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.tl-dialog { background: var(--tl-card); color: var(--tl-ink); border: 1px solid var(--tl-line);
  border-radius: 14px; padding: 20px; width: 360px; max-width: 100%; }
.tl-dialog h2 { font-size: 19px; font-weight: 700; margin: 0 0 4px; }
.tl-dialog p { margin: 0 0 14px; font-size: 14.5px; color: var(--tl-dim); }
.tl-input { width: 100%; font: 17px inherit; letter-spacing: .06em; color: var(--tl-ink);
  background: var(--tl-bg); border: 1px solid var(--tl-line); border-radius: 10px; padding: 11px 13px; min-height: 48px; }
.tl-input:focus { outline: 2px solid var(--tl-accent); outline-offset: 1px; }
.tl-err { color: var(--tl-bad); font-size: 14px; margin: 10px 0 0; }
.tl-dlg-foot { display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px; }
.tl-btn { border: 1px solid var(--tl-line); background: var(--tl-card); color: var(--tl-ink);
  border-radius: 10px; padding: 10px 16px; font: 600 15px inherit; cursor: pointer; min-height: 44px; }
.tl-btn.primary { background: var(--tl-accent); border-color: var(--tl-accent); color: #fff; }
.tl-btn[disabled] { opacity: .5; cursor: default; }

.tl-pv { height: 132px; position: relative; overflow: hidden; border-bottom: 1px solid var(--tl-line); }
.tl-pv i { position: absolute; display: block; border-radius: 3px; }
.tl-pv-ipad { background: #dfe6ee; }
.tl-pv-ipad .dev { left: 50%; top: 18px; width: 200px; height: 140px; margin-left: -100px;
  background: #fff; border: 7px solid #1c1c1e; border-radius: 18px; }
.tl-pv-win { background: linear-gradient(135deg, #0f4c81, #1b75bb); }
.tl-pv-win .w { left: 30px; top: 22px; width: 240px; height: 120px; background: #f3f3f3; border-radius: 8px; }
.tl-pv-win .t { left: 30px; top: 22px; width: 240px; height: 18px; background: #e6e6e6; border-radius: 8px 8px 0 0; }
.tl-pv-win .b1 { left: 44px; top: 52px; width: 50px; height: 50px; background: #0364b8; }
.tl-pv-win .b2 { left: 102px; top: 52px; width: 50px; height: 50px; background: #5b5fc7; }
.tl-pv-win .b3 { left: 160px; top: 52px; width: 50px; height: 50px; background: #038387; }
.tl-pv-code { background: #1f1f1f; }
.tl-pv-code .s { left: 0; top: 0; width: 34px; height: 100%; background: #181818; border-radius: 0; }
.tl-pv-vs { background: #1e1e1e; }
.tl-pv-vs .m { left: 0; top: 0; right: 0; height: 16px; background: #2d2d30; border-radius: 0; }
.tl-pv-vs .st { left: 0; bottom: 0; right: 0; height: 14px; background: #007acc; border-radius: 0; }
.tl-pv-vs .se { right: 0; top: 16px; width: 90px; bottom: 14px; background: #252526; border-radius: 0; }
.tl-pv-word { background: #e8e8e8; }
.tl-pv-word .wt { left: 0; top: 0; right: 0; height: 18px; background: #185abd; border-radius: 0; }
.tl-pv-word .wr { left: 0; top: 18px; right: 0; height: 14px; background: #f3f2f1; border-radius: 0; }
.tl-pv-word .wp { left: 80px; top: 26px; width: 200px; height: 110px; background: #fff; }
.tl-pv-net { background: #11161b; }
.tl-pv-net .wire { background: #2aa58a; border-radius: 0; }
.tl-pv-net .box { background: #1d242b; border: 1px solid #2aa58a; border-radius: 4px; }
.tl-pv-db { background: #1f1f1f; }
.tl-pv-db .tbl { background: #2a2a2a; border: 1px solid #a4373a; border-radius: 3px; }
.tl-pv-db .cap { background: #a4373a; border-radius: 2px 2px 0 0; }
.tl-pv-db .row { background: #3a3a3a; border-radius: 1px; }
.tl-pv-db .join { background: #c25a5d; height: 2px; border-radius: 0; }
`;
