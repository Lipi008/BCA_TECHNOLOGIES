import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import type { PageId } from "./BCARouter";

interface HeaderProps {
  currentPage: PageId;
  navigate: (p: PageId) => void;
}

const BCALogoImg = ({ size = 44 }: { size?: number }) => (
  <img
    src="https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774343028758-0.png"
    alt="BCA Technologies Limited"
    style={{ height: size, width: "auto", maxWidth: size * 4, objectFit: "contain" }}
  />
);

export const BCAHeader = ({ currentPage, navigate }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const go = (p: PageId) => {
    navigate(p);
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("bca-lang", lang);
  };

  const lang = i18n.language?.startsWith("en") ? "en" : "fr";

  const navLinks: { label: string; page: PageId }[] = [
    { label: t("nav.home"), page: "accueil" },
    { label: t("nav.about"), page: "about" },
    { label: t("nav.offres"), page: "offres" },
    { label: t("nav.realisations"), page: "realisations" },
  ];

  const moreLinks: { label: string; page: PageId }[] = [
    { label: "Références & Partenaires", page: "partenaires" },
    { label: t("nav.actualites"), page: "actualites" },
    { label: t("nav.contact_btn"), page: "contact" },
  ];

  const tickerItems = [
    "🕘 Lundi - Vendredi : 8:00 - 17:00",
    "📍 Angré CNPS, Abidjan",
    "💡 Votre partenaire technologique pour un futur numérique",
    "🕘 Lundi - Vendredi : 8:00 - 17:00",
    "📍 Angré CNPS, Abidjan",
    "💡 Votre partenaire technologique pour un futur numérique",
  ];

  return (
    <>
      {/* Top ticker bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-700 text-white text-xs py-1.5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "ticker 28s linear infinite" }}>
          {tickerItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-10 font-medium tracking-wide">
              {item}
              <span className="text-blue-300 mx-4">|</span>
            </span>
          ))}
        </div>
      </div>

      <header className={`fixed top-[28px] left-0 right-0 z-50 w-full bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-20 gap-2">

          {/* Logo */}
          <button onClick={() => go("accueil")} className="flex items-center gap-2 flex-shrink-0 group">
            <BCALogoImg size={72} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => go(link.page)}
                className={`px-3 py-2 text-[14px] font-semibold transition-colors duration-200 relative group uppercase tracking-wide ${currentPage === link.page ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-blue-700 transition-transform duration-200 origin-center ${currentPage === link.page ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-3 py-2 text-[14px] font-semibold text-gray-700 hover:text-blue-700 transition-colors flex items-center gap-1 uppercase tracking-wide"
              >
                {lang === "fr" ? "Plus" : "More"}
                <svg className={`w-3 h-3 transition-transform ${moreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {moreOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-xl w-48 py-1 z-50">
                  {moreLinks.map((l) => (
                    <button
                      key={l.page}
                      onClick={() => go(l.page)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${currentPage === l.page ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Socials */}
            {[
              { label: "Facebook", href: "https://facebook.com", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { label: "LinkedIn", href: "https://linkedin.com", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              { label: "Instagram", href: "https://instagram.com", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-blue-700 transition-colors"
                aria-label={s.label}>{s.icon}</a>
            ))}

            {/* Lang */}
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button onClick={() => switchLang("fr")} className={`px-2.5 py-1 text-[11px] font-bold transition-colors ${lang === "fr" ? "bg-blue-700 text-white" : "text-gray-500 hover:text-blue-700"}`}>FR</button>
              <button onClick={() => switchLang("en")} className={`px-2.5 py-1 text-[11px] font-bold transition-colors ${lang === "en" ? "bg-blue-700 text-white" : "text-gray-500 hover:text-blue-700"}`}>EN</button>
            </div>

            {/* Contact CTA */}
            <button onClick={() => go("contact")} className="bg-gray-900 hover:bg-blue-700 text-white text-[12px] font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap">
              {t("nav.contact_btn")}
            </button>
          </div>

          {/* Mobile burger */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button onClick={() => switchLang("fr")} className={`px-2 py-1 text-[10px] font-bold ${lang === "fr" ? "bg-blue-700 text-white" : "text-gray-500"}`}>FR</button>
              <button onClick={() => switchLang("en")} className={`px-2 py-1 text-[10px] font-bold ${lang === "en" ? "bg-blue-700 text-white" : "text-gray-500"}`}>EN</button>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 text-gray-700" aria-label="Menu">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-0.5 shadow-lg">
            {[...navLinks, ...moreLinks].map((link) => (
              <button
                key={link.page}
                onClick={() => go(link.page)}
                className={`text-left py-3 px-3 text-sm font-semibold rounded-lg transition-colors ${currentPage === link.page ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
