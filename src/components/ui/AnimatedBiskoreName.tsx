'use client';
import { useState, useEffect } from 'react';

const DARK = '#062C22';

export default function AnimatedBiskoreName() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const transition = 'max-width 0.5s ease-in-out, opacity 0.45s ease-in-out, margin 0.5s ease-in-out';

  return (
    <h2
      className="text-h2"
      style={{
        marginTop: '0.75rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        fontWeight: 900,
        color: DARK,
      }}
    >
      {/* "BI" — always visible */}
      <span>BI</span>

      {/* "-S" — slides in when expanded */}
      <span
        style={{
          display: 'inline-block',
          maxWidth: expanded ? '60px' : '0px',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition,
          marginRight: expanded ? '0.15em' : '0',
        }}
      >
        -S
      </span>

      {/* "S" — visible only when collapsed (bridges BI→SKORE) */}
      <span
        style={{
          display: 'inline-block',
          maxWidth: expanded ? '0px' : '40px',
          opacity: expanded ? 0 : 1,
          overflow: 'hidden',
          transition,
        }}
      >
        S
      </span>

      {/* "+" — slides in when expanded */}
      <span
        style={{
          display: 'inline-block',
          maxWidth: expanded ? '40px' : '0px',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition,
          margin: expanded ? '0 0.25em' : '0',
          fontWeight: 300,
          color: '#0D0D0D',
        }}
      >
        +
      </span>

      {/* "KORE" — always visible */}
      <span>KORE</span>
    </h2>
  );
}
