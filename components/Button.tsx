
import React from 'react';
import { ButtonProps } from '../types';
import { ArrowKeycap } from './Icons';

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] h-[52px] px-8 text-[15px] tracking-tight whitespace-nowrap gap-3";
  
  const variants = {
    primary: "bg-brand-green text-brand-heading rounded-button hover:opacity-90 shadow-lg shadow-brand-green/20",
    secondary: "bg-transparent text-brand-heading border border-brand-border rounded-button hover:bg-white",
    'dark-outline': "bg-transparent text-white border border-white/20 rounded-button hover:bg-white/10"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
      {variant !== 'secondary' && <ArrowKeycap size={18} />}
    </button>
  );
};
