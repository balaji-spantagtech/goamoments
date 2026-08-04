import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { staggerContainer, fadeUp } from '../utils/animations';
import { Crown, Shirt, Clapperboard, Award, Handshake, Briefcase, Music, Star, Camera } from 'lucide-react';

const highlights = [
  {
    icon: <Crown className="text-accent" size={32} />,
    title: "Miss Goa Moments 2026",
    desc: "The hunt for the next Tourism Ambassador",
    borderColor: "border-accent/30"
  },
  {
    icon: <Shirt className="text-primary" size={32} />,
    title: "International Fashion",
    desc: "Top Designers | Luxury Brands | Resort Wear",
    borderColor: "border-primary/30"
  },
  {
    icon: <Clapperboard className="text-bronze" size={32} />,
    title: "Bollywood Talent Hunt",
    desc: "Acting | Modeling | Dancing | Singing",
    borderColor: "border-bronze/30"
  },
  {
    icon: <Award className="text-primary-light" size={32} />,
    title: "Excellence Awards",
    desc: "Honoring Excellence in Tourism & Hospitality",
    borderColor: "border-primary-light/30"
  },
  {
    icon: <Handshake className="text-success" size={32} />,
    title: "Investment Forum",
    desc: "Meet Investors | Build Global Partnerships",
    borderColor: "border-success/30"
  },
  {
    icon: <Briefcase className="text-accent-dark" size={32} />,
    title: "Lifestyle Expo",
    desc: "Explore & Connect Across Travel & Hospitality",
    borderColor: "border-accent-dark/30"
  },
  {
    icon: <Music className="text-primary" size={32} />,
    title: "Cultural Evenings",
    desc: "Music | Dance | Folk Traditions | Global Fusion",
    borderColor: "border-primary/30"
  },
  {
    icon: <Star className="text-primary-light" size={32} />,
    title: "Celebrity Gala Night",
    desc: "Red Carpet | Entertainment | Celebration",
    borderColor: "border-primary-light/30"
  },
  {
    icon: <Camera className="text-accent" size={32} />,
    title: "Media & Creators",
    desc: "Global Coverage & Influencer Collaborations",
    borderColor: "border-accent/30"
  }
];

const Collections = () => {
  return (
    <Section id="highlights" title="Festival Highlights" subtitle="Experience The Spectacle" className="bg-background">
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
            className={`glass-card p-8 border-t-2 ${item.borderColor} hover:-translate-y-2 transition-transform duration-300 group`}
          >
            <div className="mb-6 p-4 bg-surface rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-3">{item.title}</h3>
            <p className="text-sm text-text-secondary font-light">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Collections;
