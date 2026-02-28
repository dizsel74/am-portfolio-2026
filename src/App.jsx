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
          <main id="home" className="pt-32 md:pt-48 lg:pt-64">
            {/* ELIMINADO pb-4 para que el contenido llegue al borde */}
            <GridContainer className="items-end">
              <div className="col-span-1 md:col-span-4 lg:col-span-7 flex flex-col justify-end pb-4 lg:pb-[80px]">
                <h2 className="text-[clamp(40px,6vw,96px)] leading-[0.9] font-normal tracking-[0.02em] lowercase">
                  crafting pixels,<br />
                  writing code.
                </h2>
              </div>

              {/* Ajuste de overflow y z-index para el logo AM */}
              <div className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-end items-end overflow-visible relative z-10">
                <h1 className="text-[clamp(140px,28vw,400px)] font-bold leading-[0.7] flex antialiased shrink-0 select-none">
                  <span className="relative z-10 -mr-[0.135em] block transform-gpu">A</span>
                  <span className="relative z-0 block transform-gpu">M</span>
                </h1>
              </div>
            </GridContainer>

            {/* SECCIÓN: BIO / CAJA NEGRA */}
            {/* ELIMINADO mt-20 para que choque con el logo AM */}
            <section className="w-full bg-[#1a1a1a] text-white relative z-0">
              <GridContainer>
                <div className="col-span-12 py-24 md:py-32">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-start-2 col-span-10">
                      <p className="text-[24px] lg:text-[24px] leading-relaxed tracking-[0.05em] font-thin">
                        I craft stunning interfaces for clean development, closing the gap between vision and code. Being a <span className="font-bold">UX/UI designer</span> who speaks “Dev”, I’m able to turn complex problems into seamless cost effective digital experiences.
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
                      <Link to="/work/usaa" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-[#1a1a1a] transition-colors w-fit tracking-[0.2em]">
                        VIEW PROJECT
                        
                        {/* FLECHA CON MOVIMIENTO DIAGONAL */}
                      <span className="text-[14px] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>

                      {/* SUBRAYADO UNIFICADO */}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
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
                      <Link to="/work/ge" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-[#1a1a1a] transition-colors w-fit tracking-[0.2em]">
                         VIEW PROJECT
                        
                        {/* FLECHA CON MOVIMIENTO DIAGONAL */}
                      <span className="text-[14px] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>

                      {/* SUBRAYADO UNIFICADO */}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
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
                      <Link to="/work/cafe" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-[#1a1a1a] transition-colors w-fit tracking-[0.2em]">
                         VIEW PROJECT
                        
                        {/* FLECHA CON MOVIMIENTO DIAGONAL */}
                      <span className="text-[14px] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>

                      {/* SUBRAYADO UNIFICADO */}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
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
                      <Link to="/work/pascual" className="group/link relative inline-flex items-center text-[12px] text-[#888888] hover:text-[#1a1a1a] transition-colors w-fit tracking-[0.2em]">
                         VIEW PROJECT
                        
                        {/* FLECHA CON MOVIMIENTO DIAGONAL */}
                      <span className="text-[14px] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>

                      {/* SUBRAYADO UNIFICADO */}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
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
                        <span className="font-medium">UX/UI designer</span> and  <span className="font-medium">web engineer,</span> with a decade of experience creating digital solutions. I leverage my technical expertise to reduce production times by creating cost-effective designs{/*  } for global brands*/}, ensuring visual cohesion and accessibility across all platforms.
                      </p>

                      {/* Párrafo 2 */}
                      <p className="text-[clamp(18px,1.8vw,22px)] leading-[1.6] font-normal tracking-[0.05em] ]">
                        <span className="font-bold text-[#767676">- </span>Great design brings together the user and the business at the center and building around them with technical efficiency. <span className="font-bold text-[#767676">- </span></p>
                      
                        <p className="text-[clamp(18px,1.8vw,22px)] leading-[1.6] font-normal tracking-[0.05em]">By combining visual storytelling, data analysis, and front-end architecture knowledge, I deliver seamless enterprise and e-commerce  <span className="font-medium">solutions</span> that connect with users and scale with the business.
                      </p>

                    </div>

                    {/* ESPACIO VACÍO (Col 7 a 8) - Implícito al saltar a col-start-9 */}
                    <div className="hidden lg:block lg:col-span-2" />

                    {/* --- CONTENEDOR 2: SKILLS (Col 9 a 12) --- */}
                    {/* --- CONTENEDOR 2: SKILLS (Col 9 a 12) --- */}
<div className="col-span-1 md:col-span-6 lg:col-start-9 lg:col-span-4 flex flex-col gap-[40px] text-[#1a1a1a]">
  
  {[
    { 
      id: '01', 
      title: 'DESIGN & STRATEGY', 
      skills: ['User Research (UX)', 'User-Centered Design (UCD)', 'Wire Framing', 'Prototyping', 'Design Systems', 'B2B & E-commerce Strategy'] 
    },
    { 
      id: '02', 
      title: 'ENGINEERING & HAND-OFF', 
      skills: ['A11y Standards', 'Responsive Design', 'Design-to-Code Workflow', 'Front-End Architecture', 'Information Architecture'] 
    },
    { 
      id: '03', 
      title: 'TOOLS & METHODS', 
      skills: ['Figma', 'AI Design', 'Design Frameworks', 'Data Analysis', 'Adobe Photoshop', 'Agile Methodology'] 
    }
  ].map((item, i) => (
    <div key={i} className="group flex flex-col w-full cursor-default">
      
      

      {/* TÍTULO: Se desplaza a la derecha en hover */}
      <span className="text-[12px] uppercase tracking-[0.1em] font-medium text-[#767676] group-hover:text-[#1a1a1a] transition-all duration-500 transform group-hover:translate-x-2 mb-4">
        {item.id} {item.title}
      </span>
      {/* LÍNEA ANIMADA: Cambia de gris suave a negro definido */}
      <div className="w-full h-[1px] bg-[#e5e5e5] group-hover:bg-[#1a1a1a] transition-colors duration-500 mb-4" />

      {/* LISTA: Los items cambian de gris a negro */}
      <ul className="flex flex-col leading-[1.6] text-[clamp(14px,1.5vw,16px)] text-[#888888] group-hover:text-[#1a1a1a] transition-colors duration-500">
        {item.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  ))}
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
                    <a href="mailto:hello@iamuxui.dev" className="group w-fit text-[clamp(28px,4vw,48px)] leading-[1.6] font-normal tracking-[0.05em] text-[#1a1a1a] mb-[64px] relative inline-flex items-center gap-4 pb-2">
                          <span>hello@iamuxui.dev</span>
                          
                          {/* Flecha grande con movimiento */}
                          <span className="text-[0.6em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:-translate-y-2 group-hover:translate-x-2">
                            ↗
                          </span>

                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-500 ease-out group-hover:w-full" />
                    </a>

                    {/* --- LINKS HORIZONTALES --- */}
                    <div className="flex flex-row flex-wrap items-center gap-[40px]">
  
                        {/* LINKEDIN */}
                        <a 
                          href="https://linkedin.com/in/arturo-mendoza-rendon/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group relative flex items-center gap-2 text-[12px] uppercase font-normal tracking-[0.2em] leading-[1.6] text-[#888888] hover:text-[#1a1a1a] pb-1 "
                        >
                          <span>LINKEDIN</span>
                          <span className="transition-transform duration-400 ease-out transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            ↗
                          </span>
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
                        </a>

                        {/* RESUME */}
                        <a 
                          href="/path-to-your-resume.pdf" 
                          download 
                          className="group relative flex items-center gap-2 text-[12px] uppercase font-normal tracking-[0.2em] leading-[1.6] text-[#888888] hover:text-[#1a1a1a] pb-1"
                        >
                          <span>RESUME</span>
                          <span className="transition-transform duration-400 ease-out transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            ↗
                          </span>
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
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