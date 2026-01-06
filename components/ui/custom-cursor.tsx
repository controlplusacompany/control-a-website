
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position motion values
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Ultra-fast springs for following (low lag, high precision)
    const springConfig = { damping: 35, stiffness: 1000 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only enable custom cursor on devices with a fine pointer (mouse)
        const mediaQuery = window.matchMedia('(pointer: fine)');
        if (!mediaQuery.matches) {
            setIsVisible(false);
            return;
        }

        const onMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, [isVisible, mouseX, mouseY]); // Added dependencies for safety

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <motion.div
                animate={{
                    scale: isClicked ? 0.9 : isHovered ? 1.2 : 1,
                    rotate: isClicked ? -5 : 0,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 250,
                }}
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }}
                >
                    <path
                        d="M5.5 3.5L18.5 12L12.5 13.5L15.5 20.5L12.5 21.5L9.5 14.5L5.5 18.5V3.5Z"
                        fill="#0259DD"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
};
