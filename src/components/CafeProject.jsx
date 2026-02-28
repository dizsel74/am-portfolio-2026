import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from './GridContainer';
import ProjectNav from './ProjectNav';

const CafeProject = () => {
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
        <ProjectNav/>
      {/* BOTÓN FLOTANTE */}
      <button 
        className={`fixed right-8 bottom-12 z-50 bg-black text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 transform ${
          showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        Contact Me
      </button>

      {/* 0. HERO SECTION */}
      <section className="mb-24 lg:mb-40">
        <GridContainer>
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#767676] font-medium">
              Case Study / Luxury Lifestyle
            </span>
            <h1 className="text-[clamp(60px,10vw,140px)] leading-[0.85] font-normal mt-6 mb-12 tracking-[-0.04em] text-[#1a1a1a]">
              CAFÉ <br /> 
            </h1>
          </div>
          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#F5F5F5] overflow-hidden group">
               <img 
                src="/Cafe_hero.webp" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                alt="CAFÉ Appliances Hero" 
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
              Elevating Digital Taste
            </h3>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-[#4A4A4A] mb-16">
              CAFÉ is not just about appliances; it's about <span className="text-black font-semibold">personal expression</span>. The digital challenge was to build a customization tool that allowed users to mix and match finishes and hardware with zero friction, making the online configuration as tactile as the real product.
            </p>

            <div className="flex flex-col">
              {['High-Fidelity Rendering', 'Personalization UI/UX', 'Mobile-First Configurators'].map((point, i) => (
                <div key={i} className="group py-6 flex items-center cursor-default border-t border-[#F0F0F0] last:border-b">
                  <h4 className="text-[14px] uppercase leading-none tracking-[0.1em] text-[#1a1a1a] transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-[#767676]">
                    <span className="text-[#888888] mr-2">0{i+1} /</span>{point}
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
              The Art of Customization
            </h3>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-gray-400 mb-12 lg:mb-16">
              We developed a modular design system that prioritizes white space and high-contrast elements, echoing the brand's <span className="text-white font-semibold">premium hardware finishes</span>. Every interaction was designed to feel deliberate and sophisticated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { title: '01 / Real-time Config', caption: 'Interactive 3D-like previews of hardware combinations.' },
                { title: '02 / Editorial Layout', caption: 'Fashion-inspired product storytelling.' },
                { title: '03 / Seamless Path', caption: 'Reducing the funnel from inspiration to purchase.' }
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

      {/* 3. VISUAL SHOWCASE (Diferente Layout) */}
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

          {/* Full Width Image for Cafe */}
          <div className="col-span-12 mb-12">
            <div className="aspect-[21/9] bg-[#F5F5F5] overflow-hidden group">
               <img 
                src="/cafe_configurator.webp" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="CAFÉ Configurator" 
               />
            </div>
            <p className="text-[10px] mt-4 uppercase tracking-[0.15em] text-[#888888]">FIG. 01 — THE INTERACTIVE CONFIGURATOR INTERFACE.</p>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square bg-white border border-[#EEEEEE] overflow-hidden group">
              <img src="/cafe_ui_2.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="CAFÉ UI" />
            </div>
            <div className="aspect-square bg-white border border-[#EEEEEE] overflow-hidden group">
              <img src="/cafe_ui_3.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="CAFÉ UI Detail" />
            </div>
          </div>
        </GridContainer>
      </section>

      {/* 5. NEXT PROJECT (Link a Pascual) */}
      <section ref={nextProjectRef} className="py-24 bg-[#1a1a1a] text-white">
        <GridContainer>
          <div className="col-span-12">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#767676] mb-12 block">
              Next Project
            </span>
            <Link to="/work/pascual" className="group block">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(40px,8vw,90px)] font-normal leading-[1] tracking-tighter transition-all duration-700 group-hover:text-[#767676]">
                    PASCUAL<br /> Digital Refresh
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

export default CafeProject;