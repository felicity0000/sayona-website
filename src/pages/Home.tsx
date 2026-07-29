import { useState, useEffect, useRef } from "react";
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
import { services } from "../data/servicesData";
import images from "../assets/images";

interface HomeProps {
  onNavigate: (page: string) => void;
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

export default function Home({ onNavigate, onQuote }: HomeProps) {
  const featuredServices = services.slice(0, 4);

  const stats = [
    { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
    { icon: Building2, value: 15, suffix: "+", label: "Projects Completed" },
    { icon: Users, value: 12, suffix: "+", label: "Partners & Clients" },
    { icon: TrendingUp, value: 500, suffix: "+", label: "Workforce" },
  ];

  const whyChooseUs = [
    {
      icon: Factory,
      title: "Integrated Manufacturing",
      desc: "Our in-house facilities house advanced CNC systems, high-precision 3D printers, and metal fabrication units—ensuring total control over design, quality, and timelines. This vertical integration allows us to deliver cohesive, scalable, and cost-effective solutions under one roof.",
    },
    {
      icon: Settings2,
      title: "Tailored Solutions",
      desc: "Every project is unique. We collaborate closely with clients to transform their ideas into bespoke architectural, decorative, or structural products—crafted to exact specifications in terms of size, material, finish, and function.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Control",
      desc: "Every stage of production undergoes rigorous quality checks by our expert technicians and artisans. From raw material sourcing to final installation, our commitment to quality ensures precision, performance, and long-lasting durability.",
    },
    {
      icon: Cpu,
      title: "Technological Lead",
      desc: "We invest continuously in emerging technologies—be it multi-axis CNC systems, AI-assisted design software, or advanced 3D prototyping. This empowers us to deliver complex geometries, faster turnarounds, and futuristic aesthetics.",
    },
    {
      icon: Clock,
      title: "Project Reliability",
      desc: "With streamlined workflows, disciplined scheduling, and agile project management, we’re known for delivering projects on time without compromising on finish or structural integrity. We treat every deadline as a commitment.",
    },
    {
      icon: HeartHandshake,
      title: "Customer Centricity",
      desc: "Our clients are at the core of everything we do. From transparent pricing and clear communication to post-project support, we ensure an experience that’s seamless, respectful, and value-driven—building trust that lasts beyond delivery.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={images.decorativeCeiling1}
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
                Excellence Since 2009
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 animate-[fadeInUp_0.8s_ease-out]">
              Fiberglass & Epoxy <span className="text-yellow-400">Solutions</span>, Engineered with Purpose
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed animate-[fadeInUp_1s_ease-out]">
              Sayona International is Uganda's trusted manufacturer of
              fiberglass products, epoxy solutions, and industrial fabrication
              — supplying premium fiberglass raw materials for the
              construction, industrial, automotive, commercial, and
              residential sectors.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeInUp_1.2s_ease-out]">
              <button
                onClick={onQuote}
                className="group bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] active:scale-95 flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="group border border-white/30 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                Our Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
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
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-4">
              Our Core <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-black/50 max-w-2xl mx-auto">
              Fiberglass manufacturing, epoxy solutions, and raw material
              supply, delivered with in-house manufacturing and skilled
              craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, i) => (
              <div
                key={i}
                className="group relative bg-black/3 border border-black/10 overflow-hidden hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate("services")}
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
                      <service.icon size={40} className="text-yellow-400/30 group-hover:text-yellow-400/50 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 bg-yellow-400 flex items-center justify-center">
                    <service.icon size={20} className="text-black" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.intro}
                  </p>
                  <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
              Why Choose
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6">
              Sayona <span className="text-yellow-400">International</span>
            </h2>
            <p className="text-black/60 leading-relaxed">
              "Perform With Purpose" is more than a motto — it's the mindset
              behind everything we do. From precision manufacturing to customer
              collaboration, every project reflects our commitment to
              excellence, innovation, and impact. We don't just build products;
              we craft purposeful solutions that endure, inspire, and deliver
              real value.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Visual panel */}
            <div className="lg:col-span-2 relative aspect-square lg:aspect-auto lg:h-130 bg-linear-to-br from-zinc-900 to-black border border-white/10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `linear-gradient(rgba(234,179,8,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.15) 1px, transparent 1px)`,
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
                      className="w-14 h-14 bg-white/4 border border-yellow-400/30 flex items-center justify-center"
                    >
                      <Icon size={22} className="text-yellow-400" />
                    </div>
                  ))}
                </div>
                <span className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium">
                  Perform With Purpose
                </span>
              </div>
            </div>

            {/* Feature grid */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, i) => (
                <div
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
                </div>
              ))}
            </div>
          </div>

          <p className="text-black/60 text-center max-w-3xl mx-auto mt-16 leading-relaxed">
            Together, these strengths make Sayona International a partner of
            choice for clients seeking precision-crafted, future-ready design
            and fabrication solutions.
          </p>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6">
                A Legacy of <span className="text-yellow-400">Engineering</span>{" "}
                Excellence
              </h2>
              <p className="text-black/60 leading-relaxed mb-6">
                Founded in 2009, Sayona International has grown into one of
                Uganda's most trusted engineering and construction firms. We
                combine decades of expertise with modern technology to deliver
                projects that stand the test of time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ISO-certified quality management",
                  "Experienced multidisciplinary team",
                  "Commitment to safety and sustainability",
                  "On-time, on-budget delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/70">
                    <CheckCircle2
                      size={20}
                      className="text-yellow-400 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate("about")}
                className="group inline-flex items-center gap-2 text-yellow-400 font-bold text-sm tracking-wider uppercase border-b border-yellow-400 pb-1 hover:gap-4 transition-all duration-200"
              >
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Hammer, label: "Construction", val: "Expertise" },
                { icon: Wrench, label: "Engineering", val: "Solutions" },
                { icon: ShieldCheck, label: "Safety", val: "First" },
                { icon: Award, label: "Quality", val: "Assured" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-black/3 border border-black/10 p-8 hover:border-yellow-400/40 transition-all duration-300 ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <item.icon size={32} className="text-yellow-400 mb-4" />
                  <div className="text-black font-bold text-lg">{item.val}</div>
                  <div className="text-black/40 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
              Trusted By
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-4">
              Our <span className="text-yellow-400">Partners</span> & Clients
            </h2>
            <p className="text-black/50 max-w-2xl mx-auto">
              We are proud to have delivered projects for leading organizations
              across Uganda and East Africa.
            </p>
          </div>
          <div className="border border-black/10 p-8 md:p-12">
            <img
              src={images.clients_and_partners}
              alt="Sayona International clients and partners"
              className="w-full h-auto"
            />
          </div>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-3">
              Ready to Start Your Project?
            </h2>
            <p className="text-black/70 text-lg">
              Let's build something great together. Get a customized quote
              today.
            </p>
          </div>
          <button
            onClick={onQuote}
            className="group bg-black hover:bg-zinc-800 text-white font-bold px-10 py-5 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-2xl active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            Request a Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
