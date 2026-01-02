
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

interface StackingContainerProps {
  children: React.ReactNode;
}

const StackingContainer = forwardRef<HTMLElement, StackingContainerProps>(({ children }, ref) => {
  return (
    <ReactLenis root>
      <main className="relative w-full bg-white" ref={ref}>
        {children}
      </main>
    </ReactLenis>
  );
});

StackingContainer.displayName = 'StackingContainer';

export default StackingContainer;
