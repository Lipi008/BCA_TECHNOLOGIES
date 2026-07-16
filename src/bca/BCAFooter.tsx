import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { PageId } from "./BCARouter";

const BCALogoImg = () => (
  <img
    src="https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774343028758-0.png"
    alt="BCA Technologies Limited"
    style={{ width: 120, height: "auto", objectFit: "contain" }}
  />
);

interface FooterProps {
  navigate: (p: PageId) => void;
}

export const BCAFooter = ({ navigate }: FooterProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "fr";
  const [email, setEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const footerPageLinks: { label: string; page: PageId }[] = [
    { label: lang === "fr" ? "Accueil" : "Home", page: "accueil" },
    { label: lang === "fr" ? "À propos" : "About", page: "about" },
    { label: lang === "fr" ? "Services" : "Services", page: "services" },
    {
      label: lang === "fr" ? "Réalisations" : "Projects",
      page: "realisations",
    },
    {
      label:
        lang === "fr" ? "Références & Partenaires" : "References & Partners",
      page: "partenaires",
    },
    { label: lang === "fr" ? "Actualités" : "News", page: "actualites" },
    { label: "Contact", page: "contact" },
  ];

  const socials = [
    {
      href: "https://facebook.com/profile.php?id=61591983830636",
      title: "Facebook",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      href: "https://linkedin.com/company/bca-technologies-limited",
      title: "LinkedIn",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setNewsletterSent(true);
    setEmail("");
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <BCALogoImg />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {lang === "fr"
                ? "Innover, Connecter, Sécuriser l'Afrique à tout moment."
                : "Innovate, Connect, Secure Africa at all times."}
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.title}
                  className="w-9 h-9 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              {lang === "fr" ? "Liens rapides" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {footerPageLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-gray-600 hover:text-blue-700 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              {lang === "fr" ? "Contact" : "Contact"}
            </h4>
            <div className="space-y-4">
              {["+225 01 50 57 57 57", "+225 07 99 57 57 57", "+225 05 65 57 57 57"].map((phone) => (
                <a
                  key={phone}
                  href={`tel:+${phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-600 hover:text-blue-700 text-sm transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.39 2.28 2.26 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81L8.09 7.91a16 16 0 0 0 8 8l2.19-2.19c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {phone}
                </a>
              ))}
              <a
                href="mailto:infosolutions@bcatechltd.com"
                className="flex items-start gap-3 text-gray-600 hover:text-blue-700 text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                infosolutions@bcatechltd.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Newsletter
            </h4>
            <p className="text-gray-500 text-xs mb-4">
              {lang === "fr"
                ? "Restez informé de nos dernières actualités."
                : "Stay informed about our latest news."}
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  lang === "fr" ? "Votre adresse e-mail" : "Your email address"
                }
                className="border border-gray-200 bg-gray-50 text-gray-800 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-colors placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
              >
                {newsletterSent
                  ? lang === "fr"
                    ? "Merci !"
                    : "Thank you!"
                  : lang === "fr"
                    ? "S'inscrire"
                    : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>
            © 2026 BCA Technologies Limited.{" "}
            {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <span>Business Canada Africa Technologies Limited</span>
        </div>
      </div>
    </footer>
  );
};
