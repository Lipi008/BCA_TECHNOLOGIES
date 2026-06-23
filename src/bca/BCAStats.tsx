import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

const AnimatedStat = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}ms` }}
    >
      <span className="text-3xl md:text-4xl font-black text-white tracking-tight">{value}</span>
      <span className="mt-2 text-blue-200 text-sm font-medium uppercase tracking-widest">{label}</span>
    </div>
  );
};

export const BCAStats = () => {
  const { t } = useTranslation();
  const items = t("stats.items", { returnObjects: true }) as Array<{ value: string; label: string }>;

  return (
    <section id="stats" className="bg-gradient-to-br from-blue-700 via-blue-800 to-purple-900 py-16 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <FiberBg variant="blue" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-300 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            {t("stats.title")}
          </h2>
          <p className="mt-2 text-blue-200 text-base">{t("stats.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
          {items.map((item, i) => (
            <AnimatedStat key={i} value={item.value} label={item.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};
