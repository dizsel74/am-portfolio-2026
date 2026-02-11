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

      {/* 3. THE SOLUTION (REVEILLE) */}
      <section className="py-24 bg-black text-white">
        <GridContainer>
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-gray-500">02 / The Solution</h2>

            <h3 className="text-3xl mt-4">The Reveille Framework</h3>
          </div>
          <div className="col-span-12 lg:col-start-6 lg:col-span-7">
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-gray-300 italic">
              "To bridge this decade-long gap, Reveille Design System was born—a strategic framework designed to align design, engineering, and business objectives."
            </p>
          </div>
        </GridContainer>
      </section>

      {/* 4. VISUAL SHOWCASE (ATOMIC) */}
      <section className="py-24 bg-white">
        <GridContainer>
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Atoms', 'Molecules', 'Organisms'].map((level, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="aspect-square bg-[#F9F9F9] border border-[#EEEEEE] flex items-center justify-center p-12">
                   {/* Aquí irían tus imágenes de componentes de Reveille */}
                   <span className="text-gray-300 uppercase tracking-tighter text-4xl">{level}</span>
                </div>
                <div className="border-b border-[#EEEEEE] pt-4 pb-4">
                   <span className="text-[10px] uppercase tracking-widest text-[#888888]">Fig. 0{i+1} — atoms: CORE INTERACTIVE ELEMENTS & STYLE TOKENS</span>
                   {/*<p className="text-sm mt-2 font-medium">Standardized {level} for cross-platform consistency.</p>*/}
                </div>
              </div>
            ))}
          </div>
        </GridContainer>
      </section>

   

        {/* 5. RESULTS & IMPACT */}
        <section className="py-24 border-t border-[#F0F0F0]">
            <GridContainer>
                {/* Título: Ocupa 4 columnas */}
                <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
                  
                  {/* Contenedor Flex para alinear texto y línea en la misma fila */}
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#767676] whitespace-nowrap">
                      03 / results & impact
                    </h2>
                    <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                  </div>

                  <h3 className="text-[40px] font-medium leading-[1.6] tracking-[0.1em] text-[#1a1a1a]"> The Impact of a Unified System
                  </h3>
                </div>
                
                {/* Espacio de 1 col (implícito por el start-6) y Métricas ocupando las 7 restantes */}
                <div className="col-span-12 lg:col-start-6 lg:col-span-7">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24">
                        
                        {/* Métrica 01 */}
                        <div className="flex flex-col">
                        <span className="text-6xl font-light tracking-[0.01em] text-[#1a1a1a]">-70%</span>
                        <p className="text-[14px] leading-relaxed tracking-[0.1em] text-[#767676] mt-4">
                        Reduction in support calls related to navigation friction and policy acquisition.
                        </p>
                        </div>
                        
                        {/* Métrica 02 */}
                        <div className="flex flex-col">
                        <span className="text-6xl font-light tracking-[0.01em] text-[#1a1a1a]">40%</span>
                        <p className="text-[14px] leading-relaxed tracking-[0.1em] text-[#767676] mt-4">
                        Increase in design-to-development speed by eliminating component redundancy.
                        </p>
                        </div>
                        
                        {/* Métrica 03 */}
                        <div className="flex flex-col">
                        <span className="text-6xl font-light tracking-[0.01em] text-[#1a1a1a]">100%</span>
                        <p className="text-[14px] leading-relaxed tracking-[0.1em] text-[#767676] mt-4">
                        Major business lines unified under a single visual language and technical framework.
                        </p>
                        </div>

                    </div>
                    <p className="mt-[60px] text-[22px] font-instrument font-normal leading-[1.6] tracking-[0.1em] text-[#4A4A4A]">
            The implementation and correct use of the Reveille Design System didn't just fix a visual problem; 
            it transformed how USAA builds digital products. By bridging the 10-year legacy gap, 
            we created a sustainable foundation that continues to evolve, ensuring that the brand 
            remains cohesive as it enters its next decade of growth.
        </p>
                </div>
            </GridContainer>
        </section>

   


    </div>
  );
};

export default USAAProject; 