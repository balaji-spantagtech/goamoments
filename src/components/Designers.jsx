import React from 'react';
import { motion } from 'motion/react';
import Section from './ui/Section';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Globe } from 'lucide-react';
import { Marquee } from './ui/marquee';

const designers = [
  {
    name: "Aanya Sharma",
    specialty: "Resort Wear",
    image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=80"
  },
  {
    name: "Vikram Singh",
    specialty: "Sustainable Luxury",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Elena Rossi",
    specialty: "Avant-Garde",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  },
  {
    name: "Kabir Das",
    specialty: "Traditional Fusion",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
  }
];

const Designers = () => {
  return (
    <Section id="designers" title="Top Designers" subtitle="Global Talent Showcase" className="bg-background">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      >
        <Marquee pauseOnHover className="[--duration:30s]">
          {designers.map((designer, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-md bg-surface w-64 sm:w-80 mx-4 cursor-pointer"
            >
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img 
                  src={designer.image} 
                  alt={designer.name} 
                  className="w-full h-[300px] sm:h-[400px] object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Gold Border on Hover */}
              <div className="absolute inset-4 border border-primary/0 group-hover:border-primary/50 transition-colors duration-500 z-10 pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-1">{designer.name}</h3>
                <p className="text-primary text-sm tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{designer.specialty}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 font-sans text-xs tracking-widest">
                  <a href="#" className="text-white hover:text-primary transition-colors">IG</a>
                  <a href="#" className="text-white hover:text-primary transition-colors">X</a>
                  <a href="#" className="text-white hover:text-primary transition-colors flex items-center gap-1"><Globe size={14} /> WEB</a>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
        
        {/* Seamless Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-30"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-30"></div>
      </motion.div>
    </Section>
  );
};

export default Designers;
