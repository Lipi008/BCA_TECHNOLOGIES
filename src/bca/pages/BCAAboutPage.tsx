import React from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

import imgCEO from "../../img/image_a_use/CEO.jpg";

const personnelGlob = import.meta.glob<{ default: string }>(
  "../../img/personnel BCA technologie/*.jpg",
  { eager: true },
);
const bestAfricaGlob = import.meta.glob<{ default: string }>(
  "../../img/Photos BEST Africa Mali \\(entreprise soeur\\)/*.jpg",
  { eager: true },
);
const importExportGlob = import.meta.glob<{ default: string }>(
  "../../img/BCA Import & export_Entreprise soeur/*.jpg",
  { eager: true },
);

const personnelPhotos = Object.values(personnelGlob)
  .map((m) => m.default)
  .sort();
const bestAfricaPhotos = Object.values(bestAfricaGlob)
  .map((m) => m.default)
  .sort();
const importExportPhotos = Object.values(importExportGlob)
  .map((m) => m.default)
  .sort();
import imgDG from "../../img/image_a_use/dg.jpg";
import imgOrgChart from "../../img/image_a_use/orgganigram.png";
import imgPhotoGrp from "../../img/image_a_use/photo_grp.jpg";
import imgPaul from "../../img/image_a_use/paulm.jpg";
import imgAssistante from "../../img/image_a_use/assitante.jpg";
import imgLogistique from "../../img/image_a_use/m7.jpeg";

const PageHero = ({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) => (
  <section
    className="relative py-24 px-6 overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
    }}
  >
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
        {badge}
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

