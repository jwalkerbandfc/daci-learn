'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

// ─── Data ────

const EXTERNAL_ROUTES = [
  {
    path: '/automation',
    target: 'https://docs.google.com/document/d/1sTN42CeHMfgCqBK6aTj_3u21IPb2m1YIpO-WQUJ6tYY/edit?tab=t.0',
    label: 'Excel Automation',
    meta: 'Google Docs',
  },
];

const PUBLIC_FOLDER_ROUTES = [
  { slug: 'Flutter',       meta: 'App' },
  { slug: 'resources',     meta: 'Docs' },
  { slug: 'Cisco-Sim',     meta: 'Tool' },
  { slug: 'Raid-Calc',     meta: 'Calculator' },
  { slug: 'flutter-guide', meta: 'Guide' },
];

const PUBLIC_FILE_RESOURCES = [
  { label: 'Guide PDF',        href: '/files/guide.pdf',      ext: 'pdf' },
  { label: 'Checklist',        href: '/files/checklist.docx', ext: 'docx' },
  { label: 'Data Spreadsheet', href: '/files/data.xlsx',      ext: 'xlsx' },
];

const UPLOAD_PASSWORD = 'D@C!L3arnAcc0unt!ng';

// ─── Redirect hook ────────────────────────────────────────────────────────────

function useSimpleRedirect(isLoggedIn: boolean) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoggedIn) return;
    const path = pathname || '/';
    const firstSegment = path.split('/').filter(Boolean)[0];
    if (PUBLIC_FOLDER_ROUTES.some((r) => r.slug === firstSegment)) return;
    for (const route of EXTERNAL_ROUTES) {
      if (path === route.path || path.startsWith(`${route.path}/`)) {
        window.location.replace(route.target);
        return;
      }
    }
  }, [isLoggedIn, pathname, router]);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function extIcon(ext: string): { icon: string; colour: string } {
  switch (ext) {
    case 'pdf':  return { icon: '📄', colour: '#E53935' };
    case 'docx': return { icon: '📝', colour: '#1A73E8' };
    case 'xlsx': return { icon: '📊', colour: '#1B8040' };
    default:     return { icon: '📁', colour: '#888' };
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--color-text-tertiary, #999)',
      borderBottom: '0.5px solid var(--color-border-tertiary, #e5e5e5)',
      paddingBottom: '0.5rem',
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  );
}

function Badge({ children, variant }: { children: React.ReactNode; variant: 'live' | 'ext' | 'dl' }) {
  const styles: Record<string, React.CSSProperties> = {
    live: { background: '#dcfce7', color: '#166534' },
    ext:  { background: '#dbeafe', color: '#1e40af' },
    dl:   { background: '#f3f4f6', color: '#6b7280', border: '0.5px solid #e5e7eb' },
  };
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 500,
      padding: '2px 7px',
      borderRadius: 4,
      ...styles[variant],
    }}>
      {children}
    </span>
  );
}

function ResourceCard({
  href,
  external,
  icon,
  iconColour,
  label,
  meta,
  badge,
}: {
  href: string;
  external?: boolean;
  icon: string;
  iconColour: string;
  label: string;
  meta: string;
  badge: React.ReactNode;
}) {
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    padding: '12px 14px',
    background: 'var(--color-background-primary, #fff)',
    border: '0.5px solid var(--color-border-tertiary, #e5e5e5)',
    borderRadius: 12,
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color .15s, background .15s',
    cursor: 'pointer',
  };

  const inner = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18, color: iconColour, flexShrink: 0 }}>{icon}</span>
        <span style={{
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--color-text-primary, #111)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {label}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-tertiary, #999)' }}>{meta}</span>
        {badge}
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={cardStyle}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} style={cardStyle}>
      {inner}
    </Link>
  );
}

// ─── Upload Modal ─────────────────────────────────────────────────────────────

