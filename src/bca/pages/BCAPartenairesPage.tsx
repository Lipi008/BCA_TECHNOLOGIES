import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";
import { BCAWhyUs } from "../BCAWhyUs";

import logoOrange      from "../../img/image_a_use/orange.png";
import logoMTN         from "../../img/image_a_use/mtn.jpg";
import logoMoov        from "../../img/image_a_use/moov.png";
import logoDataConnect  from "../../img/image_a_use/dataconnect.jpeg";
import logoKaydan      from "../../img/image_a_use/kaydan.jpeg";
import logoSocGen      from "../../img/image_a_use/SocieteGenerale.jpg";
import logoCisco       from "../../img/image_a_use/cisco.png";
import logoExfo        from "../../img/image_a_use/exfo.png";
import logoInfractive  from "../../img/image_a_use/infractive-01.jpg";
import logoSumitomo    from "../../img/image_a_use/Logo-Sumitomo.jpg";
import logoBaudcom     from "../../img/image_a_use/baudcom.png";
import logoCiril       from "../../img/image_a_use/logo_ciril_group.png";
import logo3M          from "../../img/image_a_use/m3.png";

const PageHero = ({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle?: string;
}) => (
  <section
    className="relative py-24 px-6 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #143278 0%, #0e2d6e 60%, #008CBE 100%)",
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

const REFERENCES: { name: string; logo?: string; color?: string }[] = [
  { name: "Orange Côte d'Ivoire",     logo: logoOrange },
  { name: "Orange Burkina",            logo: logoOrange },
  { name: "Orange Liberia",            logo: logoOrange },
  { name: "MTN Côte d'Ivoire",        logo: logoMTN },
  { name: "Moov Africa Côte d'Ivoire",logo: logoMoov },
  { name: "Moov Africa Mali (Sotelma)",logo: logoMoov },
  { name: "Côte d'Ivoire Câble (CIC)",color: "#003366" },
  { name: "Data Connect SA",           logo: logoDataConnect },
  { name: "Diginets",                  color: "#1E3A8A" },
  { name: "Kaydan",                    logo: logoKaydan },
  { name: "Rakall",                    color: "#0369A1" },
  { name: "ITC",                       color: "#115E59" },
  { name: "Kanvoo",                    color: "#6D28D9" },
  { name: "STA",                       color: "#B91C1C" },
  { name: "Orange Bank Africa",        color: "#FF6600" },
  { name: "SocGen / SGCI",             logo: logoSocGen },
  { name: "BDC",                       color: "#C41E3A" },
];

const PARTNERS_TECH: { name: string; logo?: string; color?: string }[] = [
  { name: "3M",           logo: logo3M },
  { name: "CISCO",        logo: logoCisco },
  { name: "EXFO",         logo: logoExfo },
  { name: "INFRACTIVE",   logo: logoInfractive },
  { name: "SUMITOMO",     logo: logoSumitomo },
  { name: "BAUDCOM",      logo: logoBaudcom },
  { name: "CIRIL Group",  logo: logoCiril },
];

const ReferenceCard = ({
  name,
  logo,
  color,
  index,
}: {
  name: string;
  logo?: string;
  color?: string;
  index: number;
}) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`animate-on-scroll stagger-${(index % 3) + 1} group flex flex-col items-center justify-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all p-5`}
    >
      <div className="w-24 h-14 flex items-center justify-center">
        {logo && !failed ? (
          <img
            src={logo}
            alt={name}
            className="max-w-full max-h-full object-contain transition-all duration-300"
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
      <span className="text-gray-600 text-xs font-medium text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

export const BCAPartenairesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        badge="Références & Partenaires"
        title="Nos Références & Partenaires"
        subtitle="Les entreprises qui nous font confiance et notre partenaire stratégique officiel"
      />

      {/* Références clients */}
      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">
              Nos Références Clients
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {REFERENCES.map((ref, i) => (
              <ReferenceCard
                key={i}
                index={i}
                name={ref.name}
                logo={ref.logo}
                color={ref.color}
              />
            ))}
          </div>
          <p className="mt-10 text-center text-gray-400 text-sm">
            Et bien d'autres entreprises en Côte d'Ivoire et en Afrique de
            l'Ouest…
          </p>
        </div>
      </section>

      {/* Partenaire officiel — BCA Multiservices Inc. */}
      <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-blue-700 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">
              Notre Partenaire Officiel
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden">
            {/* En-tête de la carte */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 border-b border-gray-100">
              {/* Logo / monogramme */}
              <div
                className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl text-white font-black text-2xl select-none"
                style={{
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)",
                }}
              >
                BCA
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide border border-blue-200">
                  ★ Partenaire officiel
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  BCA Multiservices Inc.
                </h3>
                <p className="text-gray-500 text-sm mt-0.5">
                  Sorel-Tracy, Québec — Canada
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Principal partenaire officiel de BCA Technologies,{" "}
                <strong className="text-gray-900">BCA Multiservices Inc</strong>{" "}
                est la maison mère canadienne du groupe BCA. Fondée en{" "}
                <strong>février 2016</strong> et basée à{" "}
                <strong>Sorel-Tracy (Québec, Canada)</strong>, la société joue
                le rôle de <strong>centrale d'achat du groupe</strong> : elle
                regroupe et mutualise les achats de l'ensemble de ses filiales
                afin de négocier de meilleurs prix et conditions, tout en
                sécurisant des tarifs compétitifs ainsi que des services
                logistiques et promotionnels, transformant ainsi
                l'approvisionnement en véritable levier de croissance.
              </p>
              <p>
                Présente au <strong>Canada</strong> et en{" "}
                <strong>Afrique de l'Ouest</strong> (Côte d'Ivoire, Mali, Ghana,
                Burkina Faso), elle s'adresse principalement aux opérateurs de
                réseaux mobiles, aux fournisseurs d'accès Internet (FAI) et aux
                installateurs télécom, sur les segments{" "}
                <strong>B2C et B2B</strong>.
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
                <div
                  key={i}
                  className="flex flex-col gap-0.5 px-6 py-4 border-r last:border-r-0 border-gray-100"
                >
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-gray-900 font-semibold text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires techniques & fournisseurs */}
      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 rounded-full" style={{ background: "#008CBE" }} />
            <h2 className="text-2xl font-bold text-gray-800">Partenaires Techniques &amp; Fournisseurs</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {PARTNERS_TECH.map((p, i) => (
              <ReferenceCard key={i} index={i} name={p.name} logo={p.logo} color={p.color} />
            ))}
          </div>
        </div>
      </section>

      <BCAWhyUs />
    </>
  );
};
