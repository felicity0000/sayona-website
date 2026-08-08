import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Reveal';
import HeadingSpan from '../components/HeadingSpan';
import { useT } from '../i18n/translations';

const NotFound = () => {
  const t = useT();
  return (
    <div className="bg-white min-h-screen flex items-center justify-center pt-24 pb-20 px-4">
      <Seo title={t.notFound.seo.title} description={t.notFound.seo.description} path="/404" noindex />
      <Reveal className="text-center">
        <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.notFound.eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6">
          <HeadingSpan parts={t.notFound.heading} />
        </h1>
        <p className="text-black/60 max-w-md mx-auto mb-8 leading-relaxed">
          {t.notFound.paragraph}
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 active:scale-95"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t.notFound.backToHome}
        </Link>
      </Reveal>
    </div>
  );
};

export default NotFound;
