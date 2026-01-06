import React from 'react';
import { BackgroundGradient } from './BackgroundGradient';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { KeycapIcon, ArrowKeycap, BrandLogo } from './Icons';
import { ShimmerButton } from './ui/shimmer-button';

interface BookingPageProps {
  onBack: () => void;
}

// --- Objective Visuals ---

const WorkflowVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 }}
          className="w-6 h-6 rounded-lg bg-brand-blue/20 border border-brand-blue/40"
        />
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center gap-2">
      <div className="w-4 h-0.5 bg-brand-blue/30 -ml-8" />
      <div className="w-4 h-0.5 bg-brand-blue/30 -mr-8" />
    </div>
  </div>
);

const LoopVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="w-20 h-20 rounded-full border-2 border-brand-heading/10 border-t-brand-heading/60 border-l-brand-heading/30"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute w-12 h-12 rounded-full border-2 border-brand-blue/10 border-b-brand-blue/60"
    />
  </div>
);

const DecisionVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-16 h-10 bg-gray-100 rounded-full p-1 border border-black/5 flex items-center">
      <motion.div
        animate={{ x: [0, 24, 24, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
        className="w-8 h-8 bg-brand-heading rounded-full shadow-md"
      />
    </div>
    <div className="absolute -top-4 right-6">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0.35, 0.4, 0.6, 0.65] }}
        className="text-brand-blue"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </motion.div>
    </div>
  </div>
);

const RoadmapVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="opacity-80">
      <motion.path
        d="M10 50 C 30 50, 30 10, 50 10 C 70 10, 70 50, 90 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="4 4"
        className="text-brand-heading/20"
      />
      <motion.path
        d="M10 50 C 30 50, 30 10, 50 10 C 70 10, 70 50, 90 50"
        stroke="#0259DD"
        strokeWidth="3"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="10" cy="50" r="4" className="fill-brand-heading" />
      <circle cx="90" cy="50" r="4" className="fill-brand-blue" />
    </svg>
  </div>
);

export const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {

  const objectives = [
    {
      title: "Understanding your current workflow",
      visual: <WorkflowVisual />,
      id: "01"
    },
    {
      title: "Identifying manual or chaotic loops",
      visual: <LoopVisual />,
      id: "02"
    },
    {
      title: "Deciding if it's worth fixing",
      visual: <DecisionVisual />,
      id: "03"
    },
    {
      title: "Designing a custom roadmap",
      visual: <RoadmapVisual />,
      id: "04"
    }
  ];

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "6e09d799-c31f-48ac-a0e5-18c7afbe17d9");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("message", formData.notes); // Mapping notes to 'message' for standard form fields
      formDataToSend.append("subject", `New Call Request from ${formData.name}`); // Optional customized subject

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', notes: '' });
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
                <path d="m15 18-6-6 6-6" />
              </svg>
            }
            size={44}
            blueDepth={false}
          />
        </div>
      </motion.button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-32 pb-24 relative z-10 transition-all duration-500">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Hero & Disclaimer */}
          <div className="lg:sticky lg:top-32 space-y-12">
            {/* Hero Card - Modular Blue Brand Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-3d-green rounded-[64px] p-12 md:p-16 text-center relative shadow-3xl overflow-hidden"
            >
              {/* Decorative Floating Technical Icons matching brand aesthetics */}
              <div className="absolute top-10 left-10 opacity-20 rotate-[-15deg] hidden md:block">
                <KeycapIcon label="cmd" size={80} blueDepth={false} className="bg-white/10" />
              </div>
              <div className="absolute bottom-12 left-24 opacity-10 rotate-[10deg] hidden md:block">
                <KeycapIcon glyph={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2 3 14h9l-1 8 10-12h-9l-8z" /></svg>} size={60} blueDepth={false} />
              </div>
              <div className="absolute top-20 right-12 opacity-15 rotate-[20deg] hidden md:block">
                <KeycapIcon label="opt" size={70} blueDepth={false} className="bg-white/5" />
              </div>
              <div className="absolute bottom-16 right-24 opacity-10 rotate-[-10deg] hidden md:block">
                <KeycapIcon glyph={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>} size={65} blueDepth={false} />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                A calm, practical <br /> conversation.
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
                We'll understand how your business works today, where friction exists, and whether a simple system could help.
              </p>
            </motion.div>

            {/* "How this works?" section - Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className=""
            >
              {/* Footer Logo - Matching Navbar Size */}


              <div className="text-left mb-8 pl-4 hidden">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-muted">How this works?</span>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {objectives.map((obj, i) => (
                  <div
                    key={i}
                    className="bg-white border border-brand-border rounded-[32px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-[240px]"
                  >
                    <div className="w-full h-24 bg-brand-bg rounded-xl border border-brand-border/50 flex items-center justify-center mb-4">
                      {obj.visual}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-brand-heading leading-tight">{obj.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            {status === 'success' ? (
              <div className="bg-white rounded-[56px] p-8 md:p-12 shadow-elevation border border-white h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-brand-heading">Request Received!</h3>
                <p className="text-lg text-brand-muted max-w-sm">
                  Thanks for reaching out. We've received your details and will be in touch shortly to coordinate a time.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-[56px] p-8 md:p-12 shadow-elevation border border-white h-full flex flex-col">
                <div className="space-y-8 flex-1">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-muted px-4">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full h-16 bg-white border border-brand-border rounded-3xl px-6 font-bold text-lg text-black placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-muted px-4">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      className="w-full h-16 bg-white border border-brand-border rounded-3xl px-6 font-bold text-lg text-black placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-muted px-4">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-16 bg-white border border-brand-border rounded-3xl px-6 font-bold text-lg text-black placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-muted px-4">Company / URL</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="company.com"
                      className="w-full h-16 bg-white border border-brand-border rounded-3xl px-6 font-bold text-lg text-black placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-3 mb-8">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-muted px-4">Context / Setup Notes</label>
                    <textarea
                      rows={4}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your current operations..."
                      className="w-full bg-white border border-brand-border rounded-3xl p-6 font-bold text-lg text-black placeholder:text-brand-muted/40 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/40 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="flex flex-col items-center gap-8">
                    <ShimmerButton
                      background="#0259DD"
                      className="h-[72px] px-16 rounded-full font-bold text-xl shadow-keycap w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      // @ts-ignore
                      onClick={(e) => {
                        // Check validity if possible, but form text submission handles it. 
                        // We are relying on wrapping form onSubmit.
                      }}
                      type="submit"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                      {status !== 'sending' && <ArrowKeycap size={24} />}
                    </ShimmerButton>
                    <div className="flex items-center gap-2 text-[12px] text-brand-muted/70 font-bold uppercase tracking-wider">
                      {status === 'error' ? (
                        <span className="text-red-500">Something went wrong. Please try again.</span>
                      ) : (
                        "No pressure. Just clarity."
                      )}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* REFINED FOOTER - Consistent with App.tsx */}
      {/* REFINED FOOTER - Consistent with App.tsx */}
      <Footer className="bg-white/50 border-t border-brand-border/20" />
    </div>
  );
};
