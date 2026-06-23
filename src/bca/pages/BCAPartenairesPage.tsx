import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

import logoOrange        from "../../img/image_a_use/orange.png";
import logoMTN           from "../../img/image_a_use/mtn.jpg";
import logoMoov          from "../../img/image_a_use/moov.png";
import logoTotal         from "../../img/image_a_use/total-energies-logo.png";
import logoCITelecom     from "../../img/image_a_use/ci-telecom-logo.png";
import logoCanalPlus     from "../../img/image_a_use/Canal_+_Afrique_logo.jpg";
import logoBicici        from "../../img/image_a_use/Bicici.png";
import logoBollore       from "../../img/image_a_use/Bolloré_Transport_Logistics.png";
import logoSocGen        from "../../img/image_a_use/SocieteGenerale.jpg";
import logoEXFO          from "../../img/image_a_use/exfo.png";
import logoInfractive    from "../../img/image_a_use/infractive-01.jpg";
import logo3M            from "../../img/image_a_use/m3.png";
import logoEcobank       from "../../img/image_a_use/Ecobank CI.jpg";
import logoBridgeBank    from "../../img/image_a_use/bridge_bank.png";
import logoBanqueAtl     from "../../img/image_a_use/Banque_Atlantique.png";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

const REFERENCES: { name: string; logo?: string; color?: string }[] = [
  { name: "Orange CI",               logo: logoOrange    },
  { name: "MTN Côte d'Ivoire",       logo: logoMTN       },
  { name: "Moov Africa",             logo: logoMoov      },
  { name: "SFR",                     color: "#E4003A"    },
  { name: "Ministère des TIC",       color: "#009A44"    },
  { name: "CITélécom",               logo: logoCITelecom },
  { name: "Canal+ Afrique",          logo: logoCanalPlus },
  { name: "Société Générale CI",     logo: logoSocGen    },
  { name: "BICICI",                  logo: logoBicici    },
  { name: "Université FHB",          color: "#006837"    },
  { name: "TOTAL Énergies CI",       logo: logoTotal     },
  { name: "Bolloré Logistics",       logo: logoBollore   },
];

const TECHNICAL_PARTNERS = [
  { name: "DACOM FARM",  logo: undefined,       bg: "#F5A623", text: "DACOM\nFARM"  },
  { name: "EXFO",        logo: logoEXFO,        bg: "#005BAA", text: "EXFO"         },
  { name: "Infractive",  logo: logoInfractive,  bg: "#7B2D8B", text: "INFRACTIVE"  },
  { name: "3M",          logo: logo3M,          bg: "#FF0000", text: "3M"           },
];

const FINANCIAL_PARTNERS = [
  { name: "Ecobank",           logo: logoEcobank,    bg: "#00529B", text: "ECOBANK"           },
  { name: "Bridge Bank Group", logo: logoBridgeBank, bg: "#C04A1A", text: "BRIDGE\nBANK"      },
  { name: "Banque Atlantique", logo: logoBanqueAtl,  bg: "#E07B00", text: "BANQUE\nATLANTIQUE" },
];

const ReferenceCard = ({ name, logo, color, index }: { name: string; logo?: string; color?: string; index: number }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <div className={`animate-on-scroll stagger-${(index % 3) + 1} group flex flex-col items-center justify-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all p-5`}>
      <div className="w-24 h-14 flex items-center justify-center">
        {logo && !failed ? (
          <img
            src={logo}
            alt={name}
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-lg select-none"
            style={{ backgroundColor: color || "#2563eb" }}
          >
            {initials}
          </div>
        )}
      </div>
      <span className="text-gray-600 text-xs font-medium text-center leading-tight">{name}</span>
    </div>
  );
};

const PartnerCard = ({ p, i }: { p: { name: string; logo?: string; bg: string; text: string }; i: number }) => {
  const [imgFailed, setImgFailed] = React.useState(false);
  const showFallback = imgFailed || !p.logo;

  return (
    <div className={`animate-on-scroll stagger-${(i % 3) + 1} group flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all p-6 gap-3`}>
      <div className="w-28 h-16 flex items-center justify-center overflow-hidden">
        {!showFallback ? (
          <img
            src={p.logo}
            alt={p.name}
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center rounded-lg text-white font-black text-sm text-center leading-tight px-2"
            style={{ backgroundColor: p.bg, whiteSpace: "pre-line" }}
          >
            {p.text}
          </div>
        )}
      </div>
      <span className="text-xs text-gray-400 font-medium text-center leading-tight">{p.name}</span>
    </div>
  );
};

export const BCAPartenairesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero badge="Références & Partenaires" title="Nos Références & Partenaires" subtitle="Les entreprises qui nous font confiance et les partenaires qui renforcent notre expertise" />

      {/* Références clients */}
      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Nos Références Clients</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {REFERENCES.map((ref, i) => (
              <ReferenceCard key={i} index={i} name={ref.name} logo={ref.logo} color={ref.color} />
            ))}
          </div>
          <p className="mt-10 text-center text-gray-400 text-sm">Et bien d&#39;autres entreprises en Côte d&#39;Ivoire et en Afrique de l&#39;Ouest…</p>
        </div>
      </section>

      {/* Partenaires techniques */}
      <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-orange-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Partenaires Techniques</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {TECHNICAL_PARTNERS.map((p, i) => (
              <PartnerCard key={i} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires financiers */}
      <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Partenaires Financiers</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
            {FINANCIAL_PARTNERS.map((p, i) => (
              <PartnerCard key={i} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="bg-gray-950 text-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="dark" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-blue-900/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-blue-800/40">{t("why.badge")}</div>
            <h2 className="text-4xl font-black text-white uppercase">{t("why.title")}</h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(t("why.items", { returnObjects: true }) as Array<{ icon: string; title: string; description: string }>).map((item, i) => (
              <div key={i} className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-700/50 transition-all`}>
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
