import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

const Home = lazy(() => import('./pages/Home'));
const BookingPage = lazy(() => import('./pages/BookingPage'));

function App() {
  return (
    <ReactLenis root>
      <div className="bg-background text-text min-h-screen selection:bg-primary/30 w-full overflow-hidden flex flex-col relative">
        <Router>
          <Navbar />
          <Suspense fallback={<main className="min-h-screen bg-background" aria-label="Loading page" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<BookingPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTopButton />
        </Router>
      </div>
    </ReactLenis>
  );
}

export default App;
