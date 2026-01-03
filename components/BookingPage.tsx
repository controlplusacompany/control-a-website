
import React from 'react';
import { motion } from 'framer-motion';
import { KeycapIcon, ArrowKeycap, BrandLogo } from './Icons';
import { ShimmerButton } from './ui/shimmer-button';

interface BookingPageProps {
  onBack: () => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col relative overflow-y-auto selection:bg-brand-green selection:text-white">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8 z-50 flex items-center justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-black/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          <KeycapIcon 
            glyph={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            } 
            size={44} 
            blueDepth={false}
          />
        </div>
      </motion.button>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full px-6 pt-32 pb-24 relative z-10">
        
        {/* Hero Card - Modular Blue Brand Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-3d-green rounded-[64px] p-12 md:p-24 text-center mb-16 relative shadow-3xl overflow-hidden"
        >
          {/* Decorative Floating Technical Icons matching brand aesthetics */}
          <div className="absolute top-10 left-10 opacity-20 rotate-[-15deg] hidden md:block">
             <KeycapIcon label="cmd" size={80} blueDepth={false} className="bg-white/10" />
          </div>
          <div className="absolute bottom-12 left-24 opacity-10 rotate-[10deg] hidden md:block">
             <KeycapIcon glyph={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>} size={60} blueDepth={false} />
          </div>
          <div className="absolute top-20 right-12 opacity-15 rotate-[20deg] hidden md:block">
             <KeycapIcon label="opt" size={70} blueDepth={false} className="bg-white/5" />
          </div>
          <div className="absolute bottom-16 right-24 opacity-10 rotate-[-10deg] hidden md:block">
             <KeycapIcon glyph={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>} size={65} blueDepth={false} />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
            A calm, practical <br/> conversation.
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
            This isn't a sales pitch. We'll understand how your business works today, where friction exists, and whether a simple system could help.
          </p>
        </motion.div>

        {/* "What this call is for" section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-muted mb-12 block">Objective</span>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <KeycapIcon label="01" size={32} blueDepth={false} className="opacity-80" />
              <span className="text-xl md:text-2xl font-bold text-brand-heading">Understanding your current workflow</span>
            </div>
            <div className="flex items-center gap-4">
              <KeycapIcon label="02" size={32} blueDepth={false} className="opacity-80" />
              <span className="text-xl md:text-2xl font-bold text-brand-heading">Identifying manual or chaotic loops</span>
            </div>
            <div className="flex items-center gap-4">
              <KeycapIcon label="03" size={32} blueDepth={false} className="opacity-80" />
              <span className="text-xl md:text-2xl font-bold text-brand-heading">Deciding if it's worth fixing</span>
            </div>
          </div>
          <p className="mt-12 text-brand-muted font-bold text-sm uppercase tracking-widest opacity-60">No pressure. Just clarity.</p>
        </motion.div>

        {/* Form and Calendar Section - Brand Consistent Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-brand-blue/5 rounded-[64px] p-4 md:p-10 relative shadow-2xl backdrop-blur-xl border border-brand-blue/10"
        >
          <div className="bg-white rounded-[56px] p-8 md:p-16 shadow-elevation border border-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-4">Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name" 
                  className="w-full h-16 bg-brand-bg/50 border border-brand-border rounded-3xl px-6 font-bold text-brand-heading placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-4">Email</label>
                <input 
                  type="email" 
                  placeholder="email@company.com" 
                  className="w-full h-16 bg-brand-bg/50 border border-brand-border rounded-3xl px-6 font-bold text-brand-heading placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-4">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full h-16 bg-brand-bg/50 border border-brand-border rounded-3xl px-6 font-bold text-brand-heading placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-4">Company / URL</label>
                <input 
                  type="text" 
                  placeholder="company.com" 
                  className="w-full h-16 bg-brand-bg/50 border border-brand-border rounded-3xl px-6 font-bold text-brand-heading placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all" 
                />
              </div>
            </div>

            <div className="space-y-3 mb-16">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-4">Context / Setup Notes</label>
              <textarea 
                rows={4}
                placeholder="Tell us a bit about your current operations..." 
                className="w-full bg-brand-bg/50 border border-brand-border rounded-3xl p-6 font-bold text-brand-heading placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all resize-none" 
              />
            </div>

            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-muted mb-8 block">Schedule Availability</span>
              <div className="bg-brand-bg/80 border border-brand-border rounded-[40px] p-10 md:p-14 mb-10 shadow-inner">
                <div className="text-xl font-bold text-brand-heading mb-10 flex items-center justify-center gap-3">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                   January 2026
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {timeSlots.map((slot, i) => (
                    <button 
                      key={slot}
                      className="h-16 bg-white border border-brand-border rounded-2xl font-bold text-[13px] text-brand-heading hover:border-brand-blue hover:text-brand-blue hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-[13px] text-brand-muted font-bold tracking-tight mb-12">Duration: 30 minutes. No preparation needed.</div>

              <div className="flex flex-col items-center gap-8">
                <ShimmerButton 
                  background="#0259DD"
                  className="h-[72px] px-16 rounded-full font-bold text-xl shadow-keycap"
                >
                  Confirm call
                  <ArrowKeycap size={24} />
                </ShimmerButton>
                <div className="flex items-center gap-2 text-[12px] text-brand-muted/70 font-bold uppercase tracking-wider">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Syncs with your calendar
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Footer - Consistent with brand aesthetics */}
      <footer className="mt-auto bg-[#111] text-white/40 py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <BrandLogo size={36} className="grayscale brightness-[100] opacity-50" />
            <div className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30">Operational Clarity Engineered</div>
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-white font-bold text-lg hover:text-brand-blue transition-colors cursor-pointer tracking-tight">hello@controla.agency</p>
            <p className="text-white/60 font-medium">Strategic Design HQ</p>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-4">© 2024 Control + A Systems</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
