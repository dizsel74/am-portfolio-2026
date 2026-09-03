import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show vertical scroll bar after scrolling down past initial view
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[80] h-40 w-12 flex justify-center group cursor-pointer ${!isVisible && 'pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') scrollToTop(e);
      }}
    >
      {/* Container line (light gray) */}
      <div className="absolute right-4 w-[1px] h-full bg-[#E0E0E0] group-hover:bg-[#CCCCCC] transition-colors duration-500" />

      {/* Progress line (black) */}
      <motion.div
        className="absolute right-4 w-[2px] h-full bg-[#1a1a1a] origin-top"
        style={{ scaleY: scrollYProgress }}
      />

      {/* Text rotated perpendicular to the line */}
      <span className="absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-right text-[9px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
        TOP ↑
      </span>
    </motion.div>
  );
};

export default BackToTop;