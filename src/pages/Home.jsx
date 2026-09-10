import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Collections from '../components/Collections';
import UpcomingShows from '../components/UpcomingShows';
import Designers from '../components/Designers';
import BehindTheScenes from '../components/BehindTheScenes';
import RunwayExperience from '../components/RunwayExperience';
import Testimonials from '../components/Testimonials';
import Sponsors from '../components/Sponsors';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Collections />
      <UpcomingShows />
      <Designers />
      <BehindTheScenes />
      <RunwayExperience />
      <Testimonials />
      <Sponsors />
      <Newsletter />
      <Contact />
    </main>
  );
};

export default Home;
