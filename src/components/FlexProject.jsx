import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from './GridContainer';
import ProjectNav from './ProjectNav';
import FloatingEmailButton from './FloatingEmailButton';
import BackToTop from './BackToTop';

const FlexProject = () => {
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
          {/* HEADER FLEX ACADEMY */}
          <div className="col-span-12 lg:col-span-8 mb-24 lg:mb-36">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] font-medium">
                Case Study / Two Audiences, One Lead
              </span>
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-3 py-1">
                Assessment · Role: Product / Brand Designer
              </span>
            </div>
            <h1 className="text-[clamp(60px,12vw,140px)] leading-[0.85] font-normal mt-6 tracking-[-0.04em] text-[#1a1a1a]">
              Flex Academy
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
                  The page had to explain who it’s for in <strong className="font-semibold text-[#1a1a1a]">five seconds</strong>, earn trust in <strong className="font-semibold text-[#1a1a1a]">thirty</strong> and let people act at any point of the scroll. Leading with one action for the bigger audience, and proving it <strong className="font-semibold text-[#1a1a1a]">only with verified facts</strong>, did more than any headline could.
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#F3F0E8] overflow-hidden group">
              <img
                src="/flex_hero.webp"
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Flex Academy Launch playbook section: five steps to a first short-term rental business above a furnished apartment photo"
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
              Two audiences, two commitments, one page
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-[#4A4A4A] mb-16">
              Flex Academy teaches people to launch and scale short-term rental businesses with the playbook and software behind The Flex and Base360. It has <span className="text-black font-semibold">two buyers</span>: the 9-to-5 leaver, who registers for a free webinar, and the early operator, who books a strategy call.
            </p>

            <div className="flex flex-col">
              {['Who it’s for in 5 seconds', 'Trust in 30 seconds', 'Act at any point of the scroll'].map((point, i) => (
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
              A sibling brand with two clear paths
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-gray-400 mb-12 lg:mb-16">
              Academy feels like <span className="text-white font-semibold">a sibling, not a copy</span>: The Flex’s deep green and warmth, Base360’s product rigor, plus linen surfaces, Onyx text and <span className="text-white font-semibold">a single tomato accent</span> reserved for Launch. Inter in a six-step scale, and an arch image mask as the signature shape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { title: '01 / Accessible by default', caption: 'Text on tomato is always Onyx, visible focus rings, selection not shown by color alone, helper text above the field.' },
                { title: '02 / Complete flows', caption: 'Button states, errors with icon and text, a calendar with struck-through days, confirmations for both paths.' },
                { title: '03 / Mobile, redesigned', caption: 'Not scaled down: the call to action is visible without scrolling, with a prototyped menu.' }
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
              { title: 'Reserve your seat modal for the free webinar with three fields and a tomato call to action', fileName: 'flex_webinar.webp', caption: 'FIG. 01 — WEBINAR: RESERVE YOUR SEAT IN ONE STEP.' },
              { title: 'Strategy call step 1 of 2: units today, target, city and budget range', fileName: 'flex_qualify.webp', caption: 'FIG. 02 — STRATEGY CALL: QUALIFICATION FIRST.' },
              { title: 'Strategy call step 2 of 2: calendar with unavailable days struck through and available times', fileName: 'flex_calendar.webp', caption: 'FIG. 03 — STRATEGY CALL: PICK A TIME ON THE CALENDAR.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="aspect-square bg-[#F5F5F5] border border-[#EEEEEE] overflow-hidden transition-all duration-500 hover:border-[#CCCCCC] group">
                  <img
                    src={`/${item.fileName}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
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
              Three decisions
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { value: 'Launch leads', label: 'The 9-to-5 leaver is the bigger market: one action in the hero, a quiet link for operators, a dark chapter for Scale.' },
                { value: 'Proof first', label: 'Only verified facts (150+ partners, 130+ platforms, 7 cities live), then the founders. No invented metrics or logos.' },
                { value: 'Ask once', label: 'Webinar is three fields; the call adds qualification and a calendar. Answers given on the page open straight on the calendar.' }
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
              <strong className="font-semibold text-[#1a1a1a]">What I’d test first:</strong> the headline “Run short-term rentals like a company” may lean toward operators. I’d test it against a launch-explicit version, measuring webinar sign-ups and how many leavers click the Scale link by mistake.
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
            <Link to="/work/horacio" className="group block" aria-label="Navigate to the next project: Horacio Nansen Art Catalog">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-[clamp(40px,8vw,90px)] font-normal leading-[1] tracking-tighter transition-all duration-700 group-hover:text-[#767676]">
                    Horacio Nansen<br />Art Catalog
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

export default FlexProject;