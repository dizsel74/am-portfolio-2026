import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
    >
      {/* CAPA DE CRISTAL TRASLÚCIDO */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-lg transition-colors duration-500" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 py-6 md:py-10 flex justify-between items-center pointer-events-none">

        {/* LOGO AM - RÉPLICA DEL HOME EN PEQUEÑO */}
        <Link
          to="/"
          className="pointer-events-auto group flex items-center"
        >
          <div className="text-[24px] md:text-[28px] font-bold leading-[0.7] flex antialiased select-none transition-colors duration-300 text-[#1a1a1a] group-hover:text-[#888888]">
            {/* Mantenemos la superposición exacta de tu logo principal */}
            <span className="relative z-10 -mr-[0.135em] block transform-gpu">A</span>
            <span className="relative z-0 block transform-gpu">M</span>
          </div>
        </Link>

        {/* BOTÓN CLOSE */}
        <Link
          to="/"
          className="group pointer-events-auto relative inline-flex items-center gap-1.5 pb-1"
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-300 text-[#545454] group-hover:text-[#1a1a1a]">
            Close
          </span>

          <div className="relative w-3 h-4 flex items-center justify-center overflow-visible">
            <span className="block text-[14px] font-light transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:-translate-y-1 text-[#545454] group-hover:text-[#1a1a1a]">
              ✕
            </span>
          </div>

          {/* Subrayado unificado */}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-[#1a1a1a]" />
        </Link>

      </div>
    </nav>
  );
};

export default ProjectNav;