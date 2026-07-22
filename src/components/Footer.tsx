import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import sayonaLogo from '../assets/sayona-logo.png';
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedinIcon,
  WhatsappIcon,
  TiktokIcon,
} from './SocialIcons';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const socialLinks = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: XIcon, href: '#', label: 'X' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  {
    Icon: WhatsappIcon,
    href: `https://wa.me/0756243447?text=${encodeURIComponent('Hello, I would like to inquire about your services.')}`,
    label: 'WhatsApp',
  },
  { Icon: TiktokIcon, href: 'https://www.tiktok.com/@sayonaintltd?_r=1&_t=ZS-98FABjis0vK', label: 'TikTok' },
];
const  Footer = ({ onNavigate }: FooterProps) => {
  const links = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const handleNav = (page: string) => {
    onNavigate(page.toLowerCase());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={sayonaLogo}
                alt="Sayona International"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-white font-black text-sm tracking-widest uppercase">Sayona</div>
                <div className="text-yellow-400 text-[10px] tracking-widest uppercase font-medium">International</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Engineering excellence, building trust. We deliver world-class construction, infrastructure, and engineering solutions across the region.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="text-sm text-white/50 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {['Fiber Products', 'CNC Wood Carving', 'CNC Metal Works', 'CNC 3D Printing', 'GRC & Cement Works', 'Event Decorations', 'Interior & Exterior', 'Landscaping', 'Aluminium Fabrication'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('Services')}
                    className="text-sm text-white/50 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                <span>Plot 17 Enterprise Road, Ntinda Industrial Area, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <div className="flex flex-col">
                  <span>+256 774 175310</span>
                <span>+256 750 088467</span>
                <span>+256 757 175 310</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <span>info@sayonainternational.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 tracking-wide">
            © {new Date().getFullYear()} Sayona International. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-white/50 hover:text-yellow-400 transition-colors duration-200 group"
          >
            Back to top
            <span className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black transition-all duration-200">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
