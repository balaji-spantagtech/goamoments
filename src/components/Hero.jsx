import React, { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Button from './ui/Button';
import { TextGenerateEffect } from './ui/text-generate-effect';
import landingBg from '../assets/hero-logo/landing-page.png';

const Hero = () => {
  const [bgScope, bgAnimate] = useAnimate();

  useEffect(() => {
    bgAnimate(
      bgScope.current,
      { clipPath: "circle(150% at 0% 100%)" },
      { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }
    );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image — liquid fill reveal from bottom-left */}
      <div
        ref={bgScope}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingBg})`,
          clipPath: "circle(0% at 0% 100%)",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <div className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-heading font-bold text-primary uppercase leading-none mb-4">
          <TextGenerateEffect
            words="Goa Moments"
            duration={0.8}
            delay={1.6}
            staggerDelay={0.3}
          />
        </div>

        <div className="text-primary-light uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm mb-6">
          <TextGenerateEffect
            words="One Destination. Endless Experiences."
            duration={0.6}
            delay={2.2}
            staggerDelay={0.1}
          />
        </div>

        <div className="text-lg sm:text-xl md:text-3xl font-heading text-white uppercase tracking-[0.1em] sm:tracking-widest mb-8">
          <TextGenerateEffect
            words="Festival of India 2026"
            duration={0.6}
            delay={2.6}
            staggerDelay={0.15}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="glass-card px-8 py-4 border-white/10 rounded-3xl">
            <p className="text-white font-bold text-lg md:text-2xl tracking-widest">27 <span className="text-brand">•</span> 28 <span className="text-brand">•</span> 29</p>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mt-2">November 2026</p>
          </div>
          <div className="glass-card px-8 py-4 border-white/10 rounded-3xl">
            <p className="text-white font-bold text-lg md:text-2xl tracking-widest">GOA <span className="text-brand">•</span> INDIA</p>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mt-2">Beachfront | Luxury | Global</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <div className="text-text-secondary max-w-2xl mx-auto mb-8 text-base md:text-lg font-light px-2">
            <TextGenerateEffect
              words="Witness the world's longest beach fashion ramp walk. A world record scale spectacle."
              duration={0.5}
              delay={3.5}
              staggerDelay={0.08}
              filter={false}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4">
            <Button variant="primary" className="rounded-full flex items-center gap-2">Explore Festival <span>&#10095;</span></Button>
            <Button variant="outline" className="rounded-full flex items-center gap-2">Book Tickets <span>&#10095;</span></Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

