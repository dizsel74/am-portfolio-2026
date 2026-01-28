import Header from './components/Header';
import VisualGrid from './components/VisualGrid';
import GridContainer from './components/GridContainer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div id="top" className="relative min-h-screen font-instrument selection:bg-black selection:text-white overflow-x-hidden">
     {/*<VisualGrid />*/}
      <Header />

      <main className="pt-32 md:pt-48 lg:pt-64 pb-4">{/*pb-32 */}
        <GridContainer className="items-end">
          <div className="col-span-1 md:col-span-4 lg:col-span-7 flex flex-col justify-end pb-4 lg:pb-[80px]">
  <h2 className="text-[clamp(40px,6vw,96px)] leading-[0.9] font-normal tracking-[0.02em] lowercase">
    crafting pixels,<br />
    writing code.
  </h2>
</div>

         

          <div className="col-span-1 md:col-span-2 lg:col-span-5 flex justify-end md:justify-end items-end overflow-visible">
  <h1 className="text-[clamp(140px,28vw,400px)] font-bold leading-[0.7] flex antialiased shrink-0 select-none" style={{ marginRight: 'var(--am-fine-tune)' }}>
    <span className="relative z-10 -mr-[0.135em] block transform-gpu">A</span>
    <span className="relative z-0 block transform-gpu">M</span>
  </h1>
