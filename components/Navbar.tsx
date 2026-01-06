
import React from 'react';
import { BrandLogo } from './Icons';
import { motion } from 'framer-motion';
import { ShimmerButton } from './ui/shimmer-button';

interface NavbarProps {
  onBookCall?: () => void;
  onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall, onLogoClick }) => {
  const navLinks = [
    { name: 'Focus', href: '#what-we-do' },
    { name: 'Approach', href: '#approach' },
    { name: 'Systems', href: '#systems' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/80 backdrop-blur-2xl rounded-full border border-white/60 p-1.5 flex items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] pointer-events-auto"
      >
        {/* Logo Section */}
        <div className="pl-3 pr-6 border-r border-brand-border/40 mr-2 flex items-center justify-center min-w-[200px]">
          <button
            onClick={onLogoClick}
            className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer outline-none focus:outline-none"
          >
            <BrandLogo size={40} containerHeight={44} />
          </button>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-[13px] font-bold text-brand-body hover:text-brand-heading hover:bg-black/5 rounded-full transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="ml-2">
          <ShimmerButton
            onClick={onBookCall}
            background="#0259DD"
            className="px-6 py-2.5 h-auto text-[13px] font-bold"
          >
            Book Clarity Call
          </ShimmerButton>
        </div>
      </motion.div>
    </nav>
  );
};
