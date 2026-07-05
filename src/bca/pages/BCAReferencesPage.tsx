import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

import logoOrange from "../../img/image_a_use/orange.png";
import logoMTN from "../../img/image_a_use/mtn.jpg";
import logoMoov from "../../img/image_a_use/moov.png";
import logoTotal from "../../img/image_a_use/total-energies-logo.png";
import logoCITelecom from "../../img/image_a_use/ci-telecom-logo.png";
import logoCanalPlus from "../../img/image_a_use/Canal_+_Afrique_logo.jpg";
import logoBicici from "../../img/image_a_use/Bicici.png";
import logoBollore from "../../img/image_a_use/Bolloré_Transport_Logistics.png";
import logoSocGen from "../../img/image_a_use/SocieteGenerale.jpg";

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

const REFERENCES: { name: string; logo?: string; color?: string }[] = [
  { name: "Orange CI", logo: logoOrange },
  { name: "MTN Côte d'Ivoire", logo: logoMTN },
  { name: "Moov Africa", logo: logoMoov },
  { name: "SFR", color: "#E4003A" },
  { name: "Ministère des TIC", color: "#009A44" },
  { name: "CITélécom", logo: logoCITelecom },
  { name: "Canal+ Afrique", logo: logoCanalPlus },
  { name: "Société Générale CI", logo: logoSocGen },
  { name: "BICICI", logo: logoBicici },
  { name: "Université FHB", color: "#006837" },
  { name: "TOTAL Énergies CI", logo: logoTotal },
  { name: "Bolloré Logistics", logo: logoBollore },
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
      <span className="text-gray-600 text-xs font-medium text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

export const BCAReferencesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        badge={t("nav.references")}
        title={t("references.title")}
        subtitle={t("references.subtitle")}
      />

      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
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

          <p className="mt-14 text-center text-gray-400 text-sm">
            Et bien d'autres entreprises en Côte d'Ivoire et en Afrique de
            l'Ouest…
          </p>
        </div>
      </section>
    </>
  );
};
