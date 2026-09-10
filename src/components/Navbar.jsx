import React, { useState } from 'react';
import { 
  Navbar as AceternityNavbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle, 
  NavbarButton 
} from './ui/resizable-navbar';
import goaGovtLogo from '../assets/hero-logo/GOA-GOVT.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const items = [
    { name: 'About', link: '/#about' },
    { name: 'Shows', link: '/#shows' },
    { name: 'Designers', link: '/#designers' },
  ];

  return (
    <AceternityNavbar>
      <NavBody className="bg-background/80 border border-border">
        <a href="/" className="relative z-20 mr-8 flex shrink-0 items-center space-x-3 px-2 py-1 text-2xl font-heading text-primary font-bold uppercase tracking-widest whitespace-nowrap">
          <img src={goaGovtLogo} alt="Goa Government Logo" className="h-8 md:h-10 object-contain shrink-0" style={{ filter: 'brightness(0) invert(1)' }} />
          <span>Goa Moments</span>
        </a>
        <NavItems items={items} className="text-white" onItemClick={() => setIsOpen(false)} />
        <div className="flex items-center gap-4 z-20 relative">
          <NavbarButton variant="secondary" href="/#contact" className="text-white hover:text-brand">Contact</NavbarButton>
          <NavbarButton variant="primary" href="/booking" className="bg-brand text-white hover:brightness-110 border-none">Get Tickets</NavbarButton>
        </div>
      </NavBody>
      
      <MobileNav className="bg-background/90 border border-border">
        <MobileNavHeader className="px-6 py-2 w-full">
          <a href="/" className="flex items-center space-x-3 text-xl font-heading text-primary font-bold uppercase tracking-widest">
            <img src={goaGovtLogo} alt="Goa Government Logo" className="h-8 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            <span>Goa Moments</span>
          </a>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="bg-surface border border-border">
          <div className="flex flex-col gap-4 px-4 w-full">
            {items.map((item, idx) => (
              <a key={idx} href={item.link} className="text-white text-lg hover:text-brand uppercase tracking-wider font-light transition-colors" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
            <NavbarButton variant="primary" href="/booking" className="w-full text-center bg-brand text-white mt-4 hover:brightness-110 border-none">Get Tickets</NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  );
};

export default Navbar;
