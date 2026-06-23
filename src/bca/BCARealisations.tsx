import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCARealisations = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "fr";
  const filters = t("realisations.filters", { returnObjects: true }) as string[];
  const projects = t("realisations.projects", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    category: string;
    location: string;
    year: string;
  }>;

  const [active, setActive] = useState(0);

  const categoryMap: Record<string, string[]> = {
    "Tous": ["Télécoms", "Sécurité", "Informatique", "Domotique", "Énergie"],
    "All": ["Télécoms", "Sécurité", "Informatique", "Domotique", "Énergie"],
    "Télécoms": ["Télécoms"],
    "Telecoms": ["Télécoms"],
    "Sécurité": ["Sécurité"],
    "Security": ["Sécurité"],
    "Informatique": ["Informatique"],
    "IT": ["Informatique"],
    "Domotique": ["Domotique"],
    "Automation": ["Domotique"],
    "Énergie": ["Énergie"],
    "Energy": ["Énergie"],
  };

  const catIcons: Record<string, string> = {
    "Télécoms": "📡",
    "Sécurité": "🔒",
    "Informatique": "💻",
    "Domotique": "🏠",
    "Énergie": "⚡",
  };

  const filtered = projects.filter((p) => {
    const allowed = categoryMap[filters[active]] || [];
    return allowed.includes(p.category);
  });

  return (
    <>
    <section id="realisations" className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t("realisations.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            {t("realisations.title")}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">{t("realisations.subtitle")}</p>
          <div className="mt-5 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md shadow-blue-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
            >
              {/* Visual top */}
              <div className="relative h-36 bg-gradient-to-br from-blue-800 to-purple-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <path d="M0,75 Q100,30 200,60 T400,40" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M0,90 Q100,50 200,75 T400,55" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.5"/>
                    <path d="M0,105 Q100,65 200,90 T400,70" stroke="#4ECDC4" strokeWidth="2" fill="none" opacity="0.5"/>
                  </svg>
                </div>
                <span className="relative text-5xl">{catIcons[project.category] || "🔧"}</span>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {project.location}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== TESTIMONIALS ===== */}
    <section id="temoignages" className="bg-gradient-to-br from-[#0a0f2e] to-[#0d1a4a] py-20 px-6 relative overflow-hidden">
      <FiberBg variant="blue" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-blue-800/40">
            {t("testimonials.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            {t("testimonials.title")}
          </h2>
          <div className="mt-5 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(t("testimonials.items", { returnObjects: true }) as Array<{ quote: string; name: string; company: string; initials: string }>).map((item, i) => (
            <div key={i} className={`animate-on-scroll stagger-${(i % 3) + 1} bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300`}>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-6">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {item.initials}
                </div>
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
