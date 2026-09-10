import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  return (
    <ReactLenis root>
      <div className="bg-background text-text min-h-screen selection:bg-primary/30 w-full overflow-hidden flex flex-col relative">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </Router>
      </div>
    </ReactLenis>
  );
}

export default App;
