import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from './GridContainer';
import ProjectNav from './ProjectNav';
import FloatingEmailButton from './FloatingEmailButton';
import BackToTop from './BackToTop';

const GogolfProject = () => {
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
          {/* HEADER GOGOLF */}
          <div className="col-span-12 lg:col-span-8 mb-24 lg:mb-36">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#6B6B6B] font-medium">
                Case Study / Booking Friction
              </span>
              <span className="text-[12px] uppercase tracking-[0.15em] text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-3 py-1">
                Pitch · UX Audit &amp; Redesign
              </span>
            </div>
            <h1 className="text-[clamp(60px,12vw,140px)] leading-[0.85] font-normal mt-6 tracking-[-0.04em] text-[#1a1a1a]">
              gogolf
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
                  Pitching an unsolicited redesign taught me to lead with the <strong className="font-semibold text-[#1a1a1a]">smallest, sharpest fix</strong>. A short teaser on sign-up and log-in opened <strong className="font-semibold text-[#1a1a1a]">a call with the founder</strong>, and splitting the full proposal <strong className="font-semibold text-[#1a1a1a]">into phases</strong> let the client say yes without betting everything at once.
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#F5F5F5] overflow-hidden group">
              <img
                src="/gogolf_hero.webp"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="gogolf redesign shown on laptop, tablet and phone: landing with tee-time search, sign-up and booking"
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
              Too much friction before the first tee time
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-[#4A4A4A] mb-16">
              gogolf is Mexico’s first tee-time marketplace, but its sign-up asked for <span className="text-black font-semibold">data booking didn’t need</span>: birth date, full legal name, a password confirmation and a terms checkbox with no link to the terms. Errors only appeared after submitting.
            </p>

            <div className="flex flex-col">
              {['Unnecessary fields', 'Late error feedback', 'Unclear legal consent'].map((point, i) => (
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
              A 3-field sign-up and a clearer path to book
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(15px,4vw,22px)] leading-relaxed text-gray-400 mb-12 lg:mb-16">
              I audited the landing, log-in and registration, then redesigned the flow around one insight: the account holder often books for others, so sign-up should <span className="text-white font-semibold">ask for the account, not the player</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { title: '01 / Lean sign-up', caption: 'Username, email and password. Birth date moves to the profile; Google and Microsoft as social options.' },
                { title: '02 / Inline validation', caption: 'Errors appear next to each field while typing, not after submit.' },
                { title: '03 / Phased roadmap', caption: 'Access, booking, discovery and course page, delivered as separate phases.' }
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
              { title: 'Redesigned sign-up with username, email, password and Google or Microsoft options', fileName: 'gogolf_signup.webp', caption: 'FIG. 01 — SIGN-UP: THREE FIELDS AND SOCIAL OPTIONS.' },
              { title: 'Redesigned log-in screen with clear access options and error states', fileName: 'gogolf_login.webp', caption: 'FIG. 02 — LOG-IN: CLEARER ACCESS AND ERROR STATES.' },
              { title: 'Booking overlay to pick date, time and players for a tee time', fileName: 'gogolf_booking.webp', caption: 'FIG. 03 — BOOKING: TEE-TIME SELECTION IN ONE OVERLAY.' }
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
              Asking only for what booking needs
            </h2>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { value: 'Username', label: 'Players can be friends, family or kids, so real names live in each booking, not in the account.' },
                { value: 'Inline errors', label: 'Validation shows next to the field, so mistakes are fixed before submitting.' },
                { value: 'One line', label: 'The terms checkbox becomes one linked sentence that also confirms the user is 18+.' }
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
              <strong className="font-semibold text-[#1a1a1a]">What I’d test first:</strong> whether the 3-field sign-up raises completed registrations compared with the current form.
            </p>
          </div>
        </GridContainer>
      </section>

      {/* 5. NEXT PROJECT (temporal: USAA; cambiar a Flex Academy cuando exista /work/flex) */}
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

export default GogolfProject;