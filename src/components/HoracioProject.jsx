import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from './GridContainer';
import ProjectNav from './ProjectNav';
import FloatingEmailButton from './FloatingEmailButton';
import BackToTop from './BackToTop';

const HoracioProject = () => {
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
          {/* HEADER HORACIO NANSEN */}
          <div className="col-span-12 lg:col-span-8 mb-24 lg:mb-36">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] font-medium">
                Case Study / A Gallery Online
              </span>
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-3 py-1">
                Client · In Progress · Role: Product Designer
              </span>
            </div>
            <h1 className="text-[clamp(60px,12vw,140px)] leading-[0.85] font-normal mt-6 tracking-[-0.04em] text-[#1a1a1a]">
              Horacio Nansen
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
                  Auditing the site from <strong className="font-semibold text-[#1a1a1a]">five angles</strong> (UX, UI, art sales, art criticism and development) showed the real problem wasn’t the look: <strong className="font-semibold text-[#1a1a1a]">there was no way to buy</strong>. Rebuilding it as a gallery-style catalog on my <strong className="font-semibold text-[#1a1a1a]">Black Sheep token architecture</strong>, with new values, let a very different brand stand on a proven system.
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#1a1a1a] overflow-hidden group">
              <img
                src="/horacio_hero.webp"
                className="w-full h-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Horacio Nansen catalog hero: a detail of a mosaic-like painting with the artist’s name in a serif typeface"
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
              A Canva page with no way to buy
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-[#4A4A4A] mb-16">
              The site was a single scrolling Canva page: 23 paintings in one column, no artist bio, no prices or availability, no way to enlarge the work, and contact was two unlabeled icons. It had no headings or main landmark, and <span className="text-black font-semibold">25 of 27 images had no alt text</span>.
            </p>

            <div className="flex flex-col">
              {['No structure or alt text', 'No prices, status or enquiry', 'Typos and mixed formats'].map((point, i) => (
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
              An editorial catalog, series by series
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-gray-400 mb-12 lg:mb-16">
              Each painting sits beside its technical details, the layout alternates sides and is broken up by full-width images, and <span className="text-white font-semibold">every painting has a clear way to ask about buying it</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { title: '01 / Five curated series', caption: 'Grouped from the existing work; on-screen size reflects each painting’s real size.' },
                { title: '02 / Alternating ficha', caption: 'Image and details side by side, alternating, with a full-width detail every 3–4 works.' },
                { title: '03 / Sales flow', caption: 'Available, reserved or sold, “price on request” and an enquiry button for each painting.' }
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
              { title: 'Painting Prisma 1, blanco dorado beside its ficha: technique, size, short story, availability and an enquiry button', fileName: 'horacio_work.webp', caption: 'FIG. 01 — WORK: IMAGE, FICHA AND STORY SIDE BY SIDE.' },
              { title: 'Full-bleed painting detail with a quote from the artist between series', fileName: 'horacio_quote.webp', caption: 'FIG. 02 — FULL-BLEED DETAIL BETWEEN SERIES.' },
              { title: 'Acquire a work section: enquiry, certificate, shipping and installation steps with WhatsApp and catalog buttons', fileName: 'horacio_acquire.webp', caption: 'FIG. 03 — ACQUISITION: HOW TO ACQUIRE A WORK.' }
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
              System, access and delivery
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { value: '3-tier tokens', label: 'Black Sheep architecture with new values: warm neutrals, a gold from the paintings, Fraunces + Inter variable fonts, 19 text styles.' },
                { value: 'AA fixes', label: 'Every text pair checked and 3 failing pairs fixed. Links always underlined; placeholders call for alt text.' },
                { value: 'Off Canva', label: 'Desktop and mobile designs, reusable components, a content spreadsheet for the artist and a migration plan.' }
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
              <strong className="font-semibold text-[#1a1a1a]">What I’d test first:</strong> whether visitors who open a work’s story send more information requests than those who only browse the images.
            </p>
          </div>
        </GridContainer>
      </section>

      {/* 5. NEXT PROJECT (temporal: USAA; cambiar a Kuala cuando exista /work/kuala) */}
      <section ref={nextProjectRef} className="py-24 bg-[#1a1a1a] text-white">
        <GridContainer>
          <div className="col-span-12">
            <span className="text-[12px] uppercase tracking-[0.2em] text-gray-400 mb-12 block">
              Next Project
            </span>
            <Link to="/work/usaa" className="group block" aria-label="Navigate to the next project: USAA Achieve Consistency">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(40px,8vw,90px)] font-normal leading-[1] tracking-tighter transition-all duration-700 group-hover:text-[#767676]">
                    USAA<br />Achieve Consistency
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

export default HoracioProject;