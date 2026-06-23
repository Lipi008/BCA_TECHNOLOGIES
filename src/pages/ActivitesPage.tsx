import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";

const ACTIVITY_IMAGES = [
  "https://c.animaapp.com/mml5038cleLxaZ/assets/Fichier33-1024x1024.png",
  "https://c.animaapp.com/mml5038cleLxaZ/assets/Interventions-clients--300x300.png",
  "https://c.animaapp.com/mml5038cleLxaZ/assets/Bureau-detudes--300x300.png",
  "https://c.animaapp.com/mml5038cleLxaZ/assets/Controle-et-verification-techniques--300x300.png",
  "https://c.animaapp.com/mml5038cleLxaZ/assets/pilotage-300x300.png",
];
const ACTIVITY_COLORS = [
  "from-blue-600 to-blue-800",
  "from-orange-500 to-orange-700",
  "from-green-600 to-green-800",
  "from-purple-600 to-purple-800",
  "from-red-500 to-red-700",
];

export const ActivitesPage = () => {
  const { t } = useTranslation();
  const [activeActivity, setActiveActivity] = useState(0);
  const activitiesData = t("activities.items", { returnObjects: true }) as Array<{ id: string; icon: string; title: string; description: string; details: string[] }>;
  const ACTIVITIES = activitiesData.map((a, i) => ({ ...a, image: ACTIVITY_IMAGES[i], color: ACTIVITY_COLORS[i] }));

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

  const activity = ACTIVITIES[activeActivity];

  return (
    <div className="text-gray-500 text-lg font-normal bg-white overflow-x-hidden max-w-full font-chivo">
      <Header />

      {/* Hero */}
      <HeroSection
        iconSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-3.svg"
        iconAlt=""
        subtitle="Nos Activités"
        title="Activités"
        titleGradient="bg-[linear-gradient(310deg,rgb(252,135,0)_0%,rgb(59,89,255)_100%)]"
        description={t("hero.activities_description")}
        buttonText={t("hero.activities_cta")}
        buttonHref="#activites-detail"
        ovalImageSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/Oval.svg"
        ovalImageAlt=""
        contentWidthVariant="md:w-[66.666%]"
        ovalVisibilityClass="hidden"
      />

      <main className="bg-white bg-[url('https://www.cicables.com/wp-content/uploads/2021/10/bg-1.svg')] bg-center">

        {/* Expertise tabs section */}
        <section id="activites-detail" className="py-8">
          <ExpertiseSection />
        </section>

        {/* Detailed activity cards */}
        <section className="py-20 px-4 md:px-0 bg-slate-50">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-14 animate-on-scroll">
              <h2 className="text-slate-900 text-[32px] md:text-[48px] font-bold leading-tight">
                {t("activities.detail_title")}
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                {t("activities.detail_subtitle")}
              </p>
            </div>

            {/* Selector tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
              {ACTIVITIES.map((act, i) => (
                <button
                  key={act.id}
                  onClick={() => setActiveActivity(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                    activeActivity === i
                      ? "bg-blue-900 text-white shadow-lg scale-105"
                      : "bg-white text-slate-700 shadow-sm hover:shadow-md hover:text-blue-900"
                  }`}
                >
                  <span>{act.icon}</span>
                  {act.title.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>

            {/* Active activity detail */}
            <div
              key={activeActivity}
              className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden animate-fade-in"
              style={{ animationDuration: "0.4s" }}
            >
              <div className={`h-2 bg-gradient-to-r ${activity.color}`} />
              <div className="flex flex-col md:flex-row gap-0">
                {/* Image side */}
                <div className={`md:w-2/5 bg-gradient-to-br ${activity.color} flex items-center justify-center p-12`}>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-[200px] h-[200px] object-contain drop-shadow-2xl"
                  />
                </div>
                {/* Content side */}
                <div className="flex-1 p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{activity.icon}</span>
                    <h3 className="text-slate-900 text-2xl md:text-3xl font-bold">{activity.title}</h3>
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed mb-8">{activity.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activity.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l2.5 2.5L9 1" stroke="#1a32c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-slate-700 text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center animate-on-scroll">
          <h2 className="text-slate-900 text-[28px] md:text-[40px] font-bold mb-6">
            {t("activities.cta_title")}
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            {t("activities.cta_subtitle")}
          </p>
          <a
            href="/#contact"
            className="btn-press inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200"
          >
            {t("activities.cta_btn")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};
