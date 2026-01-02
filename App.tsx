
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import { PulseBeams } from './components/ui/pulse-beams';
import { ShimmerButton } from './components/ui/shimmer-button';
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
       <div className="w-32 bg-brand-green p-3 rounded-2xl rounded-br-none shadow-[0_4px_12px_rgba(2,89,221,0.2)] flex gap-2 items-center self-end">
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
              <div className="bg-brand-green/10 rounded-lg h-1/2 w-full" />
              <div className="bg-gray-50 rounded-lg h-1/2 w-full" />
           </div>
       </div>
    </div>
);

const App: React.FC = () => {
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
    { num: "01", title: "Clarity call", text: "We understand how your business works today and identify exactly what is slowing you down." },
    { num: "02", title: "System design", text: "We map your ideal processes and decide what to fix, automate, or build first." },
    { num: "03", title: "Build", text: "We create the automations, workflows, or AI systems needed to handle the work." },
    { num: "04", title: "Run", text: "Your business operates with less friction, more consistency, and less reliance on memory." }
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

  return (
    <div className="min-h-screen bg-white selection:bg-brand-green selection:text-brand-heading overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-[6px] bg-brand-green z-[60] origin-left shadow-[0_2px_10px_rgba(2,89,221,0.5)]" style={{ scaleX }} />
      
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden snap-section">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
           <motion.div 
            style={{ x: mousePos.x * 60, y: mousePos.y * 60, rotate: mousePos.x * 5 }}
            className="absolute top-[15%] left-[10%] opacity-20"
           >
             <KeycapIcon label="cmd" size={140} blueDepth={false} className="bg-brand-green/20" />
           </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="card-3d-green rounded-[64px] p-10 md:p-32 text-center relative shadow-3xl group min-h-[80vh] flex flex-col justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.h1 
                {...fadeIn}
                className="text-5xl md:text-[90px] font-bold text-brand-heading tracking-tighter leading-none mb-12 max-w-6xl mx-auto"
              >
                You run a business. <br/>
                <span className="text-white mt-4 block">We make it run better.</span>
              </motion.h1>
              
              <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-8 mb-16">
                <p className="text-brand-heading font-medium text-xl md:text-2xl leading-relaxed">
                  If work only gets done when you personally follow up, remind people, or check everything yourself, your business is doing more manual work than it should.
                </p>
                <p className="text-brand-heading/80 text-xl md:text-2xl leading-relaxed">
                  We help business owners build systems that quietly handle the routine so things run smoothly without constant oversight.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="flex flex-col items-center gap-6">
                <ShimmerButton 
                  background="#0259DD"
                  className="h-[60px] px-10 rounded-full font-bold text-lg flex items-center gap-3"
                >
                  Book a clarity call
                  <ArrowKeycap size={22} />
                </ShimmerButton>
                <span className="text-brand-heading/60 font-medium text-sm">No pitch. No pressure. Just clarity.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM AWARENESS */}
      <section id="problem" className="py-24 px-6 md:px-12 bg-white flex flex-col justify-center snap-section">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-heading tracking-tight mb-8">
              Does this sound familiar?
            </h2>
          </motion.div>

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
                className="flex items-center gap-6 p-4 rounded-3xl hover:bg-brand-bg transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </div>
                <span className="text-xl md:text-2xl font-medium text-brand-heading">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeIn} className="mt-16 text-xl text-brand-muted font-medium">
            This is not a people problem. <br/>
            <span className="text-brand-heading font-bold">It is a systems problem.</span>
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section id="what-we-do" className="py-32 px-6 md:px-12 bg-brand-bg flex flex-col justify-center snap-section">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeIn} className="mb-24 md:text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-brand-heading tracking-tighter mb-8 leading-none">
              What Control + A actually does
            </h2>
            <p className="text-xl text-brand-body max-w-3xl mx-auto leading-relaxed">
              We help businesses run smoothly by designing systems behind the scenes.
              We don't sell tools. We design systems that actually get used.
            </p>
          </motion.div>

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
        </div>
      </section>

      {/* SECTION 4: DIFFERENTIATION */}
      <section className="py-32 px-6 md:px-12 bg-white flex flex-col justify-center snap-section">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-brand-heading tracking-tight leading-tight">
                Why our approach works
              </h2>
              <div className="space-y-6 text-xl text-brand-body leading-relaxed">
                <p>
                  Most agencies start with software. <br/>
                  <span className="font-bold text-brand-heading">We start with how your business actually runs.</span>
                </p>
                <p>
                  Before building anything, we:
                </p>
                <ul className="space-y-3 pl-4 border-l-2 border-brand-green/30">
                  <li>Understand your current workflow</li>
                  <li>Find where things slow down</li>
                  <li>Remove unnecessary steps</li>
                  <li>Automate only what makes sense</li>
                </ul>
                <p className="pt-4 font-bold text-brand-heading">
                  No overengineering. No unnecessary tools. <br/>Just systems that work quietly.
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center">
               <div className="bg-brand-bg rounded-[48px] p-10 border border-brand-border rotate-3 shadow-xl max-w-sm">
                 <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-border/50">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm font-bold text-lg">1</div>
                    <div className="text-lg font-bold">Simplify Logic</div>
                 </div>
                 <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-border/50">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm font-bold text-lg">2</div>
                    <div className="text-lg font-bold">Standardize Process</div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center shadow-sm font-bold text-lg">3</div>
                    <div className="text-lg font-bold text-brand-green">Automate Tasks</div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CAPABILITIES (UPDATED) */}
      <section className="py-24 bg-brand-bg/50 border-y border-brand-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
           <h3 className="text-3xl md:text-5xl font-bold text-brand-heading mb-4">What we usually build</h3>
           <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto">Specific systems for specific problems.</p>
        </div>
        
        <div className="flex overflow-x-auto pb-12 px-6 md:px-12 gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-6 md:mx-auto max-w-[1400px]">
          {capabilities.map((cap, i) => (
            <div 
              key={i}
              className={`
                flex-shrink-0 w-[85vw] md:w-[320px] h-[420px] rounded-[40px] p-8 flex flex-col justify-between snap-center transition-all duration-300 hover:-translate-y-2
                ${cap.theme === 'dark' ? 'bg-[#111111] text-white shadow-2xl' : 'bg-white text-brand-heading shadow-xl border border-white/50'}
              `}
            >
               <div className="flex-1 flex items-center justify-center py-6">
                  {cap.visual}
               </div>
               <div className="space-y-3">
                  <h4 className="text-2xl font-bold tracking-tight">{cap.title}</h4>
                  <p className={`text-[15px] leading-relaxed font-medium ${cap.theme === 'dark' ? 'text-white/60' : 'text-brand-muted'}`}>
                    {cap.description}
                  </p>
               </div>
            </div>
          ))}
          {/* Spacer for right padding on mobile scroll */}
          <div className="w-2 flex-shrink-0 md:hidden" />
        </div>
      </section>

      {/* SECTION 6: OUTCOMES */}
      <section className="min-h-screen py-32 px-6 md:px-12 bg-white flex flex-col justify-center snap-section overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative">
          <PulseBeams 
            beams={beams} 
            gradientColors={gradientColors} 
            className="rounded-[80px] border border-brand-border min-h-[600px] bg-brand-bg/30"
          >
            <div className="flex flex-col lg:flex-row gap-20 items-center px-10 py-12 relative z-20">
              <motion.div {...fadeIn} className="flex-1 space-y-12">
                <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-xs bg-brand-blue/10 px-6 py-3 rounded-full inline-block">Outcomes</span>
                <h3 className="text-5xl md:text-7xl font-bold text-brand-heading leading-tight tracking-tighter">
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
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, ease: "easeOut" }}
                      className="flex items-center gap-6 text-lg font-medium text-brand-body"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-brand-green" />
                      </div>
                      {text}
                    </motion.div>
                  ))}
                  <p className="text-2xl font-bold text-brand-heading pt-4">Calm. Predictable. Reliable.</p>
                </div>
              </motion.div>
              
              <div className="flex-1 w-full hidden lg:flex justify-center items-center">
                 <div className="bg-white p-12 rounded-[48px] shadow-lg border border-brand-border/40 text-center">
                    <KeycapIcon label="OK" size={80} />
                    <div className="mt-6 font-bold text-brand-heading text-xl">System Healthy</div>
                 </div>
              </div>
            </div>
          </PulseBeams>
        </div>
      </section>

      {/* SECTION 7: PROCESS */}
      <section id="process" className="snap-section bg-white">
        <ContainerScroll
          titleComponent={
            <motion.div {...fadeIn} className="max-w-5xl mx-auto text-center mb-16">
               <h2 className="text-5xl md:text-7xl font-bold text-brand-heading tracking-tighter mb-8 leading-none">
                How we work with you
               </h2>
               <p className="text-xl text-brand-muted font-medium">Clear inputs. Clear outputs.</p>
            </motion.div>
          }
        >
          <div className="w-full h-full bg-transparent p-6 md:p-12 flex flex-col justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deploySteps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-6 p-8 rounded-[40px] bg-brand-bg border border-brand-border/50 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center font-bold text-xl shadow-sm">
                    {step.num}
                  </div>
                  <h4 className="text-2xl font-bold text-brand-heading">{step.title}</h4>
                  <p className="text-brand-body text-base leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* SECTION 8: QUALIFICATION */}
      <section className="py-24 px-6 md:px-12 bg-brand-heading text-white flex flex-col justify-center snap-section">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
             <div className="space-y-8">
                <h3 className="text-3xl font-bold mb-8">This is a good fit if</h3>
                <ul className="space-y-6">
                   {[
                     "You run or manage a business",
                     "Things work but feel messy",
                     "You want fewer manual tasks",
                     "You care about reliability over hype"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg md:text-xl font-medium text-white/90">
                        <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white shrink-0">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>

             <div className="space-y-8 opacity-60">
                <h3 className="text-3xl font-bold mb-8">This may not be a fit if</h3>
                <ul className="space-y-6">
                   {[
                     "You want shortcuts without structure",
                     "You want buzzwords instead of outcomes",
                     "You prefer quick hacks over long-term systems"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg md:text-xl font-medium text-white/90">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL PROOF */}
      <section className="py-32 px-6 md:px-12 bg-white flex flex-col items-center text-center">
         <h2 className="text-brand-muted font-bold tracking-widest uppercase text-sm mb-16">What business owners usually say</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
               <p className="text-2xl md:text-3xl font-bold text-brand-heading leading-tight">"It feels like someone finally organized everything."</p>
            </div>
            <div className="space-y-6">
               <p className="text-2xl md:text-3xl font-bold text-brand-heading leading-tight">"Work just happens now."</p>
            </div>
            <div className="space-y-6">
               <p className="text-2xl md:text-3xl font-bold text-brand-heading leading-tight">"I know what is going on without asking."</p>
            </div>
         </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="min-h-[80vh] py-32 px-6 md:px-12 bg-brand-bg flex flex-col justify-center snap-section relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <motion.div 
            {...fadeIn}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-8xl font-bold text-brand-heading mb-12 tracking-tighter leading-none">
              Let us bring clarity to <br/>how your business runs.
            </h2>
            <p className="text-brand-body text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              Book a short call and we will walk through what is slowing you down and where systems can help.
            </p>
            
            <div className="flex flex-col items-center gap-6">
               <ShimmerButton 
                background="#0259DD"
                className="h-[60px] px-10 rounded-full font-bold text-lg flex items-center gap-3"
              >
                Book a clarity call
                <ArrowKeycap size={22} />
              </ShimmerButton>
              <div className="text-brand-muted font-bold text-sm uppercase tracking-widest">
                Free 30 minutes. No selling.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 bg-white border-t border-brand-border flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center space-x-4">
            <BrandLogo size={40} />
            <div className="flex flex-col justify-center">
              <span className="text-sm text-brand-muted font-medium mt-1">We help businesses run better.</span>
            </div>
          </div>
          <p className="text-brand-muted/50 font-bold text-xs uppercase tracking-[0.2em]">© 2024 Control + A</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
