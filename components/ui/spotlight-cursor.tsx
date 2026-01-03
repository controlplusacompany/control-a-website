
'use client';

import React, { useEffect, useRef } from 'react';

interface SpotlightCursorProps {
  size?: number;
  color?: string;
  opacity?: number;
}

export const SpotlightCursor: React.FC<SpotlightCursorProps> = ({
  size = 120, // Reduced size (was 400)
  color = 'rgba(2, 89, 221, 0.2)',
  opacity = 1,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      // Apply translation to position (clientX, clientY) AND center (-50%, -50%) simultaneously
      // This ensures the center of the spotlight aligns perfectly with the mouse pointer
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        width: size,
        height: size,
        opacity: opacity,
        background: `radial-gradient(circle closest-side, ${color}, transparent 100%)`,
        // Initialize off-screen
        transform: 'translate(-100%, -100%)',
      }}
    />
  );
};
