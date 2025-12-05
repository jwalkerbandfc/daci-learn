'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

// 1. Updated structure to support custom Labels
const EXTERNAL_ROUTES = [
  { 
    path: '/ai', 
    target: 'https://canvas.instructure.com/courses/13420265', 
    label: 'AI Course' 
  },
  { 
    path: '/excel', 
    target: 'https://canvas.instructure.com/enroll/JAT8DW', 
    label: 'Excel Course' 
  },{ 
    path: '/excel-resources', 
    target: 'https://daci-learn.uk/excel-resources.zip', 
    label: 'Excel Course Resources' 
  },
  
  {
    path: '/graham-task',
    target: 'https://daci-learn.uk/admissions.xls',
    label: 'Graham Admissions',
  },
  {
    path: '/excel-ppt',
    target: 'https://docs.google.com/presentation/d/1vMkdcImQS8hVyl-gqOfKqOP9rZcS2H07/edit?usp=sharing&ouid=110904303590053907034&rtpof=true&sd=true',
    label: 'Excel PowerPoint',
  },
  
  { 
    path: '/graham-tasks', 
    target: 'https://daci-learn.uk/graham.docx', // Replace with real link
    label: 'Graham Tasks' 
  },
  
  { 
    path: '/tasks', 
    target: 'https://docs.google.com/document/d/10AX7FPmtIk7TUupUW2HAXIpYQvK09WptgSu7OADrwS4/edit?tab=t.0', // Replace with real link
    label: 'Tasks 041225 - Google Docs' 
  },
  { 
    path: '/automation', 
    target: 'https://docs.google.com/document/d/1sTN42CeHMfgCqBK6aTj_3u21IPb2m1YIpO-WQUJ6tYY/edit?tab=t.0', // Replace with real link
    label: 'Excel Automation - Google Docs' 
  },
];

const PUBLIC_FOLDER_ROUTES = ['Flutter', 'resources', 'Cisco-Sim', 'Raid-Calc', 'flutter-guide'];

function useSimpleRedirect(isLoggedIn: boolean) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoggedIn) return;

    const path = pathname || '/';
    const pathSegments = path.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];

    // Check if it's a public folder route
    if (PUBLIC_FOLDER_ROUTES.includes(firstSegment)) {
      return; 
    }

    // 2. Updated loop to handle the object structure
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
        
        {/* External Routes Section */}
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

        {/* Public Folder Section */}
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

      </div>
    </main>
  );
}
