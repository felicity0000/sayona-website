import { useEffect, useState, type ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetails';
import NotFound from './pages/NotFound';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsappButton';
import Preloader from './components/Preloader';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();
  const onQuote = () => setQuoteOpen(true);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white">
        <Preloader />
        <ScrollToTop />
        <Navbar onQuote={onQuote} />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home onQuote={onQuote} /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/services/:slug" element={<PageTransition><ServiceDetail onQuote={onQuote} /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}

export default App;