</div>
        </GridContainer>

        {/* SECCIÓN: Caja Negra Informativa original  <section className="mt-20/>*/}
        <section className="mt-20 bg-black w-full text-white " style={{marginTop: '0px'}}>
          <GridContainer>
            {/* La caja ocupa las 12 columnas del grid principal */}
            <div className="col-span-12 bg-black text-white py-24 md:py-32">

              {/* Creamos un grid interno para alinear el texto con el layout global */}
              {/* Usamos px-0 porque el GridContainer ya nos da el margen de 110px */}
              <div className="grid grid-cols-12 gap-6 px-0">

                {/* El texto va de la columna 2 a la 11 (Deja 1 libre a cada lado) */}
                <div className="col-start-2 col-span-10">

                  <p className="text-[24px] lg:text-[24px] leading-relaxed tracking-[0.05em] font-thin">
                    I craft stunning interfaces for clean development, closing the gap between vision and code. Being a <span class="font-bold">UX/UI designer</span> who speaks “Dev”, I’m able to turn complex problems into seamless digital experiences.
                  </p>

                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] mt-8  text-[#767676] tracking-[0.05em] ml-auto">
                      - Arturo Mendoza -
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </GridContainer>
        </section>

    {/* SECCIÓN: MY WORK ------------------------------*/}

      <section id="work" className="py-24 md:py-32">
        
        {/* CABECERA DE SECCIÓN */}
        <GridContainer className="mb-16 md:mb-24 lg:mb-40">
          <div className="col-span-12">
            <h2 className="text-[clamp(40px,6vw,96px)] font-normal tracking-[0.02em] lowercase mb-0 lg:mb-0">
              my work
            </h2>
            <div className="w-full h-[1px] bg-[#767676]" />
          </div>
        </GridContainer>

        {/* CONTENEDOR DE GALERÍAS CON GAP RESPONSIVO */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-[160px]">
          
          {/* --- PROYECTO 01 (NON) --- */}
         <GridContainer>
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-6 items-center group">
              
              {/* Descripción: COL 1 a COL 3 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-8 order-2 lg:order-1">
                <div className="flex flex-col gap-3">
                  
                  {/* Etiqueta + Línea Líder */}
                  <div className="flex items-center gap-4 overflow-hidden">
                    <span className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#767676] whitespace-nowrap">
                      01 UI DESIGNER
                    </span>
                    <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                  </div>

                  {/* Título: 10% Tracking, Hover en Negro */}
                  <h3 className="text-[clamp(24px,2.5vw,32px)] leading-tight font-medium uppercase tracking-[0.1em] text-[#1a1a1a]">
                    USAA
                  </h3>
                </div>

                {/* Párrafo: 160% line-height (leading-relaxed) */}
                <p className="text-[clamp(18px,1.8vw,22px)] leading-relaxed text-[#4A4A4A] tracking-[0.1em]">
                  Achieving cross-platform UX & UI consistency through Design System, ensuring visual and functional alignment across all company’s lines of business.
                </p>

                {/* Link: Reforzado a Negro Puro con Línea total */}
                <a href="#" 
                  className="group/link relative inline-flex items-center text-[12px] font-normal uppercase tracking-[0.1em] text-[#888888] hover:text-[#000000] transition-colors duration-300 pb-1 w-fit">
                  <span className="flex items-center">
                    VIEW PROJECT
                    <span className="ml-[8px] transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      ↗
                    </span>
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#000000] transition-all duration-300 ease-out group-hover/link:w-full" />
                </a>
              </div>

              {/* Espaciador: COL 4 a 5 */}
              <div className="hidden lg:block lg:col-span-2 order-2" />

              {/* Imagen: COL 6 a COL 12 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-7 overflow-hidden order-1 lg:order-3">
                {/* Contenedor con Aspect Ratio y Fondo de Carga (Placeholder) */}
                <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden relative">
                  <img 
                    src="src/assets/usaa_1600X1000.webp" 
                    alt="USAA Project Case Study"
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-0 transition-opacity duration-700"
                    onLoad={(e) => e.target.classList.remove('opacity-0')}
                  />
                  {/* Overlay sutil (opcional para dar tono) */}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
         </GridContainer>

       
          {/* --- PROYECTO 02 (PAR) --- */}
          <GridContainer>
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-6 items-center group">
              
              {/* Imagen: COL 1 a COL 7 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-7 overflow-hidden order-1">
                <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden relative">
                  <img 
                    src="/src/assets/GE_1600X1000.webp" 
                    alt="GE Appliances Case Study"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-0 transition-opacity duration-700"
                    onLoad={(e) => e.target.classList.remove('opacity-0')}
                  />
                  {/* Overlay sutil para profundidad */}
                  <div className="absolute inset-0 bg-black/[0.02] pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Espaciador central de 2 columnas */}
              <div className="hidden lg:block lg:col-span-2 order-2" />

              {/* Descripción: COL 10 a COL 12 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-8 order-2">
                <div className="flex flex-col gap-3">
                  
                  {/* Etiqueta + Línea Líder */}
                  <div className="flex items-center gap-4 overflow-hidden">
                    <span className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#767676] whitespace-nowrap">
                      02 UX/UI DESIGNER & DEVELOPER
                    </span>
                    <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                  </div>

                  {/* Título: 10% Tracking, Hover en Negro */}
                  <h3 className="text-[clamp(24px,2.5vw,32px)] leading-tight font-medium uppercase tracking-[0.1em] text-[#1a1a1a]">
                    GE Appliances
                  </h3>
                </div>

                {/* Párrafo: 160% line-height */}
                <p className="text-[clamp(18px,1.8vw,22px)] leading-relaxed text-[#4A4A4A] tracking-[0.1em]">
                  Visual redesign for brand's digital experience, showcasing its online evolution and its strong commitment to society.
                </p>
                
                {/* Link: Reforzado a Negro Puro (#000000) */}
                <a href="#" 
                  className="group/link relative inline-flex items-center text-[12px] font-normal uppercase tracking-[0.1em] text-[#888888] hover:text-[#000000] transition-colors duration-300 pb-1 w-fit">
                  <span className="flex items-center">
                    VIEW PROJECT
                    <span className="ml-[8px] transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      ↗
                    </span>
                  </span>

                  {/* Línea animada total hasta la flecha */}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#000000] transition-all duration-300 ease-out group-hover/link:w-full" />
                </a>

              </div>
            </div>
          </GridContainer>


         {/* --- PROYECTO 03 (NON) --- */}
          <GridContainer>
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-6 items-center group">
              
              {/* Descripción: COL 1 a COL 3 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-8 order-2 lg:order-1">
                <div className="flex flex-col gap-3">
                  
                  {/* Etiqueta + Línea Líder */}
                  <div className="flex items-center gap-4 overflow-hidden">
                    <span className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#767676] whitespace-nowrap">
                      03 UI DESIGNER
                    </span>
                    <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                  </div>

                  {/* Título: 10% Tracking, Hover en Negro */}
                  <h3 className="text-[clamp(24px,2.5vw,32px)] leading-tight font-medium uppercase tracking-[0.1em] text-[#1a1a1a]">
                    CAF&Eacute; Appliances
                  </h3>
                </div>

                {/* Párrafo: 160% line-height */}
                <p className="text-[clamp(18px,1.8vw,22px)] leading-relaxed text-[#4A4A4A] tracking-[0.1em]">
                  Design of the digital experience captures the essence of CAF&Eacute; Appliances in a modern and elegant aesthetic that defines luxury in home appliances.
                </p>

                {/* Link: Reforzado a Negro Puro (#000000) con Línea Total */}
                <a href="#" 
                  className="group/link relative inline-flex items-center text-[12px] font-normal uppercase tracking-[0.1em] text-[#888888] hover:text-[#000000] transition-colors duration-300 pb-1 w-fit">
                  <span className="flex items-center">
                    VIEW PROJECT
                    <span className="ml-[8px] transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      ↗
                    </span>
                  </span>
                  {/* Línea animada hasta el final de la flecha */}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#000000] transition-all duration-300 ease-out group-hover/link:w-full" />
                </a>
              </div>

              {/* Espaciador central */}
              <div className="hidden lg:block lg:col-span-2 order-2" />

              {/* Imagen: COL 6 a COL 12 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-7 overflow-hidden order-1 lg:order-3">
                <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden relative">
                  <img 
                    src="/src/assets/cafe_1600X1000.webp" 
                    alt="Café Appliances Case Study"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-0 transition-opacity duration-700"
                    onLoad={(e) => e.target.classList.remove('opacity-0')}
                  />
                  {/* Overlay sutil para consistencia visual */}
                  <div className="absolute inset-0 bg-black/[0.02] pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

            </div>
          </GridContainer>

          {/* --- PROYECTO 04 (PAR) --- */}
          <GridContainer>
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-6 items-center group">
              
              {/* Imagen: COL 1 a COL 7 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-7 overflow-hidden order-1">
                <div className="aspect-[16/10] bg-[#F5F5F5] overflow-hidden relative">
                  <img 
                    src="/src/assets/pascual_1600X1000.webp" 
                    alt="Pascual B2B Platform Case Study"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-0 transition-opacity duration-700"
                    onLoad={(e) => e.target.classList.remove('opacity-0')}
                  />
                  {/* Overlay sutil para mantener el estilo Gallerist */}
                  <div className="absolute inset-0 bg-black/[0.02] pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Espaciador central de 2 columnas */}
              <div className="hidden lg:block lg:col-span-2 order-2" />

              {/* Descripción: COL 10 a COL 12 */}
              <div className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col gap-8 order-2">
                <div className="flex flex-col gap-3">
                  
                  {/* Etiqueta + Línea Líder */}
                  <div className="flex items-center gap-4 overflow-hidden">
                    <span className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#767676] whitespace-nowrap">
                      04 UX/UI DESIGNER & DEVELOPER
                    </span>
                    <div className="h-[1px] bg-[#F0F0F0] flex-grow" />
                  </div>

                  {/* Título: 10% Tracking, Texto en #1a1a1a */}
                  <h3 className="text-[clamp(24px,2.5vw,32px)] leading-tight font-medium uppercase tracking-[0.1em] text-[#1a1a1a]">
                    Pascual
                  </h3>
                </div>

                {/* Párrafo: 160% line-height para legibilidad B2B */}
                <p className="text-[clamp(18px,1.8vw,22px)] leading-relaxed text-[#4A4A4A] tracking-[0.1em]">
                  UX/UI design and development for the B2B platform, defining web visual identity and communication tone, establishing a professional and efficient digital presence.
                </p>
                
                {/* Link: Negro Puro (#000000) en Hover para máxima percepción del cambio */}
                <a href="#" 
                  className="group/link relative inline-flex items-center text-[12px] font-normal uppercase tracking-[0.1em] text-[#888888] hover:text-[#000000] transition-colors duration-300 pb-1 w-fit">
                  <span className="flex items-center">
                    VIEW PROJECT
                    <span className="ml-[8px] transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      ↗
                    </span>
                  </span>

                  {/* Línea animada: Cubre texto + flecha */}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#000000] transition-all duration-300 ease-out group-hover/link:w-full" />
                </a>

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
                  <li>Ai Co-Design</li>
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


      </main>
      <BackToTop /> {/* Se renderiza en todas las páginas */}
    </div>
  );
}

export default App;