/* ── Mot du CEO ── */
const CEOMessage = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Fibres déco — côté gauche uniquement */}
      <svg
        className="absolute left-0 top-0 h-full w-40 opacity-20 pointer-events-none"
        viewBox="0 0 160 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-20 100 Q40 200 10 350 Q-20 500 50 650 Q90 750 20 800"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
        <path
          d="M30 0 Q80 150 40 300 Q0 450 60 600 Q100 700 50 800"
          stroke="#A78BFA"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />
        <path
          d="M70 50 Q20 200 80 380 Q120 520 60 700"
          stroke="#06B6D4"
          strokeWidth="1"
          strokeDasharray="4 10"
        />
        <circle cx="50" cy="200" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="20" cy="420" r="3" fill="#A78BFA" opacity="0.5" />
        <circle cx="65" cy="600" r="4" fill="#06B6D4" opacity="0.6" />
      </svg>

      {/* Fibres déco — côté droit uniquement */}
      <svg
        className="absolute right-0 top-0 h-full w-40 opacity-20 pointer-events-none"
        viewBox="0 0 160 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M180 80 Q100 200 140 350 Q180 500 110 650 Q70 750 140 800"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
        <path
          d="M130 0 Q80 150 120 300 Q160 450 100 600 Q60 700 110 800"
          stroke="#A78BFA"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />
        <path
          d="M90 50 Q140 200 80 380 Q40 520 100 700"
          stroke="#06B6D4"
          strokeWidth="1"
          strokeDasharray="4 10"
        />
        <circle cx="110" cy="180" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="140" cy="400" r="3" fill="#A78BFA" opacity="0.5" />
        <circle cx="95" cy="610" r="4" fill="#06B6D4" opacity="0.6" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("about.ceo_title")}
          </h2>
          <div className="mt-2 w-8 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo + identité + déco fibre droite de la photo */}
          <div className="lg:col-span-2 flex flex-col items-center text-center space-y-5 relative">
            {/* Déco fibre à droite de la photo (visible desktop) */}
            <svg
              className="absolute -right-6 top-8 w-12 h-72 opacity-30 hidden lg:block"
              viewBox="0 0 48 280"
              fill="none"
            >
              <path
                d="M4 0 Q24 40 8 80 Q-4 120 16 160 Q32 200 12 240 Q2 260 10 280"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="6 5"
              />
              <path
                d="M28 10 Q44 60 24 110 Q8 150 28 200 Q40 230 24 280"
                stroke="#06B6D4"
                strokeWidth="1.5"
                strokeDasharray="4 7"
              />
              <circle cx="8" cy="80" r="3.5" fill="#3B82F6" opacity="0.7" />
              <circle cx="26" cy="160" r="3" fill="#A78BFA" opacity="0.6" />
              <circle cx="12" cy="240" r="3.5" fill="#06B6D4" opacity="0.7" />
            </svg>

            <div className="relative">
              {/* Photo agrandie */}
              <div className="w-72 h-80 rounded-3xl overflow-hidden border-4 border-blue-100 shadow-2xl">
                <img
                  src={imgCEO}
                  alt="G.P. ANGAHI — PDG de BCA Technologies"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge PDG */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                {t("about.ceo_badge")}
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-gray-900 font-black text-xl">
                {t("about.ceo_name_short")}
              </h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                {t("about.ceo_name_full")}
              </p>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider">
                {t("about.ceo_company")}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-400 flex-shrink-0"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>{" "}
                  {t("about.ceo_founded")}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-400 flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{" "}
                  {t("about.ceo_location")}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-400 flex-shrink-0"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>{" "}
                  {t("about.ceo_education")}
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-3 space-y-5">
            <div className="text-5xl text-blue-200 font-serif leading-none select-none">
              &ldquo;
            </div>
            <p className="text-gray-700 text-base leading-relaxed -mt-4">
              {t("about.ceo_p1")}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t("about.ceo_p2")}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t("about.ceo_p3")}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t("about.ceo_p4")}
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              <div>
                <p className="text-gray-900 font-black text-base">
                  {t("about.ceo_name_short")}
                </p>
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">
                  {t("about.ceo_signature_role")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Présentation (Mission / Vision / Valeurs) ── */
const Presentation = () => {
  const { t } = useTranslation();

  const mvv = [
    {
      accent: "bg-blue-600",
      border: "border-blue-100",
      textAccent: "text-blue-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t("presentation.mission_title"),
      text: t("presentation.mission_text"),
    },
    {
      accent: "bg-indigo-600",
      border: "border-indigo-100",
      textAccent: "text-indigo-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: t("presentation.vision_title"),
      text: t("presentation.vision_text"),
    },
    {
      accent: "bg-violet-600",
      border: "border-violet-100",
      textAccent: "text-violet-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-5 h-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t("presentation.values_title"),
      text: t("presentation.values_text"),
    },
  ];

  const groups = [
    {
      label: "Notre Histoire",
      color: "bg-blue-600",
      paragraphs: [t("presentation.text1"), t("presentation.text2")],
    },
    {
      label: "Nos Domaines d'Excellence",
      color: "bg-indigo-600",
      paragraphs: [t("presentation.text3")],
    },
    {
      label: "Notre Groupe International",
      color: "bg-violet-600",
      paragraphs: [
        t("presentation.text4"),
        t("presentation.text5"),
        t("presentation.text6"),
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            {t("presentation.title")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            BCA Technologies Limited
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl">
            {t("presentation.text1_short")}
          </p>
          <div className="mt-4 w-8 h-0.5 bg-blue-600" />
        </div>

        {/* Barre de faits clés */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            {
              label: t("presentation.founded_label"),
              value: "1er juill. 2026",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              ),
            },
            {
              label: t("presentation.hq_label"),
              value: "Cocody, Abidjan",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
            },
            {
              label: t("presentation.founder_label"),
              value: "G. P. ANGAHI",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ),
            },
            {
              label: "Secteur",
              value: "Tech & Énergie",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              ),
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                {f.icon}
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider truncate">
                  {f.label}
                </p>
                <p className="text-gray-900 font-semibold text-xs sm:text-sm truncate">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corps : texte groupé + MVV */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Texte en 3 groupes thématiques (3/5) */}
          <div className="lg:col-span-3 space-y-8">
            {groups.map((g, gi) => (
              <div key={gi}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-2 h-2 rounded-full ${g.color} flex-shrink-0`}
                  />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {g.label}
                  </h3>
                </div>
                <div className="space-y-3 pl-4 border-l border-gray-200">
                  {g.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mission / Vision / Valeurs (2/5) */}
          <div className="lg:col-span-2 space-y-4">
            {mvv.map((card, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border ${card.border} p-5 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg ${card.accent} text-white flex items-center justify-center flex-shrink-0`}
                  >
                    {card.icon}
                  </div>
                  <h3 className={`font-bold text-sm ${card.textAccent}`}>
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Organigramme ── */
/* ── Organigramme interactif ── */
type OrgNodeData = { title: string; sub?: string; children?: OrgNodeData[] };

const ORG_DATA: OrgNodeData = {
  title: "CEO", sub: "ANGAHI GEORGES POIRET",
  children: [
    {
      title: "RAF",
      children: [{ title: "ASSISTANTE COMPTABLE" }],
    },
    {
      title: "CABINET DE GESTION COMPTABLE",
      children: [
        {
          title: "DIRECTEUR SMART SOLUTIONS ET IT",
          children: [
            {
              title: "SMART SOLUTIONS",
              children: [
                { title: "EQUIPES 1" }, { title: "EQUIPES 2" },
                { title: "EQUIPES 3" }, { title: "EQUIPES 4" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "ACHAT BCA I&E SARL",
      children: [
        {
          title: "DIRECTEUR INGENIERIE",
          children: [
            {
              title: "RESPONSABLE INGENIEURIE",
              children: [
                {
                  title: "COORDINATEUR PLANS ET RECOLLEMENTS",
                  children: [
                    { title: "RESSOURCE 1" }, { title: "RESSOURCE 2" }, { title: "RESSOURCE 3" },
                  ],
                },
                {
                  title: "COORDINATEUR ETUDES",
                  children: [{ title: "EQUIPE 1" }, { title: "EQUIPE 2" }],
                },
              ],
            },
          ],
        },
      ],
    },
    { title: "GESTIONNAIRE DE STOCKS ET LOGISTIQUE" },
    {
      title: "ASSISTANTE DE DIRECTION",
      children: [
        {
          title: "DIRECTEUR EXPLOITATION ET MAINTENANCE",
          children: [
            {
              title: "RESPONSABLE DEPLOIEMENT",
              children: [
                {
                  title: "COORDINATEUR GENIE CIVIL DEPLOIEMENT ET RACCORDEMENT",
                  children: [
                    { title: "EQUIPE 1" }, { title: "EQUIPE 2" },
                    { title: "EQUIPE 3" }, { title: "EQUIPE 4" },
                  ],
                },
                {
                  title: "COORDINATEUR DEPLOIEMENT ET RACCORDEMENT",
                  children: [
                    { title: "EQUIPE 1" }, { title: "EQUIPE 2" },
                    { title: "EQUIPE 3" }, { title: "EQUIPE 4" },
                  ],
                },
              ],
            },
            {
              title: "RESPONSABLE GENIE CIVIL, OPTIMISATION ET PRODUCTIONS",
              children: [
                {
                  title: "COORDINATEUR INSTALLATIONS ET DERANGEMENT",
                  children: [
                    { title: "EQUIPE 1" }, { title: "EQUIPE 2" },
                    { title: "EQUIPE 3" }, { title: "EQUIPE 4" },
                  ],
                },
                {
                  title: "COORDINATEUR QUALITE PRODUCTION",
                  children: [
                    { title: "EQUIPE 1" }, { title: "EQUIPE 2" },
                    { title: "EQUIPE 3" }, { title: "EQUIPE 4" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "RESPONSABLE COMMERCIAL ET MARKETING",
      children: [
        {
          title: "DIRECTEUR QUALITE",
          children: [
            {
              title: "RESPONSABLE QUALITE",
              children: [
                { title: "EQUIPE 1" }, { title: "EQUIPE 2" },
                { title: "EQUIPE 3" }, { title: "EQUIPE 4" },
              ],
            },
          ],
        },
        { title: "ASSISTANT COMMERCIAL ET MARKETING" },
      ],
    },
    { title: "RESPONSABLE RESSOURCES HUMAINES" },
    {
      title: "RESPONSABLE JURIDIQUE",
      children: [
        {
          title: "C COMMUNITY MANAGER",
          children: [
            {
              title: "RESPONSABLE MAINTENANCE",
              children: [
                {
                  title: "COORDINATEUR MAINTENANCE",
                  children: [
                    { title: "EQUIPE 1" }, { title: "EQUIPE 2" },
                    { title: "EQUIPE 3" }, { title: "EQUIPE 4" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const OrgBox = ({ title, sub, isRoot }: { title: string; sub?: string; isRoot?: boolean }) => (
  <div
    className={`text-white text-[10px] font-bold px-2.5 py-2 rounded text-center leading-tight shadow border border-blue-950/40 select-none ${
      isRoot
        ? "bg-[#1a3f96] text-sm px-5 py-3 min-w-[180px]"
        : "bg-[#143278] min-w-[90px] max-w-[150px]"
    }`}
  >
    <span className="block">{title}</span>
    {sub && <span className="block text-blue-200 text-[9px] font-normal mt-0.5">{sub}</span>}
  </div>
);

const OrgTree = ({ node, isRoot }: { node: OrgNodeData; isRoot?: boolean }) => {
  const children = node.children ?? [];
  const n = children.length;

  return (
    <div className="flex flex-col items-center">
      <OrgBox title={node.title} sub={node.sub} isRoot={isRoot} />

      {n > 0 && (
        <>
          {/* Vertical stem down from box */}
          <div className="w-px h-5 bg-blue-400/60 flex-shrink-0" />

          {/* Children row with horizontal connector */}
          <div className="relative flex items-start">
            {/* Horizontal connecting bar */}
            {n > 1 && (
              <div
                className="absolute top-0 h-px bg-blue-400/60 pointer-events-none"
                style={{
                  left: `${100 / (2 * n)}%`,
                  right: `${100 / (2 * n)}%`,
                }}
              />
            )}

            {children.map((child, i) => (
              <div key={i} className="flex-1 flex flex-col items-center px-1.5 min-w-0">
                {/* Vertical drop */}
                <div className="w-px h-5 bg-blue-400/60 flex-shrink-0" />
                <OrgTree node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const OrgChart = () => {
  const { t } = useTranslation();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">{t("about.orgchart_title")}</h2>
          <div className="mt-2 w-8 h-0.5 bg-blue-600" />
        </div>
        <div ref={scrollRef} className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="inline-flex justify-center min-w-max py-4">
            <OrgTree node={ORG_DATA} isRoot />
          </div>
        </div>
        <p className="mt-4 text-gray-400 text-xs text-center">
          {t("i18n.language") === "en" ? "Scroll horizontally to see the full chart" : "Faire défiler horizontalement pour voir l'organigramme complet"}
        </p>
      </div>
    </section>
  );
};

/* ── Nos Forces ── */
const NosForces = () => {
  const forces: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Expertise qualifiée",
      desc: "Ressources hautement qualifiées avec expertise en déploiement, opérations et maintenance des réseaux fibre optique (Backbone, Metro, FTTx).",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Équipements complets",
      desc: "Un parc d'équipements performant pour le contrôle, la gestion et l'installation des réseaux fibre optique.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "Moyens logistiques",
      desc: "7 fourgons entièrement équipés pour garantir rapidité et efficacité dans les interventions.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Projets clés en main",
      desc: "Organisation complète couvrant étude, réalisation, test, installation et maintenance.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      title: "Satisfaction client",
      desc: "Système de gestion de qualité rigoureux pour garantir une satisfaction optimale.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      ),
      title: "Flexibilité",
      desc: "Adaptation rapide aux évolutions du marché et aux besoins spécifiques des clients.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Réactivité",
      desc: "Prise de décision rapide et interventions efficaces pour réduire les délais.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Couverture étendue",
      desc: "Interventions sur toute la Côte d'Ivoire et à l'international.",
    },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, #1a2a6c 0%, #1e3799 40%, #1a2a6c 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Nos Forces
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {forces.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="w-8 h-8 text-white/90">{f.icon}</div>
              <h3 className="text-white font-black text-base leading-snug">
                {f.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Équipe ── */
const TeamSection = () => {
  const { t } = useTranslation();
  const members = [
    {
      name: "Georges Poiret Angahi",
      role: "Fondateur & PDG",
      bio: "Visionnaire et entrepreneur, M. ANGAHI a fondé BCA Technologies en 2017 avec l'ambition de connecter l'Afrique aux meilleures technologies mondiales.",
      initials: "GA",
      color: "from-blue-600 to-blue-900",
      photo: imgCEO,
    },
    {
      name: "Direction Technique",
      role: "Ingénierie & Déploiement",
      bio: "Une équipe d'ingénieurs certifiés spécialisée dans le déploiement d'infrastructures télécoms, réseaux fibre et systèmes de sécurité électronique.",
      initials: "DT",
      color: "from-indigo-600 to-purple-700",
      photo: imgPhotoGrp,
    },
    {
      name: "Direction Commerciale",
      role: "Ventes & Partenariats",
      bio: "Des experts en développement commercial qui cultivent des partenariats stratégiques et accompagnent les clients de la définition du besoin à la livraison.",
      initials: "DC",
      color: "from-cyan-600 to-blue-700",
      photo: imgDG,
    },
    {
      name: "Support Technique",
      role: "Maintenance & SAV",
      bio: "Une équipe réactive disponible pour assurer la maintenance, le support et la pérennité de toutes les installations BCA Technologies.",
      initials: "ST",
      color: "from-emerald-600 to-teal-700",
      photo: imgPaul,
    },
    {
      name: "Équipe Logistique",
      role: "Import / Export & Livraison",
      bio: "Gestion de la chaîne d'approvisionnement internationale — du sourcing nord-américain jusqu'à la livraison en Afrique de l'Ouest.",
      initials: "LG",
      color: "from-orange-500 to-red-600",
      photo: imgLogistique,
    },
    {
      name: "Administration & Finance",
      role: "RH, Juridique & Comptabilité",
      bio: "L'équipe administrative veille à la bonne gouvernance, à la conformité réglementaire et à la santé financière de l'entreprise.",
      initials: "AF",
      color: "from-violet-600 to-purple-800",
      photo: imgAssistante,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("team.title")}
          </h2>
          <p className="mt-1 text-gray-500 text-sm max-w-xl">
            {t("team.subtitle")}
          </p>
          <div className="mt-3 w-8 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[2/3]"
            >
              {/* Fond photo ou dégradé */}
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} flex items-center justify-center`}
                >
                  <span className="text-white font-black text-7xl opacity-20 select-none">
                    {member.initials}
                  </span>
                </div>
              )}
              {/* Overlay léger en haut pour lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
              {/* Bandeau nom + rôle — compact en bas */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <h3 className="text-white font-bold text-sm leading-tight">
                  {member.name}
                </h3>
                <p className="text-blue-300 text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                  {member.role}
                </p>
              </div>
              {/* Accent couleur haut */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Nos Experts — galerie 3 onglets ── */
const EXPERT_GROUPS = [
  {
    key: "bca",
    labelFr: "BCA Technologies Limited",
    labelEn: "BCA Technologies Limited",
    photos: personnelPhotos,
  },
  {
    key: "best",
    labelFr: "BEST Africa Mali",
    labelEn: "BEST Africa Mali",
    photos: bestAfricaPhotos,
  },
  {
    key: "import",
    labelFr: "BCA Import & Export",
    labelEn: "BCA Import & Export",
    photos: importExportPhotos,
  },
];

const NosExperts = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const [activeGroup, setActiveGroup] = React.useState(0);
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  const group = EXPERT_GROUPS[activeGroup];

  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            {isEn ? "Our Team" : "Nos Experts"}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            {isEn ? "Our Teams" : "Nos Équipes"}
          </h2>
          <div className="mt-4 w-14 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Onglets groupes */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {EXPERT_GROUPS.map((g, i) => (
            <button
              key={g.key}
              onClick={() => setActiveGroup(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border-2 ${
                activeGroup === i
                  ? "bg-blue-700 text-white border-transparent shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-700"
              }`}
            >
              {isEn ? g.labelEn : g.labelFr}
              <span
                className={`ml-2 text-xs font-bold px-1.5 py-0.5 rounded-full ${activeGroup === i ? "bg-white/25" : "bg-gray-100"}`}
              >
                {g.photos.length}
              </span>
            </button>
          ))}
        </div>

        {/* Grille photos */}
        {group.photos.length === 0 ? (
          <p className="text-center text-gray-400 py-16 text-sm">
            {isEn ? "Photos coming soon." : "Photos à venir."}
          </p>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {group.photos.map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setLightbox(src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`${group.labelFr} — photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/25 backdrop-blur-sm rounded-full p-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Photo BCA"
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

/* ── Page principale ── */
export const BCAAboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        badge={t("nav.about")}
        title={t("presentation.title")}
        subtitle={t("presentation.text1_short")}
      />
      <CEOMessage />
      <Presentation />
      <OrgChart />
      <NosForces />
      <NosExperts />
      {/* <TeamSection /> */}
    </>
  );
};
