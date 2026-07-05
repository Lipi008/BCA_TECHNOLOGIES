import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

type Category = "all" | "local" | "afrique" | "international";

const news: { date: string; category: string; scope: Category; title: string; excerpt: string; icon: string; gradient: string }[] = [
  {
    date: "Février 2025",
    category: "Projet",
    scope: "local",
    title: "Déploiement fibre optique zone industrielle de Yopougon",
    excerpt: "BCA Technologies finalise un déploiement fibre optique de 45 km dans la zone industrielle de Yopougon, connectant plus de 200 entreprises.",
    icon: "📡",
    gradient: "from-cyan-600 to-teal-700",
  },
  {
    date: "Novembre 2024",
    category: "Événement",
    scope: "local",
    title: "Participation au Forum Technologique d'Abidjan",
    excerpt: "BCA Technologies a présenté ses dernières solutions innovantes au premier Forum Technologique d'Abidjan, rassemblant plus de 500 professionnels.",
    icon: "🎤",
    gradient: "from-purple-600 to-indigo-700",
  },
  {
    date: "Mars 2025",
    category: "Partenariat",
    scope: "afrique",
    title: "BCA Technologies signe un accord stratégique avec Huawei Africa",
    excerpt: "Un nouveau partenariat officiel vient renforcer notre capacité à distribuer les équipements Huawei certifiés dans l'ensemble de la sous-région.",
    icon: "🤝",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    date: "Janvier 2025",
    category: "Expansion",
    scope: "afrique",
    title: "Ouverture d'un nouveau bureau au Ghana",
    excerpt: "BCA Technologies renforce sa présence régionale avec l'ouverture d'une antenne à Accra pour mieux servir ses clients ghanéens.",
    icon: "🌍",
    gradient: "from-green-600 to-emerald-700",
  },
  {
    date: "Octobre 2024",
    category: "Innovation",
    scope: "afrique",
    title: "Lancement d'une gamme de solutions domotique bas coût",
    excerpt: "Pour démocratiser l'accès à la domotique en Afrique, BCA Technologies lance une gamme de solutions intelligentes accessibles aux PME.",
    icon: "🏠",
    gradient: "from-violet-600 to-purple-700",
  },
  {
    date: "Décembre 2024",
    category: "Certification",
    scope: "international",
    title: "BCA Technologies obtient la certification Cisco Gold Partner",
    excerpt: "Après une année d'efforts, notre équipe technique obtient la certification Gold Partner Cisco, garantissant une expertise réseau au plus haut niveau.",
    icon: "🏆",
    gradient: "from-yellow-500 to-orange-600",
  },
];

const TABS: { key: Category; label: string; color: string }[] = [
  { key: "all",           label: "Toutes",         color: "bg-blue-700 text-white"  },
  { key: "local",        label: "Côte d'Ivoire",  color: "bg-green-600 text-white" },
  { key: "afrique",      label: "Afrique",         color: "bg-orange-500 text-white"},
  { key: "international",label: "International",   color: "bg-purple-600 text-white"},
];

export const BCAActualitesPage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? news : news.filter((n) => n.scope === active);

  return (
    <>
      <PageHero badge={t("nav.actualites")} title={t("actualites.title")} subtitle={t("actualites.subtitle")} />

      <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Onglets sous-catégories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                  active === tab.key
                    ? `${tab.color} border-transparent shadow-md`
                    : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {tab.label}
                <span className={`ml-2 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                  active === tab.key ? "bg-white/25" : "bg-gray-100"
                }`}>
                  {tab.key === "all" ? news.length : news.filter((n) => n.scope === tab.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grille d'articles */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20 text-sm">Aucun article dans cette catégorie pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((item, i) => (
                <article key={i} className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all hover:-translate-y-1`}>
                  <div className={`relative h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
                    <FiberBg variant="blue" className="opacity-30" />
                    <span className="relative text-5xl">{item.icon}</span>
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">{item.category}</div>
                    <div className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.scope === "local" ? "bg-green-500/80" : item.scope === "afrique" ? "bg-orange-500/80" : "bg-purple-500/80"
                    }`}>
                      {item.scope === "local" ? "🇨🇮 Côte d'Ivoire" : item.scope === "afrique" ? "🌍 Afrique" : "🌐 International"}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-xs mb-2">{item.date}</p>
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>
                    <button className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      {t("nav.read_more")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
