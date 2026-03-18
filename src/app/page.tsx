'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const EXTERNAL_ROUTES = [
  { 
    path: '/', 
    target: 'https://docs.google.com/document/d/10AX7FPmtIk7TUupUW2HAXIpYQvK09WptgSu7OADrwS4/edit?tab=t.0',
    label: 'Tasks 041225 - Google Docs' 
  },
  { 
    path: '/automation', 
    target: 'https://docs.google.com/document/d/1sTN42CeHMfgCqBK6aTj_3u21IPb2m1YIpO-WQUJ6tYY/edit?tab=t.0',
    label: 'Excel Automation - Google Docs' 
  },
];

const PUBLIC_FOLDER_ROUTES = ['Flutter', 'resources', 'Cisco-Sim', 'Raid-Calc', 'flutter-guide'];

// Add your files from /public here
const PUBLIC_FILE_RESOURCES = [
  {
    label: 'Guide PDF',
    href: '/files/guide.pdf',
  },
  {
    label: 'Checklist Document',
    href: '/files/checklist.docx',
  },
  {
    label: 'Data Spreadsheet',
    href: '/files/data.xlsx',
  },
];

function useSimpleRedirect(isLoggedIn: boolean) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoggedIn) return;

    const path = pathname || '/';
    const pathSegments = path.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];

    if (PUBLIC_FOLDER_ROUTES.includes(firstSegment)) {
      return; 
    }

    for (const route of EXTERNAL_ROUTES) {
      if (path === route.path || path.startsWith(`${route.path}/`)) {
        window.location.replace(route.target);
        return;
      }
    }
  }, [isLoggedIn, pathname, router]);
}

export default function Home() {
  const userIsLoggedIn = false;

  useSimpleRedirect(userIsLoggedIn);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="text-3xl font-bold mb-6">Quick Links</h1>

      <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
            External Docs & Courses
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {EXTERNAL_ROUTES.map((route) => (
              <li key={route.path} style={{ marginBottom: '0.75rem' }}>
                <a 
                  href={route.target} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors"
                  style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: '8px' }}
                >
                  <span className="font-medium text-blue-700">{route.label}</span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {route.path}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
            Public Resources
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {PUBLIC_FOLDER_ROUTES.map((route) => (
              <li key={route} style={{ marginBottom: '0.75rem' }}>
                <Link 
                  href={`/${route}`}
                  className="block p-2 hover:bg-gray-50 rounded transition-colors"
                  style={{ textDecoration: 'none', color: '#059669', border: '1px solid #eee', borderRadius: '8px' }}
                >
                  Running: <span style={{ fontWeight: 600 }}>{route}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
            Downloadable Resources
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {PUBLIC_FILE_RESOURCES.map((file) => (
              <li key={file.href} style={{ marginBottom: '0.75rem' }}>
                <a
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 hover:bg-gray-50 rounded transition-colors"
                  style={{ textDecoration: 'none', color: '#7c3aed', border: '1px solid #eee', borderRadius: '8px' }}
                >
                  {file.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
