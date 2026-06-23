import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-slate-300/40 px-[4%] py-[10%] md:pt-[90px] md:pb-20 md:px-0">
      <div className="relative flex flex-wrap max-w-[1170px] mx-auto md:flex-nowrap gap-y-8 px-4 md:px-0">
        {/* Text */}
        <div className="relative flex min-h-px w-full md:w-6/12 animate-on-scroll-left">
          <div className="relative flex flex-wrap content-center items-center w-full md:mr-[10%]">
            <div className="relative w-full mb-4">
              <a className="inline-flex items-center text-white text-xs font-semibold bg-[linear-gradient(115deg,rgb(0,127,255)_0%,rgba(255,0,0,0.45)_100%)] tracking-[1.16px] uppercase px-[15px] py-1.5 rounded-[25px] hover:opacity-90 transition-opacity">
                {t("about.badge")}
              </a>
            </div>
            <div className="relative w-full">
              <h2 className="relative text-slate-900 text-[28px] md:text-[45px] font-medium inline-block tracking-[-0.2px] leading-[1.14] align-middle mt-3 mb-5">
                {t("about.title")}
              </h2>
            </div>
            <div className="relative w-full mb-4">
              <p className="relative inline-block align-middle text-justify leading-relaxed">
                {t("about.p1")}
              </p>
            </div>
            <div className="relative w-full">
              <p className="relative inline-block align-middle text-justify leading-relaxed">
                {t("about.p2")}
              </p>
            </div>
          </div>
        </div>

        {/* Image + Video Button */}
        <div className="relative flex min-h-px w-full md:w-6/12 animate-on-scroll-right">
          <div className="relative flex flex-col content-start w-full text-center">
            <div className="relative w-full">
              <figure className="relative shadow-[rgba(0,0,0,0.16)_0px_20px_50px_0px] w-full rounded-md overflow-hidden">
                <img
                  alt="Qui sommes-nous"
                  src="https://c.animaapp.com/mml5038cleLxaZ/assets/qui-sommes-nous.jpg"
                  className="w-full h-auto max-w-full rounded-md block object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </figure>
            </div>
            <div className="relative w-full -mt-16 z-10">
              <a
                href="https://www.youtube.com/watch?v=pannW66l3zA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-3 text-white text-base font-medium bg-black/40 backdrop-blur-sm px-8 py-5 rounded-full hover:bg-black/60 transition-all duration-200"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                    <path d="M1.5 1L10.5 7L1.5 13V1Z"/>
                  </svg>
                </span>
                {t("about.video")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
