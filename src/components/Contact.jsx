import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import Button from './ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch" subtitle="Connect With Us" className="bg-surface">
      <div className="flex flex-col lg:flex-row gap-16">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full bg-background border border-border px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors rounded-sm" />
              <input type="email" placeholder="Your Email" className="w-full bg-background border border-border px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors rounded-sm" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-background border border-border px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors rounded-sm" />
            <textarea placeholder="Message" rows={6} className="w-full bg-background border border-border px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors rounded-sm resize-none"></textarea>
            <Button variant="primary" className="w-full">Send Message</Button>
          </form>
        </motion.div>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col justify-between"
        >
          <div className="space-y-8 mb-12 lg:mb-0">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-background rounded-full text-primary border border-border">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Location</h4>
                <p className="text-text-secondary font-light">Main Beachfront Arena,<br/>Goa, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="p-4 bg-background rounded-full text-primary border border-border">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Phone</h4>
                <p className="text-text-secondary font-light">+91 88888 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-background rounded-full text-primary border border-border">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Email</h4>
                <p className="text-text-secondary font-light">info@goamoments.com</p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 bg-background border border-border flex items-center justify-center opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Map Placeholder */}
            <p className="text-primary uppercase tracking-widest text-sm font-heading">Interactive Map Here</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
