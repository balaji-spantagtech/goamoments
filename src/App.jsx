import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import UpcomingShows from './components/UpcomingShows';
import Designers from './components/Designers';
import BehindTheScenes from './components/BehindTheScenes';
import RunwayExperience from './components/RunwayExperience';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root>
      <div className="bg-background text-text min-h-screen selection:bg-primary/30 w-full overflow-hidden flex flex-col relative">
        <Navbar />
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
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
