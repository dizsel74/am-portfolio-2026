const GridContainer = ({ children, className = "" }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* px-[10px]: Mobile (iPhone)
         md:px-[40px]: Tablet/Laptop pequeña
         lg:px-[60px]: Laptop estándar
         xl:px-[110px]: Desktop (La medida original de Gallerist)
      */}
      {/* <div className={`px-[10px] md:px-[40px] lg:px-[60px] xl:px-[110px] grid grid-cols-12 gap-4 md:gap-6 ${className}`}>
        {children}
      </div>*/}
      <div className={`
        /* Breakpoint 3: Móvil < 480px */
        px-[20px] grid grid-cols-1 gap-4
        
        /* Breakpoint 2: Móvil/Tablet < 768px */
        md:px-[30px] md:grid-cols-6 md:gap-6
        
        /* Breakpoint 1: Tablet/Laptop < 1024px */
        lg:px-[60px] lg:grid-cols-12
        
        /* Desktop Original: > 1280px */
        xl:px-[110px]
        
        ${className} `}>
        {children}
      </div>
    </div>
  );
};

export default GridContainer;