import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { BackgroundGradient } from './components/BackgroundGradient';
import { Footer } from './components/Footer';
import { ShimmerButton } from './components/ui/shimmer-button';
import { CustomCursor } from './components/ui/custom-cursor';
import { BookingPage } from './components/BookingPage';
import {
  KeycapIcon,
  BrandLogo,
  DashboardKeycap,
  AutomationKeycap,
  ArrowKeycap,
  OpsKeycap
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

// --- Capability Visuals ---

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
        {">"} system_active<br />
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

// --- Process Visuals ---

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

// --- Animated Process Card Component ---
const AnimatedProcessCard = ({ step, index }: { step: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="flex flex-col justify-between h-[400px] rounded-[40px] p-8 bg-brand-bg border border-brand-border shadow-elevation relative overflow-hidden"
    >
      <span className="text-[13px] font-black tracking-widest text-brand-blue/60 mb-4">{step.id}</span>
      <div className="flex-1 flex items-center justify-center">{step.visual}</div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold tracking-tight text-brand-heading">{step.title}</h4>
        <p className="text-[14px] leading-relaxed font-medium text-brand-body">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'booking'>('home');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      text: "Understanding the current setup.",
      visual: <ProcessVisual1 />
    },
    {
      id: "02",
      title: "System outline",
      text: "Deciding what should connect or automate.",
      visual: <ProcessVisual2 />
    },
    {
      id: "03",
      title: "Implementation",
      text: "Putting the system in place.",
      visual: <ProcessVisual3 />
    },
    {
      id: "04",
      title: "Iteration",
      text: "Refining as things grow.",
      visual: <ProcessVisual4 />
    }
  ];

  const capabilities = [
    {
      title: "Workflow automation",
      description: "Processes that move from start to finish without hand-holding.",
      visual: <ClockVisual />,
      theme: "light"
    },
    {
      title: "Internal dashboards",
      description: "A clear view of progress, status, and exceptions.",
      visual: <DashboardVisual />,
      theme: "dark"
    },
    {
      title: "Process logic",
      description: "Rules that decide what happens next.",
      visual: <AutomationVisual />,
      theme: "light"
    },
    {
      title: "Operational visibility",
      description: "Knowing what’s running without constant checking.",
      visual: <LiveStatusVisual />,
      theme: "dark"
    }
  ];

  const beams = [
    {
      path: "M10 220H300C310 220 320 210 320 200V10",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: { x1: ["0%", "0%", "200%"], x2: ["0%", "0%", "180%"], y1: ["80%", "0%", "0%"], y2: ["100%", "20%", "20%"] },
        transition: { duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1, delay: 0 },
      },
      connectionPoints: [{ cx: 10, cy: 220, r: 8 }, { cx: 320, cy: 10, r: 8 }]
    },
    {
      path: "M848 220H558C548 220 538 230 538 240V420",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
        transition: { duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1, delay: 1.5 },
      },
      connectionPoints: [{ cx: 848, cy: 220, r: 8 }, { cx: 538, cy: 420, r: 8 }]
    }
  ];

  const gradientColors = {
    start: "#0259DD",
    middle: "#3B82F6",
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
      <CustomCursor />

      <AnimatePresence>
        {view === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-[6px] z-[9999] shadow-[0_2px_10px_rgba(2,89,221,0.5)]"
            style={{
              scaleX: scaleX,
              originX: 0,
              background: 'linear-gradient(90deg, #0259DD 0%, #3B82F6 100%)'
            }}
          />
        )}
      </AnimatePresence>

      <Navbar
        onBookCall={() => setView('booking')}
        onLogoClick={() => {
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div key="home" {...pageTransition} className="pt-24 space-y-12 pb-24">

            {/* HERO */}
            <section className="px-6 md:px-12 relative overflow-hidden">
              <div className="max-w-6xl mx-auto w-full relative z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="card-3d-green rounded-[64px] p-10 md:p-24 text-center relative shadow-3xl group min-h-[75vh] flex flex-col justify-center"
                >
                  <div className="flex flex-col items-center">
                    {/* Brand Badge Placeholder from Screenshot Instruction */}


                    <h1 className="text-5xl md:text-6xl lg:text-[7rem] leading-[0.9] md:leading-[0.8] font-black tracking-tighter text-white uppercase z-10 flex flex-col items-center mb-8">
                      Systems that <br />just work.
                    </h1>
                    <p className="text-white/80 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-snug font-medium">
                      Workflows, automations, tools, and integrations <br /> that help businesses run smoothly.
                    </p>

                    <motion.div
                      className="flex flex-col items-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <ShimmerButton
                        onClick={() => setView('booking')}
                        background="#0259DD"
                        className="h-16 px-10 rounded-full font-bold text-lg flex items-center gap-4 border border-white/30 shadow-2xl"
                      >
                        Connect with us
                        <ArrowKeycap size={22} />
                      </ShimmerButton>
                      <span className="text-white/40 font-bold text-xs uppercase tracking-widest">No pressure. Just clarity.</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>


            {/* WHAT WE DO */}
            <section id="what-we-do" className="px-6 md:px-12 scroll-mt-32">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24">
                  <h2 className="text-5xl md:text-7xl font-bold text-brand-heading tracking-tighter mb-12 md:text-center leading-none">
                    What control + a focuses on
                  </h2>
                  <p className="text-xl text-brand-body max-w-3xl mx-auto leading-relaxed font-medium mb-16 md:text-center italic opacity-80">
                    Connecting the pieces that keep a business running.<br />
                    Quietly. Reliably. Intentionally.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card variant="default" title="Automations" description="Reducing manual work where it slows things down." icon={<AutomationKeycap />} />
                    <Card variant="default" title="Visibility" description="Seeing what’s happening without chasing updates." icon={<DashboardKeycap />} />
                    <Card variant="default" title="Internal tools" description="Custom systems when off-the-shelf software isn’t enough." icon={<OpsKeycap />} />
                  </div>
                </motion.div>
              </div>
            </section>


            {/* DIFFERENTIATION */}
            <section id="approach" className="px-6 md:px-12 scroll-mt-32">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24">
                  <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 space-y-10">
                      <a href="/" className="flex items-center gap-2 group">
                        <BrandLogo size={32} />
                      </a>
                      <h2 className="text-4xl md:text-6xl font-bold text-brand-heading tracking-tight leading-tight">
                        How systems are <br />thought through
                      </h2>
                      <div className="space-y-8 text-xl text-brand-body leading-relaxed">
                        <p className="font-medium text-brand-muted">
                          Starting with how work actually happens. <br />
                          <span className="font-bold text-brand-heading">Not assumptions. Not templates.</span>
                        </p>
                        <ul className="space-y-4 pl-4 border-l-2 border-brand-blue/30">
                          <li className="font-bold text-brand-heading">Removing what’s unnecessary.</li>
                          <li>Adding structure where it helps.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 w-full flex justify-center">
                      <div className="bg-brand-bg rounded-[56px] p-12 border border-brand-border rotate-3 shadow-2xl max-w-md w-full">
                        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-border">
                          <KeycapIcon label="1" size={56} blueDepth={false} />
                          <div className="text-xl font-bold text-brand-heading">Simplify logic</div>
                        </div>
                        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-border">
                          <KeycapIcon label="2" size={56} blueDepth={false} />
                          <div className="text-xl font-bold text-brand-heading">Standardize flow</div>
                        </div>
                        <div className="flex items-center gap-6">
                          <KeycapIcon label="3" size={56} blueDepth={true} />
                          <div className="text-xl font-bold text-brand-blue">Reduce manual work</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* CAPABILITIES */}
            <section id="systems" className="px-6 md:px-12 scroll-mt-32">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24 overflow-hidden">
                  <h3 className="text-3xl md:text-6xl font-bold text-brand-heading mb-6 tracking-tight text-center">What usually gets built</h3>
                  <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto font-medium text-center mb-16">Specific systems for specific needs.</p>
                  <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className={`
                          flex-shrink-0 w-[280px] h-[380px] rounded-[40px] p-8 flex flex-col justify-between snap-center transition-all duration-300 hover:-translate-y-2
                          ${cap.theme === 'dark' ? 'bg-[#111111] text-white shadow-2xl' : 'bg-brand-bg text-brand-heading border border-brand-border'}
                        `}
                      >
                        <div className="flex-1 flex items-center justify-center">{cap.visual}</div>
                        <div className="space-y-3">
                          <h4 className="text-xl font-bold tracking-tight">{cap.title}</h4>
                          <p className={`text-[14px] leading-relaxed font-medium ${cap.theme === 'dark' ? 'text-white/60' : 'text-brand-muted'}`}>{cap.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>


            {/* ANIMATED PROCESS SECTION */}
            <section id="process" className="px-6 md:px-12 scroll-mt-32">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-white rounded-[64px] p-12 md:p-24 overflow-hidden">
                  <h2 className="text-5xl md:text-7xl font-bold text-brand-heading tracking-tighter mb-20 text-center">How it usually begins</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {deploySteps.map((step, i) => (
                      <AnimatedProcessCard key={step.id} step={step} index={i} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>



            {/* FINAL CTA */}
            <section className="px-6 md:px-12">
              <div className="max-w-7xl mx-auto w-full">
                <motion.div {...fadeIn} className="card-3d-green rounded-[64px] p-12 md:p-32 text-center relative overflow-hidden">
                  <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter leading-[0.9]">
                      Bring clarity to <br />how things run.
                    </h2>
                    <p className="text-white/80 text-xl md:text-3xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                      A short walkthrough of your systems <br />to see where improvements make sense.
                    </p>
                    <ShimmerButton
                      onClick={() => setView('booking')}
                      background="#0259DD"
                      className="h-[72px] px-16 rounded-full font-bold text-xl flex items-center gap-4 border border-white/30 shadow-2xl"
                    >
                      Connect with us
                      <ArrowKeycap size={24} />
                    </ShimmerButton>
                    <div className="text-white/40 font-black text-[11px] uppercase tracking-[0.4em] mt-8">Free to explore. No obligation.</div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* REFINED FOOTER */}
            {/* REFINED FOOTER */}
            {/* REFINED FOOTER */}
            <Footer />
          </motion.div>
        ) : (
          <motion.div key="booking" {...pageTransition}>
            <BookingPage onBack={() => setView('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default App;
