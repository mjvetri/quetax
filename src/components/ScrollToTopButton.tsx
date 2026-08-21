import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (scrolled > 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalScroll > 0) {
        const progress = (scrolled / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  // SVG circular progress calculation
  const size = 44;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      id="scroll-to-top-wrapper"
      className="fixed bottom-6 right-6 z-40 transition-all duration-300 transform animate-fadeIn"
    >
      <button
        id="scroll-to-top-btn"
        onClick={scrollToTop}
        title="Scroll back to top"
        aria-label="Scroll back to top"
        className="relative group w-11 h-11 rounded-full bg-neutral-900/85 hover:bg-neutral-950 text-white backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Active progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#3B82F6"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-150"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
