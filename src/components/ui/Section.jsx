import React from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import TextScrollAnimation from './TextScrollAnimation';

const Section = ({ id, className = '', children, title, subtitle }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 relative ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-7xl mx-auto"
      >
        {(title || subtitle) && (
          <div className="mb-14 text-center">
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary uppercase overflow-hidden">
                <TextScrollAnimation text={title} />
              </h2>
            )}
            {subtitle && <p className="text-primary mt-4 tracking-widest uppercase text-sm">{subtitle}</p>}
            <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
