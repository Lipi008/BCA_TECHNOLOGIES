import React, { useState } from "react";
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

interface NewsItem {
  date: string;
  category: string;
  scope: Category;
  title: string;
  excerpt: string;
  body: string[];
  icon: React.ReactNode;
  gradient: string;
}

const news: NewsItem[] = [
  {
    date: "Février 2025",
    category: "Projet",
    scope: "local",
    title: "Déploiement fibre optique zone industrielle de Yopougon",
    excerpt: "BCA Technologies finalise un déploiement fibre optique de 45 km dans la zone industrielle de Yopougon, connectant plus de 200 entreprises.",
    body: [
      "BCA Technologies Limited a finalisé avec succès un déploiement de fibre optique de 45 km au cœur de la zone industrielle de Yopougon, l'un des plus importants pôles économiques d'Abidjan.",
      "Ce projet, réalisé en partenariat avec plusieurs opérateurs télécoms locaux, a permis de connecter plus de 200 entreprises industrielles et PME à des réseaux haut débit fiables, avec des débits atteignant 10 Gbps sur les tronçons principaux.",
      "Les travaux, menés par une équipe de 30 techniciens certifiés BCA, ont inclus la pose de câbles souterrains, l'installation de boîtiers de raccordement étanches et la mise en place d'un système de supervision en temps réel.",
      "Ce déploiement s'inscrit dans la stratégie nationale de digitalisation des zones industrielles et renforce la position de BCA Technologies comme acteur incontournable de l'infrastructure numérique en Côte d'Ivoire.",
    ],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-white"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>,
    gradient: "from-cyan-600 to-teal-700",
  },
  {
    date: "Novembre 2024",
    category: "Événement",
    scope: "local",
    title: "Participation au Forum Technologique d'Abidjan",
    excerpt: "BCA Technologies a présenté ses dernières solutions innovantes au premier Forum Technologique d'Abidjan, rassemblant plus de 500 professionnels.",
    body: [
      "BCA Technologies Limited a participé activement au premier Forum Technologique d'Abidjan, organisé au Palais des Congrès du Sofitel Hôtel Ivoire, en présence de plus de 500 professionnels du secteur numérique.",
      "Sur un stand de 40 m², l'équipe BCA a démontré en live ses solutions de fibre optique, de vidéosurveillance intelligente et d'automatisation domotique, suscitant un fort intérêt des participants.",
      "Le Directeur Général, M. Georges Poiret Angahi, a animé une conférence sur le thème « Infrastructures télécoms et souveraineté numérique en Afrique de l'Ouest », saluée par les organisateurs.",
      "Cet événement a permis à BCA Technologies de renforcer ses liens avec l'écosystème tech local et d'initier plusieurs partenariats commerciaux en cours de finalisation.",
    ],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-white"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
    gradient: "from-purple-600 to-indigo-700",
  },
  {
    date: "Mars 2025",
    category: "Partenariat",
    scope: "afrique",
    title: "BCA Technologies signe un accord stratégique avec Huawei Africa",
    excerpt: "Un nouveau partenariat officiel vient renforcer notre capacité à distribuer les équipements Huawei certifiés dans l'ensemble de la sous-région.",
    body: [
      "BCA Technologies Limited a officialisé un accord de partenariat stratégique avec Huawei Africa, renforçant ainsi sa capacité à distribuer les équipements de réseau certifiés Huawei dans l'ensemble de l'Afrique de l'Ouest.",
      "Cet accord, signé lors d'une cérémonie à Abidjan en présence des équipes techniques des deux entreprises, couvre la distribution d'équipements de transmission optique, de solutions radio et d'équipements de datacenter.",
      "Grâce à ce partenariat, BCA Technologies bénéficiera d'une formation continue pour ses techniciens, d'un accès prioritaire aux nouvelles gammes de produits et d'un support technique de premier niveau.",
      "Ce rapprochement stratégique permettra à BCA d'accélérer son expansion au Ghana, au Mali et au Libéria, où la demande en infrastructures télécoms de qualité est en forte croissance.",
    ],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-white"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    date: "Janvier 2025",
    category: "Expansion",
    scope: "afrique",
    title: "Ouverture d'un nouveau bureau au Ghana",
    excerpt: "BCA Technologies renforce sa présence régionale avec l'ouverture d'une antenne à Accra pour mieux servir ses clients ghanéens.",
    body: [
      "BCA Technologies Limited a officiellement inauguré son bureau régional à Accra, capitale du Ghana, marquant une étape clé dans le développement de sa présence sous-régionale.",
      "Ce bureau, situé dans le quartier d'affaires d'Osu, sera dirigé par une équipe locale de 8 personnes et assurera la prospection commerciale, le support technique et la coordination logistique pour l'ensemble du territoire ghanéen.",
      "Le Ghana représente un marché prioritaire pour BCA Technologies, avec une demande croissante en déploiement de fibre optique, en sécurité électronique et en solutions énergétiques solaires pour les entreprises et institutions.",
      "Cette ouverture s'accompagne d'un partenariat local avec une société d'ingénierie ghanéenne pour accélérer les certifications et répondre aux appels d'offres publics dans les délais requis.",
    ],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-white"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    gradient: "from-green-600 to-emerald-700",
  },
  {
    date: "Octobre 2024",
    category: "Innovation",
    scope: "afrique",
    title: "Lancement d'une gamme de solutions domotique bas coût",
    excerpt: "Pour démocratiser l'accès à la domotique en Afrique, BCA Technologies lance une gamme de solutions intelligentes accessibles aux PME.",
    body: [
      "BCA Technologies Limited a lancé une nouvelle gamme de solutions domotiques conçue spécifiquement pour les PME et les ménages à revenus intermédiaires en Afrique subsaharienne.",
      "Cette gamme, baptisée « BCA SmartHome Lite », propose des systèmes de contrôle d'éclairage, de gestion de la climatisation, de vidéosurveillance et de contrôle d'accès à des prix inférieurs de 40 % aux offres premium du marché.",
      "Les équipements sont compatibles avec les réseaux 4G locaux et ne nécessitent pas de connexion haut débit permanente, ce qui les rend particulièrement adaptés aux zones semi-urbaines.",
      "En moins d'un mois après le lancement, BCA Technologies a déjà reçu plus de 50 demandes d'installation émanant de PME en Côte d'Ivoire, au Sénégal et au Mali, confirmant le potentiel de ce marché.",
    ],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-white"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    gradient: "from-violet-600 to-purple-700",
  },
  {
    date: "Décembre 2024",
    category: "Certification",
    scope: "international",
    title: "BCA Technologies obtient la certification Cisco Gold Partner",
    excerpt: "Après une année d'efforts, notre équipe technique obtient la certification Gold Partner Cisco, garantissant une expertise réseau au plus haut niveau.",
    body: [
      "BCA Technologies Limited a obtenu la certification Cisco Gold Partner, l'une des distinctions les plus prestigieuses dans l'industrie des réseaux et des télécommunications mondiales.",
      "Cette certification, délivrée après un processus rigoureux d'évaluation des compétences techniques, de la qualité de service et du volume de projets réalisés, distingue BCA Technologies comme l'un des rares partenaires Gold Cisco en Afrique de l'Ouest.",
      "Pour y parvenir, l'équipe technique de BCA a suivi plus de 1 200 heures de formation certifiante et réussi 14 examens spécialisés couvrant les domaines du routage, de la commutation, de la sécurité réseau et du cloud.",
      "Cette accréditation permettra à BCA Technologies d'accéder aux gammes d'équipements Cisco les plus avancées, d'obtenir des remises préférentielles sur les commandes et de répondre aux appels d'offres institutionnels exigeant ce niveau de certification.",
    ],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-white"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    gradient: "from-yellow-500 to-orange-600",
  },
];

