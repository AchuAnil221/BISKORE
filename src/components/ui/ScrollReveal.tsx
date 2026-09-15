'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  style = {},
  direction = 'up',
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const dirClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : 'reveal';

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${dirClass} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
