import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { DirectorMessageSection } from "@/sections/DirectorMessageSection";
import { StatsSection } from "@/sections/StatsSection";

export const CICPage = () => {
  const { t } = useTranslation();
  const cards = t("cic.cards", { returnObjects: true }) as Array<{ icon: string; title: string; desc: string }>;
  const timeline = t("cic.timeline", { returnObjects: true }) as Array<{ year: string; event: string }>;

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const targets = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale"
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-gray-500 text-lg font-normal bg-white overflow-x-hidden max-w-full font-chivo">
      <Header />

      {/* Hero */}
      <HeroSection
        iconSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-3.svg"
        iconAlt=""
        subtitle="Présentation"
        title="CIC"
        titleGradient="bg-[linear-gradient(310deg,rgb(59,89,255)_0%,rgb(252,135,0)_100%)]"
        description={t("hero.cic_description")}
        buttonText={t("hero.cic_cta")}
        buttonHref="#about-cic"
        ovalImageSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/Oval.svg"
        ovalImageAlt=""
        contentWidthVariant="md:w-[66.666%]"
        ovalVisibilityClass="hidden"
      />

      <main className="bg-white bg-[url('https://www.cicables.com/wp-content/uploads/2021/10/bg-1.svg')] bg-center">
        {/* Stats */}
        <StatsSection />

        {/* About */}
        <section id="about-cic">
          <AboutSection />
        </section>

        {/* Director */}
        <DirectorMessageSection />

        {/* Extended CIC content */}
        <section className="py-20 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-14 animate-on-scroll">
              <span className="inline-flex items-center text-white text-xs font-semibold bg-[linear-gradient(115deg,rgb(0,127,255)_0%,rgba(255,0,0,0.45)_100%)] tracking-[1.16px] uppercase px-[15px] py-1.5 rounded-[25px] mb-4">
                {t("cic.structure_badge")}
              </span>
              <h2 className="text-slate-900 text-[32px] md:text-[48px] font-bold mt-4 leading-tight">
                {t("cic.structure_title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 text-center animate-on-scroll stagger-${i + 1} card-hover`}
                >
                  <div className="text-5xl mb-5">{item.icon}</div>
                  <h3 className="text-slate-900 text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 md:px-0 bg-slate-50">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-slate-900 text-[32px] md:text-[44px] font-bold leading-tight">
                {t("cic.history_title")}
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 animate-on-scroll stagger-${i + 1} ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="bg-white rounded-xl shadow-md p-6 inline-block max-w-md w-full text-left">
                      <span className="inline-block bg-blue-900 text-white font-bold text-sm px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <p className="text-slate-600 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-md z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
