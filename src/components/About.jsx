import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import TextScrollAnimation from './ui/TextScrollAnimation';
import beachIdeaBg from '../assets/goa-sketch/beach-idea2.jpg';

const About = () => {
  return (
    <Section id="about" className="bg-surface relative overflow-hidden text-white">
      {/* Background image — liquid fill reveal from bottom-left */}
      <motion.div
        initial={{ clipPath: "circle(0% at 100% 0%)" }}
        whileInView={{ clipPath: "circle(150% at 100% 0%)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${beachIdeaBg})` }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -inset-4 border border-primary/20 rounded-t-full rounded-b-md transform -rotate-3 z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80"
            alt="Fashion Model"
            className="relative z-10 w-full h-[400px] md:h-[600px] object-cover rounded-t-full rounded-b-md shadow-2xl"
          />
          {/* Decorative elements */}
          <div className="absolute bottom-10 -right-8 glass-card p-6 z-20 hidden md:block">
            <p className="font-heading text-4xl text-primary font-bold mb-1">3 Days</p>
            <p className="text-xs uppercase tracking-widest text-text-muted">Of Glamour & Talent</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-6 text-primary uppercase">
            <TextScrollAnimation text="Where Dreams Meet Destination" className="justify-start" />
          </h2>
          <p className="text-lg md:text-xl text-primary font-heading italic mb-8">Experience Goa. Live the Moment.</p>

          <div className="space-y-6 text-text-secondary font-light">
            <p>
              Witness the world's longest beach fashion ramp walk set against the breathtaking backdrop of Goa, India. The Goa Moments Festival of India 2026 is a world record scale spectacle combining tourism, fashion, cinema, culture, and investment.
            </p>
            <p>
              Our mission is to bring together fashion, nature, and passion like never before. From exclusive international showcases to Bollywood talent hunts, experience a fusion of global luxury and rich Indian heritage on the sandy shores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <div>
              <div className="w-12 h-px bg-accent mb-4"></div>
              <h4 className="font-heading text-xl text-white mb-2">Tourism</h4>
              <p className="text-sm text-text-muted">Explore the ultimate beachfront luxury destination.</p>
            </div>
            <div>
              <div className="w-12 h-px bg-primary mb-4"></div>
              <h4 className="font-heading text-xl text-white mb-2">Fashion</h4>
              <p className="text-sm text-text-muted">Top designers, resort wear, and sustainable fashion.</p>
            </div>
            <div>
              <div className="w-12 h-px bg-bronze mb-4"></div>
              <h4 className="font-heading text-xl text-white mb-2">Cinema</h4>
              <p className="text-sm text-text-muted">Bollywood, Kollywood & Sandalwood integrations.</p>
            </div>
            <div>
              <div className="w-12 h-px bg-primary-light mb-4"></div>
              <h4 className="font-heading text-xl text-white mb-2">Culture</h4>
              <p className="text-sm text-text-muted">Music, dance, and global cultural fusion.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