const TABS: { key: Category; label: string; color: string }[] = [
  { key: "all",           label: "Toutes",         color: "bg-blue-700 text-white"  },
  { key: "local",        label: "Côte d'Ivoire",  color: "bg-green-600 text-white" },
  { key: "afrique",      label: "Afrique",         color: "bg-orange-500 text-white"},
  { key: "international",label: "International",   color: "bg-purple-600 text-white"},
];

const ArticleModal = ({ item, onClose }: { item: NewsItem; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header coloré */}
      <div className={`relative h-40 bg-gradient-to-br ${item.gradient} flex items-center justify-center rounded-t-3xl overflow-hidden`}>
        <div className="w-12 h-12">{item.icon}</div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          aria-label="Fermer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="absolute bottom-3 left-5 flex gap-2">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">{item.category}</span>
          <span className={`text-white text-xs font-bold px-2 py-1 rounded-full ${
            item.scope === "local" ? "bg-green-500/80" : item.scope === "afrique" ? "bg-orange-500/80" : "bg-purple-500/80"
          }`}>
            {item.scope === "local" ? "Côte d'Ivoire" : item.scope === "afrique" ? "Afrique" : "International"}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-7">
        <p className="text-gray-400 text-xs mb-3">{item.date}</p>
        <h2 className="text-gray-900 font-black text-xl leading-snug mb-6">{item.title}</h2>
        <div className="space-y-4">
          {item.body.map((para, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
);

export const BCAActualitesPage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("all");
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const filtered = active === "all" ? news : news.filter((n) => n.scope === active);

  return (
    <>
      <PageHero badge={t("nav.actualites")} title={t("actualites.title")} subtitle={t("actualites.subtitle")} />

      {selected && <ArticleModal item={selected} onClose={() => setSelected(null)} />}

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
                <article
                  key={i}
                  className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer`}
                  onClick={() => setSelected(item)}
                >
                  <div className={`relative h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
                    <FiberBg variant="blue" className="opacity-30" />
                    <div className="relative w-8 h-8">{item.icon}</div>
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">{item.category}</div>
                    <div className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.scope === "local" ? "bg-green-500/80" : item.scope === "afrique" ? "bg-orange-500/80" : "bg-purple-500/80"
                    }`}>
                      {item.scope === "local" ? "Côte d'Ivoire" : item.scope === "afrique" ? "Afrique" : "International"}
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
