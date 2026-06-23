import { useState } from "react";
import { useTranslation } from "react-i18next";

type Field = "name" | "email" | "message";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<Field, boolean>>({ name: false, email: false, message: false });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormState): Errors => {
    const e: Errors = {};
    if (!data.name.trim()) e.name = t("contact.form.error_name");
    if (!data.email.trim()) {
      e.email = t("contact.form.error_email_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = t("contact.form.error_email_invalid");
    }
    if (!data.message.trim()) e.message = t("contact.form.error_message");
    else if (data.message.trim().length < 10) e.message = t("contact.form.error_message_short");
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as Field]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    // Simulated async send
    await new Promise((res) => setTimeout(res, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({ name: false, email: false, message: false });
    setSubmitted(false);
  };

  const inputBase = "w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-white/40 focus:bg-white/15";
  const inputOk = "border-white/20";
  const inputErr = "border-red-400/80 bg-red-500/10 focus:ring-red-400/40";
  const inputValid = "border-green-400/60 focus:ring-green-400/30";

  const fieldClass = (field: Field) => {
    if (!touched[field]) return `${inputBase} ${inputOk}`;
    if (errors[field]) return `${inputBase} ${inputErr}`;
    return `${inputBase} ${inputValid}`;
  };

  return (
    <section id="contact-section" className="relative bg-[linear-gradient(160deg,rgb(15,30,120)_0%,rgb(26,50,199)_60%,rgb(41,54,138)_100%)] py-20 px-4">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]" fill="white">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-flex items-center text-white text-xs font-semibold bg-white/20 tracking-[1.16px] uppercase px-[15px] py-1.5 rounded-[25px] mb-5">
            {t("contact.badge")}
          </span>
          <h2 className="text-white text-[32px] md:text-[52px] font-bold leading-tight mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: form */}
          <div className="lg:col-span-3 animate-on-scroll stagger-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-3xl p-12 text-center min-h-[420px] gap-6">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mb-2">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8 18l7 7 13-13" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold">{t("contact.form.success_title")}</h3>
                <p className="text-white/70 text-base max-w-xs">{t("contact.form.success_message")}</p>
                <button
                  onClick={handleReset}
                  className="mt-2 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/30 transition-all duration-200 text-sm"
                >
                  {t("contact.form.send_another")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 flex flex-col gap-6 backdrop-blur-sm">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/80 text-sm font-medium">{t("contact.form.name")} <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("contact.form.name_placeholder")}
                    className={fieldClass("name")}
                    autoComplete="name"
                  />
                  {touched.name && errors.name && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.25" stroke="#f87171" strokeWidth="1.5"/><path d="M6 3.5v3M6 8h.01" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {errors.name}
                    </span>
                  )}
                  {touched.name && !errors.name && form.name.trim() && (
                    <span className="flex items-center gap-1 text-green-400 text-xs mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l3 3 4-5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {t("contact.form.valid")}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/80 text-sm font-medium">{t("contact.form.email")} <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("contact.form.email_placeholder")}
                    className={fieldClass("email")}
                    autoComplete="email"
                  />
                  {touched.email && errors.email && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.25" stroke="#f87171" strokeWidth="1.5"/><path d="M6 3.5v3M6 8h.01" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {errors.email}
                    </span>
                  )}
                  {touched.email && !errors.email && form.email.trim() && (
                    <span className="flex items-center gap-1 text-green-400 text-xs mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l3 3 4-5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {t("contact.form.valid")}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/80 text-sm font-medium">{t("contact.form.message")} <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("contact.form.message_placeholder")}
                    rows={5}
                    className={`${fieldClass("message")} resize-none`}
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      {touched.message && errors.message && (
                        <span className="flex items-center gap-1 text-red-400 text-xs mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.25" stroke="#f87171" strokeWidth="1.5"/><path d="M6 3.5v3M6 8h.01" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
                          {errors.message}
                        </span>
                      )}
                      {touched.message && !errors.message && form.message.trim() && (
                        <span className="flex items-center gap-1 text-green-400 text-xs mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l3 3 4-5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {t("contact.form.valid")}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs mt-0.5 ${form.message.length > 800 ? "text-red-400" : "text-white/30"}`}>
                      {form.message.length}/1000
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-press w-full flex items-center justify-center gap-3 bg-white text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-base shadow-lg shadow-black/20 mt-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5 text-blue-900" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                        <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 2l14 7-14 7V10.5l10-1.5-10-1.5V2Z" fill="#1e3a8a"/>
                      </svg>
                      {t("contact.form.send")}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-on-scroll stagger-2">
            {/* Direct contact */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@cicables.com"
                className="group flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-4 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="1.5" y="4" width="17" height="12" rx="2.5" stroke="white" strokeWidth="1.5"/>
                    <path d="M1.5 7.5l8.5 5.5 8.5-5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{t("contact.form.email_label")}</p>
                  <p className="text-white font-medium text-sm">info@cicables.com</p>
                </div>
              </a>

              <a
                href="tel:+2252722496349"
                className="group flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-4 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 3h4.5l2 4.5-3 1.5a10 10 0 004.5 4.5l1.5-3 4.5 2V17a1 1 0 01-1 1C7 18 2 11 2 4a1 1 0 011-1h1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{t("contact.form.phone_label")}</p>
                  <p className="text-white font-medium text-sm">+225 27 22 49 63 49</p>
                </div>
              </a>
            </div>

            {/* Addresses */}
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">📍</span>
                  <h3 className="text-white font-bold text-sm">{t("contact.bonoumin")}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                  {t("contact.bonoumin_desc")}
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">📍</span>
                  <h3 className="text-white font-bold text-sm">{t("contact.attoban")}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                  {t("contact.attoban_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
