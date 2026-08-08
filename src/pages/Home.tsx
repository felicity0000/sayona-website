import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Factory,
  Hammer,
  CheckCircle2,
  Settings2,
  BadgeCheck,
  Cpu,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { coreServices } from "../data/coreServicesData";
import images from "../assets/images";
import Seo from "../components/Seo";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import HeadingSpan from "../components/HeadingSpan";
import { useT } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import { localizeCoreService } from "../i18n/localizeCoreService";

interface HomeProps {
  onQuote: () => void;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = end / 50;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, end]);
  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-black">
      {count}
      {suffix}
    </div>
  );
}

export default function Home({ onQuote }: HomeProps) {
  const t = useT();
  const { language } = useLanguage();
  const localizedCoreServices = coreServices.map((s) => localizeCoreService(s, language));

  const stats = [
    { icon: Award, value: 15, suffix: "+", label: t.home.stats.yearsExperience },
    { icon: Building2, value: 20, suffix: "+", label: t.home.stats.projectsCompleted },
    { icon: Users, value: 12, suffix: "+", label: t.home.stats.partnersClients },
    { icon: TrendingUp, value: 500, suffix: "+", label: t.home.stats.workforce },
  ];

  const whyChooseIcons = [Factory, Settings2, BadgeCheck, Cpu, Clock, HeartHandshake];
  const whyChooseUs = t.home.whyChoose.items.map((item, i) => ({
    icon: whyChooseIcons[i],
    title: item.title,
    desc: item.desc,
  }));

  return (
    <div className="bg-white">
      <Seo
        title={t.home.seo.title}
        description={t.home.seo.description}
        path="/"
        image={images.heroApproved}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={images.heroApproved}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-br from-black via-black/70 to-yellow-900/30" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(200,170,8,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(200,170,8,0.01) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-6 animate-[fadeInUp_0.6s_ease-out]">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
                {t.home.hero.badge}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 animate-[fadeInUp_0.8s_ease-out]">
              <HeadingSpan parts={t.home.hero.heading} />
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed animate-[fadeInUp_1s_ease-out]">
              {t.home.hero.paragraph}
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeInUp_1.2s_ease-out]">
              <button
                onClick={onQuote}
                className="group bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] active:scale-95 flex items-center gap-2"
              >
                {t.home.hero.getQuote}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <Link
                to="/contact"
                className="group border border-white/30 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                {t.home.hero.ourProjects}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-white border-y border-black/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="inline-flex w-14 h-14 items-center justify-center bg-yellow-400/10 border border-yellow-400/20 rounded-2xl mb-4 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                  <stat.icon
                    size={24}
                    className="text-yellow-400 group-hover:text-black transition-colors"
                  />
                </div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <div className="text-black/40 text-sm mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
              {t.home.services.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-4">
              <HeadingSpan parts={t.home.services.heading} />
            </h2>
            <p className="text-black/50 max-w-2xl mx-auto">
              {t.home.services.paragraph}
            </p>
          </div>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {localizedCoreServices.map((service, i) => (
              <RevealItem key={i}>
                <div
                  className="group relative flex flex-col h-full bg-black/3 border border-black/10 overflow-hidden hover:border-yellow-400/40 hover:bg-black/6 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-linear-to-br from-zinc-900 to-black flex items-center justify-center">
                        <service.icon size={40} className="text-yellow-400/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 bg-yellow-400 flex items-center justify-center">
                      <service.icon size={20} className="text-black" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-black font-bold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-black/50 text-sm leading-relaxed mb-4 line-clamp-2 min-h-11">
                      {service.intro}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] leading-none px-2 py-1.5 bg-yellow-400/10 text-black/70 border border-black/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
              {t.home.whyChoose.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6">
              <HeadingSpan parts={t.home.whyChoose.heading} />
            </h2>
            <p className="text-black/60 leading-relaxed">
              {t.home.whyChoose.paragraph}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Visual panel */}
            <Reveal className="lg:col-span-2 relative aspect-square lg:aspect-auto lg:h-130 bg-zinc-50 border border-black/10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
              <div className="relative h-full flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 bg-yellow-400 flex items-center justify-center rotate-45">
                  <Cpu size={40} className="text-black -rotate-45" />
                </div>
                <div className="flex gap-4">
                  {[Factory, Settings2, BadgeCheck].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 bg-white border border-yellow-400/40 flex items-center justify-center"
                    >
                      <Icon size={22} className="text-yellow-400" />
                    </div>
                  ))}
                </div>
                <span className="text-black/70 text-xs tracking-[0.3em] uppercase font-medium">
                  {t.home.whyChoose.panelTag}
                </span>
              </div>
            </Reveal>

            {/* Feature grid */}
            <RevealGroup className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, i) => (
                <RevealItem
                  key={i}
                  className="group bg-black/3 border border-black/10 p-6 hover:bg-black/6 hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-all duration-300">
                    <item.icon
                      size={22}
                      className="text-yellow-400 group-hover:text-black transition-colors"
                    />
                  </div>
                  <h3 className="text-black font-bold mb-2">{item.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <p className="text-black/60 text-center max-w-3xl mx-auto mt-16 leading-relaxed">
            {t.home.whyChoose.closing}
          </p>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
                {t.home.aboutTeaser.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6">
                <HeadingSpan parts={t.home.aboutTeaser.heading} />
              </h2>
              <p className="text-black/60 leading-relaxed mb-6">
                {t.home.aboutTeaser.paragraph}
              </p>
              <ul className="space-y-3 mb-8">
                {t.home.aboutTeaser.bullets.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/70">
                    <CheckCircle2
                      size={20}
                      className="text-yellow-400 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-yellow-400 font-bold text-sm tracking-wider uppercase border-b border-yellow-400 pb-1 hover:gap-4 transition-all duration-200"
              >
                {t.home.aboutTeaser.learnMore}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-4">
              {[
                { icon: Hammer, ...t.home.aboutTeaser.grid[0] },
                { icon: Wrench, ...t.home.aboutTeaser.grid[1] },
                { icon: ShieldCheck, ...t.home.aboutTeaser.grid[2] },
                { icon: Award, ...t.home.aboutTeaser.grid[3] },
              ].map((item, i) => (
                <RevealItem
                  key={i}
                  className={`bg-black/3 border border-black/10 p-8 hover:border-yellow-400/40 transition-all duration-300 ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <item.icon size={32} className="text-yellow-400 mb-4" />
                  <div className="text-black font-bold text-lg">{item.val}</div>
                  <div className="text-black/40 text-sm">{item.label}</div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
              {t.home.partners.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-4">
              <HeadingSpan parts={t.home.partners.heading} />
            </h2>
            <p className="text-black/50 max-w-2xl mx-auto">
              {t.home.partners.paragraph}
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { src: images.simbaCementLogo, alt: "Simba Cement" },
              { src: images.toyotaLogo, alt: "Toyota" },
              { src: images.nileBatteriesLogo, alt: "Nile Batteries Limited" },
              { src: images.airtelLogo, alt: "Airtel" },
              { src: images.mtnLogo, alt: "MTN" },
              { src: images.gentexLogo, alt: "Gentex" },
              { src: images.steelTubeLogo, alt: "Steel & Tube" },
              { src: images.sgaSecurityLogo, alt: "SGA Security" },
              { src: images.propertyServicesLogo, alt: "Property Services Limited" },
              { src: images.eapsLogo, alt: "East African Packaging Solutions" },
              { src: images.g4sLogo, alt: "G4S" },
              { src: images.keshwalaGroupLogo, alt: "Keshwala Group" },
              { src: images.meeraInvestmentsLogo, alt: "Meera Investments Ltd" },
            ].map((partner) => (
              <RevealItem
                key={partner.alt}
                className="group bg-white border border-black/10 h-32 md:h-36 flex items-center justify-center p-8 hover:border-yellow-400/40 transition-all duration-300"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-linear-to-r from-yellow-400 to-yellow-500 py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-3">
              {t.home.cta.heading}
            </h2>
            <p className="text-black/70 text-lg">
              {t.home.cta.paragraph}
            </p>
          </div>
          <button
            onClick={onQuote}
            className="group bg-black hover:bg-zinc-800 text-white font-bold px-10 py-5 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-2xl active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            {t.home.cta.button}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </Reveal>
      </section>
    </div>
  );
}
