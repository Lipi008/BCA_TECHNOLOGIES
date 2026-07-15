import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";
import { BCAWhyUs } from "../BCAWhyUs";
import type { PageId } from "../BCARouter";

import carouselP1 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/photo_2026-07-15_13-21-12.jpg";
import carouselP2 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/photo_2026-07-15_13-21-22.jpg";
import carouselP3 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/photo_2026-07-15_13-21-30.jpg";
import carouselP4 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/photo_2026-07-15_13-22-20.jpg";
import carouselP5 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/photo_2026-07-15_13-22-26.jpg";
import carouselP6 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/photo_2026-07-15_13-22-31.jpg";
import carouselV1 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/doc_2026-07-15_13-22-48.mp4";
import carouselV2 from "../../img/Images et Videos en boucle pour la carousselle de la page d'accueil/video_2026-07-15_13-23-54.mp4";

import logoOrange      from "../../img/image_a_use/orange.png";
import logoMTN         from "../../img/image_a_use/mtn.jpg";
import logoMoov        from "../../img/image_a_use/moov.png";
import logoTotal       from "../../img/image_a_use/total-energies-logo.png";
import logoCITelecom   from "../../img/image_a_use/ci-telecom-logo.png";
import logoCanalPlus   from "../../img/image_a_use/Canal_+_Afrique_logo.jpg";
import logoBicici      from "../../img/image_a_use/Bicici.png";
import logoBollore     from "../../img/image_a_use/Bolloré_Transport_Logistics.png";
import logoSocGen      from "../../img/image_a_use/SocieteGenerale.jpg";
import logoEXFO        from "../../img/image_a_use/exfo.png";
import logoInfractive  from "../../img/image_a_use/infractive-01.jpg";
import logo3M          from "../../img/image_a_use/m3.png";
import logoEcobank     from "../../img/image_a_use/Ecobank CI.jpg";
import logoBridgeBank  from "../../img/image_a_use/bridge_bank.png";
import logoBanqueAtl   from "../../img/image_a_use/Banque_Atlantique.png";

interface Props { navigate: (p: PageId) => void; }

/* ─────────────────────────────────────────────
   HERO — logo 99% largeur + slider fond blanc
───────────────────────────────────────────── */
type HeroSlide = { src: string; alt: string; objectFit: "contain" | "cover"; bg: string; isVideo: boolean };

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774343028758-0.png",
    alt: "BCA Technologies Limited",
    objectFit: "contain",
    bg: "#ffffff",
    isVideo: false,
  },
  { src: carouselP1, alt: "BCA Technologies sur le terrain", objectFit: "cover", bg: "#000", isVideo: false },
  { src: carouselP2, alt: "BCA Technologies", objectFit: "cover", bg: "#000", isVideo: false },
  { src: carouselP3, alt: "BCA Technologies", objectFit: "cover", bg: "#000", isVideo: false },
  { src: carouselP4, alt: "BCA Technologies", objectFit: "cover", bg: "#000", isVideo: false },
  { src: carouselP5, alt: "BCA Technologies", objectFit: "cover", bg: "#000", isVideo: false },
  { src: carouselP6, alt: "BCA Technologies", objectFit: "cover", bg: "#000", isVideo: false },
  { src: carouselV1, alt: "BCA Technologies — vidéo", objectFit: "cover", bg: "#000", isVideo: true },
  { src: carouselV2, alt: "BCA Technologies — vidéo", objectFit: "cover", bg: "#000", isVideo: true },
];


