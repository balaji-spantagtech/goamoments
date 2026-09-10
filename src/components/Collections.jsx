import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { staggerContainer, fadeUp } from '../utils/animations';
import { Crown, Shirt, Clapperboard, Award, Handshake, Briefcase, Music, Star, Camera } from 'lucide-react';
import TextScrollAnimation from './ui/TextScrollAnimation';
import beachBg from '../assets/goa-sketch/beach-bg1.png';

const highlights = [
  {
    icon: <Crown className="text-accent" size={32} />,
    title: "Miss Goa Moments 2026",
    desc: "The hunt for the next Tourism Ambassador",
    borderColor: "border-accent/30",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80"
  },
  {
    icon: <Shirt className="text-primary" size={32} />,
    title: "International Fashion",
    desc: "Top Designers | Luxury Brands | Resort Wear",
    borderColor: "border-primary/30",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
  },
  {
    icon: <Clapperboard className="text-bronze" size={32} />,
    title: "Bollywood Talent Hunt",
    desc: "Acting | Modeling | Dancing | Singing",
    borderColor: "border-bronze/30",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
  },
  {
    icon: <Award className="text-primary-light" size={32} />,
    title: "Excellence Awards",
    desc: "Honoring Excellence in Tourism & Hospitality",
    borderColor: "border-primary-light/30",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
  },
  {
    icon: <Handshake className="text-success" size={32} />,
    title: "Investment Forum",
    desc: "Meet Investors | Build Global Partnerships",
    borderColor: "border-success/30",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
  },
  {
    icon: <Briefcase className="text-accent-dark" size={32} />,
    title: "Lifestyle Expo",
    desc: "Explore & Connect Across Travel & Hospitality",
    borderColor: "border-accent-dark/30",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80"
  },
  {
    icon: <Music className="text-primary" size={32} />,
    title: "Cultural Evenings",
    desc: "Music | Dance | Folk Traditions | Global Fusion",
    borderColor: "border-primary/30",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80"
  },
  {
    icon: <Star className="text-primary-light" size={32} />,
    title: "Celebrity Gala Night",
    desc: "Red Carpet | Entertainment | Celebration",
    borderColor: "border-primary-light/30",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
  },
  {
    icon: <Camera className="text-accent" size={32} />,
    title: "Media & Creators",
    desc: "Global Coverage & Influencer Collaborations",
    borderColor: "border-accent/30",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
  }
];

const Collections = () => {
  return (
    <Section id="highlights" className="bg-background relative">
      <div className="text-center mb-14 relative flex flex-col items-center justify-center min-h-[150px]">
        {/* Background Sketch */}
        <div className="absolute inset-0 z-0 flex items-center justify-center  pointer-events-none">
          <img src={beachBg} alt="Goa Sketch" className="w-64 md:w-80 object-contain opacity-70" />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-heading uppercase overflow-hidden">
            <TextScrollAnimation text="Festival Highlights" />
          </h2>
          <p className="text-primary mt-4 tracking-widest uppercase text-sm">Experience The Spectacle</p>
          <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {highlights.map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeUp}
            className={`relative overflow-hidden glass-card p-8 border-t-2 ${item.borderColor} hover:-translate-y-2 transition-transform duration-300 group`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500" 
              style={{ backgroundImage: `url(${item.image})` }} 
            />
            {/* Dark Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-0"></div>

            <div className="relative z-10">
              <div className="mb-6 p-4 bg-surface/80 backdrop-blur-md rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-3 group-hover:text-primary-light transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-text-secondary font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Collections;
