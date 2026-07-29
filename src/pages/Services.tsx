import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/servicesData';

interface ServicesProps {
  onQuote: () => void;
  onSelectService: (slug: string) => void;
}

export default function Services({ onQuote, onSelectService }: ServicesProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-yellow-900/10 to-black" />
          <div className="absolute top-20 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            Fiberglass, Epoxy & <span className="text-yellow-400">Industrial</span> Fabrication
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            From fiberglass manufacturing and epoxy solutions to raw material supply, construction, and automotive fabrication, we combine in-house manufacturing with skilled craftsmanship to deliver bespoke, durable solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                onClick={() => onSelectService(service.slug)}
                className="group relative bg-black/3 border border-black/10 overflow-hidden hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-linear-to-br from-zinc-900 to-black flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px',
                        }}
                      />
                      <service.icon size={48} className="text-yellow-400/30 group-hover:text-yellow-400/50 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 flex items-center justify-center">
                    <service.icon size={22} className="text-black" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed mb-5 line-clamp-3">{service.intro}</p>
                  <ul className="space-y-2 mb-5">
                    {service.items.slice(0, 4).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-black/60 text-sm">
                        <CheckCircle2 size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                        {item.title}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">How We Work</span>
            <h2 className="text-4xl font-black text-black mt-3">Our Project <span className="text-yellow-400">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your needs, goals, and project scope in detail.' },
              { step: '02', title: 'Planning & Design', desc: 'Our engineers create detailed plans, designs, and cost estimates.' },
              { step: '03', title: 'Execution', desc: 'We bring the project to life with skilled teams and quality materials.' },
              { step: '04', title: 'Delivery', desc: 'We hand over a completed project that meets all standards and expectations.' },
            ].map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors duration-300 mb-2">
                  {p.step}
                </div>
                <h3 className="text-black font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{p.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-yellow-400/30">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-black text-black mb-3">Need a Custom Service?</h2>
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
