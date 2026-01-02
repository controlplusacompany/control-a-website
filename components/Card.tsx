
import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantClasses = {
    default: "card-3d-white text-brand-heading hover:bg-white/95",
    accent: "card-3d-green text-brand-heading",
    dark: "card-3d-black text-white"
  };

  return (
    <motion.div
      whileHover={{ 
        y: -10, 
        scale: 1.02,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        mass: 0.8
      }}
      className={`rounded-[40px] p-10 flex flex-col cursor-default relative group card-3d-base ${variantClasses[variant]} ${className}`}
    >
      {/* Glossy Reflection Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${variant === 'dark' ? 'bg-gradient-to-br from-white/5 to-transparent' : 'bg-gradient-to-br from-white/20 to-transparent'}`} />
      
      {icon && (
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-elevation transition-all duration-500 relative z-10 ${variant === 'dark' ? 'bg-white/10 text-brand-green' : 'bg-white text-brand-heading'}`}
        >
          {icon}
        </motion.div>
      )}
      
      <h3 className={`text-[26px] font-bold leading-tight tracking-tight mb-4 relative z-10 ${variant === 'dark' ? 'text-white' : 'text-brand-heading'}`}>
        {title}
      </h3>
      
      <p className={`text-[17px] leading-relaxed font-medium relative z-10 ${variant === 'dark' ? 'text-white/60' : 'text-brand-muted'}`}>
        {description}
      </p>
      
      {children && <div className="mt-auto w-full pt-8 relative z-10">{children}</div>}
    </motion.div>
  );
};
