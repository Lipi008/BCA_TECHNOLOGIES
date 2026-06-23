import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCAWhyUs = () => {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="why" className="bg-gray-950 text-white py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <FiberBg variant="dark" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-blue-800/40">
            {t("why.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            {t("why.title")}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t("why.subtitle")}
          </p>
          <div className="mt-5 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-700/50 hover:bg-gray-900 transition-all duration-300`}
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
