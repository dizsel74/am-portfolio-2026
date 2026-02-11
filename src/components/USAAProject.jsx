import React from 'react';
import GridContainer from './GridContainer';
import { ArrowUpRight } from 'lucide-react';
import { BrowserRouter } from 'react-router-dom';
const USAAProject = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen pt-32 pb-24 font-instrument">
      
      {/* 1. HERO SECTION */}
      <section className="mb-24 lg:mb-40">
        <GridContainer>
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#767676]">Case Study / 2024</span>
            <h1 className="text-[clamp(40px,8vw,120px)] leading-[0.9] font-normal mt-6 mb-12">
              USAA
            </h1>
          </div>
          <div className="col-span-12">
            <div className="aspect-[16/7] bg-[#F5F5F5] overflow-hidden">
               <img src="/src/assets/usaa_hero.webp" className="w-full h-full object-cover" alt="USAA Hero" />
            </div>
          </div>
        </GridContainer>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="py-24 border-t border-[#F0F0F0]">
        <GridContainer>
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676]">01 / The Challenge</h2>
            <h3 className="text-3xl mt-4 font-medium">Consistency Across a Decade of Growth</h3>
          </div>
          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(18px,2vw,24px)] leading-relaxed text-[#4A4A4A] mb-12">
            Through years of rapid growth, USAA's digital ecosystem became a patchwork of different eras. This fragmentation across lines of business not only hurt the online experience but also led to a <span className="text-black font-bold">70% increase in support calls</span> for simple transactions, as users struggled to navigate at inconsistent user experience.
            </p>
            {/* Pain Points List */}
            <div className="space-y-8">
              {['Visual & Functional Fragmentation', 'Cognitive Overload', 'Technical Gaps in A11y'].map((point, i) => (
                <div key={i} className="border-t border-[#F0F0F0] pt-6 group">
                  <span className="text-xs text-[#888888] font-mono">0{i+1}</span>
                  <h4 className="text-xl font-medium mt-2 group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-wider">{point}</h4>
                </div>
              ))}
            </div>
          </div>
        </GridContainer>
      </section>

  {/* 3. THE SOLUTION */}
<section className="py-24 bg-black text-gray-300">
  <GridContainer>
    {/* Título y Header de Sección */}
    <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-[12px] uppercase tracking-[0.2em] whitespace-nowrap">
          02 / The Solution
        </h2>
        <div className="h-[1px] bg-[#333333] flex-grow" />
      </div>

      <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-white">
        Establishing a Single Source of Truth
      </h3>
    </div>

    {/* Bloque de Contenido Derecha */}
    <div className="col-span-12 lg:col-start-6 lg:col-span-7">
      <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-gray-300 mb-12 lg:mb-16">
        To bridge this decade-long gap, <span className="text-white font-semibold">Reveille Design System</span> was born. It wasn't simply a UI kit, but a strategic framework designed to align design, engineering, and business objectives across all lines of business—facilitating scalability, efficiency, and seamless handoff.
      </p>

      {/* Grid de 3 Columnas con Gap de 56px (gap-14) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {[
          {
            title: '01 / Atomic Design System',
            caption: 'Creation of a modular library of reusable components, ensuring that every button, input, and card follows the same DNA, regardless of the business line.'
          },
          {
            title: '02 / Cross-Platform Tokens',
            caption: 'Implementation of Design Tokens (color, spacing, typography) that allowed for a seamless transition between legacy platforms and modern web/mobile interfaces.'
          },
          {
            title: '03 / Documentation & Governance',
            caption: 'Establishing clear guidelines for designers and developers, reducing handoff friction and ensuring long-term scalability.'
          }
        ].map((item, i) => (
          /* Contenedor con la clase 'group' para controlar el hover del hijo */
          <div key={i} className="group flex flex-col cursor-default">
            {/* 1. Línea con cambio de color sutil */}
            <div className="h-[1px] bg-[#333333] w-full mb-6 group-hover:bg-[#555555] transition-colors duration-500" />
            
            {/* 2. Título con Movimiento (Efecto de la Sección 01) */}
            <h4 className="text-[12px] uppercase leading-[1.6] tracking-[0.1em] text-white mb-4 
                           transition-all duration-500 ease-out
                           group-hover:translate-x-2 group-hover:text-white/70">
              {item.title}
            </h4>
            
            {/* 3. Párrafo */}
            <p className="text-[14px] leading-[1.6] tracking-[0.1em] text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  </GridContainer>
</section>

      
        {/* 4. VISUAL SHOWCASE (ATOMIC) */}{/**bg-white */}
        <section className="py-24 ">
          <GridContainer>
            {/* Título de sección: Ocupa las 12 columnas para mantener jerarquía antes del grid de imágenes */}
            <div className="col-span-12 mb-16">
              <div className="flex items-center gap-4">
                <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676] whitespace-nowrap">
                  04 / Visual showcase
                </h2>
                <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
              </div>
            </div>

            {/* Contenedor de Galería: Grid de 3 columnas desde 'md' (Tablets) */}
            {/* gap-14 equivale a 56px (14 * 4px) */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
              {[
                {
                  title: 'Atoms',
                  caption: 'FIG. 01 — ATOMS: CORE INTERACTIVE ELEMENTS & STYLE TOKENS.'
                },
                {
                  title: 'Molecules',
                  caption: 'FIG. 02 — MOLECULES: STANDARDIZED INPUT GROUPS AND PATTERNS.'
                },
                {
                  title: 'Organisms',
                  caption: 'FIG. 03 — ORGANISMS: HIGH-LEVEL INTERFACE STRUCTURES.'
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6">
                  {/* Contenedor de Imagen */}
                  <div className="aspect-square bg-[#F9F9F9] border border-[#EEEEEE] flex items-center justify-center p-12 overflow-hidden transition-all hover:border-[#CCCCCC]">
                    {/* Placeholder de imagen o componente <img> */}
                    <span className="text-[#E0E0E0] uppercase tracking-tighter text-3xl font-light">
                      {item.title}
                    </span>
                  </div>

                  {/* Subtítulo con borde inferior */}
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
   

    {/* 5. RESULTS & IMPACT */}
<section className="py-24 bg-white">
  <GridContainer>
    {/* Título: Ocupa 4 columnas */}
    <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676] whitespace-nowrap">
          04 / results & impact
        </h2>
        <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
      </div>

      <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a1a1a]">
        The Impact of a Unified System
      </h3>
    </div>

    {/* Bloque de Métricas */}
    <div className="col-span-12 lg:col-start-6 lg:col-span-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {[
          {
            value: '-70%',
            caption: 'Reduction in support calls related to navigation friction and policy acquisition.'
          },
          {
            value: '40%',
            caption: 'Increase in design-to-development speed by eliminating component redundancy.'
          },
          {
            value: '100%',
            caption: 'Major business lines unified under a single visual language and technical framework.'
          }
        ].map((item, i) => (
          /* Contenedor con la clase 'group' para activar el efecto en el hijo */
          <div key={i} className="group flex flex-col cursor-default">
            {/* Línea decorativa superior */}
            <div className="h-[1px] bg-[#F0F0F0] w-full mb-8 group-hover:bg-[#E0E0E0] transition-colors duration-500" />
            
            {/* El Número con movimiento (Mismo estilo que Sección 01/02) */}
            <span className="text-6xl font-light tracking-[-0.02em] text-[#1a1a1a] 
                           transition-all duration-500 ease-out 
                           group-hover:translate-x-3 group-hover:text-[#767676]">
              {item.value}
            </span>
            
            {/* Párrafo de la métrica */}
            <p className="text-[14px] leading-[1.6] tracking-[0.1em] text-[#767676] mt-6 transition-colors duration-500 group-hover:text-[#1a1a1a]">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Texto de cierre */}
      <p className="mt-[64px] text-[22px] font-normal leading-[1.6] tracking-tight text-[#4A4A4A]">
        The implementation and correct use of the <span className="text-[#1a1a1a] font-medium">Reveille Design System</span> didn't just fix a visual problem; 
        it transformed how USAA builds digital products. By bridging the 10-year legacy gap, 
        we created a sustainable foundation that continues to evolve.
      </p>
    </div>
  </GridContainer>
</section>
   


    </div>
  );
};

export default USAAProject; 