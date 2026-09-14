'use client';

import { useEffect } from 'react';

export default function ScrollRestorationFix() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  return null;
}
