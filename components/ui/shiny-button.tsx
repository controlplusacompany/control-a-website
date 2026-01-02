'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

const animationProps = {
  initial: { "--x": "100%", scale: 1 },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 10,
      damping: 5,
      mass: 0.1,
    },
  },
} as HTMLMotionProps<"button">;

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      {...props as any}
      className={cn(
        "relative rounded-full px-6 py-2 font-medium transition-all duration-300 ease-in-out hover:shadow-lg",
        className
      )}
    >
      <span
        className="relative flex h-full w-full items-center justify-center"
        style={{
          maskImage:
            "linear-gradient(-75deg, #FFF calc(var(--x) + 20%), transparent calc(var(--x) + 30%), #FFF calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, #FFF calc(var(--x) + 20%), transparent calc(var(--x) + 30%), #FFF calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)+20%),rgba(255,255,255,0.5)_calc(var(--x)+25%),rgba(255,255,255,0.1)_calc(var(--x)+100%))] p-px pointer-events-none"
      />
    </motion.button>
  );
};