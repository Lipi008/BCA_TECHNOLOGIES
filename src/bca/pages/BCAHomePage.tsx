import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";
import { BCAWhyUs } from "../BCAWhyUs";
import type { PageId } from "../BCARouter";

interface Props { navigate: (p: PageId) => void; }

/* ─────────────────────────────────────────────
   HERO — logo 99% largeur + slider fond blanc
───────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    src: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774343028758-0.png",
    alt: "BCA Technologies — Logo principal",
    objectFit: "contain" as const,
    label: "",
    desc: "",
    bg: "#ffffff",
  },
  {
    src: "https://c.animaapp.com/mn4bql9mR7qaS3/img/generated-image-1774521368445.png",
    alt: "Fibre Optique — Déploiement de réseaux haute performance",
    objectFit: "cover" as const,
    label: "Fibre Optique",
    desc: "Déploiement de réseaux fibre optique haute performance pour connecter entreprises et institutions.",
    bg: "#000000",
  },
  {
    src: "",
    alt: "Sécurité Professionnelle — Solutions de sécurité électronique",
    objectFit: "cover" as const,
    label: "Sécurité Professionnelle",
    desc: "Solutions complètes de sécurité électronique pour la protection de vos locaux et actifs.",
    bg: "#1e293b",
    noImage: true,
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    alt: "Solutions Intelligentes — Automatisation et IoT",
    objectFit: "cover" as const,
    label: "Solutions Intelligentes",
    desc: "Automatisation et IoT pour des bâtiments intelligents et une agriculture connectée.",
    bg: "#0f172a",
  },
];

const Hero = ({ navigate }: Props) => {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const total = HERO_SLIDES.length;

  const goTo = (next: number) => {
    setFading(true);
    setTimeout(() => {
      setSlide(next);
      setFading(false);
    }, 350);
  };

  /* Auto-play 4 s */
  useEffect(() => {
    const id = setInterval(() => goTo((slide + 1) % total), 4000);
    return () => clearInterval(id);
  }, [slide, total]);

  const prev = () => goTo((slide - 1 + total) % total);
  const next = () => goTo((slide + 1) % total);

  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* ── SLIDER : logo/image pleine largeur ── */}
      <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
        {!(HERO_SLIDES[slide] as any).noImage && (
          <img
            src={HERO_SLIDES[slide].src}
            alt={HERO_SLIDES[slide].alt}
            draggable={false}
            className="absolute inset-0 w-full h-full select-none transition-opacity duration-500"
            style={{
              opacity: fading ? 0 : 1,
              objectFit: HERO_SLIDES[slide].objectFit,
            }}
          />
        )}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: (HERO_SLIDES[slide] as any).bg || "#000000",
            opacity: (HERO_SLIDES[slide] as any).noImage ? (fading ? 0 : 1) : 0,
            zIndex: (HERO_SLIDES[slide] as any).noImage ? 0 : -1,
          }}
        />

        {/* Overlay gradient bas pour les slides non-logo */}
        {slide !== 0 && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        )}

        {/* Caption slide (label + description + items) */}
        {slide !== 0 && HERO_SLIDES[slide].label && (
          <div
            className="absolute bottom-14 left-0 right-0 px-8 md:px-16 transition-all duration-500 z-10"
            style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)" }}
          >
            {slide === 1 && (
              <div className="max-w-3xl">
                <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-1">Fibre Optique</p>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-2">Déploiement de réseaux haute performance</h2>
                <p className="text-white/80 text-sm mb-3">Connecter entreprises et institutions avec des technologies FTTH, FTTB, GPON.</p>
                <div className="flex flex-wrap gap-2">
                  {["FTTH / FTTB / FTTC", "Réseaux GPON", "Voix, Vidéo & Données", "Maintenance & Support"].map((tag, i) => (
                    <span key={i} className="bg-white/15 border border-white/25 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}
            {slide === 2 && (
              <div className="max-w-3xl">
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Sécurité Professionnelle</p>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-2">Protection complète de vos locaux et actifs</h2>
                <p className="text-white/80 text-sm mb-3">Solutions de sécurité électronique adaptées aux entreprises et institutions.</p>
                <div className="flex flex-wrap gap-2">
                  {["Interphones vidéo Wi-Fi", "Ouvre-portes GSM", "Contrôle d'accès biométrique", "Anti-intrusion"].map((tag, i) => (
                    <span key={i} className="bg-white/15 border border-white/25 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}
            {slide === 3 && (
              <div className="max-w-3xl">
                <p className="text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-1">Solutions Intelligentes</p>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-2">Bâtiments intelligents et agriculture connectée</h2>
                <p className="text-white/80 text-sm mb-3">Automatisation et IoT pour transformer vos espaces et processes.</p>
                <div className="flex flex-wrap gap-2">
                  {["Domotique & BMS", "Agriculture intelligente", "Objets connectés IoT", "Contrôle d'accès automatisé"].map((tag, i) => (
                    <span key={i} className="bg-white/15 border border-white/25 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bouton prev */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 hover:bg-white shadow flex items-center justify-center text-gray-700 transition-all z-20"
          aria-label="Précédent"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Bouton next */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 hover:bg-white shadow flex items-center justify-center text-gray-700 transition-all z-20"
          aria-label="Suivant"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === slide ? "w-7 h-2 bg-blue-600" : "w-2 h-2 bg-white/70 hover:bg-white"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── TAGLINE sous le slider ── */}
      <div className="bg-gray-100 border-t border-gray-200 py-5 px-6 text-center">
        <p className="text-gray-900 font-bold text-base sm:text-lg md:text-xl">
          Innover, sécuriser, connecter&nbsp;: l&#39;Afrique en mouvement
        </p>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PRÉSENTATION — vrai texte + fondateur
───────────────────────────────────────────── */
const Presentation = ({ navigate }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texte gauche */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              {t("presentation.title")}
            </h2>
            <div className="w-8 h-0.5 bg-blue-600" />
            <p className="text-gray-600 text-base leading-relaxed">{t("presentation.text1")}</p>
            <p className="text-gray-600 text-base leading-relaxed">{t("presentation.text2")}</p>
            <p className="text-gray-600 text-base leading-relaxed">{t("presentation.text3")}</p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: t("presentation.founded_label"), value: "2017" },
                { label: t("presentation.hq_label"), value: "Cocody, Abidjan" },
                { label: t("presentation.founder_label"), value: "G. P. ANGAHI" },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded p-3 flex flex-col gap-0.5 bg-white">
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider">{item.label}</span>
                  <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("about")}
              className="text-blue-700 font-medium text-sm hover:underline mt-2"
            >
              En savoir plus sur BCA →
            </button>
          </div>

          {/* Cards droite — Mission / Vision / Valeurs */}
          <div className="space-y-4">
            {[
              { title: t("presentation.mission_title"), text: t("presentation.mission_text") },
              { title: t("presentation.vision_title"), text: t("presentation.vision_text") },
              { title: t("presentation.values_title"), text: t("presentation.values_text") },
            ].map((card, i) => (
              <div key={i} className="border-l-4 border-l-blue-600 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   RÉFÉRENCES — défilement infini (marquee)
───────────────────────────────────────────── */
const REFS_DATA = [
  { name: "Orange CI", logo: "https://logo.clearbit.com/orange.com" },
  { name: "MTN Côte d'Ivoire", logo: "https://logo.clearbit.com/mtn.com" },
  { name: "Moov Africa", logo: "https://logo.clearbit.com/moov-africa.com" },
  { name: "SFR", logo: "https://logo.clearbit.com/sfr.fr" },
  { name: "Ministère des TIC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Coat_of_arms_of_Ivory_Coast.svg/120px-Coat_of_arms_of_Ivory_Coast.svg.png" },
  { name: "Côte d'Ivoire Télécom", logo: "https://logo.clearbit.com/telecom.ci" },
  { name: "Canal+ Afrique", logo: "https://logo.clearbit.com/canalplus.com" },
  { name: "Société Générale CI", logo: "https://logo.clearbit.com/societegenerale.com" },
  { name: "BICICI", logo: "https://logo.clearbit.com/bicici.com" },
  { name: "Université FHB", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Universit%C3%A9_F%C3%A9lix-Houphou%C3%ABt-Boigny_logo.png/120px-Universit%C3%A9_F%C3%A9lix-Houphou%C3%ABt-Boigny_logo.png" },
  { name: "TOTAL Énergies CI", logo: "https://logo.clearbit.com/totalenergies.com" },
  { name: "Bolloré Africa Logistics", logo: "https://logo.clearbit.com/bollore.com" },
];

const ReferenceLogoCard = ({ name, logo }: { name: string; logo: string }) => {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-5 py-4 border border-gray-200 rounded-lg bg-white hover:border-blue-300 hover:shadow-md transition-all group" style={{ minWidth: 140, height: 100 }}>
      <div className="w-24 h-12 flex items-center justify-center overflow-hidden">
        {!failed ? (
          <img src={logo} alt={name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" onError={() => setFailed(true)} />
        ) : (
          <span className="text-gray-600 font-semibold text-xs text-center leading-tight">{name}</span>
        )}
      </div>
      <span className="text-xs text-gray-500 font-medium text-center leading-tight truncate w-full">{name}</span>
    </div>
  );
};

const ReferencesSlider = ({ navigate }: Props) => {
  const doubled = [...REFS_DATA, ...REFS_DATA];

  return (
    <section className="bg-white py-14 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Nos références</h2>
            <div className="mt-2 w-8 h-0.5 bg-blue-600" />
          </div>
          <button onClick={() => navigate("references")} className="text-blue-700 font-medium text-sm hover:underline flex-shrink-0">
            Voir toutes nos références →
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-5 animate-marquee items-stretch" style={{ width: "max-content" }}>
            {doubled.map((ref, i) => (
              <ReferenceLogoCard key={i} name={ref.name} logo={ref.logo} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PARTENAIRES SLIDESHOW (défilement auto)
───────────────────────────────────────────── */
/* mini composant logo avec fallback texte */
const PartnerLogoCard = ({ name, logo, bg, text }: { name: string; logo?: string; bg?: string; text?: string }) => {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-5 py-4 border border-gray-200 rounded-lg bg-white hover:border-blue-300 hover:shadow-md transition-all group" style={{ minWidth: 140, height: 100 }}>
      <div className="w-24 h-12 flex items-center justify-center overflow-hidden">
        {logo && !failed ? (
          <img src={logo} alt={name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" onError={() => setFailed(true)} />
        ) : bg ? (
          <div className="w-full h-full flex items-center justify-center rounded text-white font-bold text-xs text-center leading-tight px-2" style={{ backgroundColor: bg, whiteSpace: "pre-line" }}>{text || name}</div>
        ) : (
          <span className="text-gray-600 font-semibold text-sm text-center leading-tight">{name}</span>
        )}
      </div>
      <span className="text-xs text-gray-500 font-medium text-center leading-tight truncate w-full">{name}</span>
    </div>
  );
};

const PartnersSlider = ({ navigate }: Props) => {
  const partners = [
    /* Techniques */
    { name: "DACOM FARM", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774690590760-0.png", bg: "#F5A623", text: "DACOM\nFARM" },
    { name: "EXFO", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774691067456-0.jpeg", bg: "#005BAA", text: "EXFO" },
    { name: "Infractive", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774691067457-1.png", bg: "#7B2D8B", text: "INFRACTIVE" },
    { name: "3M", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774690916031-0.jpeg", bg: "#FF0000", text: "3M" },
    /* Financiers */
    { name: "Ecobank", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774691851764-0.jpeg", bg: "#00529B", text: "ECOBANK" },
    { name: "Bridge Bank", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774690916033-2.png", bg: "#C04A1A", text: "BRIDGE\nBANK" },
    { name: "Banque Atlantique", logo: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774690916032-1.png", bg: "#E07B00", text: "BANQUE\nATLANTIQUE" },
  ];

  const doubled = [...partners, ...partners];

  return (
    <section className="bg-gray-50 py-14 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Nos partenaires</h2>
            <div className="mt-2 w-8 h-0.5 bg-blue-600" />
          </div>
          <button onClick={() => navigate("partenaires")} className="text-blue-700 font-medium text-sm hover:underline flex-shrink-0">
            Voir tous nos partenaires →
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-5 animate-marquee items-stretch" style={{ width: "max-content" }}>
            {doubled.map((p, i) => (
              <PartnerLogoCard key={i} name={p.name} logo={p.logo} bg={p.bg} text={p.text} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   3 DOMAINES D'EXPERTISE (vrais du site)
───────────────────────────────────────────── */
const Expertise = ({ navigate }: Props) => {
  const { t } = useTranslation();

  const domains = [
    {
      page: "activites" as PageId,
      accentColor: "border-l-blue-600",
      title: t("expertise.fiber_title"),
      subtitle: t("expertise.fiber_subtitle"),
      items: t("expertise.fiber_items", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      imageAlt: "Câbles fibre optique lumineux",
    },
    {
      page: "activites" as PageId,
      accentColor: "border-l-slate-500",
      title: t("expertise.security_title"),
      subtitle: t("expertise.security_subtitle"),
      items: t("expertise.security_items", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
      imageAlt: "Caméra de surveillance professionnelle",
    },
    {
      page: "activites" as PageId,
      accentColor: "border-l-blue-400",
      title: t("expertise.smart_title"),
      subtitle: t("expertise.smart_subtitle"),
      items: t("expertise.smart_items", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
      imageAlt: "Maison intelligente IoT connectée",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">{t("expertise.title")}</h2>
          <p className="mt-2 text-gray-500 text-base max-w-2xl">{t("expertise.subtitle")}</p>
          <div className="mt-3 w-8 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((d, i) => (
            <div key={i} className="flex flex-col gap-0 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              {/* Image illustrative */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={d.image}
                  alt={d.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Contenu texte */}
              <div className={`border-l-4 ${d.accentColor} pl-5 pr-5 py-5 flex flex-col gap-3 flex-1`}>
                <h3 className="font-semibold text-gray-900 text-lg">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.subtitle}</p>
                <ul className="space-y-1.5 mt-1">
                  {d.items.map((item, j) => (
                    <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(d.page)}
                  className="mt-2 text-blue-700 font-medium text-sm hover:underline text-left"
                >
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CHIFFRES CLÉS — vrais chiffres BCA
───────────────────────────────────────────── */
const StatsStrip = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "85%", label: t("homestats.renewal_label") },
    { value: "80", label: t("homestats.buildings_label") },
    { value: "250 km", label: t("homestats.fiber_label") },
    { value: ">99%", label: t("homestats.uptime_label") },
    { value: "500+", label: t("homestats.devices_label") },
    { value: "50+", label: t("homestats.recommends_label") },
  ];

  return (
    <section className="bg-blue-700 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-blue-600">
          {stats.map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-1 py-8 px-4 text-center transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transitionDelay: `${delay}ms` }}>
      <span className="text-3xl font-bold text-white">{value}</span>
      <span className="text-blue-100 text-xs leading-tight mt-1">{label}</span>
    </div>
  );
};

/* ─────────────────────────────────────────────
   ACTUALITÉS — vraies actus du site
───────────────────────────────────────────── */
const Actualites = ({ navigate }: Props) => {
  const { t } = useTranslation();
  const news = t("home_news.items", { returnObjects: true }) as Array<{
    category: string; date: string; title: string; excerpt: string; color: string;
  }>;

  return (
    <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t("home_news.title")}</h2>
            <div className="mt-2 w-8 h-0.5 bg-blue-600" />
          </div>
          <button onClick={() => navigate("actualites")} className="text-blue-700 font-medium text-sm hover:underline flex-shrink-0">
            Toutes les actualités →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Grande carte — article principal */}
          <div className="lg:col-span-2 bg-blue-800 rounded-lg overflow-hidden cursor-pointer group hover:bg-blue-900 transition-colors"
            onClick={() => navigate("actualites")}>
            <div className="p-8 flex flex-col justify-end min-h-[240px]">
              <p className="text-blue-300 text-xs mb-2">{news[0]?.category} · {news[0]?.date}</p>
              <h3 className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-blue-200 transition-colors">{news[0]?.title}</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-4">{news[0]?.excerpt}</p>
              <span className="text-blue-300 text-sm font-medium">Lire l&#39;article →</span>
            </div>
          </div>

          {/* 2 petites cartes */}
          <div className="flex flex-col gap-4">
            {news.slice(1, 3).map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:border-blue-200 transition-colors flex-1"
                onClick={() => navigate("actualites")}>
                <p className="text-gray-400 text-xs mb-1">{item.category} · {item.date}</p>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.excerpt}</p>
                <span className="mt-3 inline-block text-blue-700 text-xs font-medium">Lire →</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   TÉMOIGNAGES
───────────────────────────────────────────── */
const Testimonials = () => {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Array<{ quote: string; name: string; company: string; initials: string }>;

  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">{t("testimonials.title")}</h2>
          <p className="mt-1 text-gray-500 text-sm">{t("testimonials.satisfaction")}</p>
          <div className="mt-3 w-8 h-0.5 bg-blue-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 text-sm leading-relaxed italic mb-5">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CTA FINAL — Contactez-nous
───────────────────────────────────────────── */
const CtaBanner = ({ navigate }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-900 py-16 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white leading-snug">{t("cta.title")}</h2>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">{t("cta.subtitle")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("contact")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm"
              >
                {t("cta.btn_contact")}
              </button>
              <button
                onClick={() => navigate("offres")}
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm"
              >
                {t("cta.btn_offers")}
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <a href="tel:+2250150575757" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.39 2.28 2.26 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81L8.09 7.91a16 16 0 0 0 8 8l2.19-2.19c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +225 01 50 57 57 57
            </a>
            <a href="https://wa.me/2250799575757" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp : 07 99 57 57 57
            </a>
            <a href="mailto:info@bcamultiservices.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              info@bcamultiservices.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PAGE PRINCIPALE
───────────────────────────────────────────── */
export const BCAHomePage = ({ navigate }: Props) => {
  return (
    <>
      <Hero navigate={navigate} />
      <Presentation navigate={navigate} />
      <Expertise navigate={navigate} />
      <StatsStrip />
      <ReferencesSlider navigate={navigate} />
      <BCAWhyUs />
      <PartnersSlider navigate={navigate} />
      <Actualites navigate={navigate} />
      <Testimonials />
      <CtaBanner navigate={navigate} />
    </>
  );
};
