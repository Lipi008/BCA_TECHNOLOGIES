import { useTranslation } from "react-i18next";

export const DirectorMessageSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-slate-700 pt-[80px] pb-[80px] md:py-[140px]">
      {/* Wave bottom */}
      <div className="absolute leading-[0px] w-full overflow-hidden left-0 -bottom-px">
        <img
          src="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-10.svg"
          alt=""
          className="relative h-[60px] align-baseline w-[calc(100%_+_1.3px)] left-2/4 -translate-x-1/2"
        />
      </div>

      <div className="relative flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px] px-4 md:px-0 gap-y-10">
        {/* Image column */}
        <div className="relative flex min-h-px w-full md:w-6/12 animate-on-scroll-left">
          <div className="relative flex flex-wrap content-start w-full p-2.5">
            {/* Shadow decoration */}
            <div className="absolute max-w-[430px] w-[300px] md:w-[430px] z-0 left-0 top-0">
              <figure className="w-full">
                <img
                  src="https://c.animaapp.com/mml5038cleLxaZ/assets/shadow1.svg"
                  alt=""
                  className="max-w-full w-[430px] opacity-40"
                />
              </figure>
            </div>
            {/* Director photo */}
            <div className="relative max-w-[300px] md:max-w-[428px] w-full md:w-[428px] z-[1] ml-4 mt-4">
              <figure className="w-full overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt="Directeur Général"
                  src="https://c.animaapp.com/mml5038cleLxaZ/assets/image-4.svg"
                  className="max-w-full w-full h-auto block"
                />
              </figure>
            </div>
            {/* Social links */}
            <div className="absolute flex gap-3 z-[2] left-[130px] md:left-[185px]" style={{ top: "85%" }}>
              <a
                href="https://www.linkedin.com/in/kone-kolo-exec-mba-hec-paris-bilingual-eng-0343373b"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <img src="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-11.svg" alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a
                href="https://x.com/konekolo?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <img src="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-12.svg" alt="X (Twitter)" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="relative flex min-h-px w-full md:w-6/12 animate-on-scroll-right">
          <div className="relative flex flex-wrap content-start w-full p-2.5">
            <div className="relative w-full mb-3">
              <h1 className="relative text-white text-[30px] md:text-[37px] font-bold inline-block tracking-[-0.02px] leading-[1.1] align-middle mb-2 text-center md:text-start">
                {t("director.title")}
              </h1>
            </div>
            <div className="relative w-full mb-3">
              <p className="relative text-white/70 font-medium inline-block leading-relaxed">
                {t("director.greeting")}
              </p>
            </div>
            <div className="relative w-full mb-3">
              <p className="relative text-white/70 font-medium inline-block leading-relaxed text-justify">
                {t("director.p1")}
              </p>
            </div>
            <div className="relative w-full mb-8">
              <p className="relative text-white/70 font-medium inline-block leading-relaxed text-justify">
                {t("director.p2")}
              </p>
            </div>
            <div className="relative w-full">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-press inline-flex items-center gap-2 text-slate-900 font-semibold bg-white px-9 py-5 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200"
              >
                {t("director.readMore")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
