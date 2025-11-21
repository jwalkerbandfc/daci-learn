'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const EXTERNAL_ROUTES = [
  ['/ai', 'https://canvas.instructure.com/courses/13420265'],
  ['/excel', 'https://canvas.instructure.com/courses/13193221'],
];

const PUBLIC_FOLDER_ROUTES = ['flutter', 'resources', 'cisco-sim', 'raid-calc'];

const DEFAULT = '';

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
      return; // Allow access to public folder routes
    }

    // Check external routes
    for (const [prefix, target] of EXTERNAL_ROUTES) {
      if (path === prefix || path.startsWith(`${prefix}/`)) {
        window.location.replace(target);
        return;
      }
    }

    // Redirect to default if not logged in and no matching route
    window.location.replace(DEFAULT);
  }, [isLoggedIn, pathname, router]);
}

export default function Home() {
  const userIsLoggedIn = false; // replace with real check

  useSimpleRedirect(userIsLoggedIn);

  return <div>Redirecting...</div>;
}
