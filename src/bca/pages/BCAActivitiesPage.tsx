import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-200 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export const BCAActivitiesPage = () => {
  const { t } = useTranslation();

  const domains = [
    {
      icon: "📡",
      gradient: "from-blue-600 to-blue-800",
      title: t("activites.telecom_title"),
      desc: t("activites.telecom_desc"),
      items: t("activites.telecom_items", { returnObjects: true }) as string[],
    },
    {
      icon: "💻",
      gradient: "from-indigo-600 to-blue-700",
      title: t("activites.it_title"),
      desc: t("activites.it_desc"),
      items: t("activites.it_items", { returnObjects: true }) as string[],
    },
    {
      icon: "🔒",
      gradient: "from-purple-600 to-indigo-700",
      title: t("activites.security_title"),
      desc: t("activites.security_desc"),
      items: t("activites.security_items", { returnObjects: true }) as string[],
    },
    {
      icon: "🏠",
      gradient: "from-violet-600 to-purple-700",
      title: t("activites.domotique_title"),
      desc: t("activites.domotique_desc"),
      items: t("activites.domotique_items", { returnObjects: true }) as string[],
    },
    {
      icon: "🌍",
      gradient: "from-cyan-600 to-teal-700",
      title: t("activites.import_title"),
      desc: t("activites.import_desc"),
      items: t("activites.import_items", { returnObjects: true }) as string[],
    },
    {
      icon: "⚡",
      gradient: "from-orange-500 to-red-600",
      title: t("activites.energy_title"),
      desc: t("activites.energy_desc"),
      items: t("activites.energy_items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <>
      <PageHero badge={t("nav.activites")} title={t("activites.page_title")} subtitle={t("activites.page_subtitle")} />

      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((d, i) => (
              <div key={i} className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300`}>
                <div className={`h-2 w-full bg-gradient-to-r ${d.gradient}`} />
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${d.gradient} flex items-center justify-center text-3xl mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    {d.icon}
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-2 group-hover:text-blue-700 transition-colors">{d.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{d.desc}</p>
                  <ul className="space-y-2">
                    {d.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