const Hero = ({ navigate }: Props) => {
  const { t } = useTranslation();
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

      {/* ── SLIDER : pleine largeur ── */}
      <div className="relative w-full h-[440px] sm:h-auto sm:aspect-[16/9] md:aspect-[16/7]">
        {/* Fond blanc pour slide logo */}
        {slide === 0 && <div className="absolute inset-0 bg-white" />}

        {/* Media : image ou vidéo */}
        {HERO_SLIDES[slide].isVideo ? (
          <video
            key={slide}
            src={HERO_SLIDES[slide].src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover select-none transition-opacity duration-500"
            style={{ opacity: fading ? 0 : 1 }}
          />
        ) : slide === 0 ? (
          <img
            src={HERO_SLIDES[slide].src}
            alt={HERO_SLIDES[slide].alt}
            draggable={false}
            className="absolute inset-0 w-full h-full select-none transition-opacity duration-500"
            style={{ opacity: fading ? 0 : 1, objectFit: "contain" }}
          />
        ) : (
          <>
            {/* Fond flouté pour remplir sans recadrage brutal */}
            <img
              src={HERO_SLIDES[slide].src}
              aria-hidden
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-50 select-none"
              style={{ opacity: fading ? 0 : 1 }}
            />
            {/* Image principale en contain : aucune partie coupée */}
            <img
              key={slide}
              src={HERO_SLIDES[slide].src}
              alt={HERO_SLIDES[slide].alt}
              draggable={false}
              className="absolute inset-0 w-full h-full object-contain select-none transition-opacity duration-500"
              style={{ opacity: fading ? 0 : 1 }}
            />
          </>
        )}

        {/* Overlay gradient pour les slides médias */}
        {slide !== 0 && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
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
          {t("home.tagline")}
        </p>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PRÉSENTATION — intro + mission/vision/valeurs
───────────────────────────────────────────── */
const Presentation = ({ navigate }: Props) => {
  const { t } = useTranslation();

  const mvvCards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      accent: "bg-blue-600",
      title: t("presentation.mission_title"),
      text: t("presentation.mission_text"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
      accent: "bg-indigo-600",
      title: t("presentation.vision_title"),
      text: t("presentation.vision_text"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      accent: "bg-violet-600",
      title: t("presentation.values_title"),
      text: t("presentation.values_text"),
    },
  ];

  const meta = [
    { label: t("presentation.founded_label"), value: "1er juill. 2026", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-blue-500"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
    { label: t("presentation.hq_label"),      value: "Cocody, Abidjan",  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-blue-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
    { label: t("presentation.founder_label"), value: "G. P. ANGAHI",     icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-blue-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* ── Intro : badge + titre + 2 paragraphes ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-12">

          {/* Texte (3/5) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              {t("presentation.title")}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              BCA Technologies Limited
            </h2>
            <div className="w-8 h-0.5 bg-blue-600" />
            <p className="text-gray-600 text-base leading-relaxed">{t("presentation.text1")}</p>
            <p className="text-gray-600 text-base leading-relaxed">{t("presentation.text2")}</p>
            <button
              onClick={() => navigate("about")}
              className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:underline mt-1"
            >
              {t("home.learn_more_bca")} →
            </button>
          </div>

          {/* Meta + domaines (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Fiche identité */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 space-y-3">
              {meta.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  {m.icon}
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-wider">{m.label}</p>
                    <p className="text-gray-900 font-semibold text-sm">{m.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Domaines clés */}
            <div className="bg-blue-700 rounded-2xl p-5 text-white">
              <p className="text-blue-200 text-[10px] uppercase tracking-widest font-semibold mb-3">Domaines clés</p>
              <div className="space-y-2">
                {[
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-blue-300 flex-shrink-0"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>, label: "Télécommunications & Fibre optique" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-blue-300 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Sécurité & Domotique" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-blue-300 flex-shrink-0"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>, label: "Énergie Solaire" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-blue-300 flex-shrink-0"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>, label: "Informatique & Équipements" },
                ].map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-blue-100">
                    {d.icon}
                    {d.label}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("activites")}
                className="mt-4 text-xs text-blue-300 hover:text-white font-medium transition-colors"
              >
                {t("home.learn_more_bca")} →
              </button>
            </div>
          </div>
        </div>

        {/* ── Mission / Vision / Valeurs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {mvvCards.map((card, i) => (
            <div key={i} className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden transition-shadow">
              <div className={`h-1 w-full ${card.accent}`} />
              <div className="p-6">
                <div className={`w-10 h-10 rounded-xl ${card.accent} text-white flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   RÉFÉRENCES — défilement infini (marquee)
───────────────────────────────────────────── */
const REFS_DATA: { name: string; logo?: string; color?: string }[] = [
  { name: "Orange CI",           logo: logoOrange    },
  { name: "MTN Côte d'Ivoire",   logo: logoMTN       },
  { name: "Moov Africa",         logo: logoMoov      },
  { name: "SFR",                 color: "#E4003A"    },
  { name: "Ministère des TIC",   color: "#009A44"    },
  { name: "CITélécom",           logo: logoCITelecom },
  { name: "Canal+ Afrique",      logo: logoCanalPlus },
  { name: "Société Générale CI", logo: logoSocGen    },
  { name: "BICICI",              logo: logoBicici    },
  { name: "Université FHB",      color: "#006837"    },
  { name: "TOTAL Énergies CI",   logo: logoTotal     },
  { name: "Bolloré Logistics",   logo: logoBollore   },
];

const ReferenceLogoCard = ({ name, logo, color }: { name: string; logo?: string; color?: string }) => {
  const [failed, setFailed] = React.useState(false);
  const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-5 py-4 border border-gray-200 rounded-lg bg-white hover:border-blue-300 hover:shadow-md transition-all group" style={{ minWidth: 140, height: 100 }}>
      <div className="w-24 h-12 flex items-center justify-center overflow-hidden">
        {logo && !failed ? (
          <img src={logo} alt={name} className="max-h-full max-w-full object-contain transition-all duration-300" onError={() => setFailed(true)} />
        ) : (
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-sm select-none" style={{ backgroundColor: color || "#2563eb" }}>
            {initials}
          </div>
        )}
      </div>
      <span className="text-xs text-gray-500 font-medium text-center leading-tight truncate w-full">{name}</span>
    </div>
  );
};

const ReferencesSlider = ({ navigate }: Props) => {
  const { t } = useTranslation();
  const doubled = [...REFS_DATA, ...REFS_DATA];

  return (
    <section className="bg-white py-14 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t("home.references_title")}</h2>
            <div className="mt-2 w-8 h-0.5 bg-blue-600" />
          </div>
          <button onClick={() => navigate("references")} className="text-blue-700 font-medium text-sm hover:underline flex-shrink-0">
            {t("home.see_all_refs")}
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
          <img src={logo} alt={name} className="max-h-full max-w-full object-contain transition-all duration-300" onError={() => setFailed(true)} />
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
  const { t } = useTranslation();
  const partners = [
    { name: "DACOM FARM",       logo: undefined,       bg: "#F5A623", text: "DACOM\nFARM"       },
    { name: "EXFO",             logo: logoEXFO,        bg: "#005BAA", text: "EXFO"              },
    { name: "Infractive",       logo: logoInfractive,  bg: "#7B2D8B", text: "INFRACTIVE"       },
    { name: "3M",               logo: logo3M,          bg: "#FF0000", text: "3M"                },
    { name: "Ecobank",          logo: logoEcobank,     bg: "#00529B", text: "ECOBANK"           },
    { name: "Bridge Bank",      logo: logoBridgeBank,  bg: "#C04A1A", text: "BRIDGE\nBANK"      },
    { name: "Banque Atlantique",logo: logoBanqueAtl,   bg: "#E07B00", text: "BANQUE\nATLANTIQUE"},
  ];

  const doubled = [...partners, ...partners];

  return (
    <section className="bg-gray-50 py-14 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t("home.partners_title")}</h2>
            <div className="mt-2 w-8 h-0.5 bg-blue-600" />
          </div>
          <button onClick={() => navigate("partenaires")} className="text-blue-700 font-medium text-sm hover:underline flex-shrink-0">
            {t("home.see_all_partners")}
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
      domainKey: "telecom",
      accentColor: "border-l-blue-600",
      title: t("expertise.fiber_title"),
      subtitle: t("expertise.fiber_subtitle"),
      items: t("expertise.fiber_items", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      imageAlt: "Câbles fibre optique lumineux",
    },
    {
      page: "activites" as PageId,
      domainKey: "security",
      accentColor: "border-l-slate-500",
      title: t("expertise.security_title"),
      subtitle: t("expertise.security_subtitle"),
      items: t("expertise.security_items", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
      imageAlt: "Caméra de surveillance professionnelle",
    },
    {
      page: "activites" as PageId,
      domainKey: "energy",
      accentColor: "border-l-yellow-500",
      title: t("expertise.smart_title"),
      subtitle: t("expertise.smart_subtitle"),
      items: t("expertise.smart_items", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      imageAlt: "Panneaux solaires énergie renouvelable",
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
                  onClick={() => {
                    navigate(d.page);
                    setTimeout(() => document.getElementById(d.domainKey)?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
                  }}
                  className="mt-2 text-blue-700 font-medium text-sm hover:underline text-left"
                >
                  {t("solutions.learn_more")} →
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
            {t("home.all_news")}
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
              <span className="text-blue-300 text-sm font-medium">{t("home.read_article")}</span>
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
                <span className="mt-3 inline-block text-blue-700 text-xs font-medium">{t("home.read")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   TÉMOIGNAGES + COMMENTAIRES VISITEURS
───────────────────────────────────────────── */
type UserComment = { name: string; company: string; message: string; rating: number; date: string };

const STORAGE_KEY = "bca_visitor_comments";

const loadComments = (): UserComment[] => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
};

const StarRating = ({ value, onChange }: { value: number; onChange?: (v: number) => void }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <button
        key={s}
        type="button"
        onClick={() => onChange?.(s)}
        className={`text-xl transition-colors ${s <= value ? "text-yellow-400" : "text-gray-300"} ${onChange ? "hover:text-yellow-300 cursor-pointer" : "cursor-default"}`}
        aria-label={`${s} étoile${s > 1 ? "s" : ""}`}
      >★</button>
    ))}
  </div>
);

const Testimonials = () => {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Array<{ quote: string; name: string; company: string; initials: string }>;
  const [comments, setComments] = React.useState<UserComment[]>(loadComments);
  const [form, setForm] = React.useState({ name: "", company: "", message: "", rating: 5 });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const newComment: UserComment = {
      ...form,
      date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
    };
    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setForm({ name: "", company: "", message: "", rating: 5 });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Témoignages clients (existants) */}
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

      {/* Commentaires visiteurs */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Partagez votre expérience</h2>
            <p className="mt-1 text-gray-500 text-sm">Votre avis nous aide à améliorer nos services. Il sera affiché directement sur cette page.</p>
            <div className="mt-3 w-8 h-0.5 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-base mb-6">Laisser un commentaire</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Nom *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Votre nom"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Société</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Votre société (optionnel)"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Note</label>
                  <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Commentaire *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Partagez votre expérience avec BCA Technologies..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
                >
                  Publier mon commentaire
                </button>
                {submitted && (
                  <p className="text-green-600 text-sm font-medium text-center">✓ Merci ! Votre commentaire a été publié.</p>
                )}
              </form>
            </div>

            {/* Commentaires publiés */}
            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
              {comments.length === 0 ? (
                <div className="text-center py-16 text-gray-400 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto mb-3 text-gray-300"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <p>Soyez le premier à laisser un commentaire.</p>
                </div>
              ) : (
                comments.map((c, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                          {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-sm">{c.name}</p>
                          {c.company && <p className="text-gray-400 text-xs">{c.company}</p>}
                        </div>
                      </div>
                      <StarRating value={c.rating} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{c.message}&rdquo;</p>
                    <p className="text-gray-300 text-xs mt-3">{c.date}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
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
   EXPERTISE GROUPE BCA — chiffres Best Africa
───────────────────────────────────────────── */
const GroupExpertiseStats = () => {
  const { t } = useTranslation();
  const items = t("group_stats.items", { returnObjects: true }) as Array<{ value: string; label: string; period: string }>;

  return (
    <section className="px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl px-6 sm:px-10 py-10"
          style={{ background: "linear-gradient(135deg, #0f2c6f 0%, #1a3f9c 60%, #0f2c6f 100%)" }}
        >
          {/* En-tête */}
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-lg sm:text-xl">{t("group_stats.title")}</h3>
            <p className="text-blue-200 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto leading-relaxed">
              {t("group_stats.subtitle")}
            </p>
          </div>

          {/* Grille de chiffres */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/10 rounded-xl overflow-hidden">
            {items.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-3 py-5 bg-transparent hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-black text-lg sm:text-xl leading-tight">{s.value}</span>
                <span className="text-blue-100 text-[11px] sm:text-xs font-medium mt-1.5 leading-tight">{s.label}</span>
                <span className="text-blue-300/70 text-[10px] mt-1">{s.period}</span>
              </div>
            ))}
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
      <GroupExpertiseStats />
      <ReferencesSlider navigate={navigate} />
      <BCAWhyUs />
      <PartnersSlider navigate={navigate} />
      <Actualites navigate={navigate} />
      <CtaBanner navigate={navigate} />
    </>
  );
};
