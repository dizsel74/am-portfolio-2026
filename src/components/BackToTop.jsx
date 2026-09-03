import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackToTop = ({ showFloatingBtn = true }) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // La altura del contenedor es h-40 (160px). El thumb mide h-6 (24px).
  // Distancia máxima de viaje = 160px - 24px = 136px.
  const y = useTransform(scrollYProgress, [0, 1], [0, 136]);

  useEffect(() => {
    const handleScroll = () => {
      // Mostramos el scroll después de bajar un poco
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
        opacity: (isVisible && showFloatingBtn) ? 1 : 0,
        x: (isVisible && showFloatingBtn) ? 0 : 20
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[80] h-40 w-8 flex justify-center group cursor-pointer ${!(isVisible && showFloatingBtn) && 'pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') scrollToTop(e);
      }}
    >
      {/* Container line (Gris claro) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#D4D4D4] group-hover:bg-[#A3A3A3] transition-colors duration-500" />

      {/* Thumb / Pill (Negro oscuro) animado en Y */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[5px] h-6 bg-[#1a1a1a] rounded-full shadow-sm"
        style={{ top: 0, y }}
      />

      {/* Texto de TOP - aparece al hacer hover */}
      <span className="absolute right-6 top-1/2 -translate-y-1/2 -rotate-90 origin-right text-[9px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
        TOP →
      </span>
    </motion.div>
  );
};

export default BackToTop;