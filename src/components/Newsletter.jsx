import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import TextScrollAnimation from './ui/TextScrollAnimation';

const Newsletter = () => {
  return (
    <Section id="newsletter" className="bg-surface py-32 border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white uppercase mb-6">
          <TextScrollAnimation text="Join The Front Row" />
        </h2>
        <p className="text-text-secondary font-light mb-10">Subscribe to receive exclusive updates on the Goa Moments Festival, designer announcements, and VIP ticket access.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="px-6 py-4 bg-background border border-border text-white focus:outline-none focus:border-primary w-full sm:w-96 rounded-sm transition-colors"
            required
          />
          <Button variant="primary" type="submit" className="py-4">Subscribe</Button>
        </form>
      </div>
    </Section>
  );
};

export default Newsletter;
