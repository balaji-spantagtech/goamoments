import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Walking the longest beach runway at Goa Moments was the highlight of my career. The fusion of nature and high fashion is unparalleled.",
    name: "Isabella Martinez",
    role: "International Supermodel"
  },
  {
    quote: "A spectacular showcase of Indian heritage meeting global luxury. The organization and scale of this festival sets a new benchmark.",
    name: "Rajesh Khanna",
    role: "Lead Designer"
  },
  {
    quote: "As an investor in luxury tourism, this event is exactly what the industry needs. A breathtaking spectacle.",
    name: "Sophia Chen",
    role: "Hospitality Executive"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials" className="bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Quote className="text-primary mx-auto mb-8 opacity-50" size={48} />
        
        <div className="h-64 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl font-heading text-white italic mb-8 leading-relaxed">"{testimonials[currentIndex].quote}"</p>
              <h4 className="text-primary tracking-widest uppercase text-sm font-bold">{testimonials[currentIndex].name}</h4>
              <p className="text-text-muted text-xs uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button onClick={prev} className="p-3 border border-border rounded-full text-white hover:text-primary hover:border-primary transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-3 border border-border rounded-full text-white hover:text-primary hover:border-primary transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
