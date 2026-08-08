import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';
import sayonaLogo from '../assets/sayona-logo.png';
import { products } from '../data/productsData';
import { useT } from '../i18n/translations';
import { useLanguage } from '../i18n/LanguageContext';
import { localizeService } from '../i18n/localizeService';

interface NavbarProps {
  onQuote: () => void;
}

const Navbar = ({ onQuote }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { pathname } = useLocation();
  const t = useT();
  const { language, toggleLanguage } = useLanguage();
  const localizedProducts = products.map((p) => localizeService(p, language));

  const navLinks = [
    { label: t.nav.home, path: '/', key: 'home' },
    { label: t.nav.about, path: '/about', key: 'about' },
    { label: t.nav.products, path: '/', key: 'products' },
    { label: t.nav.contact, path: '/contact', key: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (link: (typeof navLinks)[number]) =>
    link.key === 'products' ? pathname.startsWith('/services') : pathname === link.path;

  const closeMenus = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenus} className="flex items-center gap-3 group">
          <img
            src={sayonaLogo}
            alt="Sayona International"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="text-left">
            <div className={`font-black text-sm leading-tight tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>Sayona</div>
            <div className="text-yellow-400 text-[10px] tracking-widest uppercase font-medium">International</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link);
            const linkColor = active
              ? 'text-yellow-400'
              : scrolled
              ? 'text-black/70 hover:text-black'
              : 'text-white/80 hover:text-white';

            if (link.key === 'products') {
              return (
                <div key={link.label} className="relative group/products">
                  <Link
                    to={link.path}
                    onClick={closeMenus}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${linkColor}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover/products:rotate-180" />
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover/products:w-full'
                      }`}
                    />
                  </Link>
                  <div
                    className={`fixed inset-x-0 ${scrolled ? 'top-16' : 'top-20'} opacity-0 invisible -translate-y-1 group-hover/products:opacity-100 group-hover/products:visible group-hover/products:translate-y-0 transition-all duration-200 ${
                      scrolled
                        ? 'bg-white border-b border-black/10 shadow-xl'
                        : 'bg-black/90 backdrop-blur-md border-b border-white/10'
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {localizedProducts.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/services/${p.slug}`}
                          onClick={closeMenus}
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
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={closeMenus}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${linkColor}`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.languageToggleAria}
            className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 border transition-all duration-200 ${
              scrolled
                ? 'border-black/20 text-black/70 hover:border-black/40 hover:text-black'
                : 'border-white/30 text-white/80 hover:border-white hover:text-white'
            }`}
          >
            <Languages size={16} />
            {language === 'en' ? '中文' : 'EN'}
          </button>
          <button
            onClick={onQuote}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-2.5 rounded-none transition-all duration-200 tracking-wider uppercase hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] active:scale-95"
          >
            {t.nav.getQuote}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.languageToggleAria}
            className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 border transition-all duration-200 ${scrolled ? 'border-black/20 text-black/70' : 'border-white/30 text-white/80'}`}
          >
            <Languages size={14} />
            {language === 'en' ? '中文' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 transition-all duration-200 hover:scale-110 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-screen bg-white/98 backdrop-blur-sm shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-black/10">
          {navLinks.map((link) => {
            const active = isActive(link);
            const linkClass = active
              ? 'text-yellow-400 border-yellow-400 bg-yellow-400/5'
              : 'text-black/70 border-transparent hover:text-black hover:border-black/30';

            if (link.key === 'products') {
              return (
                <div key={link.label}>
                  <div className={`flex items-center justify-between border-l-2 ${linkClass}`}>
                    <Link
                      to={link.path}
                      onClick={closeMenus}
                      className="flex-1 text-left px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setMobileProductsOpen((o) => !o)}
                      aria-label={t.nav.toggleProductsAria}
                      className="px-4 py-3"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {localizedProducts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/services/${p.slug}`}
                        onClick={closeMenus}
                        className="block w-full text-left pl-8 pr-4 py-2.5 text-sm text-black/60 hover:text-black transition-colors duration-150"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={closeMenus}
                className={`text-left px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200 border-l-2 ${linkClass}`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => { onQuote(); setMenuOpen(false); }}
            className="mt-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-3 tracking-wider uppercase transition-all duration-200"
          >
            {t.nav.getQuote}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
