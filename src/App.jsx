import Header from './components/Header';
import GridContainer from './components/GridContainer';
import BackToTop from './components/BackToTop';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

// Importación de Páginas de Proyectos
import USAAProject from './components/USAAProject'; 
import GEProject from './components/GEProject';
import CafeProject from './components/CafeProject';
import PascualProject from './components/PascualProject';

// Componente para resetear el scroll automáticamente al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div id="top" className="relative min-h-screen font-instrument selection:bg-black selection:text-white overflow-x-hidden">
      <ScrollToTop />
    

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={
          <>
            <Header />
            <main id="home" className="pt-32 md:pt-48 lg:pt-64 pb-4">
              <GridContainer className="items-end">
                <div className="col-span-1 md:col-span-4 lg:col-span-7 flex flex-col justify-end pb-4 lg:pb-[80px]">
                  <h2 className="text-[clamp(40px,6vw,96px)] leading-[0.9] font-normal tracking-[0.02em] lowercase">
                    crafting pixels,<br />
                    writing code.
                  </h2>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-end items-end overflow-visible">
                  <h1 className="text-[clamp(140px,28vw,400px)] font-bold leading-[0.7] flex antialiased shrink-0 select-none">
                    <span className="relative z-10 -mr-[0.135em] block transform-gpu">A</span>
                    <span className="relative z-0 block transform-gpu">M</span>
                  </h1>
                </div>
              </GridContainer>

              {/* SECCIÓN: BIO / CAJA NEGRA */}
              <section className="mt-20 bg-black w-full text-white">
                <GridContainer>
                  <div className="col-span-12 py-24 md:py-32">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-start-2 col-span-10">
                        <p className="text-[24px] lg:text-[24px] leading-relaxed tracking-[0.05em] font-thin">
                          I craft stunning interfaces for clean development, closing the gap between vision and code. Being a <span className="font-bold">UX/UI designer</span> who speaks “Dev”, I’m able to turn complex problems into seamless digital experiences.
                        </p>
                        <p className="text-[16px] mt-8 text-[#767676] tracking-[0.05em] ml-auto">- Arturo Mendoza -</p>
                      </div>
                    </div>
                  </div>
                </GridContainer>
              </section>

              {/* MY WORK SECTION */}
              <section id="work" className="py-24 md:py-32">
                <GridContainer className="mb-16 md:mb-24 lg:mb-40">
                  <div className="col-span-12">
                    <h2 className="text-[clamp(40px,6vw,96px)] font-normal tracking-[0.02em] lowercase">my work</h2>
                    <div className="w-full h-[1px] bg-[#767676]" />
                  </div>
                </GridContainer>

                <div className="flex flex-col gap-16 md:gap-24 lg:gap-[160px]">
                  
                  {/* PROYECTO 01 - USAA */}
                  <GridContainer>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 items-center group">
                      <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-4 overflow-hidden">
                            <span className="text-[12px] text-[#767676] uppercase tracking-[0.1em]">01 / UI DESIGNER</span>
                            <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                          </div>
                          <h3 className="text-[clamp(24px,2.5vw,32px)] uppercase font-medium tracking-[0.1em]">USAA</h3>
                        </div>
                        <p className="text-[clamp(18px,1.8vw,22px)] text-[#4A4A4A]">Achieving cross-platform UX & UI consistency through Design System...</p>
                        <Link to="/work/usaa" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-black transition-colors w-fit">
                          VIEW PROJECT ↗
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all group-hover/link:w-full" />
                        </Link>
                      </div>
                      <div className="col-span-1 md:col-span-6 lg:col-span-7 lg:col-start-6 overflow-hidden order-1 lg:order-3">
                        <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden">
                          <img src="src/assets/usaa_1600X1000.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" alt="USAA" />
                        </div>
                      </div>
                    </div>
                  </GridContainer>

                  {/* PROYECTO 02 - GE */}
                  <GridContainer>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 items-center group">
                      <div className="col-span-1 md:col-span-6 lg:col-span-7 overflow-hidden order-1">
                        <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden">
                          <img src="/src/assets/GE_1600X1000.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" alt="GE" />
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-6 lg:col-span-3 lg:col-start-10 flex flex-col gap-8 order-2">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-4 overflow-hidden">
                            <span className="text-[12px] text-[#767676] uppercase tracking-[0.1em]">02 / UX/UI DESIGN</span>
                            <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                          </div>
                          <h3 className="text-[clamp(24px,2.5vw,32px)] uppercase font-medium tracking-[0.1em]">GE Appliances</h3>
                        </div>
                        <p className="text-[clamp(18px,1.8vw,22px)] text-[#4A4A4A]">Visual redesign for brand's digital experience...</p>
                        <Link to="/work/ge" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-black transition-colors w-fit">
                          VIEW PROJECT ↗
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all group-hover/link:w-full" />
                        </Link>
                      </div>
                    </div>
                  </GridContainer>

                  {/* PROYECTO 03 - CAFÉ */}
                  <GridContainer>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 items-center group">
                      <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-4 overflow-hidden">
                            <span className="text-[12px] text-[#767676] uppercase tracking-[0.1em]">03 / UI DESIGNER</span>
                            <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                          </div>
                          <h3 className="text-[clamp(24px,2.5vw,32px)] uppercase font-medium tracking-[0.1em]">CAFÉ Appliances</h3>
                        </div>
                        <p className="text-[clamp(18px,1.8vw,22px)] text-[#4A4A4A]">Modern and elegant aesthetic that defines luxury...</p>
                        <Link to="/work/cafe" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-black transition-colors w-fit">
                          VIEW PROJECT ↗
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all group-hover/link:w-full" />
                        </Link>
                      </div>
                      <div className="col-span-1 md:col-span-6 lg:col-span-7 lg:col-start-6 overflow-hidden order-1 lg:order-3">
                        <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden">
                          <img src="/src/assets/cafe_1600X1000.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" alt="Café" />
                        </div>
                      </div>
                    </div>
                  </GridContainer>

                  {/* PROYECTO 04 - PASCUAL */}
                  <GridContainer>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 items-center group">
                      <div className="col-span-1 md:col-span-6 lg:col-span-7 overflow-hidden order-1">
                        <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden">
                          <img src="/src/assets/pascual_1600X1000.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" alt="Pascual" />
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-6 lg:col-span-3 lg:col-start-10 flex flex-col gap-8 order-2">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-4 overflow-hidden">
                            <span className="text-[12px] text-[#767676] uppercase tracking-[0.1em]">04 / UX RESEARCHER & UX/UI DESIGNER</span>
                            <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                          </div>
                          <h3 className="text-[clamp(24px,2.5vw,32px)] uppercase font-medium tracking-[0.1em]">Pascual</h3>
                        </div>
                        <p className="text-[clamp(18px,1.8vw,22px)] text-[#4A4A4A]">UX/UI design and development for the B2B platform...</p>
                        <Link to="/work/pascual" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-black transition-colors w-fit">
                          VIEW PROJECT ↗
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all group-hover/link:w-full" />
                        </Link>
                      </div>
                    </div>
                  </GridContainer>

                </div>
              </section>

              {/* SECCIÓN: ABOUT ME */}
                <section id="about" className="py-24 md:py-32 text-[#1a1a1a]">
                  
                  {/* 1. CABECERA DE SECCIÓN */}
                  {/* El margen inferior escala hasta 80px en desktop */}
                  <GridContainer className="mb-10 md:mb-16 lg:mb-[80px]">
                    <div className="col-span-12">
                      <h2 className="text-[clamp(40px,6vw,96px)] font-normal tracking-[0.02em] lowercase mb-0 lg:mb-0">
                        about me
                      </h2>
                      <div className="w-full h-[1px] bg-[#767676]" />
                    </div>
                  </GridContainer>

                  {/* 2. CONTENEDOR PRINCIPAL (Grid de Contenido) */}
                  <GridContainer>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-y-16">
                      
                      {/* --- CONTENEDOR 1: BIO (Col 1 a 6) --- */}
                      {/* Flex col con gap responsivo (max 40px) */}
                      <div className="col-span-1 md:col-span-6 lg:col-span-6 flex flex-col gap-6 md:gap-8 lg:gap-[40px]">
                        
                        {/* Párrafo 1 */}
                        <p className="text-[clamp(18px,1.8vw,22px)] leading-[1.6] font-normal tracking-[0.05em] ">
                          <span className="font-medium">UX/UI designer</span> and  <span className="font-medium">web engineer,</span> with a decade of experience creating digital solutions. I leverage my technical expertise to reduce production times by creating cost-effective designs for global brands, ensuring visual cohesion and accessibility across all platforms.
                        </p>

                        {/* Párrafo 2 */}
                        <p className="text-[clamp(18px,1.8vw,22px)] leading-[1.6] font-normal tracking-[0.05em]">
                          Great design is about putting the user at the center and building around them with technical efficiency. By combining visual storytelling, data analysis, and front-end architecture knowledge, I deliver seamless enterprise and e-commerce  <span className="font-medium">solutions</span> that connect with users and scale with the business.
                        </p>

                      </div>

                      {/* ESPACIO VACÍO (Col 7 a 8) - Implícito al saltar a col-start-9 */}
                      <div className="hidden lg:block lg:col-span-2" />

                      {/* --- CONTENEDOR 2: SKILLS (Col 9 a 12) --- */}
                      {/* Stack vertical con espacio de 40px entre bloques */}
                      <div className="col-span-1 md:col-span-6 lg:col-start-9 lg:col-span-4 flex flex-col gap-[40px] text-[#1a1a1a]">
                        
                        {/* LISTA 1: DESIGN & STRATEGY */}
                        <div className="flex flex-col w-full font-medium">
                          <span className="text-[12px] uppercase tracking-[0.1em] text-left text-[#767676]">
                            01 DESIGN & STRATEGY
                          </span>
                          
                          {/* Espacio 10px - Linea - Espacio 10px */}
                          <div className="py-[10px] w-full">
                            <div className="w-full h-[1px] bg-[#767676]" />
                          </div>

                          <ul className="flex flex-col leading-[1.6] text-[clamp(14px,1.5vw,16px)]">
                            <li>User Research (UX)</li>
                            <li>User-Centered Design (UCD)</li>
                            <li>Wire Framing</li>
                            <li>Prototyping</li>
                            <li>Design Systems</li>
                            <li>B2B & E-commerce Strategy</li>
                          </ul>
                        </div>

                        {/* LISTA 2: ENGINEERING */}
                        <div className="flex flex-col w-full font-medium">
                          <span className="text-[12px] uppercase tracking-[0.1em] text-left text-[#767676]">
                            02 ENGINEERING & HAND-OFF
                          </span>
                          
                          <div className="py-[10px] w-full">
                            <div className="w-full h-[1px] bg-[#767676]" />
                          </div>

                          <ul className="flex flex-col leading-[1.6] text-[clamp(14px,1.5vw,16px)]">
                            <li>A11y Standards</li>
                            <li>Responsive Design</li>
                            <li>Design-to-Code Workflow</li>
                            <li>Front-End Architecture</li>
                            <li>Information Architecture</li>
                          </ul>
                        </div>

                        {/* LISTA 3: TOOLS */}
                        <div className="flex flex-col w-full font-medium">
                          <span className="text-[12px] uppercase tracking-[0.1em] text-left text-[#767676]">
                            03 TOOLS & METHODS
                          </span>
                          
                          <div className="py-[10px] w-full">
                            <div className="w-full h-[1px] bg-[#767676]" />
                          </div>

                          <ul className="flex flex-col leading-[1.6] text-[clamp(14px,1.5vw,16px)]">
                            <li>Figma</li>
                            <li>AI Design</li>
                            <li>Design Frameworks</li>
                            <li>Data Analysis</li>
                            <li>Adobe Photoshop</li>
                            <li>Agile Methodology</li>
                          </ul>
                        </div>

                      </div>

                    </div>
                  </GridContainer>
                </section>

              {/* SECCIÓN: CONTACT */}
                <section id="contact" className="py-24 md:py-24 text-[#1a1a1a]">
                  
                  {/* 1. CABECERA DE SECCIÓN */}
                  <GridContainer className="mb-20 lg:mb-[80px]"> {/* 80px espacio tras la línea */}
                    <div className="col-span-12">
                      <h2 className="text-[clamp(40px,6vw,96px)] font-normal tracking-[0.02em] lowercase mb-0 lg:mb-">
                        contact me
                      </h2>
                      <div className="w-full h-[1px] bg-[#767676]" />
                    </div>
                  </GridContainer>
                {/* 2. CONTENEDOR PRINCIPAL */}
                  <GridContainer>
                    
                    {/* ESPACIO VACÍO: COL 1 a COL 4 */}
                    <div className="hidden lg:block lg:col-span-4" />

                    {/* CONTENEDOR INFORMACIÓN: COL 5 a COL 11 */}
                    <div className="col-span-12 md:col-span-10 lg:col-span-7 flex flex-col">
                      
                      {/* PÁRRAFO INTRO */}
                      <p className="text-[clamp(18px,1.8vw,22px)] leading-[1.6] font-normal tracking-[0.05em] text-[#1a1a1a] mb-[64px]">
                        Whether you're looking to build a scalable design system, develop a high-performance e-commerce platform, or just want to chat about where crafted pixels meet code—I’m always up to the task.
                      </p>

                      {/* EMAIL LINK */}
                      <a 
                        href="mailto:hello@iamuxui.dev" 
                        className="group w-fit text-[clamp(28px,4vw,48px)] leading-[1.6] font-normal tracking-[0.05em] text-[#1a1a1a] mb-[48px] relative inline-flex items-center gap-2"
                      >
                        <span>hello@iamuxui.dev</span>
                        <span className="text-[0.6em] align-top">↗</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#4a4a4a] transition-all duration-300 ease-out group-hover:w-full" />
                      </a>

                      {/* --- LINKS HORIZONTALES --- */}
                      {/* flex-row para alineación horizontal, flex-wrap por seguridad en pantallas muy pequeñas */}
                      <div className="flex flex-row flex-wrap items-center gap-[40px]">
                        
                        {/* LINKEDIN */}
                        <a 
                          href="https://linkedin.com/in/arturo-mendoza-rendon/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group relative flex items-center text-[12px] uppercase font-normal tracking-[0.05em] leading-[1.6] text-[#1a1a1a]"
                        >
                          <span>LINKEDIN</span>
                          <span className="ml-[8px]">↗</span> {/* Gap exacto de 8px */}
                          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4a4a4a] transition-all duration-300 ease-out group-hover:w-full" />
                        </a>

                        {/* RESUME */}
                        <a 
                          href="/path-to-your-resume.pdf" 
                          download 
                          className="group relative flex items-center text-[12px] uppercase font-normal tracking-[0.05em] leading-[1.6] text-[#1a1a1a]"
                        >
                          <span>RESUME</span>
                          <span className="ml-[8px]">↗</span> {/* Gap exacto de 8px */}
                          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4a4a4a] transition-all duration-300 ease-out group-hover:w-full" />
                        </a>

                      </div>

                    </div>

                    {/* ESPACIO VACÍO FINAL (COL 12) */}
                    <div className="hidden lg:block lg:col-span-1" />

                  </GridContainer>
                  

                </section>

              {/* FOOTER */}
                <footer className="w-full md:h-[98px] flex items-center bg-transparent">
                  <GridContainer className="w-full px-8 lg:px-[32px]">
                    
                    {/* CONTENEDOR DE 12 COLUMNAS */}
                    {/* LA LÍNEA: Limitada a las 12 columnas del grid */}
                    <div className="col-span-12">
                      <div className="w-full h-[1px] bg-[#F0F0F0]" />
                    </div>
                    {/* items-center asegura el centrado vertical exacto dentro de los 98px */}
                    <div className="col-span-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0  ">
                      
                      {/* 1er BLOQUE: COPYRIGHT */}
                      <div className="w-full md:max-w-[312px]">
                        <p className="text-[12px] font-normal text-[#666666] tracking-[0.15em] uppercase leading-[1.6] text-center md:text-left">
                          © 2026 — ARTURO MENDOZA
                        </p>
                      </div>

                      {/* 2nd BLOQUE: LOCATION */}
                      <div className="w-full md:max-w-[312px]">
                        <p className="text-[12px] font-normal text-[#666666] tracking-[0.15em] uppercase leading-[1.6] text-center">
                          BASED IN MEXICO — OPEN TO GLOBAL OPPORTUNITIES
                        </p>
                      </div>

                      {/* 3ro BLOQUE: TAGLINE */}
                      <div className="w-full md:max-w-[312px]">
                        <p className="text-[12px] font-normal text-[#666666] tracking-[0.15em] uppercase leading-[1.6] text-center md:text-right">
                          CRAFTED WITH PIXELS & CODE
                        </p>
                      </div>

                    </div>
                  </GridContainer>
                </footer>
                <BackToTop/>
            </main>
          </>
        } />

        {/* RUTAS DE PROYECTOS INDIVIDUALES */}
        <Route path="/work/usaa" element={<USAAProject />} />
        <Route path="/work/ge" element={<GEProject />} />
        <Route path="/work/cafe" element={<CafeProject />} />
        <Route path="/work/pascual" element={<PascualProject />} />
      </Routes>

      {/*<BackToTop /> Aqui esta global*/}
    </div>
  )
}

export default App;