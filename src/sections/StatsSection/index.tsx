import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type StatItemProps = {
  value: string;
  label: string;
  delay?: number;
};

const StatItem = ({ value, label, delay = 0 }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex min-h-px w-6/12 md:w-3/12">
      <div
        className="relative content-start flex flex-wrap w-full transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <div className="relative w-full">
          <p className="stat-number relative text-stone-950 text-[28px] md:text-[62px] font-bold inline-block leading-tight align-middle">
            {value}
          </p>
        </div>
        <div className="relative w-full">
          <p className="relative text-stone-950 text-xs font-bold inline-block tracking-[1px] leading-[18px] uppercase align-middle my-1.5">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-[55px] pb-[50px] md:pt-[53px]">
      <div className="relative flex flex-wrap max-w-[1170px] mx-auto md:flex-nowrap px-4 md:px-0">
        <div className="relative flex min-h-px w-full">
          <div className="relative content-start flex flex-wrap w-full">
            <div className="relative w-full mb-6 text-center animate-on-scroll">
              <p className="relative text-stone-950 text-xs font-bold inline-block tracking-[1px] uppercase align-middle">
                {t("stats.title")}
              </p>
            </div>
            <section className="relative w-full">
              <div className="relative flex flex-wrap text-center mx-auto md:flex-nowrap gap-y-8">
                <StatItem value="+ 91 000" label={t("stats.ftth_prod")} delay={0} />
                <StatItem value="+ 81 000" label={t("stats.ftth_maint")} delay={150} />
                <StatItem value="+ 5 000" label={t("stats.ls_prod")} delay={300} />
                <StatItem value="+ 4 000" label={t("stats.studies")} delay={450} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
