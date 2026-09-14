'use client';

import { useRef, useEffect, useState, ReactNode, CSSProperties } from 'react';

interface RevealTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  style?: CSSProperties;
  splitLines?: boolean; // if true, reveals line by line
  threshold?: number;
}

/**
 * Wraps text in `overflow:hidden` and reveals inner content by
 * sliding up from translateY(100%) → translateY(0) on scroll enter.
 */
export default function RevealText({
  children,
  as: Tag = 'div',
  delay = 0,
  duration = 800,
  className = '',
  style = {},
  threshold = 0.15,
}: RevealTextProps) {
  const outerRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={outerRef as any}
      className={className}
      style={{
        overflow: 'hidden',
        display: 'block',
        ...style,
      }}
    >
      <span
        ref={innerRef as any}
        style={{
          display: 'block',
          transform: visible ? 'translateY(0)' : 'translateY(105%)',
          opacity: visible ? 1 : 0,
          transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration * 0.6}ms ease ${delay}ms`,
          willChange: 'transform',
        }}
      >
        {children}
      </span>
    </Tag>
  );
}

// ——— Multi-line staggered variant ———
interface RevealLinesProps {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  stagger?: number; // ms between lines
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  highlightLast?: boolean; // gold color on last line
}

export function RevealLines({
  lines,
  as: Tag = 'h2',
  stagger = 120,
  delay = 0,
  duration = 900,
  className = '',
  style = {},
  highlightLast = false,
}: RevealLinesProps) {
  const outerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={outerRef} className={className} style={style}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: 'block',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              display: 'block',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms, opacity ${duration * 0.5}ms ease ${delay + i * stagger}ms`,
              willChange: 'transform',
              color: highlightLast && i === lines.length - 1 ? '#B8860B' : undefined,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
