
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { PulseBeams } from './components/ui/pulse-beams';
import { ShimmerButton } from './components/ui/shimmer-button';
import { SpotlightCursor } from './components/ui/spotlight-cursor';
import { BookingPage } from './components/BookingPage';
import { 
  KeycapIcon, 
  BrandLogo,
  BookingKeycap, 
  DashboardKeycap, 
  AutomationKeycap, 
  ArrowKeycap,
  AuditKeycap,
  ERPKeycap,
  OpsKeycap,
  PredictabilityKeycap
} from './components/Icons';

// --- Visual Components for Reliability Section ---

const ChaoticToolsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
    <div className="relative w-40 h-40">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-0 left-1/2 w-12 h-12 bg-brand-blue/30 rounded-xl transform -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-14 h-14 bg-brand-blue/20 rounded-full transform -translate-x-1/2" />
        <div className="absolute left-0 top-1/2 w-10 h-10 bg-brand-blue/40 rounded-lg transform -translate-y-1/2" />
        <div className="absolute right-0 top-1/2 w-16 h-16 bg-brand-blue/10 rounded-2xl transform -translate-y-1/2" />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ 
            x: [0, 8, -8, 0],
            y: [0, -8, 8, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Stacked "Tools" representing the messy reality */}
          <div className="w-24 h-24 bg-white border border-brand-border rounded-[28%] shadow-sm opacity-60 transform -rotate-12 translate-x-6 translate-y-3" />
          <div className="absolute top-0 left-0 w-24 h-24 bg-white border border-brand-border rounded-[28%] shadow-sm opacity-40 transform rotate-[35deg] -translate-x-6 -translate-y-3" />
          <div className="absolute top-4 left-4 w-20 h-20 bg-white border border-brand-border rounded-[28%] shadow-xl flex items-center justify-center">
             <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const ReliableSystemVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative flex items-center gap-4">
      {/* Precision Node Network */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 rounded-full bg-brand-heading" />
      <motion.div 
        initial={{ width: 0 }} 
        animate={{ width: 80 }} 
        transition={{ delay: 0.2 }}
        className="h-[2px] bg-brand-heading/10" 
      />
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.4 }}
      >
        <KeycapIcon 
          label=" " 
          glyph={<div className="w-5 h-5 bg-brand-blue rounded-md shadow-[0_0_20px_rgba(2,89,221,0.6)]" />} 
          size={64} 
          blueDepth={true} 
        />
      </motion.div>
      <motion.div 
        initial={{ width: 0 }} 
        animate={{ width: 80 }} 
        transition={{ delay: 0.2 }}
        className="h-[2px] bg-brand-heading/10" 
      />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 rounded-full bg-brand-heading" />
    </div>
  </div>
);

// --- Visual Components for Capabilities Carousel ---

const ClockVisual = () => (
  <div className="relative w-24 h-24 rounded-full border-[6px] border-brand-heading flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 w-1.5 h-9 bg-brand-heading -translate-x-1/2 -translate-y-[85%] origin-bottom rounded-full" />
    <div className="absolute top-1/2 left-1/2 w-1.5 h-6 bg-brand-heading -translate-x-1/2 -translate-y-[85%] origin-bottom rotate-[135deg] rounded-full" />
    <div className="w-3 h-3 bg-brand-heading rounded-full relative z-10" />
  </div>
);

const DashboardVisual = () => (
  <div className="w-32 h-40 bg-[#222] rounded-2xl p-3 flex flex-col gap-3 relative shadow-2xl border border-white/5">
     <div className="flex gap-2 mb-1">
       <div className="w-full h-1.5 bg-white/20 rounded-full" />
       <div className="w-1/3 h-1.5 bg-white/10 rounded-full" />
     </div>
     <div className="w-full h-14 bg-[#0259DD] rounded-xl shadow-[0_0_20px_rgba(2,89,221,0.35)]" />
     <div className="flex-1 bg-white/10 rounded-xl" />
  </div>
);

