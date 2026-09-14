'use client';
import { useState, useEffect } from 'react';

export default function AnimatedBiskoreName() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className="text-h2"
      style={{
        marginTop: '0.75rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      <span className="gradient-text" style={{ transition: 'color 0.8s' }}>
        {expanded ? 'BI' : 'Bi'}
      </span>
      
      {/* Expanded middle */}
      <span
        style={{
          display: 'inline-flex',
          maxWidth: expanded ? '150px' : '0px',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-width 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease',
          alignItems: 'center',
          verticalAlign: 'bottom',
        }}
      >
        <span className="gradient-text" style={{ whiteSpace: 'nowrap' }}>-S</span>
        <span style={{ margin: '0 0.3em', color: '#0D0D0D', whiteSpace: 'nowrap' }}>+</span>
      </span>

      {/* Shrunk middle */}
      <span
        style={{
          display: 'inline-flex',
          maxWidth: expanded ? '0px' : '50px',
          opacity: expanded ? 0 : 1,
          overflow: 'hidden',
          transition: 'max-width 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease',
          verticalAlign: 'bottom',
        }}
      >
        <span className="gradient-text">s</span>
      </span>

      <span className="gradient-text" style={{ transition: 'color 0.8s' }}>
        {expanded ? 'Kore' : 'kore'}
      </span>
    </h2>
  );
}
