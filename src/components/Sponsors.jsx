import React from 'react';
import Section from './ui/Section';
import { Marquee } from './ui/marquee';
import TextScrollAnimation from './ui/TextScrollAnimation';

// Import local assets
import incredibleIndia from '../assets/supported-partners/increditable-india-logo1.png';
import ihcl from '../assets/supported-partners/ihcl-logo1.png';
import airIndia from '../assets/supported-partners/air-india-express1.png';
import timesNetwork from '../assets/supported-partners/times-network-logo1.png';
import jio from '../assets/supported-partners/jio-logo1.png';

const sponsors = [
  { 
    title: "INCREDIBLE INDIA", 
    name: "Incredible India",
    logo: incredibleIndia
  },
  { 
    title: "HOSPITALITY PARTNER", 
    name: "IHCL",
    logo: ihcl
  },
  { 
    title: "AIRLINE PARTNER", 
    name: "Air India Express",
    logo: airIndia
  },
  { 
    title: "MEDIA PARTNER", 
    name: "Times Network",
    logo: timesNetwork
  },
  { 
    title: "DIGITAL PARTNER", 
    name: "Jio",
    logo: jio
  }
];

const Sponsors = () => {
  return (
    <Section id="sponsors" className="bg-background py-16">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl text-white uppercase font-heading tracking-widest">
          <TextScrollAnimation text="Supported By" />
        </h2>
        <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center mx-8 md:mx-16">
              
              {/* Partner Block */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <h4 className="text-xs md:text-sm uppercase tracking-widest text-white font-sans text-center">
                  {sponsor.title}
                </h4>
                
                {/* Logo with White Filter for Incredible India, increased sizes */}
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className={`object-contain ${sponsor.name === 'Jio' ? 'h-24 md:h-32' : 'h-20 md:h-28'} opacity-90 hover:opacity-100 transition-opacity duration-300`}
                  style={sponsor.name === 'Incredible India' ? { filter: 'brightness(0) invert(1)' } : {}}
                />
              </div>
              
            </div>
          ))}
        </Marquee>
        
        {/* Seamless Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-30"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-30"></div>
      </div>
      
    </Section>
  );
};

export default Sponsors;
