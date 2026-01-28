const VisualGrid = () => {
   return (
    <div className="fixed inset-0 pointer-events-none z-[100] w-full max-w-[1440px] mx-auto">
      <div className="h-full px-[20px] md:px-[30px] lg:px-[60px] xl:px-[110px] grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Generamos las columnas dinámicamente */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full bg-blue-500/5 border-x border-blue-500/10 
              ${i >= 1 ? 'hidden md:block' : ''} 
              ${i >= 6 ? 'md:hidden lg:block' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VisualGrid;

/*<div className="fixed inset-0 pointer-events-none z-[100] w-full max-w-[1440px] mx-auto">
      <div className="h-full px-[20px] md:px-[30px] lg:px-[60px] xl:px-[110px] grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
        }
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full bg-blue-500/5 border-x border-blue-500/10 
              ${i >= 1 ? 'hidden md:block' : ''} 
              ${i >= 6 ? 'md:hidden lg:block' : ''}`}
          />
        ))}
      </div>
    </div>*/