import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Reveal';
import images from '../assets/images';

const Contact =() => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Plot 17 Enterprise Road, Ntinda Industrial Area, Kampala, Uganda' },
    { icon: Phone, label: 'Phone', value: '+256 774 175310' },
    { icon: Mail, label: 'Email', value: 'info@sayonainternational.com' },
    { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 8:00 AM - 6:00 PM' },
  ];

  return (
    <div className="bg-white">
      <Seo
        title="Contact Us"
        description="Get in touch with Sayona International in Kampala, Uganda. Request a quote for fiberglass, epoxy, aluminium, furniture, or interior and exterior craftsmanship projects."
        path="/contact"
        image={images.contactUsHero}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <img src={images.contactUsHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/85 to-black" />
          <div className="absolute top-20 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>
        <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">Contact Us</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or need more information? Reach out to us and our team will get back to you promptly.
          </p>
        </Reveal>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <Reveal>
              <h2 className="text-3xl font-black text-black mb-6">Get in Touch</h2>
              <p className="text-black/60 leading-relaxed mb-8">
                We're here to answer any questions you may have about our services, products, or projects. Reach out through any of the channels below or fill out the contact form.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 bg-black/3 border border-black/10 p-5 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-yellow-400/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-all duration-300">
                      <info.icon size={22} className="text-yellow-400 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <div className="text-yellow-400 text-xs font-medium tracking-wide uppercase mb-1">{info.label}</div>
                      <div className="text-black/70 text-sm">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="bg-black/3 border border-black/10 p-8" delay={0.1}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 animate-[scaleIn_0.3s_ease-out]">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2">Message Sent!</h3>
                  <p className="text-black/60">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-black text-black mb-2">Send Us a Message</h2>
                  <p className="text-black/50 text-sm mb-6">Fill out the form below and we'll respond within 24 hours.</p>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                        placeholder="+256 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">Subject *</label>
                    <input
                      required
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="relative h-80 border border-black/10 overflow-hidden bg-zinc-100">
            <iframe
              title="Sayona International Limited location"
              src="https://www.google.com/maps?q=Plot+17+Enterprise+Road,+Ntinda+Industrial+Area,+Kampala,+Uganda&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Contact;
