import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Briefcase, TrendingUp, Cpu, Award, Zap, ChevronUp, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';
import CompanyOverview from './components/CompanyOverview';
import TimelineSection from './components/TimelineSection';

export default function App() {
  const [activeAnchor, setActiveAnchor] = useState<string>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll height to show Back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: '一、企业概况' },
    { id: 'products', label: '二、产品布局与实效' },
    { id: 'tour-ecosystem', label: '三、黄小西文旅智能体' },
    { id: 'vertical-agents', label: '四、垂直行业智能体' }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveAnchor(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-800">
      
      {/* 2. CORPORATE HERO HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0 overflow-hidden border-b border-slate-800">
        {/* Background visual elements */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/11.png)' }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-12 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.12] text-white tracking-tight">
              华创云信数字技术股份有限公司 <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                及数字化产品矩阵介绍
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 3. MAIN PORTFOLIO BODY */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        
        {/* COMPONENT 1: 一、华创云信企业基础概况 */}
        <CompanyOverview />

        {/* COMPONENT 2: 二、分周期数字化产品布局与落地实效 (2018年、2020年与2025年) */}
        <TimelineSection />



      </main>

      {/* 5. BACK TO TOP SCROLL BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 p-3 bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 rounded-xl shadow-xl border border-slate-200 transition-all cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