function UploadModal({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<'password' | 'upload'>('password');
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);
  const [chosenFile, setChosenFile] = useState('No file chosen');
  const fileInputRef = useRef<HTMLInputElement>(null);

  function checkPassword() {
    if (pw === UPLOAD_PASSWORD) {
      setError(false);
      setStage('upload');
    } else {
      setError(true);
      setPw('');
    }
  }

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  };

  const modalStyle: React.CSSProperties = {
    background: 'var(--color-background-primary, #fff)',
    borderRadius: 12,
    border: '0.5px solid var(--color-border-secondary, #d1d5db)',
    padding: '1.5rem',
    width: 340,
    maxWidth: '92vw',
    position: 'relative',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontSize: 14,
    marginBottom: 8,
    padding: '8px 10px',
    border: '0.5px solid var(--color-border-secondary, #d1d5db)',
    borderRadius: 8,
    background: 'var(--color-background-primary, #fff)',
    color: 'var(--color-text-primary, #111)',
    outline: 'none',
  };

  const btnBase: React.CSSProperties = {
    fontSize: 13,
    padding: '6px 14px',
    borderRadius: 8,
    cursor: 'pointer',
    border: '0.5px solid var(--color-border-secondary, #d1d5db)',
    background: 'transparent',
    color: 'var(--color-text-primary, #111)',
  };

  const btnPrimary: React.CSSProperties = {
    ...btnBase,
    background: '#111',
    color: '#fff',
    border: 'none',
  };

  return (
    <div style={overlayStyle} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={modalStyle}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 12, right: 14,
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 18, color: 'var(--color-text-secondary, #666)', lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {stage === 'password' ? (
          <>
            <h2 style={{ fontSize: 16, fontWeight: 500, marginBottom: '0.5rem' }}>Upload access</h2>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #666)', marginBottom: '1rem' }}>
              Enter the admin password to continue.
            </p>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') checkPassword(); }}
              placeholder="Password"
              autoFocus
              style={inputStyle}
            />
            {error && (
              <p style={{ fontSize: 12, color: '#dc2626', marginBottom: '0.75rem' }}>
                Incorrect password. Please try again.
              </p>
            )}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 4 }}>
              <button style={btnBase} onClick={onClose}>Cancel</button>
              <button style={btnPrimary} onClick={checkPassword}>Unlock</button>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: 16, fontWeight: 500, marginBottom: '0.5rem' }}>Upload files</h2>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #666)', marginBottom: '1rem' }}>
              Add a new file or folder to the public directory.
            </p>
            <input type="text" placeholder="Folder name (optional)" style={{ ...inputStyle, marginBottom: 8 }} />
            <input type="text" placeholder="Display label" style={{ ...inputStyle, marginBottom: 12 }} />
            <div
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: '1.5px dashed var(--color-border-secondary, #d1d5db)',
                borderRadius: 8,
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>☁️</div>
              <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #666)' }}>
                Click to browse, or drag &amp; drop
              </p>
              <p style={{ fontSize: 11, color: 'var(--color-text-tertiary, #999)', marginTop: 4 }}>
                {chosenFile}
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => setChosenFile(e.target.files?.[0]?.name ?? 'No file chosen')}
            />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button style={btnBase} onClick={onClose}>Cancel</button>
              <button style={btnPrimary}>Upload</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const userIsLoggedIn = false;
  const [modalOpen, setModalOpen] = useState(false);

  useSimpleRedirect(userIsLoggedIn);

  const cardGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: 8,
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: 860, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: 22, fontWeight: 500, color: 'var(--color-text-primary, #111)' }}>
          Resource Hub
        </h1>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary, #666)', marginTop: 4 }}>
          All public folders, documents, and downloadable files in one place.
        </p>
      </div>

      {/* Live apps / public folders */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>Live apps / public folders</SectionLabel>
        <div style={cardGrid}>
          {PUBLIC_FOLDER_ROUTES.map((route) => (
            <ResourceCard
              key={route.slug}
              href={`/${route.slug}`}
              icon="📁"
              iconColour="#2563eb"
              label={route.slug}
              meta={route.meta}
              badge={<Badge variant="live">Live</Badge>}
            />
          ))}
        </div>
      </section>

      {/* External docs */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>External docs</SectionLabel>
        <div style={cardGrid}>
          {EXTERNAL_ROUTES.map((route) => (
            <ResourceCard
              key={route.path}
              href={route.target}
              external
              icon="🔗"
              iconColour="#4285F4"
              label={route.label}
              meta={route.meta}
              badge={<Badge variant="ext">External</Badge>}
            />
          ))}
        </div>
      </section>

      {/* Downloadable resources */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>Downloadable resources</SectionLabel>
        <div style={cardGrid}>
          {PUBLIC_FILE_RESOURCES.map((file) => {
            const { icon, colour } = extIcon(file.ext);
            return (
              <ResourceCard
                key={file.href}
                href={file.href}
                external
                icon={icon}
                iconColour={colour}
                label={file.label}
                meta={`.${file.ext}`}
                badge={<Badge variant="dl">↓ Download</Badge>}
              />
            );
          })}
        </div>
      </section>

      {/* Upload button */}
      <button
        onClick={() => setModalOpen(true)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          padding: '7px 14px',
          border: '0.5px solid var(--color-border-secondary, #d1d5db)',
          borderRadius: 8,
          background: 'transparent',
          color: 'var(--color-text-secondary, #666)',
          cursor: 'pointer',
        }}
      >
        ↑ Upload file or folder
      </button>

      {/* Modal */}
      {modalOpen && <UploadModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
