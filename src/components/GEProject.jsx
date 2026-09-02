import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from './GridContainer';
import ProjectNav from './ProjectNav';

const GEProject = () => {
  const [showFloatingBtn, setShowFloatingBtn] = useState(true);
  const nextProjectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingBtn(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (nextProjectRef.current) {
      observer.observe(nextProjectRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F9F9F9] pt-32 font-instrument selection:bg-black selection:text-white relative">
      {/* NAV*/}
      <ProjectNav />
      {/* BOTÓN FLOTANTE */}
      <button
        className={`fixed right-8 bottom-12 z-50 bg-black text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 transform ${showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
      >
        Contact Me
      </button>

      {/* 0. HERO SECTION */}
      <section className="mb-24 lg:mb-40">
        <GridContainer>
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#767676] font-medium">
              Case Study / Digital Evolution
            </span>
            <h1 className="text-[clamp(60px,10vw,140px)] leading-[0.85] font-normal mt-6 mb-12 tracking-[-0.04em] text-[#1a1a1a]">
              GE <br /> Appliances
            </h1>
          </div>
          {/* WHAT I LEARNED SECTION */}
          <div className="col-span-12 mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start">

              {/* Columna Izquierda: Título */}
              <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
                <h3 className="text-[56px] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
                  What I learned
                </h3>
              </div>

              {/* Columna Derecha: Párrafo */}
              <div className="col-span-12 lg:col-start-6 lg:col-span-7">
                <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-[#4A4A4A] font-normal">
                  Global expansion requires architectural flexibility: designing layout systems that seamlessly absorb bilingual content variations (EN/FR) without sacrificing visual hierarchy or brand consistency.
                </p>
              </div>

            </div>
          </div>

          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#F5F5F5] overflow-hidden group">
              <img
                src="/GE_hero.webp"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="GE Appliances Hero"
              />
            </div>
          </div>
        </GridContainer>
      </section>

      {/* 1. THE CHALLENGE */}
      <section className="py-24 border-t border-[#F0F0F0] bg-white">
        <GridContainer>
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676] whitespace-nowrap">
                01 / The Challenge
              </h2>
              <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
            </div>
            <h3 className="text-[56px] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
              Modernizing a Legacy Icon
            </h3>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-[#4A4A4A] mb-16">
              GE Appliances needed to translate its heritage of reliability into a modern digital experience. The challenge was to create a visual language that felt <span className="text-black font-semibold">innovative yet familiar</span>, ensuring that the online journey matched the premium quality of their physical products.
            </p>

            <div className="flex flex-col">
              {['Legacy Visual Debt', 'Inconsistent Brand Voice', 'Complex Navigation Patterns'].map((point, i) => (
                <div key={i} className="group py-6 flex items-center cursor-default border-t border-[#F0F0F0] last:border-b">
                  <h4 className="text-[14px] uppercase leading-none tracking-[0.1em] text-[#1a1a1a] transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-[#767676]">
                    <span className="text-[#888888] mr-2">0{i + 1} /</span>{point}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </GridContainer>
      </section>

      {/* 2. THE SOLUTION */}
      <section className="py-32 bg-[#1a1a1a] text-[#888888]">
        <GridContainer>
          <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[12px] uppercase tracking-[0.2em] whitespace-nowrap text-gray-400">
                02 / The Solution
              </h2>
              <div className="h-[1px] bg-[#333333] flex-grow" />
            </div>
            <h3 className="text-[56px] font-medium leading-[1.2] tracking-tight text-white">
              Digital Craftsmanship
            </h3>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-gray-400 mb-12 lg:mb-16">
              Led the <span className="text-white font-semibold">visual-first strategy</span> for this project, leveraging high-fidelity imagery and a refined typographic scale to deliver a seamless interface that reinforces the brand's social and product values.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { title: '01 / Visual Polish', caption: 'High-end art direction for product showcasing.' },
                { title: '02 / Performance', caption: 'Optimized front-end architecture for global scaling.' },
                { title: '03 / Accessibility', caption: 'Strict A11y compliance without compromising aesthetics.' }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col cursor-default">
                  <div className="h-[1px] bg-[#333333] w-full mb-6 group-hover:bg-[#555555] transition-colors duration-500" />
                  <h4 className="text-[12px] uppercase tracking-[0.1em] text-white mb-4 transition-all duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GridContainer>
      </section>

      {/* 3. VISUAL SHOWCASE */}
      <section className="py-24">
        <GridContainer>
          <div className="col-span-12 mb-16">
            <div className="flex items-center gap-4">
              <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676] whitespace-nowrap">
                03 / Visual showcase
              </h2>
              <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              { title: 'Interface', fileName: 'ge_ui_1.webp', caption: 'FIG. 01 — PREMIUM E-COMMERCE INTERFACE REDESIGN.' },
              { title: 'Mobile', fileName: 'ge_mobile.webp', caption: 'FIG. 02 — RESPONSIVE EXPERIENCE & FLUID LAYOUTS.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="aspect-[4/3] bg-white border border-[#EEEEEE] overflow-hidden group">
                  <img
                    src={`/${item.fileName}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="border-b border-[#EEEEEE] pb-6">
                  <p className="text-[10px] leading-relaxed uppercase tracking-[0.15em] text-[#888888] font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GridContainer>
      </section>

      {/* 4. RESULTS & IMPACT */}
      <section className="py-24 bg-white">
        <GridContainer>
          <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676] whitespace-nowrap">
                04 / results & impact
              </h2>
              <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
            </div>
            <h3 className="text-[56px] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
              Elevating a Global Brand Experience
            </h3>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { value: '-60%', label: 'Reduction in friction-related support tickets through intuitive UX.' },
                { value: '100%', label: 'Fluid responsiveness across both English and French platforms, ensuring a pixel-perfect experience on all devices.' },
                { value: '100%', label: 'Bilingual user flows successfully unified under a single, premium look & feel for the Canadian market (EN/FR).' }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col cursor-default">
                  <div className="h-[1px] bg-[#F0F0F0] w-full mb-8 group-hover:bg-[#E0E0E0] transition-colors" />
                  <span className="text-6xl font-light tracking-tighter text-[#1a1a1a] transition-all group-hover:translate-x-3 group-hover:text-[#767676]">
                    {item.value}
                  </span>
                  <p className="text-[14px] leading-relaxed tracking-[0.1em] text-[#767676] mt-6  font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GridContainer>
      </section>

      {/* 5. NEXT PROJECT (Link a Café Appliances) */}
      <section ref={nextProjectRef} className="py-24 bg-[#1a1a1a] text-white">
        <GridContainer>
          <div className="col-span-12">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#767676] mb-12 block">
              Next Project
            </span>
            <Link to="/work/cafe" className="group block">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(40px,8vw,90px)] font-normal leading-[1] tracking-tighter transition-all duration-700 group-hover:text-[#767676]">
                    CAFÉ<br /> Luxury Experience
                  </h2>
                </div>
                <div className="pb-4">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-white group-hover:stroke-black transition-colors duration-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-16 h-[1px] bg-white/10 w-full overflow-hidden">
                <div className="h-full bg-white w-full translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              </div>
            </Link>
          </div>
        </GridContainer>
      </section>

      {/* 6.FOOTER */}
      <footer className="py-12 bg-[#1a1a1a] border-t border-[#888888]/10">
        <GridContainer>
          <div className="col-span-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#888888]">
            <span>© 2026 ARTURO MENDOZA</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
              Back to top ↑
            </button>
          </div>
        </GridContainer>
      </footer>

    </div>
  );
};

export default GEProject;