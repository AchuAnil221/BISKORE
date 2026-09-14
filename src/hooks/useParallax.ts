'use client';

import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number; // 0 = no movement, 1 = full scroll speed, 0.3 = gentle
  direction?: 'vertical' | 'horizontal';
}

export function useParallax({ speed = 0.3, direction = 'vertical' }: UseParallaxOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Distance from viewport center to element center
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowH / 2;
      const relativeOffset = (elementCenter - viewportCenter) * speed;
      setOffset(relativeOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const style =
    direction === 'vertical'
      ? { transform: `translateY(${offset}px)` }
      : { transform: `translateX(${offset}px)` };

  return { containerRef, style };
}
