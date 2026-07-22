import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import sayonaLogo from '../assets/sayona-logo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onQuote: () => void;
}

const Navbar = ({ currentPage, onNavigate, onQuote }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const handleNav = (page: string) => {
    onNavigate(page.toLowerCase());
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black shadow-2xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('Home')}
          className="flex items-center gap-3 group"
        >
          <img
            src={sayonaLogo}
            alt="Sayona International"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="text-left">
            <div className="text-white font-black text-sm leading-tight tracking-widest uppercase">Sayona</div>
            <div className="text-yellow-400 text-[10px] tracking-widest uppercase font-medium">International</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                currentPage === link.toLowerCase()
                  ? 'text-yellow-400'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  currentPage === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onQuote}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-2.5 rounded-none transition-all duration-200 tracking-wider uppercase hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] active:scale-95"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 transition-transform duration-200 hover:scale-110"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-screen bg-black/95 backdrop-blur-sm' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-white/10">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`text-left px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200 border-l-2 ${
                currentPage === link.toLowerCase()
                  ? 'text-yellow-400 border-yellow-400 bg-yellow-400/5'
                  : 'text-white/70 border-transparent hover:text-white hover:border-white/30'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { onQuote(); setMenuOpen(false); }}
            className="mt-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-3 tracking-wider uppercase transition-all duration-200"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
