'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

// Multi-element variant — returns array of visibility states
export function useScrollRevealGroup(count: number, options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibles, setVisibles] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibles((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            if (once) obs.unobserve(el);
          }
        },
        { threshold, rootMargin }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [count, threshold, rootMargin, once]);

  return { refs, visibles };
}
