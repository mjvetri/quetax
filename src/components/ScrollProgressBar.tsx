import React, { useEffect, useState } from 'react';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollProgress <= 0.5) return null;

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/10 backdrop-blur-sm pointer-events-none"
    >
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-[#EAA72E] shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
