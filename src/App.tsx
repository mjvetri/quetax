// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { NavPage } from './types';
// import { AboutPage } from './components/AboutPage';
// import { ServicesPage } from './components/ServicesPage';
// import { WorkPage } from './components/WorkPage';
// import { InnovationPage } from './components/InnovationPage';
// import { ProcessPage } from './components/ProcessPage';
// import { ContactPage } from './components/ContactPage';
// import { QuetaxEmblem } from './components/Logo';
// import { ScrollProgressBar } from './components/ScrollProgressBar';
// import { ScrollToTopButton } from './components/ScrollToTopButton';
// import { ArrowLeft, Menu, X, ChevronRight, Home, Info, Terminal, Layers, Sparkles, Clock, Send } from 'lucide-react';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState<NavPage>('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Track scroll position for dynamic header backdrop
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Sync with URL hash if present
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash.replace('#', '') as NavPage;
//       const validPages: NavPage[] = ['home', 'about', 'services', 'work', 'innovation', 'process', 'contact'];
//       if (validPages.includes(hash)) {
//         setCurrentPage(hash);
//       }
//     };

//     handleHashChange();
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, []);

//   const navigateTo = (page: NavPage) => {
//     setCurrentPage(page);
//     setMobileMenuOpen(false);
//     window.location.hash = page === 'home' ? '' : page;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const navLinks: { label: string; id: NavPage; icon: React.ElementType }[] = [
//     { label: 'About', id: 'about', icon: Info },
//     { label: 'Services', id: 'services', icon: Terminal },
//     { label: 'Work', id: 'work', icon: Layers },
//     { label: 'Innovation', id: 'innovation', icon: Sparkles },
//     { label: 'Process', id: 'process', icon: Clock },
//     { label: 'Contact', id: 'contact', icon: Send },
//   ];

//   return (
//     <div
//       id="hero-root"
//       className="relative min-h-screen overflow-x-hidden bg-[#0e0e11]"
//     >
//       {/* Top Scrolling Progress Bar */}
//       <ScrollProgressBar />

//       {/* Floating Scroll To Top with circular progress */}
//       <ScrollToTopButton />

//       {/* Background Video (Seamless across all pages) */}
//       <video
//         id="hero-background-video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="fixed inset-0 w-full h-full object-cover pointer-events-none"
//         src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
//       />

//       {/* Dark Scrim Overlay for Contrast & Readability across all pages */}
//       <div
//         id="hero-backdrop-overlay"
//         className="fixed inset-0 bg-black/40 pointer-events-none transition-opacity duration-300"
//       />

//       {/* Foreground Content */}
//       <div
//         id="hero-content-wrapper"
//         className="relative z-10 flex flex-col min-h-screen"
//       >
//         {/* Navbar with scroll elevation */}
//         <header
//           className={`sticky top-0 z-50 transition-all duration-300 ${
//             isScrolled
//               ? 'pt-2 pb-2 sm:pt-3 px-3 sm:px-8 bg-black/25 backdrop-blur-lg border-b border-white/10 shadow-lg'
//               : 'pt-2.5 sm:pt-6 px-3 sm:px-8'
//           }`}
//         >
//           {/* Desktop Navigation (Visible on md screens and up) */}
//           <nav
//             id="main-navbar"
//             className="hidden md:flex items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto"
//           >
//             {/* Logo container */}
//             <button
//               id="nav-logo-container"
//               onClick={() => navigateTo('home')}
//               title="QuetaX — Return to Home"
//               aria-label="QuetaX — Return to Home"
//               className="flex items-center justify-center rounded-full w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] shrink-0 shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer border border-white/60 backdrop-blur-md bg-white hover:bg-neutral-50 p-1"
//             >
//               <QuetaxEmblem size={36} />
//             </button>

