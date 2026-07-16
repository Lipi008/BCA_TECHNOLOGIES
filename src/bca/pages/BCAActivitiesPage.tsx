import React from "react";
import { useTranslation } from "react-i18next";
import type { PageId } from "../BCARouter";
import imgTelecom    from "../../img/image_a_use/fiberoptiques.jpg";
import imgIT         from "../../img/image_a_use/Info_and_electroniques.png";
import imgSecurite   from "../../img/image_a_use/securité_electorniques.jpg";
import imgDomotique  from "../../img/image_a_use/domotique.jpg";
import imgEnergie    from "../../img/image_a_use/energiesolaire.jpg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #143278 0%, #0e2d6e 60%, #008CBE 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-200 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

interface Props { navigate: (p: PageId) => void; }

export const BCAActivitiesPage = ({ navigate }: Props) => {
  const { t } = useTranslation();

  const domains: {
    key: string;
    icon: React.ReactNode;
    gradient: string;
    accentBg: string;
    image: string;
    title: string;
    long: string;
    items: string[];
  }[] = [
    {
      key: "telecom",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>,
      gradient: "from-blue-600 to-blue-800",
      accentBg: "bg-blue-600",
      image: imgTelecom,
      title: t("activites.telecom_title"),
      long: t("activites.telecom_long"),
      items: t("activites.telecom_items", { returnObjects: true }) as string[],
    },
    {
      key: "it",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>,
      gradient: "from-indigo-600 to-blue-700",
      accentBg: "bg-indigo-600",
      image: imgIT,
      title: t("activites.it_title"),
      long: t("activites.it_long"),
      items: t("activites.it_items", { returnObjects: true }) as string[],
    },
    {
      key: "security",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      gradient: "from-purple-600 to-indigo-700",
      accentBg: "bg-purple-600",
      image: imgSecurite,
      title: t("activites.security_title"),
      long: t("activites.security_long"),
      items: t("activites.security_items", { returnObjects: true }) as string[],
    },
    {
      key: "domotique",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      gradient: "from-violet-600 to-purple-700",
      accentBg: "bg-violet-600",
      image: imgDomotique,
      title: t("activites.domotique_title"),
      long: t("activites.domotique_long"),
      items: t("activites.domotique_items", { returnObjects: true }) as string[],
    },
    {
      key: "energy",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
      gradient: "from-yellow-500 to-orange-500",
      accentBg: "bg-yellow-500",
      image: imgEnergie,
      title: t("activites.energy_title"),
      long: t("activites.energy_long"),
      items: t("activites.energy_items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <>
      <PageHero badge={t("nav.activites")} title={t("activites.page_title")} subtitle={t("activites.page_subtitle")} />

      <div className="bg-white">
        {domains.map((d, i) => {
          const isEven = i % 2 === 0;
          return (
            <section key={d.key} id={d.key} className={`py-16 sm:py-24 ${isEven ? "bg-white" : "bg-gray-50"}`}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>

                  {/* Image */}
                  <div className={`w-full lg:w-1/2 ${isEven ? "animate-on-scroll-left" : "animate-on-scroll-right"}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-20`} />
                      <div className={`absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${d.gradient} flex items-center justify-center shadow-xl p-3 text-white`}>
                        {d.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`w-full lg:w-1/2 ${isEven ? "animate-on-scroll-right" : "animate-on-scroll-left"}`}>
                    <div className={`inline-flex items-center gap-2 ${d.accentBg} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest`}>
                      <span className="w-4 h-4 inline-flex items-center">{d.icon}</span>{d.title}
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-5 leading-tight">
                      {d.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-7">
                      {d.long}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {d.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className={`mt-1.5 w-2 h-2 rounded-full ${d.accentBg} flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => navigate("contact")}
                        className={`bg-gradient-to-r ${d.gradient} text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200`}
                      >
                        {t("activites.cta_devis")}
                      </button>
                      <button
                        onClick={() => navigate("contact")}
                        className="border border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded-xl hover:border-blue-600 hover:text-blue-700 transition-all duration-200"
                      >
                        {t("activites.cta_contact")}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