const AutomationVisual = () => (
    <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute w-14 h-14 bg-[#0259DD] rounded-xl transform -rotate-12 -translate-x-4 -translate-y-2 shadow-sm" />
        <div className="absolute w-14 h-14 bg-black rounded-xl transform rotate-12 translate-x-4 translate-y-4 shadow-xl" />
    </div>
);

const LiveStatusVisual = () => (
    <div className="w-40 h-28 bg-[#151515] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
       <div className="h-6 bg-[#222] border-b border-white/5 flex items-center px-3 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
       </div>
       <div className="p-3 relative flex-1">
           <div className="w-full h-full bg-gradient-to-b from-[#0259DD]/50 to-transparent opacity-50" />
           <div className="absolute top-3 left-3 w-full font-mono text-[8px] text-[#60A5FA] opacity-90">
              {">"} system_active<br/>
              {">"} monitoring...
           </div>
       </div>
    </div>
);

const MessageVisual = () => (
    <div className="relative flex flex-col gap-3 w-40">
       <div className="w-32 bg-white p-3 rounded-2xl rounded-tl-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 flex gap-2 items-center self-start">
           <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0" />
           <div className="space-y-1.5 flex-1">
               <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
           </div>
       </div>
       <div className="w-32 bg-brand-blue p-3 rounded-2xl rounded-br-none shadow-[0_4px_12px_rgba(2,89,221,0.2)] flex gap-2 items-center self-end">
           <div className="space-y-1.5 flex-1 flex justify-end">
               <div className="w-12 h-1.5 bg-white/40 rounded-full" />
           </div>
       </div>
    </div>
);

const AppWindowVisual = () => (
    <div className="w-40 h-28 bg-white border border-black/10 rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
       <div className="h-7 border-b border-black/5 flex items-center px-3 justify-between bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
          </div>
       </div>
       <div className="flex-1 p-2 grid grid-cols-3 gap-2">
           <div className="bg-gray-100 rounded-lg col-span-1 h-full" />
           <div className="col-span-2 flex flex-col gap-2">
              <div className="bg-brand-blue/10 rounded-lg h-1/2 w-full" />
              <div className="bg-gray-50 rounded-lg h-1/2 w-full" />
           </div>
       </div>
    </div>
);

// --- Visual Components for Process Steps (Updated: Removed Numbers) ---

const ProcessVisual1 = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    <div className="absolute inset-0 border-2 border-brand-green/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
    <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center backdrop-blur-sm">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </div>
  </div>
);

const ProcessVisual2 = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[140px] aspect-[4/3] bg-white border border-black/5 shadow-xl rounded-xl flex flex-col overflow-hidden transform rotate-3 transition-transform hover:rotate-0">
      <div className="h-4 bg-gray-50 border-b border-black/5 flex items-center px-2 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
      </div>
      <div className="flex-1 flex flex-col gap-2 p-3 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px]">
         <div className="w-full h-2 bg-brand-blue/10 rounded-full" />
         <div className="w-2/3 h-2 bg-brand-blue/5 rounded-full" />
         <div className="w-1/2 h-2 bg-brand-blue/5 rounded-full" />
      </div>
    </div>
  </div>
);

const ProcessVisual3 = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="flex gap-2 items-end">
       <div className="w-8 h-12 bg-brand-blue/20 rounded-lg animate-pulse" style={{ animationDelay: '0s' }} />
       <div className="w-8 h-16 bg-brand-blue/60 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
       <div className="w-8 h-24 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg pt-2 shadow-lg">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-mt-1">
           <path d="m5 12 5 5L20 7"></path>
         </svg>
       </div>
    </div>
  </div>
);

