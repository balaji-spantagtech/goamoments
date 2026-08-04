import React from 'react';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const baseClasses = 'inline-block px-8 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-500 relative overflow-hidden group border';
  
  const variants = {
    primary: 'bg-brand border-brand text-white hover:brightness-110',
    accent: 'bg-accent border-accent text-white hover:bg-white hover:text-background hover:border-white',
    outline: 'bg-transparent border-brand text-white hover:bg-brand hover:text-white',
    secondary: 'bg-transparent border-white text-white hover:bg-white hover:text-background',
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element 
      href={href} 
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`} 
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Hover fill effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-black/20 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
      )}
      {variant === 'outline' && (
        <div className="absolute inset-0 h-full w-full bg-brand transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
      )}
      {variant === 'secondary' && (
        <div className="absolute inset-0 h-full w-full bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
      )}
    </Element>
  );
};

export default Button;
export { Button };
