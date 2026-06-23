import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCASolutions = () => {
  const { t } = useTranslation();
  const items = t("solutions.items", { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const gradients = [
    "from-blue-600 to-blue-800",
    "from-indigo-600 to-blue-700",
    "from-purple-600 to-indigo-700",
    "from-violet-600 to-purple-700",
    "from-blue-500 to-cyan-600",
    "from-cyan-600 to-teal-700",
  ];

  return (
    <section id="solutions" className="bg-white py-20 px-6 relative overflow-hidden">
      <FiberBg variant="subtle" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t("solutions.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            {t("solutions.title")}
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            {t("solutions.subtitle")}
          </p>
          <div className="mt-5 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`card-hover animate-on-scroll stagger-${(i % 3) + 1} group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${gradients[i % gradients.length]}`} />
              <div className="p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-4 text-blue-700 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 group/btn"
                >
                  {t("solutions.learn_more")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 animate-on-scroll">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-purple-800 px-8 py-10 text-center">
            <FiberBg variant="blue" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{t("solutions.cta_title")}</h3>
              <p className="text-blue-200 mb-6 max-w-xl mx-auto text-sm">{t("solutions.cta_subtitle")}</p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                {t("solutions.cta_btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
