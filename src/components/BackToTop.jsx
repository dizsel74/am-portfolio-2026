import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece después de 800px (ajustar según la altura de tu Hero + Intro Negra)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="#top"
      className={`
        fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[80]
        group flex flex-col items-center gap-2
        transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      {/* Texto "top" con el mismo estilo que tus links */}
      <span className="text-[12px] uppercase tracking-[0.15em] text-[#767676] group-hover:text-[#1a1a1a] transition-colors">
        top
      </span>
      
      {/* Flecha rotada hacia arriba */}
      <div className="relative pb-1">
        <span className="text-xl text-[#767676] group-hover:text-[#1a1a1a] transition-colors inline-block transform -rotate-45">
          ↗
        </span>
        {/* Efecto de línea animada bajo la flecha */}
        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full" />
      </div>
    </a>
  );
};

export default BackToTop;