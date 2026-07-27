import { useState, useEffect } from 'react';

// Custom event name for pushState updates
const NAVIGATION_EVENT = 'app-navigation';

// Navigation helper
export function navigate(path: string) {
  window.history.pushState({}, '', path);
  // Notify listeners that the path has changed
  window.dispatchEvent(new Event(NAVIGATION_EVENT));
}

function useRoute() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener(NAVIGATION_EVENT, handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener(NAVIGATION_EVENT, handleNavigation);
    };
  }, []);

  return route;
}

export default useRoute;
