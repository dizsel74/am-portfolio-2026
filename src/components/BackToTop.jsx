import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      className={`
        fixed right-6 md:right-12 z-[80]
        bottom-10 md:bottom-4
        group flex flex-col items-center
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <div className="relative flex items-center justify-start overflow-hidden md:overflow-visible">
        {/* Contenedor del Texto y Flecha */}
        <span className="
          text-[9px] md:text-[10px] uppercase tracking-[0.2em] 
          /* Aplicando tu escala: de gris definido a negro */
          text-[#888888] group-hover:text-[#1a1a1a]
          px-5 py-2.5 md:px-0 md:py-1
          bg-white/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none
          border border-black/5 md:border-none
          rounded-full md:rounded-none
          transition-all duration-500
          flex items-center gap-1.5
        ">
          Back to top 
          
          {/* Animación de la flecha: diagonal a recta + salto */}
          <span className="
            inline-block 
            transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            rotate-45 group-hover:rotate-0 group-hover:-translate-y-1
          ">
            ↑
          </span>
        </span>
        
        {/* Línea animada: De izquierda a derecha con tu negro definido */}
        <span className="
          absolute bottom-2.5 md:bottom-0 
          left-5 md:left-0 
          w-0 h-[1px] bg-[#1a1a1a] 
          transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]
          group-hover:w-[calc(100%-40px)] md:group-hover:w-full
        " />
      </div>
    </a>
  );
};

export default BackToTop;