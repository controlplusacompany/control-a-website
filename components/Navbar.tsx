
import React from 'react';
import { BrandLogo, MenuIcon, XIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from './ui/shimmer-button';

interface NavbarProps {
  onBookCall?: () => void;
  onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall, onLogoClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Focus', href: '#what-we-do' },
    { name: 'Approach', href: '#approach' },
    { name: 'Systems', href: '#systems' },
    { name: 'Process', href: '#process' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 backdrop-blur-2xl rounded-full border border-white/60 p-1.5 flex items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] pointer-events-auto relative z-50"
        >
          {/* Logo Section */}
          <div className="pl-3 pr-6 border-r border-brand-border/40 mr-2 flex items-center justify-center min-w-[180px] md:min-w-[200px]">
            <button
              onClick={onLogoClick}
              className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer outline-none focus:outline-none"
            >
              <BrandLogo size={40} containerHeight={44} />
            </button>
          </div>

          {/* Links Section - Desktop */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-[13px] font-bold text-brand-body hover:text-brand-heading hover:bg-black/5 rounded-full transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden px-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-heading hover:bg-black/5 rounded-full transition-colors"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* CTA Section - Desktop */}
          <div className="ml-2 hidden md:block">
            <ShimmerButton
              onClick={onBookCall}
              background="#0259DD"
              className="px-6 py-2.5 h-auto text-[13px] font-bold"
            >
              Connect with us
            </ShimmerButton>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-6 flex flex-col items-center gap-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={handleLinkClick}
                  className="text-2xl font-bold text-brand-heading w-full text-center py-4 border-b border-black/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full mt-4"
            >
              <ShimmerButton
                onClick={() => {
                  onBookCall && onBookCall();
                  setIsOpen(false);
                }}
                background="#0259DD"
                className="w-full py-4 text-lg font-bold"
              >
                Connect with us
              </ShimmerButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
