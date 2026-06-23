import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCAContact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = t("contact.form.error_name");
    if (!formData.email.trim()) e.email = t("contact.form.error_email_required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = t("contact.form.error_email_invalid");
    if (!formData.message.trim()) e.message = t("contact.form.error_message");
    else if (formData.message.trim().length < 10) e.message = t("contact.form.error_message_short");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: t("contact.address_label"),
      value: t("contact.address"),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.39 2.28 2.26 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81L8.09 7.91a16 16 0 0 0 8 8l2.19-2.19c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: t("contact.phone_label"),
      value: `${t("contact.phone1")}\n${t("contact.phone2")}\n${t("contact.phone3")}`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: t("contact.email_label"),
      value: t("contact.email"),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: t("contact.hours_label"),
      value: t("contact.hours"),
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 px-6 relative overflow-hidden">
      <FiberBg variant="blue" />
      {/* subtle radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)"}} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 animate-on-scroll-left">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white/8 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-colors duration-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-blue-300/70 font-medium uppercase tracking-wide mb-0.5">{info.label}</p>
                  <p className="text-white font-semibold text-sm leading-relaxed whitespace-pre-line">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="p-4 bg-gradient-to-br from-blue-700 to-purple-700 rounded-xl text-white">
              <p className="text-sm font-semibold mb-3 text-white/80 uppercase tracking-widest">{t("footer.follow")}</p>
              <div className="flex gap-3">
                {[
                  { label: "f", href: "https://facebook.com" },
                  { label: "𝕏", href: "https://x.com" },
                  { label: "in", href: "https://linkedin.com" },
                  { label: "ig", href: "https://instagram.com" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white font-bold text-xs transition-colors duration-200"
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contact.form.success_title")}</h3>
                <p className="text-gray-500 text-sm mb-6">{t("contact.form.success_message")}</p>
                <button
                  onClick={() => { setSent(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors duration-200"
                >
                  {t("contact.form.send_another")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white/8 backdrop-blur-md rounded-2xl border border-white/10 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("contact.form.name_placeholder")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm bg-white/10 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors ${errors.name ? "border-red-400" : "border-white/20"}`}
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contact.form.email_placeholder")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm bg-white/10 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors ${errors.email ? "border-red-400" : "border-white/20"}`}
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t("contact.form.subject_placeholder")}
                    className="w-full border border-white/20 rounded-xl px-4 py-3 text-sm bg-white/10 text-white placeholder-white/30 outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wide">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.form.message_placeholder")}
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white/10 text-white placeholder-white/30 outline-none resize-none focus:border-blue-400 transition-colors ${errors.message ? "border-red-400" : "border-white/20"}`}
                  />
                  {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.form.send")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
