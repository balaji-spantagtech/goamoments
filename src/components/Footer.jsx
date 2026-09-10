import React from 'react';
import TextScrollAnimation from './ui/TextScrollAnimation';
import footerImg from '../assets/footer-img/img.png';

const Footer = () => {
  return (
    <footer className="bg-background pt-24 pb-8 border-t border-border relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerImg})` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-heading text-primary uppercase font-bold mb-4">
            <TextScrollAnimation text="Goa Moments" className="justify-start" offset={["start 100%", "end 80%"]} />
          </h2>
          <p className="text-sm text-text-secondary font-light mb-6">Witness the world's longest beach fashion ramp walk. A spectacle of fashion, culture, and tourism.</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors">
              FB
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors">
              X
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-heading text-xl uppercase mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#home" className="text-sm text-text-muted hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="text-sm text-text-muted hover:text-primary transition-colors">About</a></li>
            <li><a href="#highlights" className="text-sm text-text-muted hover:text-primary transition-colors">Highlights</a></li>
            <li><a href="#schedule" className="text-sm text-text-muted hover:text-primary transition-colors">Schedule</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading text-xl uppercase mb-6">Information</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Designers</a></li>
            <li><a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Tickets</a></li>
            <li><a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Press & Media</a></li>
            <li><a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Sponsorships</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading text-xl uppercase mb-6">Contact</h4>
          <ul className="space-y-3">
            <li className="text-sm text-text-muted">info@goamoments.com</li>
            <li className="text-sm text-text-muted">+91 88888 12345</li>
            <li className="text-sm text-text-muted">Goa, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-xs text-text-muted">© 2026 Goa Moments Festival of India. All Rights Reserved.</p>
        <p className="text-xs text-primary uppercase tracking-widest">Where Dreams Meet Destination</p>
      </div>
    </footer>
  );
};

export default Footer;
