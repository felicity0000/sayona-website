import { useState, useEffect } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import { useT } from "../i18n/translations";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const QuoteModal = ({ open, onClose }: QuoteModalProps) => {
  const t = useT();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    // web3forms
    e.preventDefault();
    setStatus("loading");
    setError("");
  };

  if (!open) return null;

  const services = t.quoteModal.services;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative bg-white border border-yellow-400/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-black/50 hover:text-yellow-400 hover:bg-black/5 transition-all duration-200 rounded-full z-10"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 animate-[scaleIn_0.3s_ease-out]">
              <CheckCircle2 size={32} className="text-black " />
            </div>
            <h3 className="text-2xl font-black text-black mb-2">
              {t.quoteModal.successHeading}
            </h3>
            <p className="text-black/60">
              {t.quoteModal.successBody}
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-8">
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">
                {t.quoteModal.eyebrow}
              </span>
              <h2 className="text-3xl font-black text-black mt-2 mb-2">
                {t.quoteModal.heading}
              </h2>
              <p className="text-black/50 text-sm">
                {t.quoteModal.subheading}
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                    {t.quoteModal.nameLabel}
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                    />
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-black/5 border border-black/10 text-black pl-10 pr-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder={t.quoteModal.namePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                    {t.quoteModal.companyLabel}
                  </label>
                  <div className="relative">
                    <Building2
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                    />
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full bg-black/5 border border-black/10 text-black pl-10 pr-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder={t.quoteModal.companyPlaceholder}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                    {t.quoteModal.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                    />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-black/5 border border-black/10 text-black pl-10 pr-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder={t.quoteModal.emailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                    {t.quoteModal.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                    />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-black/5 border border-black/10 text-black pl-10 pr-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder={t.quoteModal.phonePlaceholder}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                    {t.quoteModal.serviceLabel}
                  </label>
                  <div className="relative">
                    <FileText
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30 z-10"
                    />
                    <select
                      required
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full bg-black/5 border border-black/10 text-black pl-10 pr-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="" className="bg-white text-black">
                        {t.quoteModal.servicePlaceholder}
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-white text-black">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                    {t.quoteModal.projectTypeLabel}
                  </label>
                  <input
                    type="text"
                    value={form.projectType}
                    onChange={(e) =>
                      setForm({ ...form, projectType: e.target.value })
                    }
                    className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                    placeholder={t.quoteModal.projectTypePlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                  {t.quoteModal.budgetLabel}
                </label>
                <input
                  type="text"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                  placeholder={t.quoteModal.budgetPlaceholder}
                />
              </div>

              <div>
                <label className="text-black/60 text-xs font-medium tracking-wide uppercase mb-2 block">
                  {t.quoteModal.detailsLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-black/5 border border-black/10 text-black px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder={t.quoteModal.detailsPlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 tracking-wider uppercase text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    {t.quoteModal.submitting}
                  </>
                ) : (
                  <>
                    {t.quoteModal.submit}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
