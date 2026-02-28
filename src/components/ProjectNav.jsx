import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectNav = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Pequeño delay para que la transición se note después de que cargue la página
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-12 flex justify-between items-center">

                {/* LOGO AM */}
                <Link
                    to="/"
                    className="pointer-events-auto text-[20px] font-bold tracking-tighter text-[#1a1a1a] hover:text-[#888888] transition-colors duration-300"
                >
                    AM
                </Link>

                {/* BOTÓN CLOSE - AJUSTADO */}
                <Link
                    to="/"
                    className="group pointer-events-auto flex items-center gap-1.5" /* Gap reducido de 3 a 1.5 */
                >
                    <span className="relative text-[11px] uppercase tracking-[0.3em] text-[#888888] group-hover:text-[#1a1a1a] transition-colors duration-300">
                        Close
                        {/* Subrayado animado */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
                    </span>

                    {/* CONTENEDOR DE LA X - MÁS ESTRECHO */}
                    <div className="relative w-3 h-4 flex items-center justify-center overflow-visible">
                        <span className="
      block text-[14px] font-light
      text-[#888888] group-hover:text-[#1a1a1a] 
      
   
      transition-transform duration-400 
      ease-[cubic-bezier(0.22,1,0.36,1)] 
      
      transform group-hover:-translate-y-1.5
    ">
                            ✕
                        </span>
                    </div>
                </Link>

            </div>
        </nav>
    );
};

export default ProjectNav;