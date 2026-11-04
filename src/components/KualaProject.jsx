import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from './GridContainer';
import ProjectNav from './ProjectNav';
import FloatingEmailButton from './FloatingEmailButton';
import BackToTop from './BackToTop';

const KualaProject = () => {
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
      {/* NAV */}
      <ProjectNav />


      {/* BOTÓN FLOTANTE */}
      <FloatingEmailButton showFloatingBtn={showFloatingBtn} />
      <BackToTop showFloatingBtn={showFloatingBtn} />

      {/* 0. HERO SECTION */}
      <section className="mb-24 lg:mb-40">
        <GridContainer>
          {/* HEADER KUALA */}
          <div className="col-span-12 lg:col-span-8 mb-24 lg:mb-36">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] font-medium">
                Case Study / Order Through WhatsApp
              </span>
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-3 py-1">
                Client · kuala.fun · Role: Product UX/UI Designer
              </span>
            </div>
            <h1 className="text-[clamp(60px,12vw,140px)] leading-[0.85] font-normal mt-6 tracking-[-0.04em] text-[#1a1a1a]">
              Kuala
            </h1>
          </div>

          {/* WHAT I LEARNED SECTION (12 Columnas independientes, idéntico a The Challenge) */}
          <div className="col-span-12 mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start">

              {/* Columna Izquierda: Título */}
              <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
                <h2 className="text-[clamp(32px,6vw,56px)] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
                  What I learned
                </h2>
              </div>

              {/* Columna Derecha: Párrafo */}
              <div className="col-span-12 lg:col-start-6 lg:col-span-7">
                <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-[#4A4A4A] font-normal">
                  I took Kuala <strong className="font-semibold text-[#1a1a1a]">from strategy to launch</strong>: UX, UI, a 3-layer design system and a single-file HTML build on Cloudflare. The biggest lesson was focus: cutting the brief from <strong className="font-semibold text-[#1a1a1a]">four product lines to one main action</strong> made the page sell, and <strong className="font-semibold text-[#1a1a1a]">tagging every WhatsApp message by source</strong> shows which section brings each order.
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#D98A98] overflow-hidden group">
              <img
                src="/kuala_hero.webp"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Kuala landing page on laptop, tablet and phone: hero with the Arma tu Kuala button, how it works and the Taller Kuala section"
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
              <p className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] whitespace-nowrap">
                01 / The Challenge
              </p>
              <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
            </div>
            <h2 className="text-[clamp(32px,6vw,56px)] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
              Four product lines, no clear action
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-[#4A4A4A] mb-16">
              The brief from Capa X Capa, a 3D printing business in Xalapa, mixed four product lines on one page: clickers, sensory toys, pet tags and decor. There was <span className="text-black font-semibold">no clear main action and no defined sales channel</span>.
            </p>

            <div className="flex flex-col">
              {['Four lines competing', 'No main action', 'No sales channel'].map((point, i) => (
                <div key={i} className="group py-6 flex items-center cursor-default border-t border-[#F0F0F0] last:border-b">
                  <h3 className="text-[14px] uppercase leading-none tracking-[0.1em] text-[#1a1a1a] transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-[#767676]">
                    <span className="text-[#6B6B6B] mr-2">0{i + 1} /</span>{point}
                  </h3>
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
              <p className="text-[12px] uppercase tracking-[0.2em] whitespace-nowrap text-gray-400">
                02 / The Solution
              </p>
              <div className="h-[1px] bg-[#333333] flex-grow" />
            </div>
            <h2 className="text-[clamp(32px,6vw,56px)] font-medium leading-[1.2] tracking-tight text-white">
              Two ways to buy, one channel to close
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-gray-400 mb-12 lg:mb-16">
              <span className="text-white font-semibold">One main goal</span>, Arma tu Kuala (a clicker configurator), with Sensoriales as the secondary one. Two buying paths: a 4-step configurator with a live total, or ready combos from the Posadas collection. Both <span className="text-white font-semibold">close on WhatsApp</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { title: '01 / 4-step configurator', caption: 'Base and switch, keycaps, chain color and charms, with a live total announced to screen readers.' },
                { title: '02 / Ready combos', caption: 'Posadas collection combos for anyone who wants to decide fast.' },
                { title: '03 / Tracked orders', caption: 'Every button opens a pre-filled message with a source code (#CONFIG, #COMBO, #TALLER…).' }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col cursor-default">
                  <div className="h-[1px] bg-[#333333] w-full mb-6 group-hover:bg-[#555555] transition-colors duration-500" />
                  <h3 className="text-[12px] uppercase tracking-[0.1em] text-white mb-4 transition-all duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
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
              <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] whitespace-nowrap">
                03 / Visual showcase
              </h2>
              <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {[
              { title: 'How it works section: four step cards for base, keycaps, chain color and charms', fileName: 'kuala_steps.webp', caption: 'FIG. 01 — HOW IT WORKS: FOUR STEPS BEFORE CHOOSING.' },
              { title: 'Arma tu Kuala configurator with step progress, options, live total and the order by WhatsApp button', fileName: 'kuala_config.webp', caption: 'FIG. 02 — CONFIGURATOR: LIVE TOTAL AND ORDER.' },
              { title: 'Mobile menu with large links and a fixed order by WhatsApp button', fileName: 'kuala_menu.webp', caption: 'FIG. 03 — MOBILE MENU: BUILT FOR SOCIAL TRAFFIC.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="aspect-square bg-[#F5F5F5] border border-[#EEEEEE] overflow-hidden transition-all duration-500 hover:border-[#CCCCCC] group">
                  <img
                    src={`/${item.fileName}`}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="border-b border-[#EEEEEE] pb-6">
                  <p className="text-[12px] leading-relaxed uppercase tracking-[0.15em] text-[#6B6B6B] font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GridContainer>
      </section>

      {/* 4. KEY DECISIONS */}
      <section className="py-24 bg-white">
        <GridContainer>
          <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] whitespace-nowrap">
                04 / Key decisions
              </p>
              <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
            </div>
            <h2 className="text-[clamp(32px,6vw,56px)] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
              Design, access and launch
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { value: '3-layer system', label: 'Neo-brutalist Figma variables (primitives, semantic, components), Syne, Manrope and JetBrains Mono variable fonts, Lucide icons.' },
                { value: 'WCAG 2.2 AA', label: 'AA on every accent, unique button names, selection not by color alone, reduced motion respected, focus trapped in the menu.' },
                { value: 'Shipped', label: 'Single-file HTML on Cloudflare with a custom domain and HTTPS; moved off Netlify because its badge covered the WhatsApp button on mobile.' }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col cursor-default">
                  <div className="h-[1px] bg-[#F0F0F0] w-full mb-8 group-hover:bg-[#E0E0E0] transition-colors" />
                  <span className="text-[clamp(28px,3vw,36px)] leading-[1.1] font-light tracking-tight text-[#1a1a1a] transition-all group-hover:translate-x-3 group-hover:text-[#767676]">
                    {item.value}
                  </span>
                  <p className="text-[14px] leading-relaxed tracking-[0.1em] text-[#6B6B6B] mt-6 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-[#4A4A4A] mt-12 lg:mt-16">
              <strong className="font-semibold text-[#1a1a1a]">Result:</strong> a landing ready to sell, with one clear and accessible buying path, a seasonal offer that switches off on a set date, trust signals before the purchase, and a new line of business, Taller Kuala, for events.
            </p>
          </div>
        </GridContainer>
      </section>

      {/* 5. NEXT PROJECT */}
      <section ref={nextProjectRef} className="py-24 bg-[#1a1a1a] text-white">
        <GridContainer>
          <div className="col-span-12">
            <span className="text-[12px] uppercase tracking-[0.2em] text-gray-400 mb-12 block">
              Next Project
            </span>
            <Link to="/work/usaa" className="group block" aria-label="Navigate to the next project: USAA Design System">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(40px,8vw,90px)] font-normal leading-[1] tracking-tighter transition-all duration-700 group-hover:text-[#767676]">
                    USAA<br />Design System
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

      {/* 6. FOOTER */}
      <footer className="py-12 bg-[#1a1a1a] border-t border-[#888888]/10">
        <GridContainer>
          <div className="col-span-12 flex justify-between items-center text-[12px] uppercase tracking-[0.2em] text-[#888888]">
            <span>© 2026 ARTURO MENDOZA</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer" aria-label="Scroll back to the top of the page">
              Back to top ↑
            </button>
          </div>
        </GridContainer>
      </footer>

    </div>
  );
};

export default KualaProject;