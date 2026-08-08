import { Target, Eye, Award, Users, TrendingUp, ShieldCheck, Hammer, Lightbulb, Handshake, Quote } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';
import HeadingSpan from '../components/HeadingSpan';
import { useT } from '../i18n/translations';
import images from '../assets/images';

const About =() => {
  const t = useT();
  const valueIcons = [ShieldCheck, Award, Handshake, Lightbulb];
  const values = t.about.values.items.map((v, i) => ({ icon: valueIcons[i], title: v.title, desc: v.desc }));

  return (
    <div className="bg-white">
      <Seo
        title={t.about.seo.title}
        description={t.about.seo.description}
        path="/about"
        image={images.aboutUsHero}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <img src={images.aboutUsHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/85 to-black" />
          <div className="absolute top-20 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>
        <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.about.hero.eyebrow}</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            <HeadingSpan parts={t.about.hero.heading} />
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.about.hero.paragraph}
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.about.story.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6">
                {t.about.story.heading}
              </h2>
              <div className="space-y-4 text-black/60 leading-relaxed">
                <p>{t.about.story.paragraph1}</p>
                <p>{t.about.story.paragraph2}</p>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-4">
              <RevealItem className="bg-yellow-400 p-8 text-black">
                <TrendingUp size={40} className="mb-4" />
                <div className="text-4xl font-black">{t.about.story.stats[0].value}</div>
                <div className="text-sm font-medium mt-1">{t.about.story.stats[0].label}</div>
              </RevealItem>
              <RevealItem className="bg-black/3 border border-black/10 p-8 mt-8">
                <BuildingIcon />
                <div className="text-4xl font-black text-black mt-4">{t.about.story.stats[1].value}</div>
                <div className="text-black/40 text-sm mt-1">{t.about.story.stats[1].label}</div>
              </RevealItem>
              <RevealItem className="bg-black/3 border border-black/10 p-8">
                <Users size={40} className="text-yellow-400 mb-4" />
                <div className="text-4xl font-black text-black">{t.about.story.stats[2].value}</div>
                <div className="text-black/40 text-sm mt-1">{t.about.story.stats[2].label}</div>
              </RevealItem>
              <RevealItem className="bg-yellow-400/10 border border-yellow-400/20 p-8 mt-8">
                <Award size={40} className="text-yellow-400 mb-4" />
                <div className="text-4xl font-black text-black">{t.about.story.stats[3].value}</div>
                <div className="text-black/40 text-sm mt-1">{t.about.story.stats[3].label}</div>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid md:grid-cols-2 gap-8">
            <RevealItem className="group bg-white border border-black/10 p-10 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300">
                <Target size={28} className="text-yellow-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">{t.about.missionVision.missionTitle}</h3>
              <p className="text-black/60 leading-relaxed">
                {t.about.missionVision.mission}
              </p>
            </RevealItem>
            <RevealItem className="group bg-white border border-black/10 p-10 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300">
                <Eye size={28} className="text-yellow-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">{t.about.missionVision.visionTitle}</h3>
              <p className="text-black/60 leading-relaxed">
                {t.about.missionVision.vision}
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.about.leadership.eyebrow}</span>
            <h2 className="text-4xl font-black text-black mt-3"><HeadingSpan parts={t.about.leadership.heading} /></h2>
          </Reveal>

          <Reveal className="relative bg-black/3 border border-black/10 p-10 md:p-14 mb-8">
            <Quote size={48} className="text-yellow-400/20 mb-4" />
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.about.leadership.ceo.eyebrow}</span>
            <h3 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6">{t.about.leadership.ceo.quote}</h3>
            <div className="space-y-4 text-black/60 leading-relaxed text-lg">
              {t.about.leadership.ceo.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="text-black font-bold text-lg">{t.about.leadership.ceo.name}</div>
              <div className="text-yellow-400 text-sm tracking-wide">{t.about.leadership.ceo.title}</div>
            </div>
          </Reveal>

          <Reveal className="relative bg-black/3 border border-black/10 p-10 md:p-14">
            <Quote size={48} className="text-yellow-400/20 mb-4" />
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.about.leadership.coo.eyebrow}</span>
            <h3 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6">{t.about.leadership.coo.quote}</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              {t.about.leadership.coo.paragraph}
            </p>
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="text-black font-bold text-lg">{t.about.leadership.coo.name}</div>
              <div className="text-yellow-400 text-sm tracking-wide">{t.about.leadership.coo.title}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">{t.about.values.eyebrow}</span>
            <h2 className="text-4xl font-black text-black mt-3"><HeadingSpan parts={t.about.values.heading} /></h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <RevealItem
                key={i}
                className="group bg-white border border-black/10 p-8 hover:bg-zinc-50 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-5 group-hover:bg-yellow-400 transition-all duration-300">
                  <value.icon size={26} className="text-yellow-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-black font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors">{value.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{value.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}

function BuildingIcon() {
  return (
    <div className="w-10 h-10 border-2 border-yellow-400/40 flex items-center justify-center">
      <Hammer size={20} className="text-yellow-400" />
    </div>
  );
}

export default About;