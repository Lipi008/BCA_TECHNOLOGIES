import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #143278 0%, #0e2d6e 60%, #008CBE 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);


/* ── Galerie composant ── */
const GallerySection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            {t("realizations.gallery_badge")}
          </div>
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">{t("realizations.gallery_title")}</h2>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">{t("realizations.gallery_subtitle")}</p>
          <div className="mt-4 w-14 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col items-center justify-center py-20 text-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <p className="text-gray-500 text-sm max-w-sm">
            {i18n.language?.startsWith("en")
              ? "Gallery coming soon — photos will be added shortly."
              : "Galerie en cours de mise à jour — les photos seront ajoutées prochainement."}
          </p>
        </div>
      </div>
    </section>
  );
};

export const BCARealisationsPage = () => {
  const { t } = useTranslation();
  const filters = t("realisations.filters", { returnObjects: true }) as string[];
  const projects = t("realisations.projects", { returnObjects: true }) as Array<{ title: string; description: string; category: string; location: string; year: string }>;
  const [active, setActive] = useState(0);

  const categoryMap: Record<string, string[]> = {
    "Tous": ["Télécoms","Sécurité","Informatique","Domotique","Énergie"],
    "All": ["Télécoms","Sécurité","Informatique","Domotique","Énergie"],
    "Télécoms": ["Télécoms"], "Telecoms": ["Télécoms"],
    "Sécurité": ["Sécurité"], "Security": ["Sécurité"],
    "Informatique": ["Informatique"], "IT": ["Informatique"],
    "Domotique": ["Domotique"], "Automation": ["Domotique"],
    "Énergie": ["Énergie"], "Energy": ["Énergie"],
  };
  const catIcons: Record<string, React.ReactNode> = {
    "Télécoms": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-12 h-12 text-white"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>,
    "Sécurité": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-12 h-12 text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    "Informatique": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-12 h-12 text-white"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>,
    "Domotique": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-12 h-12 text-white"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    "Énergie": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-12 h-12 text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  };

  const filtered = projects.filter((p) => {
    const allowed = categoryMap[filters[active]] || [];
    return allowed.includes(p.category);
  });

  return (
    <>
      <PageHero badge={t("nav.realisations")} title={t("realisations.title")} subtitle={t("realisations.subtitle")} />

      {/* Section projets avec filtres */}
      <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">{t("realizations.projects_title")}</h2>
            <div className="mt-3 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </div>
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f, i) => (
              <button key={i} onClick={() => setActive(i)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === i ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Grid projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-36 bg-gradient-to-br from-blue-800 to-purple-900 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <path d="M0,75 Q100,30 200,60 T400,40" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M0,90 Q100,50 200,75 T400,55" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
                  </svg>
                  <div className="relative">{catIcons[project.category] || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-12 h-12 text-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}</div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">{project.year}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">{project.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <GallerySection />

      {/* Témoignages */}
      <section className="bg-gradient-to-br from-[#0a0f2e] to-[#0d1a4a] py-20 px-6 relative overflow-hidden">
        <FiberBg variant="blue" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-900/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-blue-800/40">{t("testimonials.badge")}</div>
            <h2 className="text-4xl font-black text-white uppercase">{t("testimonials.title")}</h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(t("testimonials.items", { returnObjects: true }) as Array<{ quote: string; name: string; company: string; initials: string }>).map((item, i) => (
              <div key={i} className={`animate-on-scroll stagger-${(i % 3)+1} bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all`}>
                <div className="flex gap-1 mb-4">{[1,2,3,4,5].map((s) => (<svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>))}</div>
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">{item.initials}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-blue-300/60 text-xs">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
