'use client';

import { useRef, useEffect, CSSProperties, ReactNode } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string; // e.g. '4/3'
  children?: ReactNode;
}

/**
 * Image with a parallax effect — the inner image translates slower
 * than the page scroll, creating depth.
 */
export default function ParallaxImage({
  src,
  alt,
  speed = 0.25,
  className = '',
  style = {},
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority = false,
  aspectRatio = '4/3',
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowH / 2;
      const offset = (elementCenter - viewportCenter) * speed;
      inner.style.transform = `translateY(${offset}px) scale(1.12)`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio,
        ...style,
      }}
    >
      <div
        ref={innerRef}
        style={{
          position: 'absolute',
          inset: '-12%',
          willChange: 'transform',
          transform: 'translateY(0) scale(1.12)',
          transition: 'transform 0.05s linear',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: 'cover', borderRadius: 0 }}
        />
      </div>
      {children}
    </div>
  );
}
