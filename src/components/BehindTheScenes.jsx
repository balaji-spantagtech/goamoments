import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import TextScrollAnimation from './ui/TextScrollAnimation';
import Carousel from './ui/carousel';

const allCarouselItems = [
  {
    title: "Makeup & Styling",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80"
  },
  {
    title: "Backstage Rehearsals",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
  },
  {
    title: "Designer Fittings",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80"
  },
  {
    title: "Lights & Camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
  },
  {
    title: "Runway Construction",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    title: "VIP Lounge Prep",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80"
  },
  {
    title: "Media Briefing",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
  },
  {
    title: "Wardrobe Check",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80"
  },
  {
    title: "Choreography",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80"
  },
  {
    title: "Final Rehearsal",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
  }
];

const BehindTheScenes = () => {
  return (
    <Section id="behind-the-scenes" className="py-24 bg-background overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase font-heading">
          <TextScrollAnimation text="Behind The Scenes" />
        </h2>
        <p className="text-primary mt-4 tracking-widest uppercase text-sm">The Making Of The Spectacle</p>
        <div className="h-px w-24 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="w-full py-12">
        <Carousel 
          slides={allCarouselItems.map((item) => ({ 
            src: item.image, 
            title: item.title, 
            button: "Explore" 
          }))} 
        />
      </div>
    </Section>
  );
};

export default BehindTheScenes;
