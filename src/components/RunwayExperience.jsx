import React from 'react';
import { motion } from 'motion/react';
import Section from './ui/Section';
import { staggerContainer, fadeUp } from '../utils/animations';
import { NumberTicker } from './ui/number-ticker';
import TextScrollAnimation from './ui/TextScrollAnimation';

const stats = [
  { value: 150, suffix: "+", label: "Fashion Shows" },
  { value: 500, suffix: "+", label: "Top Models" },
  { value: 30, suffix: "+", label: "Countries" },
  { value: 2, suffix: "M+", label: "Global Viewers" }
];

const RunwayExperience = () => {
  return (
    <Section id="experience" className="bg-surface relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/5 rounded-full z-0"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase font-heading">
          <TextScrollAnimation text="The Runway Experience" />
        </h2>
        <p className="text-primary mt-4 tracking-widest uppercase text-sm">A World Record Scale</p>
        <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 max-w-5xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="text-center"
          >
            <div className="text-4xl sm:text-5xl md:text-7xl font-sans text-primary font-bold mb-4 flex items-center justify-center">
              <NumberTicker value={stat.value} className="text-primary tracking-normal" />
              <span>{stat.suffix}</span>
            </div>
            <div className="text-sm uppercase tracking-widest text-text-secondary">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default RunwayExperience;
