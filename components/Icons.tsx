
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

export const BrandLogo = ({ size = 40, className = '', containerHeight, leftPos }: { size?: number; className?: string; containerHeight?: number; leftPos?: string }) => {
  return (
    <div
      className={`flex items-center justify-center select-none relative ${className}`}
      style={{ height: containerHeight || size, width: containerHeight ? size * 0.8 : 'auto' }}
    >
      <img
        src="/logo_final.png"
        alt="Control + A Logo"
        className="max-w-none object-contain"
        style={{
          height: size,
          position: containerHeight ? 'absolute' : 'relative',
          top: containerHeight ? '50%' : 'auto',
          left: containerHeight ? (leftPos || '50%') : 'auto',
          transform: containerHeight ? 'translate(-50%, -50%)' : 'none',
          pointerEvents: 'none'
        }}
      />
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
export const MenuIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const XIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const LinkedInIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="none" />
    <path d="M6 9H2V21H6V9Z" stroke="none" />
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="none" />
  </svg>
);

export const InstagramIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const XIconTwitter = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);
