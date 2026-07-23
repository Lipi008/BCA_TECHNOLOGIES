import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { PageId } from "../BCARouter";
import imgTelecom from "../../img/image_a_use/fiberoptiques.jpg";
import imgIT from "../../img/image_a_use/securité_electorniques.jpg";
import imgSecurite from "../../img/image_a_use/domotique.jpg";
import imgDomotique from "../../img/image_a_use/techno_terre.jpg";
import imgInformatique from "../../img/image_a_use/Info_and_electroniques.png";
import imgSolar from "../../img/image_a_use/energiesolaire.jpg";

interface Props {
  navigate: (p: PageId) => void;
}

const SERVICE_IDS = ["telecom", "it", "security", "domotique", "informatique", "solar"] as const;
type ServiceId = (typeof SERVICE_IDS)[number];
const SERVICE_ICONS: Record<ServiceId, string> = {
  telecom: "📡",
  it: "🔒",
  security: "🏙️",
  domotique: "🌱",
  informatique: "💻",
  solar: "☀️",
};
const SERVICE_IMAGES: Record<ServiceId, string> = {
  telecom: imgTelecom,
  it: imgIT,
  security: imgSecurite,
  domotique: imgDomotique,
  informatique: imgInformatique,
  solar: imgSolar,
};

/* Composant ServiceBlock - carte détaillée alternée */
const ServiceBlock = ({
  serviceId,
  index,
  navigate,
}: {
  serviceId: ServiceId;
  index: number;
  navigate: (p: PageId) => void;
}) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;
  const base = `solutions.services.${serviceId}`;

  const kpi = t(`${base}.kpi`, { returnObjects: true }) as {
    value: string;
    label: string;
  }[];
  const subSections = t(`${base}.subSections`, { returnObjects: true }) as
    | { title: string; items: string[] }[]
    | undefined;
  const features = t(`${base}.features`, { returnObjects: true }) as
    | string[]
    | undefined;
  const description = t(`${base}.description`, { defaultValue: "" });

  return (
    <div
      className={`py-16 px-6 ${isEven ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche : panneau stats + image en dessous */}
          <div className={`${!isEven ? "lg:order-2" : ""} flex flex-col gap-4`}>
            {/* Panneau chiffres (original) */}
            <div className="bg-gray-900 rounded-lg p-8 text-white">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                {t(`${base}.badge`)}
              </p>
              <h3 className="text-xl font-bold mb-6">{t(`${base}.title`)}</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Array.isArray(kpi) &&
                  kpi.map((k, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {k.value}
                      </div>
                      <div className="text-gray-400 text-xs mt-1 leading-tight">
                        {k.label}
                      </div>
                    </div>
                  ))}
              </div>
              <button
                onClick={() => navigate("contact")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded transition-colors text-sm"
              >
                {t(`${base}.cta`)}
              </button>
            </div>

            {/* Image illustrée — remplit l'espace vide */}
            <div className="flex-1 rounded-lg overflow-hidden min-h-[180px]">
              <img
                src={SERVICE_IMAGES[serviceId]}
                alt={t(`${base}.title`)}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className={`space-y-5 ${!isEven ? "lg:order-1" : ""}`}>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t(`${base}.title`)}
              </h2>
              <p className="text-blue-700 text-sm mt-1">
                {t(`${base}.tagline`)}
              </p>
              <div className="mt-3 w-8 h-0.5 bg-blue-600" />
            </div>
            {description && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            )}
            {Array.isArray(subSections) && subSections.length > 0 ? (
              <div className="space-y-5">
                {subSections.map((sec, si) => (
                  <div key={si}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                      {sec.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {sec.items.map((item, ii) => (
                        <li
                          key={ii}
                          className="flex items-start gap-2 text-gray-700 text-sm"
                        >
                          <span className="text-blue-500 mt-0.5 flex-shrink-0">
                            –
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : Array.isArray(features) && features.length > 0 ? (
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">
                      –
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            ) : null}
            <button
              onClick={() => navigate("contact")}
              className="text-blue-700 font-medium text-sm hover:underline"
            >
              {t(`${base}.cta`)} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BCAOffresPage = ({ navigate }: Props) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(`service-${id}`);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #143278 0%, #0e2d6e 60%, #008CBE 100%)",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
            {t("nav.offres")}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            {t("solutions.title")}
          </h1>
          <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
            {t("solutions.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {SERVICE_IDS.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`border text-xs font-medium px-4 py-1.5 rounded-full transition-colors ${
                  activeId === id
                    ? "bg-white text-blue-800 border-white"
                    : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                }`}
              >
                {t(`solutions.services.${id}.badge`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services — blocs alternés */}
      {SERVICE_IDS.map((id, i) => (
        <div key={id} id={`service-${id}`}>
          <ServiceBlock serviceId={id} index={i} navigate={navigate} />
        </div>
      ))}

      {/* CTA global */}
      <section className="bg-gray-900 py-14 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white">
            {t("solutions.cta_title")}
          </h3>
          <p className="text-gray-400 mt-2 text-sm max-w-xl mx-auto">
            {t("solutions.cta_subtitle")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => navigate("contact")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-2.5 rounded transition-colors text-sm"
            >
              {t("solutions.cta_btn")}
            </button>
            <button
              onClick={() => navigate("about")}
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-7 py-2.5 rounded transition-colors text-sm"
            >
              {t("solutions.about_btn")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