//             {/* Links and Start a Project pill */}
//             <div
//               id="nav-links-pill"
//               className="flex items-center gap-4 lg:gap-6 rounded-full px-5 py-2 shadow-lg border border-white/10 backdrop-blur-md"
//               style={{ backgroundColor: '#EDEDED' }}
//             >
//               <div className="flex items-center gap-4 lg:gap-6">
//                 {navLinks.map((link) => {
//                   const isActive = currentPage === link.id;
//                   return (
//                     <button
//                       key={link.id}
//                       id={`nav-link-${link.id}`}
//                       onClick={() => navigateTo(link.id)}
//                       className={`text-[13px] font-medium transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded cursor-pointer ${
//                         isActive
//                           ? 'text-blue-600 font-bold'
//                           : 'text-gray-700 hover:text-gray-950'
//                       }`}
//                     >
//                       {link.label}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Start a Project Button inside nav pill */}
//               <button
//                 id="nav-cta-start-project"
//                 onClick={() => navigateTo('contact')}
//                 className="ml-2 inline-flex items-center justify-center bg-[#111111] hover:bg-black text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm cursor-pointer active:scale-95"
//               >
//                 Start a Project
//               </button>
//             </div>
//           </nav>

//           {/* Mobile Navigation Bar (Visible on mobile/small screens) */}
//           <div className="md:hidden max-w-lg mx-auto w-full">
//             <div className="flex items-center justify-between gap-2">
//               {/* Standalone Circular Logo Container (Fixed 40x40 circle) */}
//               <button
//                 id="mobile-nav-logo-btn"
//                 onClick={() => navigateTo('home')}
//                 title="QuetaX — Return to Home"
//                 aria-label="QuetaX — Return to Home"
//                 className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full shrink-0 shadow-lg active:scale-95 transition-all duration-200 cursor-pointer border border-white/70 backdrop-blur-md bg-white hover:bg-neutral-50 p-1"
//               >
//                 <QuetaxEmblem size={28} />
//               </button>

//               {/* Mobile Actions Pill */}
//               <div
//                 className="flex-1 min-w-0 flex items-center justify-between px-3 py-1.5 rounded-full shadow-xl border border-white/20 backdrop-blur-xl"
//                 style={{ backgroundColor: 'rgba(237, 237, 237, 0.95)' }}
//               >
//                 {/* Brand Name */}
//                 <button
//                   onClick={() => navigateTo('home')}
//                   className="font-bold text-sm tracking-tight text-neutral-900 flex items-baseline shrink-0 cursor-pointer pl-0.5"
//                   aria-label="QuetaX Home"
//                 >
//                   <span>Queta</span>
//                   <span className="text-[#EAA72E]">X</span>
//                 </button>

//                 {/* Right Action Buttons */}
//                 <div className="flex items-center gap-1.5 shrink-0">
//                   <button
//                     onClick={() => navigateTo('contact')}
//                     className="bg-neutral-950 hover:bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-all whitespace-nowrap cursor-pointer"
//                   >
//                     Start Project
//                   </button>

//                   {/* Hamburger Toggle Button */}
//                   <button
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-full bg-white flex items-center justify-center text-neutral-800 border border-neutral-300/80 shadow-sm active:scale-90 transition-all cursor-pointer shrink-0"
//                     aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
//                   >
//                     {mobileMenuOpen ? (
//                       <X className="w-4 h-4 text-neutral-900" />
//                     ) : (
//                       <Menu className="w-4 h-4 text-neutral-900" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Dropdown Menu Drawer */}
//             {mobileMenuOpen && (
//               <div className="mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-2xl p-3 animate-fadeIn">
//                 {/* Header inside drawer with Logo */}
//                 <div className="flex items-center gap-2.5 px-3 py-2 mb-2 border-b border-neutral-200/80">
//                   <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-0.5 border border-neutral-200 shadow-sm shrink-0">
//                     <QuetaxEmblem size={20} />
//                   </div>
//                   <div className="font-bold text-sm text-neutral-900 flex items-baseline">
//                     <span>Queta</span>
//                     <span className="text-[#EAA72E]">X</span>
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   {/* Home Link */}
//                   <button
//                     onClick={() => navigateTo('home')}
//                     className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all min-h-[44px] ${
//                       currentPage === 'home'
//                         ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm'
//                         : 'text-neutral-800 hover:bg-neutral-100'
//                     }`}
//                   >
//                     <div className="flex items-center gap-2.5">
//                       <Home className="w-4 h-4 text-neutral-600" />
//                       <span>Home Overview</span>
//                     </div>
//                     <ChevronRight className="w-3.5 h-3.5 opacity-40" />
//                   </button>

