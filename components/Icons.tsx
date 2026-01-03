
import React from 'react';

interface KeycapProps {
  className?: string;
  size?: number;
  label?: string;
  glyph?: React.ReactNode;
  blueDepth?: boolean;
}

export const KeycapIcon: React.FC<KeycapProps> = ({ 
  className = '', 
  size = 40, 
  label, 
  glyph,
  blueDepth = true 
}) => {
  return (
    <div 
      className={`relative inline-flex flex-col items-center justify-center rounded-[22%] ${className}`}
      style={{ 
        width: size, 
        height: size,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <div 
        className="absolute inset-0 rounded-[22%] border border-black/5 flex items-center justify-center overflow-hidden"
        style={{ 
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
          boxShadow: blueDepth 
            ? '0 12px 30px -4px rgba(2, 89, 221, 0.35), 0 4px 10px -2px rgba(2, 89, 221, 0.2), inset 0 -2px 4px rgba(0,0,0,0.05)' 
            : '0 10px 25px -5px rgba(0,0,0,0.08), inset 0 -2px 4px rgba(0,0,0,0.05)',
          zIndex: 1,
          padding: size * 0.15
        }}
      >
        {label && (
          <span 
            className="font-black leading-none tracking-tighter text-brand-heading" 
            style={{ 
              fontSize: size * 0.32,
              textShadow: '0 1px 0 rgba(255,255,255,0.8)'
            }}
          >
            {label}
          </span>
        )}
        {glyph && (
          <div className="flex items-center justify-center w-full h-full relative z-10 p-1">
            {glyph}
          </div>
        )}
      </div>
    </div>
  );
};

export const BrandLogo = ({ size = 40, className = '', hideText = false }: { size?: number; className?: string; hideText?: boolean }) => {
  // Precision match to the provided image logo: 
  // White keycap with sharp blue base extrusion + geometric sans-serif typography
  return (
    <div className={`flex items-center gap-[0.7em] select-none ${className}`} style={{ fontSize: size }}>
      {/* Keycap with solid blue base */}
      <div 
        className="relative flex items-center justify-center bg-white"
        style={{ 
          width: '1em', 
          height: '1em', 
          borderRadius: '0.22em',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFDFD 100%)',
          border: '1px solid rgba(0,0,0,0.03)',
          boxShadow: `0 0.12em 0 #0259DD, 0 0.25em 0.4em -0.05em rgba(2, 89, 221, 0.3), inset 0 -0.05em 0.05em rgba(0,0,0,0.05)`
        }}
      >
        <div className="flex flex-col items-center justify-center -mt-[0.05em]">
          <span 
            className="font-bold text-brand-heading/80 tracking-tighter"
            style={{ fontSize: '0.36em', lineHeight: 1 }}
          >
            ^A
          </span>
        </div>
      </div>
      
      {!hideText && (
        <div className="flex items-center font-bold text-brand-heading tracking-tight" style={{ fontSize: '0.62em', gap: '0.25em' }}>
          <span className="text-[#333333]">control</span>
          <span className="text-brand-blue font-black">+</span>
          <span className="text-[#333333]">a</span>
        </div>
      )}
    </div>
  );
};

export const LogoPlus = ({ className = '', size = 20, color = "#0259DD" }: { className?: string; size?: number; color?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M12 4V20M4 12H20" 
      stroke={color} 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const ArrowKeycap = ({ size = 20, color = "currentColor" }: { size?: number, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BookingKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" fill="#E8E8E8" transform="translate(0, 1)" />
        <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" fill="white" stroke="#1A1A1A" strokeWidth="2.5" />
        <path d="M8 2V6M16 2V6M3 10H21" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    } 
  />
);

export const DashboardKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" fill="#E8E8E8" transform="translate(0, 1)" />
        <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" fill="white" stroke="#1A1A1A" strokeWidth="2.5" />
        <path d="M3 8H21M9 19V8" stroke="#1A1A1A" strokeWidth="2.5" />
      </svg>
    } 
  />
);

export const AutomationKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#E8E8E8" transform="translate(1, 1)" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    } 
  />
);

export const StatusKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12H6L9 3L15 21L18 12H22" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 1)" />
        <path d="M2 12H6L9 3L15 21L18 12H22" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    } 
  />
);

export const AuditKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" fill="#E8E8E8" transform="translate(1, 1)" />
        <circle cx="11" cy="11" r="8" stroke="#1A1A1A" strokeWidth="2.5" fill="white" />
        <path d="M21 21L16.65 16.65" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 11H14" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    } 
  />
);

export const ERPKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="6" height="6" rx="1" stroke="#1A1A1A" strokeWidth="2.5" fill="white" />
        <rect x="14" y="4" width="6" height="6" rx="1" stroke="#1A1A1A" strokeWidth="2.5" fill="#E8E8E8" />
        <rect x="4" y="14" width="6" height="6" rx="1" stroke="#1A1A1A" strokeWidth="2.5" fill="#E8E8E8" />
        <rect x="14" y="14" width="6" height="6" rx="1" stroke="#1A1A1A" strokeWidth="2.5" fill="white" />
      </svg>
    } 
  />
);

export const OpsKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="#E8E8E8" strokeWidth="2.5" strokeLinecap="round" transform="translate(1, 1)" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 6V12L16 14" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    } 
  />
);

export const PredictabilityKeycap = ({ size = 56 }) => (
  <KeycapIcon 
    size={size} 
    glyph={
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L9 11L13 15L21 7" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 1)" />
        <path d="M3 17L9 11L13 15L21 7" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7H21V13" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    } 
  />
);
