import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import ImageCarousel from '../components/ImageCarousel';

interface ServiceDetailProps {
  slug: string;
  onNavigate: (page: string) => void;
  onQuote: () => void;
}

const ServiceDetail = ({ slug, onNavigate, onQuote }: ServiceDetailProps) => {
  const service = getServiceBySlug(slug);
  const featured = service?.items.filter((item) => item.image || item.images?.length) ?? [];
  const rest = service?.items.filter((item) => !item.image && !item.images?.length) ?? [];
  const isMixed = featured.length > 0 && rest.length > 0;

  if (!service) {
    return (
      <div className="bg-black min-h-screen pt-40 pb-20 text-center">
        <p className="text-white/60">Service not found.</p>
        <button
          onClick={() => onNavigate('services')}
          className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-bold text-sm tracking-wider uppercase"
        >
          <ArrowLeft size={16} /> Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {service.image && (
          <>
            <img src={service.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/85" />
          </>
        )}
        <div className="absolute inset-0 bg-linear-to-b from-yellow-900/10 to-black" />
        <div className="absolute top-20 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('services')}
            className="group inline-flex items-center gap-2 text-white/50 hover:text-yellow-400 text-sm font-medium tracking-wide mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>

          <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6">
            <service.icon size={30} className="text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            {service.title}
          </h1>
          <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Items */}
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Products & <span className="text-yellow-400">Capabilities</span>
            </h2>
          </div>
          {featured.length > 0 && (
            <div className={rest.length > 0 ? 'mb-16' : ''}>
              {isMixed && (
                <h3 className="text-yellow-400/70 text-xs tracking-widest uppercase font-semibold mb-6">
                  Highlights
                </h3>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white/3 border border-white/10 overflow-hidden hover:bg-white/6 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <div className="h-52 overflow-hidden">
                      <ImageCarousel
                        images={item.images?.length ? item.images : [item.image!]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-bold leading-snug mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div>
              {isMixed && (
                <h3 className="text-yellow-400/70 text-xs tracking-widest uppercase font-semibold mb-6">
                  Complete Range
                </h3>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rest.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 bg-white/3 border border-white/10 p-5 hover:bg-white/6 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <CheckCircle2 size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-sm leading-snug mb-1">{item.title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-linear-to-r from-yellow-400 to-yellow-500 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-3">Interested in {service.title}?</h2>
            <p className="text-black/70 text-lg">Tell us about your project and we'll provide a tailored solution.</p>
          </div>
          <button
            onClick={onQuote}
            className="group bg-black hover:bg-zinc-800 text-white font-bold px-10 py-5 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-2xl active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            Get a Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