//                   {/* Other Pages */}
//                   {navLinks.map((link) => {
//                     const Icon = link.icon;
//                     const isActive = currentPage === link.id;
//                     return (
//                       <button
//                         key={link.id}
//                         onClick={() => navigateTo(link.id)}
//                         className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all min-h-[44px] ${
//                           isActive
//                             ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm'
//                             : 'text-neutral-800 hover:bg-neutral-100'
//                         }`}
//                       >
//                         <div className="flex items-center gap-2.5">
//                           <Icon className="w-4 h-4 text-neutral-600" />
//                           <span>{link.label}</span>
//                         </div>
//                         <ChevronRight className="w-3.5 h-3.5 opacity-40" />
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Direct CTA at bottom of mobile menu */}
//                 <div className="pt-3 mt-2 border-t border-neutral-200">
//                   <button
//                     onClick={() => navigateTo('contact')}
//                     className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[44px]"
//                   >
//                     <Sparkles className="w-4 h-4" />
//                     <span>Get Free Architecture Brief</span>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* Dynamic Page Views with Smooth Page Transition Motion */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPage}
//             initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
//             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//             exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
//             transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
//             className="flex-1 flex flex-col"
//           >
//             {/* Subpage Breadcrumb Navigation when not on home */}
//             {currentPage !== 'home' && (
//               <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 pt-3 sm:pt-6">
//                 <button
//                   id="back-to-home-btn"
//                   onClick={() => navigateTo('home')}
//                   className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 hover:text-neutral-950 px-3.5 py-1.5 rounded-full bg-white/50 hover:bg-white/70 border border-white/50 shadow-md backdrop-blur-xl transition-all duration-200 group cursor-pointer"
//                 >
//                   <ArrowLeft className="w-3.5 h-3.5 text-neutral-800 transition-transform group-hover:-translate-x-1" />
//                   <span>Back to Home</span>
//                 </button>
//               </div>
//             )}

//             {/* Home / Hero Page */}
//             {currentPage === 'home' && (
//               <main
//                 id="hero-main"
//                 className="flex-1 flex items-end pb-8 sm:pb-16 lg:pb-20 px-4 sm:px-12 md:px-20 lg:px-28"
//               >
//                 <motion.div
//                   id="hero-inner-card"
//                   initial={{ opacity: 0, y: 20, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//                   className="max-w-xs sm:max-w-sm w-full"
//                 >
//                   {/* 1. Headline */}
//                   <h1
//                     id="hero-headline"
//                     className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-white tracking-tight mb-3"
//                   >
//                     Websites, apps, and custom software — built and shipped at lightning speed.
//                   </h1>

//                   {/* 2. Subtext */}
//                   <p
//                     id="hero-subtext"
//                     className="text-[13px] text-neutral-300 font-normal mb-3"
//                   >
//                     From idea to launch, faster than anyone else.
//                   </p>

//                   {/* 3. CTA Button */}
//                   <button
//                     id="hero-cta-button"
//                     onClick={() => navigateTo('contact')}
//                     className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-400 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group cursor-pointer"
//                   >
//                     <span>Start your project</span>
//                     <span
//                       id="hero-cta-arrow"
//                       className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
//                     >
//                       →
//                     </span>
//                   </button>
//                 </motion.div>
//               </main>
//             )}

//             {/* About Page */}
//             {currentPage === 'about' && (
//               <div id="page-about-view" className="flex-1">
//                 <AboutPage onNavigate={(p) => navigateTo(p as NavPage)} />
//               </div>
//             )}

