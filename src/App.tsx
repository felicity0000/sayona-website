import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetails';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsappButton';

function App() {
  const [page, setPage] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleSelectService = (slug: string) => {
    setSelectedService(slug);
    setPage('service-detail');
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={setPage} onQuote={() => setQuoteOpen(true)} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onQuote={() => setQuoteOpen(true)} onSelectService={handleSelectService} />;
      case 'service-detail':
        return <ServiceDetail slug={selectedService} onNavigate={setPage} onQuote={() => setQuoteOpen(true)} />;
      case 'projects':
       // return <Projects onQuote={() => setQuoteOpen(true)} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setPage} onQuote={() => setQuoteOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={page === 'service-detail' ? 'services' : page} onNavigate={setPage} onSelectProduct={handleSelectService} onQuote={() => setQuoteOpen(true)} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} onSelectProduct={handleSelectService} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
