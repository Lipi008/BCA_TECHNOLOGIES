import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

import img1  from "../../img/gallery/photo_2026-06-23_19-17-51.jpg";
import img2  from "../../img/gallery/photo_2026-06-23_19-18-28.jpg";
import img3  from "../../img/gallery/photo_2026-06-23_19-18-35.jpg";
import img4  from "../../img/gallery/photo_2026-06-23_19-18-40.jpg";
import img5  from "../../img/gallery/photo_2026-06-23_19-18-44.jpg";
import img6  from "../../img/gallery/photo_2026-06-23_19-18-49.jpg";
import img7  from "../../img/gallery/photo_2026-06-23_19-18-53.jpg";
import img8  from "../../img/gallery/photo_2026-06-23_19-18-57.jpg";
import img9  from "../../img/gallery/photo_2026-06-23_19-19-02.jpg";
import img10 from "../../img/gallery/photo_2026-06-23_19-19-06.jpg";
import img11 from "../../img/gallery/photo_2026-06-23_19-19-12.jpg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

/* ── Données galerie ── */
const GALLERY_ITEMS = [
  {
    id: 1,
    image: img7,
    category: "Fibre Optique",
    title: "Installation boîtier fibre — Technicien BCA sur poteau",
    description: "Technicien BCA Technologies en intervention terrain, pose d'un boîtier de raccordement fibre optique sur poteau.",
    location: "Abidjan, CI",
    year: "2024",
    wide: false,
  },
  {
    id: 2,
    image: img2,
    category: "Réseau",
    title: "Configuration salle réseau — Câblage & supervision",
    description: "Configuration d'équipements réseau en salle technique : brassage, administration des équipements actifs et vérification du plan de câblage.",
    location: "Abidjan, CI",
    year: "2024",
    wide: false,
  },
  {
    id: 3,
    image: img4,
    category: "Télécom",
    title: "Installation aérienne — Câblage sur poteau",
    description: "Montée sur poteau pour fixation et raccordement de câbles télécom aériens dans un quartier résidentiel.",
    location: "Côte d'Ivoire",
    year: "2024",
    wide: true,
  },
  {
    id: 4,
    image: img6,
    category: "Fibre Optique",
    title: "Génie civil — Fouille pour passage de câble",
    description: "Travaux de génie civil : ouverture de tranchées pour la pose de microcanalisations fibre optique souterraine.",
    location: "Côte d'Ivoire",
    year: "2024",
    wide: false,
  },
  {
    id: 5,
    image: img8,
    category: "Télécom",
    title: "Montée en hauteur — Installation infrastructure",
    description: "Technicien en intervention sur infrastructure télécom aérienne, fixation et raccordement de boîtiers de dérivation.",
    location: "Côte d'Ivoire",
    year: "2024",
    wide: false,
  },
  {
    id: 6,
    image: img1,
    category: "Fibre Optique",
    title: "Intervention terrain — Équipe BCA en chantier",
    description: "Équipe BCA Technologies en intervention sur un point de raccordement au sol, vérification et maintenance d'un regard de génie civil.",
    location: "Abidjan, CI",
    year: "2024",
    wide: false,
  },
  {
    id: 7,
    image: img3,
    category: "Fibre Optique",
    title: "Équipe BCA — Travaux de raccordement",
    description: "L'équipe terrain de BCA Technologies lors de travaux de raccordement fibre optique en milieu urbain.",
    location: "Abidjan, CI",
    year: "2024",
    wide: true,
  },
  {
    id: 8,
    image: img9,
    category: "Fibre Optique",
    title: "Génie civil — Perçage et tranchée",
    description: "Ouverture manuelle de tranchées pour passage de câbles en microcanalisation, phase préparatoire au déroulage fibre.",
    location: "Côte d'Ivoire",
    year: "2024",
    wide: false,
  },
  {
    id: 9,
    image: img10,
    category: "Fibre Optique",
    title: "Chantier fibre — Équipe en fouille urbaine",
    description: "Deux techniciens en plein travaux de génie civil urbain pour le déploiement d'un réseau fibre optique de quartier.",
    location: "Côte d'Ivoire",
    year: "2024",
    wide: false,
  },
  {
    id: 10,
    image: img11,
    category: "Fibre Optique",
    title: "Travaux de canalisations souterraines",
    description: "Creusement et pose de canalisations pour le passage de câbles fibre optique souterrains dans un secteur résidentiel.",
    location: "Côte d'Ivoire",
    year: "2024",
    wide: false,
  },
  {
    id: 11,
    image: img5,
    category: "Équipe",
    title: "Techniciens BCA — Prêts pour le chantier",
    description: "Deux techniciens de BCA Technologies en tenue de terrain officielle, prêts à intervenir sur un chantier de déploiement fibre.",
    location: "Abidjan, CI",
    year: "2024",
    wide: false,
  },
];

const GALLERY_FILTERS = ["Tous", "Fibre Optique", "Télécom", "Réseau", "Équipe"];

/* ── Galerie composant ── */
const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const displayed = activeFilter === "Tous"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeFilter);

  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Galerie
          </div>
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">GALERIE PHOTOS</h2>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">
            Quelques images représentatives de nos chantiers et installations à travers l&#39;Afrique de l&#39;Ouest.
          </p>
          <div className="mt-4 w-14 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeFilter === f ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grille masonry-style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {displayed.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              {/* Vraie photo */}
              <div className={`relative overflow-hidden ${item.wide ? "h-72" : "h-52"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                {/* Loupe au survol */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Légende */}
              <div className="bg-white border border-gray-100 p-4">
                <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">{item.title}</h3>
                <div className="flex items-center gap-1 mt-1.5 text-gray-400 text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">{selectedItem.category}</span>
                <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">{selectedItem.year}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-black text-gray-900 text-xl leading-tight">{selectedItem.title}</h3>
              <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {selectedItem.location}
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
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
  const catIcons: Record<string, string> = { "Télécoms": "📡","Sécurité": "🔒","Informatique": "💻","Domotique": "🏠","Énergie": "⚡" };

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
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">NOS PROJETS</h2>
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
                  <span className="relative text-5xl">{catIcons[project.category] || "🔧"}</span>
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