//             {/* Services Page */}
//             {currentPage === 'services' && (
//               <div id="page-services-view" className="flex-1">
//                 <ServicesPage onNavigate={(p) => navigateTo(p as NavPage)} />
//               </div>
//             )}

//             {/* Work / Case Studies Page */}
//             {currentPage === 'work' && (
//               <div id="page-work-view" className="flex-1">
//                 <WorkPage onNavigate={(p) => navigateTo(p as NavPage)} />
//               </div>
//             )}

//             {/* Innovation / Labs Page */}
//             {currentPage === 'innovation' && (
//               <div id="page-innovation-view" className="flex-1">
//                 <InnovationPage onNavigate={(p) => navigateTo(p as NavPage)} />
//               </div>
//             )}

//             {/* Process Page */}
//             {currentPage === 'process' && (
//               <div id="page-process-view" className="flex-1">
//                 <ProcessPage onNavigate={(p) => navigateTo(p as NavPage)} />
//               </div>
//             )}

//             {/* Contact / Start a Project Page */}
//             {currentPage === 'contact' && (
//               <div id="page-contact-view" className="flex-1">
//                 <ContactPage onNavigate={(p) => navigateTo(p as NavPage)} />
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }



/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavPage } from './types';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { WorkPage } from './components/WorkPage';
import { InnovationPage } from './components/InnovationPage';
import { ProcessPage } from './components/ProcessPage';
import { ContactPage } from './components/ContactPage';
import { QuetaxEmblem } from './components/Logo';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { usePageSEO } from './components/PageSEO';
import { ArrowLeft, Menu, X, ChevronRight, Home, Info, Terminal, Layers, Sparkles, Clock, Send } from 'lucide-react';

const VALID_PAGES: NavPage[] = ['home', 'about', 'services', 'work', 'innovation', 'process', 'contact'];

function pageFromPathname(pathname: string): NavPage | null {
  const slug = pathname.replace(/^\/+|\/+$/g, '');
  if (slug === '') return 'home';
  return (VALID_PAGES as string[]).includes(slug) ? (slug as NavPage) : null;
}

