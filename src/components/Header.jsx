import { useState } from 'react';
import GridContainer from './GridContainer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'my work', href: '#work' },
    { name: 'about me', href: '#about' },
    { name: 'contact me', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/20 backdrop-blur-md">
      <GridContainer className="h-[80px] flex items-center">
        
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex col-span-12 gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="group relative text-[16px] font-normal lowercase text-[#545454] hover:text-[#1a1a1a] tracking-[0.1em] transition-colors duration-300 pb-1"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON (MENU / CLOSE) */}
        <div className="md:hidden col-span-12 flex justify-start">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative text-[12px] font-normal tracking-[0.15em] uppercase focus:outline-none z-[110] text-[#767676] hover:text-[#1a1a1a] transition-colors duration-300 pb-1"
          >
            <span className="inline-flex items-center">
              {isOpen ? 'CLOSE' : 'MENU'}
              <span className="ml-2">{isOpen ? '✕' : '—'}</span>
            </span>
            {/* Línea animada también en el botón de menú */}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full" />
          </button>
        </div>
      </GridContainer>

      {/* MOBILE MENU OVERLAY */}
      <div className={`
        fixed inset-0 z-[100] h-screen w-screen
        bg-white/98 backdrop-blur-md 
        transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        md:hidden
      `}>
        <div className="flex flex-col items-start justify-center h-full px-10 gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="group relative text-[32px] font-normal lowercase tracking-[0.1em] text-[#767676] hover:text-[#1a1a1a] transition-all pb-1"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;