const ProcessVisual4 = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-heading rounded-3xl transform rotate-6 opacity-10" />
    <div className="absolute inset-0 bg-white border border-black/10 rounded-3xl flex items-center justify-center shadow-lg">
      <div className="flex flex-col items-center">
         <KeycapIcon glyph={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>} size={50} blueDepth={false} />
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'booking'>('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const deploySteps = [
    { 
      id: "01",
      title: "Clarity call", 
      text: "We understand how your business works today and identify exactly what is slowing you down.",
      visual: <ProcessVisual1 />
    },
    { 
      id: "02",
      title: "System design", 
      text: "We map your ideal processes and decide what to fix, automate, or build first.",
      visual: <ProcessVisual2 />
    },
    { 
      id: "03",
      title: "Build", 
      text: "We create the automations, workflows, or AI systems needed to handle the work.",
      visual: <ProcessVisual3 />
    },
    { 
      id: "04",
      title: "Run", 
      text: "Your business operates with less friction, more consistency, and less reliance on memory.",
      visual: <ProcessVisual4 />
    }
  ];

  const capabilities = [
    {
      title: "Booking flow",
      description: "Customers book, reschedule, or cancel without back and forth. You get confirmed appointments without manual coordination.",
      visual: <ClockVisual />,
      theme: "light"
    },
    {
      title: "Internal dashboard",
      description: "A simple view of what is happening today, what needs attention, and what is already handled.",
      visual: <DashboardVisual />,
      theme: "dark"
    },
    {
      title: "Automation logic",
      description: "Clear rules that decide what happens next so work does not pause waiting for instructions.",
      visual: <AutomationVisual />,
      theme: "light"
    },
    {
      title: "Live status",
      description: "You can check progress at any time without calling or messaging your team.",
      visual: <LiveStatusVisual />,
      theme: "dark"
    },
    {
      title: "Automated follow ups",
      description: "Ensure no lead is left behind with smart, timed communication sequences that feel personal.",
      visual: <MessageVisual />,
      theme: "light"
    },
    {
      title: "Custom software",
      description: "Tailored tools built specifically for your unique operational needs when off-the-shelf isn't enough.",
      visual: <AppWindowVisual />,
      theme: "light"
    }
  ];

  const beams = [
    {
      path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: { x1: ["0%", "0%", "200%"], x2: ["0%", "0%", "180%"], y1: ["80%", "0%", "0%"], y2: ["100%", "20%", "20%"] },
        transition: { duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
      },
      connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }]
    },
    {
      path: "M568 200H841C846.523 200 851 195.523 851 190V40",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
        transition: { duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
      },
      connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }]
    },
    {
      path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
      gradientConfig: {
        initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
        animate: { x1: ["40%", "0%", "0%"], x2: ["10%", "0%", "0%"], y1: ["0%", "0%", "180%"], y2: ["20%", "20%", "200%"] },
        transition: { duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
      },
      connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 }, { cx: 380, cy: 168, r: 6 }]
    }
  ];

  const gradientColors = {
    start: "#0259DD",
    middle: "#0259DD",
    end: "#F8F9FA"
  };

  const pageTransition = {
    initial: { opacity: 0, x: 20, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -20, scale: 0.98 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SpotlightCursor />
      
      {/* Scroll Progress */}
      {view === 'home' && (
        <motion.div className="fixed top-0 left-0 right-0 h-[6px] bg-brand-green z-[60] origin-left shadow-[0_2px_10px_rgba(2,89,221,0.5)]" style={{ scaleX }} />
      )}
      
      <Navbar onBookCall={() => setView('booking')} />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div key="home" {...pageTransition} className="pt-24 space-y-12 pb-24">
            
            {/* SECTION 1: HERO - BRAND BLUE CARD */}
            <section className="px-6 md:px-12 relative overflow-hidden">
              <div className="max-w-7xl mx-auto w-full relative z-20">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="card-3d-green rounded-[64px] p-10 md:p-32 text-center relative shadow-3xl group min-h-[80vh] flex flex-col justify-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.h1 
                      {...fadeIn}
                      className="text-5xl md:text-[90px] font-bold text-white tracking-tighter leading-[0.9] mb-12 max-w-6xl mx-auto"
                    >
                      You run a business. <br/>
                      <span className="opacity-80 mt-4 block">We make it run better.</span>
                    </motion.h1>
                    
                    <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-8 mb-16">
                      <p className="text-white font-medium text-xl md:text-2xl leading-relaxed">
                        If work only gets done when you personally follow up, remind people, or check everything yourself, your business is doing more manual work than it should.
                      </p>
                      <p className="text-white/60 text-xl md:text-2xl leading-relaxed">
                        We help business owners build systems that quietly handle the routine so things run smoothly without constant oversight.
                      </p>
                    </motion.div>

                    <motion.div {...fadeIn} className="flex flex-col items-center gap-6">
                      <ShimmerButton 
                        onClick={() => setView('booking')}
                        background="#0259DD"
                        className="h-[72px] px-16 rounded-full font-bold text-xl flex items-center gap-4 border border-white/30 shadow-2xl"
                      >
                        Book a clarity call
                        <ArrowKeycap size={24} />
                      </ShimmerButton>
                      <span className="text-white/40 font-bold text-sm uppercase tracking-widest">No pressure. Just clarity.</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 2: PROBLEM AWARENESS - WHITE CARD */}
            <section id="problem" className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24 text-center">
                  <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-heading tracking-tight mb-8">
                      Does this sound familiar?
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left max-w-2xl mx-auto">
                    {[
                      "You chase updates more than you want to",
                      "Tasks slip when someone forgets",
                      "Important work lives in messages and memory",
                      "You feel busy but progress feels slow",
                      "You know systems could help but don't know where to start"
                    ].map((text, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 p-6 rounded-3xl hover:bg-brand-bg transition-colors border border-transparent hover:border-brand-border"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-brand-heading">{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p {...fadeIn} className="mt-16 text-xl text-brand-muted font-medium">
                    This is not a people problem. <br/>
                    <span className="text-brand-heading font-bold">It is a systems problem.</span>
                  </motion.p>
                </motion.div>
              </div>
            </section>

            {/* SECTION 3: WHAT WE DO - WHITE CARD */}
            <section id="what-we-do" className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24">
                  <div className="mb-24 md:text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-brand-heading tracking-tighter mb-8 leading-none">
                      What Control + A actually does
                    </h2>
                    <p className="text-xl text-brand-body max-w-3xl mx-auto leading-relaxed font-medium">
                      We help businesses run smoothly by designing systems behind the scenes.
                      We don't sell tools. We design systems that actually get used.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card 
                      variant="default"
                      title="Automations"
                      description="We build workflows that remove repetitive work, so your team can focus on what matters."
                      icon={<AutomationKeycap />}
                    />
                    <Card 
                      variant="default"
                      title="Visibility"
                      description="Dashboards that show you exactly what is going on in your business without chasing people for updates."
                      icon={<DashboardKeycap />}
                    />
                    <Card 
                      variant="default"
                      title="Internal Tools"
                      description="Custom software and AI agents when off-the-shelf tools aren't enough to handle your specific needs."
                      icon={<OpsKeycap />}
                    />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION: RELIABILITY VS TOOLS - BRAND BLUE CARD (Modular High Contrast) */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-green rounded-[64px] p-12 md:p-24 text-center">
                  <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                      The problem isn't tools.<br/><span className="opacity-60">It's reliability.</span>
                    </h2>
                    <p className="text-white/80 text-xl text-brand-bg/80 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                      Most businesses don't need more software. They need fewer decisions, fewer hand-offs, and fewer things that rely on memory.
                    </p>
                    <div className="inline-block px-8 py-4 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
                        <p className="text-2xl font-black text-white tracking-tight">
                            Automation isn't the goal. Predictability is.
                        </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center bg-white/5 rounded-[48px] p-10 border border-white/10 backdrop-blur-sm shadow-inner">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-12">More Tools (Chaos)</span>
                      <div className="h-64 w-full">
                         <ChaoticToolsVisual />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center bg-white rounded-[48px] p-10 shadow-elevation border border-white relative overflow-hidden">
                       {/* Glossy overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent pointer-events-none" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-12 relative z-10">Reliable System (Precision)</span>
                      <div className="h-64 w-full relative z-10">
                         <ReliableSystemVisual />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 4: DIFFERENTIATION - WHITE CARD */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24">
                  <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 space-y-10">
                      <h2 className="text-4xl md:text-6xl font-bold text-brand-heading tracking-tight leading-tight">
                        Why our approach works
                      </h2>
                      <div className="space-y-8 text-xl text-brand-body leading-relaxed">
                        <p className="font-medium text-brand-muted">
                          Most agencies start with software. <br/>
                          <span className="font-bold text-brand-heading">We start with how your business actually runs.</span>
                        </p>
                        <ul className="space-y-4 pl-4 border-l-2 border-brand-blue/30">
                          <li className="font-bold text-brand-heading">Understand your current workflow</li>
                          <li>Find where things slow down</li>
                          <li>Remove unnecessary steps</li>
                          <li>Automate only what makes sense</li>
                        </ul>
                        <p className="pt-4 font-bold text-brand-heading text-2xl">
                          No overengineering. No unnecessary tools. <br/>Just systems that work quietly.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full flex justify-center">
                       <div className="bg-brand-bg rounded-[56px] p-12 border border-brand-border rotate-3 shadow-2xl max-w-md w-full">
                         <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-border">
                            <KeycapIcon label="1" size={56} blueDepth={false} />
                            <div className="text-xl font-bold text-brand-heading">Simplify Logic</div>
                         </div>
                         <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-border">
                            <KeycapIcon label="2" size={56} blueDepth={false} />
                            <div className="text-xl font-bold text-brand-heading">Standardize Process</div>
                         </div>
                         <div className="flex items-center gap-6">
                            <KeycapIcon label="3" size={56} blueDepth={true} />
                            <div className="text-xl font-bold text-brand-blue">Automate Tasks</div>
                         </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 5: CAPABILITIES - WHITE CARD */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24 overflow-hidden">
                  <div className="mb-20 text-center">
                     <h3 className="text-3xl md:text-6xl font-bold text-brand-heading mb-6 tracking-tight">What we usually build</h3>
                     <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">Specific systems for specific problems.</p>
                  </div>
                  
                  <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {capabilities.map((cap, i) => (
                      <div 
                        key={i}
                        className={`
                          flex-shrink-0 w-[280px] h-[380px] rounded-[40px] p-8 flex flex-col justify-between snap-center transition-all duration-300 hover:-translate-y-2
                          ${cap.theme === 'dark' ? 'bg-[#111111] text-white shadow-2xl' : 'bg-brand-bg text-brand-heading border border-brand-border'}
                        `}
                      >
                         <div className="flex-1 flex items-center justify-center">
                            {cap.visual}
                         </div>
                         <div className="space-y-3">
                            <h4 className="text-xl font-bold tracking-tight">{cap.title}</h4>
                            <p className={`text-[14px] leading-relaxed font-medium ${cap.theme === 'dark' ? 'text-white/60' : 'text-brand-muted'}`}>
                              {cap.description}
                            </p>
                         </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 6: OUTCOMES - WHITE CARD */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-4 overflow-hidden">
                  <PulseBeams 
                    beams={beams} 
                    gradientColors={gradientColors} 
                    className="rounded-[60px] min-h-[600px] bg-white"
                  >
                    <div className="flex flex-col lg:flex-row gap-20 items-center px-12 py-16 relative z-20">
                      <div className="flex-1 space-y-12">
                        <span className="text-brand-blue font-black tracking-[0.4em] uppercase text-[11px] bg-brand-blue/5 px-6 py-3 rounded-full inline-block border border-brand-blue/10">Engineered Results</span>
                        <h3 className="text-5xl md:text-7xl font-bold text-brand-heading leading-[0.9] tracking-tighter">
                          How your business feels after
                        </h3>
                        <div className="space-y-6">
                          {[
                            "Work gets done without reminders",
                            "Fewer follow ups and fewer mistakes",
                            "Clear visibility without asking",
                            "Your team knows what to do",
                            "You get time back to focus on growth"
                          ].map((text, i) => (
                            <motion.div 
                              key={i} 
                              className="flex items-center gap-6 text-lg font-bold text-brand-body"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                              </div>
                              {text}
                            </motion.div>
                          ))}
                          <p className="text-2xl font-black text-brand-heading pt-4">Calm. Predictable. Reliable.</p>
                        </div>
                      </div>
                      
                      <div className="flex-1 w-full hidden lg:flex justify-center items-center">
                         <div className="bg-white p-12 rounded-[56px] shadow-elevation border border-brand-border text-center">
                            <KeycapIcon label="OK" size={100} blueDepth={true} />
                            <div className="mt-8 font-black text-brand-heading text-xl uppercase tracking-widest opacity-40">System Healthy</div>
                         </div>
                      </div>
                    </div>
                  </PulseBeams>
                </motion.div>
              </div>
            </section>

            {/* SECTION 7: PROCESS - WHITE CARD */}
            <section id="process" className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24 overflow-hidden">
                  <div className="mb-20 text-center">
                     <h2 className="text-5xl md:text-7xl font-bold text-brand-heading tracking-tighter mb-8 leading-none">
                      How we work with you
                     </h2>
                     <p className="text-xl text-brand-muted font-bold tracking-tight">Clear inputs. Clear outputs.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {deploySteps.map((step, i) => (
                      <div 
                        key={i}
                        className="flex flex-col justify-between h-[400px] rounded-[40px] p-8 transition-all duration-300 hover:-translate-y-2 bg-brand-bg border border-brand-border shadow-elevation relative overflow-hidden"
                      >
                         <div className="absolute top-6 left-8 flex items-center gap-2">
                           <div className="w-8 h-[1px] bg-brand-blue/30" />
                           <span className="text-[13px] font-black tracking-widest text-brand-blue/60">{step.id}</span>
                         </div>

                         <div className="flex-1 flex items-center justify-center pt-8 pb-4">
                            {step.visual}
                         </div>
                         <div className="space-y-2">
                            <h4 className="text-xl font-bold tracking-tight text-brand-heading">{step.title}</h4>
                            <p className="text-[14px] leading-relaxed font-medium text-brand-body">
                              {step.text}
                            </p>
                         </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 8: QUALIFICATION - CHARCOAL CARD */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-black rounded-[64px] p-12 md:p-32">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                     <div className="space-y-12">
                        <h3 className="text-4xl font-bold text-white tracking-tight">This is a good fit if</h3>
                        <ul className="space-y-8">
                           {[
                             "You run or manage a business",
                             "Things work but feel messy",
                             "You want fewer manual tasks",
                             "You care about reliability over hype"
                           ].map((item, i) => (
                             <li key={i} className="flex items-center gap-6 text-xl md:text-2xl font-bold text-white/90">
                                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0 shadow-keycap">
                                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                {item}
                             </li>
                           ))}
                        </ul>
                     </div>

                     <div className="space-y-12 opacity-50">
                        <h3 className="text-4xl font-bold text-white tracking-tight">Not a fit if</h3>
                        <ul className="space-y-8">
                           {[
                             "You want shortcuts without structure",
                             "You want buzzwords instead of outcomes",
                             "You prefer quick hacks over long-term systems"
                           ].map((item, i) => (
                             <li key={i} className="flex items-center gap-6 text-xl md:text-2xl font-bold text-white/90">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 9: SOCIAL PROOF - WHITE CARD */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-32 text-center">
                   <h2 className="text-brand-muted font-bold tracking-[0.4em] uppercase text-[11px] mb-20 opacity-60">Validation</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div className="space-y-6">
                         <p className="text-2xl md:text-3xl font-black text-brand-heading leading-tight italic tracking-tighter">"It feels like someone finally organized everything."</p>
                      </div>
                      <div className="space-y-6">
                         <p className="text-2xl md:text-3xl font-black text-brand-heading leading-tight italic tracking-tighter">"Work just happens now."</p>
                      </div>
                      <div className="space-y-6">
                         <p className="text-2xl md:text-3xl font-black text-brand-heading leading-tight italic tracking-tighter">"I know what is going on without asking."</p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 10: FINAL CTA - BRAND BLUE CARD */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div 
                  {...fadeIn}
                  className="card-3d-green rounded-[64px] p-12 md:p-32 text-center relative overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter leading-[0.9]">
                      Let us bring clarity to <br/>how your business runs.
                    </h2>
                    <p className="text-white/80 text-xl md:text-3xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                      Book a short call and we will walk through what is slowing you down and where systems can help.
                    </p>
                    
                    <div className="flex flex-col items-center gap-8">
                       <ShimmerButton 
                        onClick={() => setView('booking')}
                        background="#0259DD"
                        className="h-[72px] px-16 rounded-full font-bold text-xl flex items-center gap-4 border border-white/30 shadow-2xl"
                      >
                        Book a clarity call
                        <ArrowKeycap size={24} />
                      </ShimmerButton>
                      <div className="text-white/40 font-black text-[11px] uppercase tracking-[0.4em]">
                        Free 30 minutes. No pitch. Just clarity.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 md:px-12 flex flex-col justify-center">
              <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center space-x-4 opacity-50">
                  <BrandLogo size={40} />
                  <div className="flex flex-col justify-center">
                    <span className="text-sm text-brand-muted font-bold uppercase tracking-widest">Engineered Clarity</span>
                  </div>
                </div>
                <p className="text-brand-muted/30 font-bold text-[11px] uppercase tracking-[0.4em]">© 2024 Control + A Systems Design</p>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div key="booking" {...pageTransition}>
            <BookingPage onBack={() => setView('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