function getInitialPage(): NavPage {
  if (typeof window === 'undefined') return 'home';
  const fromPath = pageFromPathname(window.location.pathname);
  if (fromPath) return fromPath;
  const hash = window.location.hash.replace('#', '') as NavPage;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>(getInitialPage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  usePageSEO(currentPage);

  // Track scroll position for dynamic header backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync with browser back/forward navigation (real paths first, hash as fallback)
  useEffect(() => {
    const handlePopState = () => setCurrentPage(getInitialPage());
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      if (VALID_PAGES.includes(hash)) setCurrentPage(hash);
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; id: NavPage; icon: React.ElementType }[] = [
    { label: 'About', id: 'about', icon: Info },
    { label: 'Services', id: 'services', icon: Terminal },
    { label: 'Work', id: 'work', icon: Layers },
    { label: 'Innovation', id: 'innovation', icon: Sparkles },
    { label: 'Process', id: 'process', icon: Clock },
    { label: 'Contact', id: 'contact', icon: Send },
  ];

  return (
    <div
      id="hero-root"
      className="relative min-h-screen overflow-x-hidden bg-[#0e0e11]"
    >
      {/* Top Scrolling Progress Bar */}
      <ScrollProgressBar />

      {/* Floating Scroll To Top with circular progress */}
      <ScrollToTopButton />

      {/* Background Video (Seamless across all pages) */}
      <video
        id="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      />

      {/* Dark Scrim Overlay for Contrast & Readability across all pages */}
      <div
        id="hero-backdrop-overlay"
        className="fixed inset-0 bg-black/40 pointer-events-none transition-opacity duration-300"
      />

      {/* Foreground Content */}
      <div
        id="hero-content-wrapper"
        className="relative z-10 flex flex-col min-h-screen"
      >
        {/* Navbar with scroll elevation */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled
              ? 'pt-2 pb-2 sm:pt-3 px-3 sm:px-8 bg-black/25 backdrop-blur-lg border-b border-white/10 shadow-lg'
              : 'pt-2.5 sm:pt-6 px-3 sm:px-8'
          }`}
        >
          {/* Desktop Navigation (Visible on md screens and up) */}
          <nav
            id="main-navbar"
            className="hidden md:flex items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto"
          >
            {/* Logo container */}
            <button
              id="nav-logo-container"
              onClick={() => navigateTo('home')}
              title="QuetaX — Return to Home"
              aria-label="QuetaX — Return to Home"
              className="flex items-center justify-center rounded-full w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] shrink-0 shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer border border-white/60 backdrop-blur-md bg-white hover:bg-neutral-50 p-1"
            >
              <QuetaxEmblem size={36} />
            </button>

            {/* Links and Start a Project pill */}
            <div
              id="nav-links-pill"
              className="flex items-center gap-4 lg:gap-6 rounded-full px-5 py-2 shadow-lg border border-white/10 backdrop-blur-md"
              style={{ backgroundColor: '#EDEDED' }}
            >
              <div className="flex items-center gap-4 lg:gap-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      id={`nav-link-${link.id}`}
                      onClick={() => navigateTo(link.id)}
                      className={`text-[13px] font-medium transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded cursor-pointer ${
                        isActive
                          ? 'text-blue-600 font-bold'
                          : 'text-gray-700 hover:text-gray-950'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              {/* Start a Project Button inside nav pill */}
              <button
                id="nav-cta-start-project"
                onClick={() => navigateTo('contact')}
                className="ml-2 inline-flex items-center justify-center bg-[#111111] hover:bg-black text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm cursor-pointer active:scale-95"
              >
                Start a Project
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Bar (Visible on mobile/small screens) */}
          <div className="md:hidden max-w-lg mx-auto w-full">
            <div className="flex items-center justify-between gap-2">
              {/* Standalone Circular Logo Container (Fixed 40x40 circle) */}
              <button
                id="mobile-nav-logo-btn"
                onClick={() => navigateTo('home')}
                title="QuetaX — Return to Home"
                aria-label="QuetaX — Return to Home"
                className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full shrink-0 shadow-lg active:scale-95 transition-all duration-200 cursor-pointer border border-white/70 backdrop-blur-md bg-white hover:bg-neutral-50 p-1"
              >
                <QuetaxEmblem size={28} />
              </button>

              {/* Mobile Actions Pill */}
              <div
                className="flex-1 min-w-0 flex items-center justify-between px-3 py-1.5 rounded-full shadow-xl border border-white/20 backdrop-blur-xl"
                style={{ backgroundColor: 'rgba(237, 237, 237, 0.95)' }}
              >
                {/* Brand Name */}
                <button
                  onClick={() => navigateTo('home')}
                  className="font-bold text-sm tracking-tight text-neutral-900 flex items-baseline shrink-0 cursor-pointer pl-0.5"
                  aria-label="QuetaX Home"
                >
                  <span>Queta</span>
                  <span className="text-[#EAA72E]">X</span>
                </button>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="bg-neutral-950 hover:bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Start Project
                  </button>

                  {/* Hamburger Toggle Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-full bg-white flex items-center justify-center text-neutral-800 border border-neutral-300/80 shadow-sm active:scale-90 transition-all cursor-pointer shrink-0"
                    aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                  >
                    {mobileMenuOpen ? (
                      <X className="w-4 h-4 text-neutral-900" />
                    ) : (
                      <Menu className="w-4 h-4 text-neutral-900" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Menu Drawer */}
            {mobileMenuOpen && (
              <div className="mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-2xl p-3 animate-fadeIn">
                {/* Header inside drawer with Logo */}
                <div className="flex items-center gap-2.5 px-3 py-2 mb-2 border-b border-neutral-200/80">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-0.5 border border-neutral-200 shadow-sm shrink-0">
                    <QuetaxEmblem size={20} />
                  </div>
                  <div className="font-bold text-sm text-neutral-900 flex items-baseline">
                    <span>Queta</span>
                    <span className="text-[#EAA72E]">X</span>
                  </div>
                </div>

                <div className="space-y-1">
                  {/* Home Link */}
                  <button
                    onClick={() => navigateTo('home')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all min-h-[44px] ${
                      currentPage === 'home'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm'
                        : 'text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Home className="w-4 h-4 text-neutral-600" />
                      <span>Home Overview</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </button>

                  {/* Other Pages */}
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = currentPage === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => navigateTo(link.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all min-h-[44px] ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm'
                            : 'text-neutral-800 hover:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-neutral-600" />
                          <span>{link.label}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                      </button>
                    );
                  })}
                </div>

                {/* Direct CTA at bottom of mobile menu */}
                <div className="pt-3 mt-2 border-t border-neutral-200">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[44px]"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Get Free Architecture Brief</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Dynamic Page Views with Smooth Page Transition Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col"
          >
            {/* Subpage Breadcrumb Navigation when not on home */}
            {currentPage !== 'home' && (
              <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 pt-3 sm:pt-6">
                <button
                  id="back-to-home-btn"
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 hover:text-neutral-950 px-3.5 py-1.5 rounded-full bg-white/50 hover:bg-white/70 border border-white/50 shadow-md backdrop-blur-xl transition-all duration-200 group cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-neutral-800 transition-transform group-hover:-translate-x-1" />
                  <span>Back to Home</span>
                </button>
              </div>
            )}

            {/* Home / Hero Page */}
            {currentPage === 'home' && (
              <main
                id="hero-main"
                className="flex-1 flex items-end pb-8 sm:pb-16 lg:pb-20 px-4 sm:px-12 md:px-20 lg:px-28"
              >
                <motion.div
                  id="hero-inner-card"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-xs sm:max-w-sm w-full"
                >
                  {/* 1. Headline */}
                  <h1
                    id="hero-headline"
                    className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-white tracking-tight mb-3"
                  >
                    Websites, apps, and custom software — built and shipped at lightning speed.
                  </h1>

                  {/* 2. Subtext */}
                  <p
                    id="hero-subtext"
                    className="text-[13px] text-neutral-300 font-normal mb-3"
                  >
                    From idea to launch, faster than anyone else.
                  </p>

                  {/* 3. CTA Button */}
                  <button
                    id="hero-cta-button"
                    onClick={() => navigateTo('contact')}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-400 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group cursor-pointer"
                  >
                    <span>Start your project</span>
                    <span
                      id="hero-cta-arrow"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </button>
                </motion.div>
              </main>
            )}

            {/* About Page */}
            {currentPage === 'about' && (
              <div id="page-about-view" className="flex-1">
                <AboutPage onNavigate={(p) => navigateTo(p as NavPage)} />
              </div>
            )}

            {/* Services Page */}
            {currentPage === 'services' && (
              <div id="page-services-view" className="flex-1">
                <ServicesPage onNavigate={(p) => navigateTo(p as NavPage)} />
              </div>
            )}

            {/* Work / Case Studies Page */}
            {currentPage === 'work' && (
              <div id="page-work-view" className="flex-1">
                <WorkPage onNavigate={(p) => navigateTo(p as NavPage)} />
              </div>
            )}

            {/* Innovation / Labs Page */}
            {currentPage === 'innovation' && (
              <div id="page-innovation-view" className="flex-1">
                <InnovationPage onNavigate={(p) => navigateTo(p as NavPage)} />
              </div>
            )}

            {/* Process Page */}
            {currentPage === 'process' && (
              <div id="page-process-view" className="flex-1">
                <ProcessPage onNavigate={(p) => navigateTo(p as NavPage)} />
              </div>
            )}

            {/* Contact / Start a Project Page */}
            {currentPage === 'contact' && (
              <div id="page-contact-view" className="flex-1">
                <ContactPage onNavigate={(p) => navigateTo(p as NavPage)} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}