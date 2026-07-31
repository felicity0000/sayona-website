import { Target, Eye, Award, Users, TrendingUp, ShieldCheck, Hammer, Lightbulb, Handshake, Quote } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';
import images from '../assets/images';

const About =() => {
  const values = [
    { icon: ShieldCheck, title: 'Integrity', desc: 'We operate with transparency and honesty in every project we undertake.' },
    { icon: Award, title: 'Excellence', desc: 'We pursue the highest standards in quality and craftsmanship.' },
    { icon: Handshake, title: 'Partnership', desc: 'We build lasting relationships with clients, suppliers, and communities.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'We embrace modern technology and methods to deliver better solutions.' },
  ];

  return (
    <div className="bg-white">
      <Seo
        title="About Us"
        description="Established in 2009 in Kampala, Sayona International is a Ugandan manufacturing and interior solutions company specializing in fiberglass, epoxy, and architectural craftsmanship across East Africa."
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
          <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">About Us</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            Engineering Trust, <span className="text-yellow-400">Building</span> Tomorrow
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Sayona international limited was established in 2009 and based in Kampala plot 17 enterprise road, Ntinda industrial area, Uganda.
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-black/60 leading-relaxed">
              
                <p>
                  Sayona International Limited is a Ugandan manufacturing and interior solutions company specializing in premium fiberglass products, including decorative fiber glass planters, fiber glass sheets, fiber glass transparent sheets, fiberglass courier boxes, custom furniture, sculptures, architectural elements, construction of temples, CNC 2D AND 3D wood curving,3D printing elements, CNC plasma machine works, Architectural pillars, cornices and ceilings and thematic event decorations especially in Christmas.
                </p>
                <p>
                  We also provide epoxy flooring, and interior and exterior finishing services. Our products combine innovation, durability, functionality, and modern design to enhance residential, commercial, hospitality, and public spaces across East Africa.
                </p>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-4">
              <RevealItem className="bg-yellow-400 p-8 text-black">
                <TrendingUp size={40} className="mb-4" />
                <div className="text-4xl font-black">12+</div>
                <div className="text-sm font-medium mt-1">Years of Excellence</div>
              </RevealItem>
              <RevealItem className="bg-black/3 border border-black/10 p-8 mt-8">
                <BuildingIcon />
                <div className="text-4xl font-black text-black mt-4">10+</div>
                <div className="text-black/40 text-sm mt-1">Projects Delivered</div>
              </RevealItem>
              <RevealItem className="bg-black/3 border border-black/10 p-8">
                <Users size={40} className="text-yellow-400 mb-4" />
                <div className="text-4xl font-black text-black">500+</div>
                <div className="text-black/40 text-sm mt-1">Skilled Workforce</div>
              </RevealItem>
              <RevealItem className="bg-yellow-400/10 border border-yellow-400/20 p-8 mt-8">
                <Award size={40} className="text-yellow-400 mb-4" />
                <div className="text-4xl font-black text-black">10+</div>
                <div className="text-black/40 text-sm mt-1">Partners & Clients</div>
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
              <h3 className="text-2xl font-black text-black mb-4">Our Mission</h3>
              <p className="text-black/60 leading-relaxed">
                To design and manufacture innovative, high-quality fiberglass products and deliver exceptional finishing solutions that transform spaces while exceeding customer expectations through craftsmanship, sustainability, and innovation.
              </p>
            </RevealItem>
            <RevealItem className="group bg-white border border-black/10 p-10 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300">
                <Eye size={28} className="text-yellow-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Our Vision</h3>
              <p className="text-black/60 leading-relaxed">
                To become East Africa’s leading manufacturer of premium fiberglass products and a trusted provider of world-class interior and exterior finishing solutions recognized for quality, creativity, and excellence.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">Leadership</span>
            <h2 className="text-4xl font-black text-black mt-3">Voices Behind <span className="text-yellow-400">Sayona</span></h2>
          </Reveal>

          <Reveal className="relative bg-black/3 border border-black/10 p-10 md:p-14 mb-8">
            <Quote size={48} className="text-yellow-400/20 mb-4" />
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">CEO Statement</span>
            <h3 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6">"Perform With Purpose"</h3>
            <div className="space-y-4 text-black/60 leading-relaxed text-lg">
              <p>
                At Sayona, we don't just deliver products—we craft enduring experiences that merge purpose, functionality, and design. Since our founding in 2009, our vision has been shaped by one guiding belief: that true innovation begins with intention. Every material we work with, every line we cut, and every concept we develop is driven by a desire to solve real challenges and add lasting value.
              </p>
              <p>
                Over the years, we've evolved from a niche manufacturer to a creative force that thrives on complexity. From thematic event decor to customized architectural installations, our ability to adapt across mediums and industries has become our greatest strength. Whether we are transforming a commercial space or designing a custom piece for a private residence, our work is driven by one consistent principle—Perform with Purpose.
              </p>
              <p>
                This principle isn't a slogan; it's a commitment to align every project with the client's vision, the space's potential, and our team's craftsmanship. It ensures that form doesn't overshadow function—and that beauty is backed by resilience. We apply this mindset not only in design, but also in how we lead our teams, invest in tools, and nurture client relationships.
              </p>
              <p>
                As we scale across the East African region, we are focused on deepening our impact through collaboration, creative leadership, and continuous improvement. At Sayona, we believe purposeful work leaves a meaningful legacy—and we are proud to shape that legacy every day.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="text-black font-bold text-lg">Jignesh Panchal</div>
              <div className="text-yellow-400 text-sm tracking-wide">Founder & CEO</div>
            </div>
          </Reveal>

          <Reveal className="relative bg-black/3 border border-black/10 p-10 md:p-14">
            <Quote size={48} className="text-yellow-400/20 mb-4" />
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">COO Statement</span>
            <h3 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6">Greatest Achievement</h3>
            <p className="text-black/60 leading-relaxed text-lg">
              One of my greatest achievements has been strengthening operational systems that improved production efficiency, enhanced product quality, and supported the successful delivery of high-quality fiberglass products to a growing customer base. By implementing standardized operational processes and fostering collaboration across departments, I have helped position Sayona International Limited for sustainable growth and long-term success.
            </p>
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="text-black font-bold text-lg">Tilak Panchal</div>
              <div className="text-yellow-400 text-sm tracking-wide">Chief Operations Officer</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">What Drives Us</span>
            <h2 className="text-4xl font-black text-black mt-3">Our Core <span className="text-yellow-400">Values</span></h2>
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