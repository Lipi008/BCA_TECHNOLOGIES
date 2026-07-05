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

export const BCAPartenairesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero badge="Références & Partenaires" title="Nos Références & Partenaires" subtitle="Les entreprises qui nous font confiance et notre partenaire stratégique officiel" />

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

      {/* Partenaire officiel — BCA Multiservices Inc. */}
      <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-blue-700 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Notre Partenaire Officiel</h2>
          </div>

          <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden">
            {/* En-tête de la carte */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 border-b border-gray-100">
              {/* Logo / monogramme */}
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl text-white font-black text-2xl select-none"
                style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)" }}>
                BCA
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide border border-blue-200">
                  ★ Partenaire officiel
                </div>
                <h3 className="text-xl font-black text-gray-900">BCA Multiservices Inc.</h3>
                <p className="text-gray-500 text-sm mt-0.5">Sorel-Tracy, Québec — Canada</p>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Principal partenaire officiel de BCA Technologies, <strong className="text-gray-900">BCA Multiservices Inc</strong> est la maison mère canadienne du groupe BCA. Fondée en <strong>février 2016</strong> et basée à <strong>Sorel-Tracy (Québec, Canada)</strong>, la société joue le rôle de <strong>centrale d'achat du groupe</strong> : elle regroupe et mutualise les achats de l'ensemble de ses filiales afin de négocier de meilleurs prix et conditions, tout en sécurisant des tarifs compétitifs ainsi que des services logistiques et promotionnels, transformant ainsi l'approvisionnement en véritable levier de croissance.
              </p>
              <p>
                Présente au <strong>Canada</strong> et en <strong>Afrique de l'Ouest</strong> (Côte d'Ivoire, Mali, Ghana, Burkina Faso), elle s'adresse principalement aux opérateurs de réseaux mobiles, aux fournisseurs d'accès Internet (FAI) et aux installateurs télécom, sur les segments <strong>B2C et B2B</strong>.
              </p>
            </div>

            {/* Méta-infos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-gray-100">
              {[
                { label: "Fondée en", value: "Février 2016" },
                { label: "Siège", value: "Sorel-Tracy, Québec" },
                { label: "Marchés", value: "B2C & B2B" },
                { label: "Présence", value: "Canada + Afrique de l'Ouest" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-0.5 px-6 py-4 border-r last:border-r-0 border-gray-100">
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest">{item.label}</span>
                  <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
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
