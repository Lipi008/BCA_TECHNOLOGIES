import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCAContact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setSendError(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setSendError("Impossible de joindre le serveur. Veuillez réessayer.");
    } finally {
      setSending(false);
    }
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

  const socials = [
    {
      label: "Facebook",
      href: "https://facebook.com/profile.php?id=61591983830636",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/bca-technologies-limited",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0d1f55 0%, #143278 45%, #0e3a6e 100%)" }}>
      <FiberBg variant="blue" />
      {/* Subtle cyan glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,140,190,0.15) 0%, transparent 70%)" }} />
      {/* Subtle glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(20,50,120,0.3) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Info colonne ── */}
          <div className="lg:col-span-2 space-y-3 animate-on-scroll-left">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors duration-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(0,140,190,0.18)", color: "#008CBE" }}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#008CBE" }}>{info.label}</p>
                  <p className="text-white font-medium text-sm leading-relaxed whitespace-pre-line">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Réseaux sociaux */}
            <div className="p-4 rounded-xl border border-white/10" style={{ background: "rgba(0,140,190,0.12)" }}>
              <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: "#008CBE" }}>{t("footer.follow")}</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,140,190,0.5)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4" style={{ background: "rgba(0,140,190,0.2)", color: "#008CBE" }}>✓</div>
                <h3 className="text-xl font-bold text-white mb-2">{t("contact.form.success_title")}</h3>
                <p className="text-white/60 text-sm mb-6">{t("contact.form.success_message")}</p>
                <button
                  onClick={() => { setSent(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-white font-semibold px-6 py-2.5 rounded-full transition-colors duration-200"
                  style={{ background: "#143278" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#008CBE")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#143278")}
                >
                  {t("contact.form.send_another")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#008CBE" }}>
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("contact.form.name_placeholder")}
                      style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                      className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-white/40 outline-none transition-colors ${errors.name ? "border-red-400" : "border-white/20 focus:border-[#008CBE]"}`}
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#008CBE" }}>
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contact.form.email_placeholder")}
                      style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                      className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-white/40 outline-none transition-colors ${errors.email ? "border-red-400" : "border-white/20 focus:border-[#008CBE]"}`}
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#008CBE" }}>
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t("contact.form.subject_placeholder")}
                    style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                    className="w-full border border-white/20 rounded-xl px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-[#008CBE] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#008CBE" }}>
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.form.message_placeholder")}
                    style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                    className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-white/40 outline-none resize-none transition-colors ${errors.message ? "border-red-400" : "border-white/20 focus:border-[#008CBE]"}`}
                  />
                  {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
                </div>

                {sendError && (
                  <p className="text-red-400 text-sm text-center">{sendError}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                  style={{ background: "linear-gradient(90deg, #143278 0%, #008CBE 100%)" }}
                  onMouseEnter={(e) => !sending && (e.currentTarget.style.background = "linear-gradient(90deg, #0e2760 0%, #0077a8 100%)")}
                  onMouseLeave={(e) => !sending && (e.currentTarget.style.background = "linear-gradient(90deg, #143278 0%, #008CBE 100%)")}
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
