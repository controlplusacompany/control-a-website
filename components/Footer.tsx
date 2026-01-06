import React from 'react';
import { BrandLogo, LinkedInIcon, InstagramIcon, XIconTwitter } from './Icons';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer className={`py-24 px-6 md:px-12 ${className}`}>
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Left Column */}
                <div className="flex flex-col items-start gap-2 opacity-80">
                    <div className="pl-1">
                        <BrandLogo size={60} containerHeight={66} leftPos="250%" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-muted pt-1 pl-1">Everything connected. <br />Running smoothly.</span>
                    <p className="text-brand-muted/40 font-bold text-xs uppercase tracking-[0.3em] pl-1 pt-2">© 2026 control+a</p>
                </div>

                {/* Right Column: About Us / Contact */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-heading">Contact</h4>
                        <div className="flex flex-col gap-2 text-sm font-bold text-brand-muted">
                            <a href="mailto:team@bycontrolplusa.co.in" className="hover:text-brand-blue transition-colors">team@bycontrolplusa.co.in</a>
                            <div className="flex flex-row flex-wrap gap-4 pt-4 text-xs opacity-80">
                                <a href="https://www.linkedin.com/company/bycontrolplusa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-blue transition-colors group">
                                    <LinkedInIcon size={16} />
                                    <span>/bycontrolplusa</span>
                                </a>
                                <a href="https://www.instagram.com/bycontrolplusa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-blue transition-colors group">
                                    <InstagramIcon size={16} />
                                    <span>/bycontrolplusa</span>
                                </a>
                                <a href="https://x.com/bycontrolplusa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-blue transition-colors group">
                                    <XIconTwitter size={14} />
                                    <span>/bycontrolplusa</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-heading">Location</h4>
                        <div className="flex flex-col gap-2 text-sm font-bold text-brand-muted">
                            <span>Faridabad, Haryana</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
