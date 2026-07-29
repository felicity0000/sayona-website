import { Fragment } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Download } from 'lucide-react';
import { getServiceBySlug, type ShowcaseBlock } from '../data/servicesData';
import ImageCarousel from '../components/ImageCarousel';

interface ServiceDetailProps {
  slug: string;
  onNavigate: (page: string) => void;
  onQuote: () => void;
}

function Heading({ text, highlight, className }: { text: string; highlight?: string; className: string }) {
  if (!highlight || !text.includes(highlight)) return <h2 className={className}>{text}</h2>;
  const [before, after] = text.split(highlight);
  return (
    <h2 className={className}>
      {before}
      <span className="text-yellow-400">{highlight}</span>
      {after}
    </h2>
  );
}

function ShowcaseMedia({ block, className }: { block: { image: string; fit: 'contain' | 'cover' }; className?: string }) {
  if (block.fit === 'contain') {
    return <img src={block.image} alt="" className={`w-full h-auto object-contain drop-shadow-2xl ${className ?? ''}`} />;
  }
  return (
    <div className={`rounded-lg overflow-hidden shadow-2xl ${className ?? ''}`}>
      <img src={block.image} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function ShowcaseTextBlock({ block }: { block: ShowcaseBlock }) {
  return (
    <div>
      <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{block.tagline}</span>
      <Heading text={block.heading} highlight={block.highlight} className="text-3xl md:text-4xl font-black text-black mt-3 mb-6" />
      <p className="text-black/60 leading-relaxed">{block.description}</p>
    </div>
  );
}

const ServiceDetail = ({ slug, onNavigate, onQuote }: ServiceDetailProps) => {
  const service = getServiceBySlug(slug);
  const featured = service?.items.filter((item) => item.image || item.images?.length) ?? [];
  const rest = service?.items.filter((item) => !item.image && !item.images?.length) ?? [];
  const isMixed = featured.length > 0 && rest.length > 0;

  if (!service) {
    return (
      <div className="bg-white min-h-screen pt-40 pb-20 text-center">
        <p className="text-black/60">Service not found.</p>
        <button
          onClick={() => onNavigate('services')}
          className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-bold text-sm tracking-wider uppercase"
        >
          <ArrowLeft size={16} /> Back to Services
        </button>
      </div>
    );
  }

  const { showcase } = service;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {service.image && (
          <img src={service.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div
          className={
            service.image
              ? 'absolute inset-0 bg-linear-to-b from-black/60 via-black/75 via-75% to-white'
              : 'absolute inset-0 bg-linear-to-b from-yellow-900/10 via-black via-75% to-white'
          }
        />
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

          {service.catalogue && (
            <a
              href={service.catalogue}
              download
              className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95 mt-8"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Catalogue
            </a>
          )}
        </div>
      </section>

      {/* Items */}
      {showcase ? (
        <Fragment>
          {/* Showcase: text left, images right */}
          <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{showcase.hero.tagline}</span>
                  <Heading
                    text={showcase.hero.heading}
                    highlight={showcase.hero.highlight}
                    className="text-3xl md:text-4xl font-black text-black mt-3 mb-6"
                  />
                  <p className="text-black/60 leading-relaxed mb-8">{showcase.hero.description}</p>
                  <ul className="space-y-4 mb-10">
                    {showcase.hero.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-black/70">
                        <CheckCircle2 size={20} className="text-yellow-400 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={onQuote}
                      className="group bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95 flex items-center gap-2"
                    >
                      Get a Quote
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    {service.catalogue && (
                      <a
                        href={service.catalogue}
                        download
                        className="group inline-flex items-center gap-2 border border-black/20 hover:border-yellow-400 text-black font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 active:scale-95"
                      >
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                        Catalogue
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <ShowcaseMedia
                    block={{ image: showcase.hero.mainImage, fit: showcase.hero.fit }}
                    className={showcase.hero.fit === 'cover' ? 'col-span-2 h-72 md:h-96' : 'col-span-2'}
                  />
                  {showcase.hero.sideImages.map((src, i) => (
                    <ShowcaseMedia
                      key={i}
                      block={{ image: src, fit: showcase.hero.fit }}
                      className={showcase.hero.fit === 'cover' ? 'h-48' : ''}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Secondary showcase block */}
          {showcase.secondary && (
            <section className="bg-zinc-50 py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <ShowcaseMedia
                      block={showcase.secondary}
                      className={`max-w-md mx-auto ${showcase.secondary.fit === 'cover' ? 'h-80' : ''}`}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ShowcaseTextBlock block={showcase.secondary} />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Production / closing banner */}
          {showcase.banner && (
            <section className="relative py-24 overflow-hidden">
              <img src={showcase.banner.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{showcase.banner.tagline}</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-3">{showcase.banner.heading}</h2>
                <p className="text-white/70 max-w-2xl mx-auto mt-4">{showcase.banner.description}</p>
              </div>
            </section>
          )}
        </Fragment>
      ) : (
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-3">
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
                      className="group bg-black/3 border border-black/10 overflow-hidden hover:bg-black/6 hover:border-yellow-400/40 transition-all duration-300"
                    >
                      <div className="h-52 overflow-hidden">
                        <ImageCarousel
                          images={item.images?.length ? item.images : [item.image!]}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-black font-bold leading-snug mb-2">{item.title}</h3>
                        <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
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
                      className="group flex items-start gap-3 bg-black/3 border border-black/10 p-5 hover:bg-black/6 hover:border-yellow-400/40 transition-all duration-300"
                    >
                      <CheckCircle2 size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="text-black font-bold text-sm leading-snug mb-1">{item.title}</h3>
                        <p className="text-black/50 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

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
