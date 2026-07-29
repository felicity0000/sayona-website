import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import sayonaLogo from '../assets/sayona-logo.png';
import { products } from '../data/servicesData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSelectProduct: (slug: string) => void;
  onQuote: () => void;
}

const Navbar = ({ currentPage, onNavigate, onSelectProduct, onQuote }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Products', 'Contact'];

  const pageFor = (link: string) => (link === 'Products' ? 'services' : link.toLowerCase());

  const handleNav = (link: string) => {
    onNavigate(pageFor(link));
    setMenuOpen(false);
    setMobileProductsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProduct = (slug: string) => {
    onSelectProduct(slug);
    setMenuOpen(false);
    setMobileProductsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
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
            <div className={`font-black text-sm leading-tight tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>Sayona</div>
            <div className="text-yellow-400 text-[10px] tracking-widest uppercase font-medium">International</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = currentPage === pageFor(link);
            const linkColor = isActive
              ? 'text-yellow-400'
              : scrolled
              ? 'text-black/70 hover:text-black'
              : 'text-white/80 hover:text-white';

            if (link === 'Products') {
              return (
                <div key={link} className="relative group/products">
                  <button
                    onClick={() => handleNav(link)}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${linkColor}`}
                  >
                    {link}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover/products:rotate-180" />
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover/products:w-full'
                      }`}
                    />
                  </button>
                  <div
                    className={`fixed inset-x-0 ${scrolled ? 'top-16' : 'top-20'} opacity-0 invisible -translate-y-1 group-hover/products:opacity-100 group-hover/products:visible group-hover/products:translate-y-0 transition-all duration-200 ${
                      scrolled
                        ? 'bg-white border-b border-black/10 shadow-xl'
                        : 'bg-black/90 backdrop-blur-md border-b border-white/10'
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {products.map((p) => (
                        <button
                          key={p.slug}
                          onClick={() => handleProduct(p.slug)}
                          className={`group/item flex items-center gap-3 p-3 text-left transition-colors duration-150 ${
                            scrolled ? 'hover:bg-yellow-400/10' : 'hover:bg-white/10'
                          }`}
                        >
                          <span
                            className={`w-10 h-10 flex items-center justify-center shrink-0 transition-colors duration-150 group-hover/item:bg-yellow-400 ${
                              scrolled ? 'bg-black/5' : 'bg-white/10'
                            }`}
                          >
                            <p.icon size={18} className="text-yellow-400 group-hover/item:text-black transition-colors" />
                          </span>
                          <span className={`text-sm font-medium ${scrolled ? 'text-black/80' : 'text-white/90'}`}>
                            {p.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${linkColor}`}
              >
                {link}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
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
          className={`lg:hidden p-2 transition-all duration-200 hover:scale-110 ${scrolled ? 'text-black' : 'text-white'}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-screen bg-white/98 backdrop-blur-sm shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-black/10">
          {links.map((link) => {
            const isActive = currentPage === pageFor(link);
            const linkClass = isActive
              ? 'text-yellow-400 border-yellow-400 bg-yellow-400/5'
              : 'text-black/70 border-transparent hover:text-black hover:border-black/30';

            if (link === 'Products') {
              return (
                <div key={link}>
                  <div className={`flex items-center justify-between border-l-2 ${linkClass}`}>
                    <button
                      onClick={() => handleNav(link)}
                      className="flex-1 text-left px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200"
                    >
                      {link}
                    </button>
                    <button
                      onClick={() => setMobileProductsOpen((o) => !o)}
                      aria-label="Toggle products list"
                      className="px-4 py-3"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {products.map((p) => (
                      <button
                        key={p.slug}
                        onClick={() => handleProduct(p.slug)}
                        className="w-full text-left pl-8 pr-4 py-2.5 text-sm text-black/60 hover:text-black transition-colors duration-150"
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className={`text-left px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200 border-l-2 ${linkClass}`}
              >
                {link}
              </button>
            );
          })}
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
