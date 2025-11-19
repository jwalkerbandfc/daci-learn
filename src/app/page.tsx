import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // or use window.location

const ROUTES = [
  ['/ai',    'https://example.com/ai-redirect'],
  ['/excel', 'https://example.com/excel-redirect'],
];
const DEFAULT = 'https://canvas.instructure.com/courses/13420265';

function useSimpleRedirect(isLoggedIn) {
  const navigate = useNavigate?.() ?? null;
  const path = (typeof window !== 'undefined') ? window.location.pathname : '/';

  useEffect(() => {
    if (isLoggedIn) return;
    for (const [prefix, target] of ROUTES) {
      if (path === prefix || path.startsWith(`${prefix}/`)) {
        // prefer location.replace to avoid back-button landing here
        window.location.replace(target);
        return;
      }
    }
    window.location.replace(DEFAULT);
  }, [isLoggedIn, path]);
}

// Usage in a component:
export default function Home() {
  const userIsLoggedIn = false; // replace with real check
  useSimpleRedirect(userIsLoggedIn);
  return null;
}
