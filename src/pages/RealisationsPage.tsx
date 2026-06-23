import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";

const PROJECT_STATS = [
  { prises: "15 000", abonnés: "8 500", km: "120" },
  { km: "2 300", interventions: "450", uptime: "99.8%" },
  { APs: "500", campus: "4", utilisateurs: "25 000" },
  { liaisons: "320", entreprises: "85", délai: "6 mois" },
  { km: "80", tranchées: "450", câbles: "240F" },
  { prises: "6 500", abonnés: "3 200", km: "45" },
];
const PROJECT_CATEGORIES = ["FTTH", "Backbone", "Wi-Fi", "Liaisons Spécialisées", "Génie Civil", "FTTH"];
const PROJECT_TAG_COLORS = [
  "bg-blue-100 text-blue-800",
  "bg-purple-100 text-purple-800",
  "bg-green-100 text-green-800",
  "bg-orange-100 text-orange-800",
  "bg-yellow-100 text-yellow-800",
  "bg-blue-100 text-blue-800",
];
const PROJECT_YEARS = ["2023", "2023", "2022", "2022", "2021", "2021"];

export const RealisationsPage = () => {
  const { t } = useTranslation();
  const projectsData = t("realizations.projects", { returnObjects: true }) as Array<{ title: string; description: string; location: string; tag: string }>;
  const PROJECTS = projectsData.map((p, i) => ({
    id: i + 1,
    ...p,
    category: PROJECT_CATEGORIES[i],
    year: PROJECT_YEARS[i],
    stats: PROJECT_STATS[i],
    image: "https://c.animaapp.com/mml5038cleLxaZ/assets/image-5.svg",
    tagColor: PROJECT_TAG_COLORS[i],
  }));
  const CATEGORIES = t("realizations.categories", { returnObjects: true }) as string[];
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

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
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right"
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const allLabel = CATEGORIES[0];
  const filtered = activeCategory === allLabel
    ? PROJECTS
    : PROJECTS.filter((p) => {
        const catIndex = CATEGORIES.indexOf(activeCategory);
        return catIndex > 0 && p.category === PROJECT_CATEGORIES[catIndex - 1];
      });

  return (
    <div className="text-gray-500 text-lg font-normal bg-white overflow-x-hidden max-w-full font-chivo">
      <Header />

      {/* Hero */}
      <HeroSection
        iconSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-3.svg"
        iconAlt=""
        subtitle="Nos Réalisations"
        title="Réalisations"
        titleGradient="bg-[linear-gradient(310deg,rgb(59,89,255)_0%,rgb(0,180,120)_100%)]"
        description={t("hero.realizations_description")}
        buttonText={t("hero.realizations_cta")}
        buttonHref="#projets"
        ovalImageSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/Oval.svg"
        ovalImageAlt=""
        contentWidthVariant="md:w-[66.666%]"
        ovalVisibilityClass="hidden"
      />

      <main id="projets" className="bg-white bg-[url('https://www.cicables.com/wp-content/uploads/2021/10/bg-1.svg')] bg-center">

        {/* Stats banner */}
        <section className="bg-blue-900 py-12 px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "+91 000", label: t("stats.ftth_prod") },
                { value: "+81 000", label: t("stats.ftth_maint") },
                { value: "+5 000", label: t("stats.ls_prod") },
                { value: "+4 000", label: t("stats.studies") },
              ].map((stat, i) => (
                <div key={i} className="animate-on-scroll">
                  <p className="text-white text-3xl md:text-5xl font-bold">{stat.value}</p>
                  <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="py-20 px-4 md:px-0">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-slate-900 text-[32px] md:text-[48px] font-bold leading-tight">
                {t("realizations.featuredTitle")}
              </h2>
              <p className="text-slate-500 mt-4 max-w-lg mx-auto">
                {t("realizations.featuredSubtitle")}
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-blue-900 text-white shadow-lg"
                      : "bg-white text-slate-700 shadow-sm hover:shadow-md hover:text-blue-900 border border-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <article
                  key={project.id}
                  className={`bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden card-hover cursor-pointer animate-on-scroll stagger-${(i % 3) + 1}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-[200px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.tagColor}`}>
                        {project.tag}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/80 text-slate-700">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-slate-900 text-lg font-bold leading-snug">{project.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-sm text-blue-900 font-medium">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4Z" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                {t("realizations.noProjects")}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center bg-slate-50 animate-on-scroll">
          <h2 className="text-slate-900 text-[28px] md:text-[40px] font-bold mb-6">
            {t("realizations.ctaTitle")}
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            {t("realizations.ctaSubtitle")}
          </p>
          <a
            href="/#contact"
            className="btn-press inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200"
          >
            {t("realizations.ctaBtn")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </section>
      </main>

      {/* Project modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[220px] bg-gradient-to-br from-blue-600 to-blue-900 rounded-t-3xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-40"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="absolute bottom-6 left-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${selectedProject.tagColor} mr-2`}>
                  {selectedProject.tag}
                </span>
                <span className="text-white/80 text-sm">{selectedProject.year}</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-slate-900 text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <div className="flex items-center gap-2 text-sm text-blue-900 font-medium mb-5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {selectedProject.location}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">{selectedProject.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(selectedProject.stats).map(([key, val]) => (
                  <div key={key} className="bg-slate-50 rounded-xl p-4 text-center">
                    <p className="text-blue-900 text-xl font-bold">{val}</p>
                    <p className="text-slate-500 text-xs mt-1 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
