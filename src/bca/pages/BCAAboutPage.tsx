import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

import imgCEO        from "../../img/image_a_use/CEO.jpg";
import imgDG         from "../../img/image_a_use/dg.jpg";
import imgOrgChart   from "../../img/image_a_use/orgganigram.png";
import imgPhotoGrp   from "../../img/image_a_use/photo_grp.jpg";
import imgPaul       from "../../img/image_a_use/paulm.jpg";
import imgAssistante from "../../img/image_a_use/assitante.jpg";
import imgLogistique from "../../img/image_a_use/m7.jpeg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string; dark?: boolean }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

/* ── Mot du CEO ── */
const CEOMessage = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Fibres déco — côté gauche uniquement */}
      <svg className="absolute left-0 top-0 h-full w-40 opacity-20 pointer-events-none" viewBox="0 0 160 800" preserveAspectRatio="none" fill="none">
        <path d="M-20 100 Q40 200 10 350 Q-20 500 50 650 Q90 750 20 800" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 6"/>
        <path d="M30 0 Q80 150 40 300 Q0 450 60 600 Q100 700 50 800" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="5 8"/>
        <path d="M70 50 Q20 200 80 380 Q120 520 60 700" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 10"/>
        <circle cx="50" cy="200" r="4" fill="#3B82F6" opacity="0.6"/>
        <circle cx="20" cy="420" r="3" fill="#A78BFA" opacity="0.5"/>
        <circle cx="65" cy="600" r="4" fill="#06B6D4" opacity="0.6"/>
      </svg>

      {/* Fibres déco — côté droit uniquement */}
      <svg className="absolute right-0 top-0 h-full w-40 opacity-20 pointer-events-none" viewBox="0 0 160 800" preserveAspectRatio="none" fill="none">
        <path d="M180 80 Q100 200 140 350 Q180 500 110 650 Q70 750 140 800" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 6"/>
        <path d="M130 0 Q80 150 120 300 Q160 450 100 600 Q60 700 110 800" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="5 8"/>
        <path d="M90 50 Q140 200 80 380 Q40 520 100 700" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 10"/>
        <circle cx="110" cy="180" r="4" fill="#3B82F6" opacity="0.6"/>
        <circle cx="140" cy="400" r="3" fill="#A78BFA" opacity="0.5"/>
        <circle cx="95" cy="610" r="4" fill="#06B6D4" opacity="0.6"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Mot du Directeur Général</h2>
          <div className="mt-2 w-8 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo + identité + déco fibre droite de la photo */}
          <div className="lg:col-span-2 flex flex-col items-center text-center space-y-5 relative">

            {/* Déco fibre à droite de la photo (visible desktop) */}
            <svg className="absolute -right-6 top-8 w-12 h-72 opacity-30 hidden lg:block" viewBox="0 0 48 280" fill="none">
              <path d="M4 0 Q24 40 8 80 Q-4 120 16 160 Q32 200 12 240 Q2 260 10 280" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 5"/>
              <path d="M28 10 Q44 60 24 110 Q8 150 28 200 Q40 230 24 280" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 7"/>
              <circle cx="8" cy="80" r="3.5" fill="#3B82F6" opacity="0.7"/>
              <circle cx="26" cy="160" r="3" fill="#A78BFA" opacity="0.6"/>
              <circle cx="12" cy="240" r="3.5" fill="#06B6D4" opacity="0.7"/>
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
                Fondateur &amp; PDG
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-gray-900 font-black text-xl">G.P. ANGAHI</h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">Gbran Georges Poiret ANGAHI</p>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider">BCA Technologies Limited</p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <span>📅</span> Fondé le 1er juillet 2026
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <span>📍</span> Cocody, Abidjan, CI
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <span>🎓</span> Ingénierie &amp; Entrepreneuriat
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-3 space-y-5">
            <div className="text-5xl text-blue-200 font-serif leading-none select-none">&ldquo;</div>
            <p className="text-gray-700 text-base leading-relaxed -mt-4">
              Depuis la création de <strong>BCA Technologies Limited</strong> en 2017, notre ambition a toujours été la même : contribuer activement à la transformation numérique de l&#39;Afrique en apportant des solutions technologiques de classe mondiale, adaptées aux réalités et aux besoins du continent.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Nous avons choisi de ne pas simplement distribuer des équipements, mais d&#39;accompagner nos clients sur le long terme — de la conception à la mise en œuvre, jusqu&#39;à la maintenance et l&#39;évolution de leurs infrastructures. C&#39;est cette valeur ajoutée qui nous distingue et qui explique notre taux de renouvellement client de <strong>85%</strong>.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Notre vision pour les prochaines années : renforcer notre présence sous-régionale, investir dans la formation de talents locaux, et continuer à innover pour positionner BCA Technologies comme le partenaire technologique de référence en Afrique subsaharienne.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Je remercie l&#39;ensemble de notre équipe, de nos partenaires et de nos clients pour leur confiance qui nous permet chaque jour de relever de nouveaux défis avec passion et engagement.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              <div>
                <p className="text-gray-900 font-black text-base">G.P. ANGAHI</p>
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Fondateur &amp; Directeur Général</p>
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
  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-5 text-gray-700 leading-relaxed text-base">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t("presentation.title")}</h2>
              <div className="mt-2 w-8 h-0.5 bg-blue-600" />
            </div>
            <p>{t("presentation.text1")}</p>
            <p>{t("presentation.text2")}</p>
            <p>{t("presentation.text3")}</p>
            <p>{t("presentation.text4")}</p>
            <p>{t("presentation.text5")}</p>
            <p>{t("presentation.text6")}</p>
            <div className="pt-2 grid grid-cols-3 gap-3">
              {[
                { label: t("presentation.founded_label"), value: "1er juill. 2026" },
                { label: t("presentation.hq_label"), value: "Cocody, Abidjan" },
                { label: t("presentation.founder_label"), value: "G. P. ANGAHI" },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-3 flex flex-col gap-0.5">
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider">{item.label}</span>
                  <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
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

/* ── Organigramme ── */
const OrgChart = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Organigramme</h2>
        <div className="mt-2 w-8 h-0.5 bg-blue-600" />
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <img
          src={imgOrgChart}
          alt="Organigramme BCA Technologies"
          className="w-full h-auto object-contain"
          style={{ minWidth: 800 }}
        />
      </div>
    </div>
  </section>
);

/* ── Nos Forces ── */
const NosForces = () => {
  const forces = [
    {
      icon: "⚙️",
      title: "Expertise qualifiée",
      desc: "Ressources hautement qualifiées avec expertise en déploiement, opérations et maintenance des réseaux fibre optique (Backbone, Metro, FTTx).",
    },
    {
      icon: "🧰",
      title: "Équipements complets",
      desc: "Un parc d&#39;équipements performant pour le contrôle, la gestion et l&#39;installation des réseaux fibre optique.",
    },
    {
      icon: "🚐",
      title: "Moyens logistiques",
      desc: "7 fourgons entièrement équipés pour garantir rapidité et efficacité dans les interventions.",
    },
    {
      icon: "📦",
      title: "Projets clés en main",
      desc: "Organisation complète couvrant étude, réalisation, test, installation et maintenance.",
    },
    {
      icon: "⭐",
      title: "Satisfaction client",
      desc: "Système de gestion de qualité rigoureux pour garantir une satisfaction optimale.",
    },
    {
      icon: "🔄",
      title: "Flexibilité",
      desc: "Adaptation rapide aux évolutions du marché et aux besoins spécifiques des clients.",
    },
    {
      icon: "⚡",
      title: "Réactivité",
      desc: "Prise de décision rapide et interventions efficaces pour réduire les délais.",
    },
    {
      icon: "🌍",
      title: "Couverture étendue",
      desc: "Interventions sur toute la Côte d&#39;Ivoire et à l&#39;international.",
    },
  ];

  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #1a2a6c 0%, #1e3799 40%, #1a2a6c 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white">Nos Forces</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {forces.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="text-white font-black text-base leading-snug">{f.title}</h3>
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
      name: "Gbran G. P. ANGAHI",
      role: "Fondateur & PDG",
      bio: "Visionnaire et entrepreneur, M. ANGAHI a fondé BCA Technologies en 2017 avec l&#39;ambition de connecter l&#39;Afrique aux meilleures technologies mondiales.",
      initials: "GA",
      color: "from-blue-600 to-blue-900",
      photo: imgCEO,
    },
    {
      name: "Direction Technique",
      role: "Ingénierie & Déploiement",
      bio: "Une équipe d&#39;ingénieurs certifiés spécialisée dans le déploiement d&#39;infrastructures télécoms, réseaux fibre et systèmes de sécurité électronique.",
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
      bio: "Gestion de la chaîne d&#39;approvisionnement internationale — du sourcing nord-américain jusqu&#39;à la livraison en Afrique de l&#39;Ouest.",
      initials: "LG",
      color: "from-orange-500 to-red-600",
      photo: imgLogistique,
    },
    {
      name: "Administration & Finance",
      role: "RH, Juridique & Comptabilité",
      bio: "L&#39;équipe administrative veille à la bonne gouvernance, à la conformité réglementaire et à la santé financière de l&#39;entreprise.",
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
          <h2 className="text-2xl font-bold text-gray-900">{t("team.title")}</h2>
          <p className="mt-1 text-gray-500 text-sm max-w-xl">{t("team.subtitle")}</p>
          <div className="mt-3 w-8 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[2/3]">
              {/* Fond photo ou dégradé */}
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <span className="text-white font-black text-7xl opacity-20 select-none">{member.initials}</span>
                </div>
              )}
              {/* Overlay léger en haut pour lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
              {/* Bandeau nom + rôle — compact en bas */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <h3 className="text-white font-bold text-sm leading-tight">{member.name}</h3>
                <p className="text-blue-300 text-[10px] font-semibold uppercase tracking-widest mt-0.5">{member.role}</p>
              </div>
              {/* Accent couleur haut */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Page principale ── */
export const BCAAboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero badge={t("nav.about")} title={t("presentation.title")} subtitle={t("presentation.text1_short")} />
      <CEOMessage />
      <Presentation />
      <OrgChart />
      <NosForces />
      <TeamSection />
    </>
  );
};
