import { useTranslation } from "react-i18next";

export const GallerySection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white/40 pt-0 pb-5 px-4 md:pt-[19px] md:pb-0 md:px-0">
      <div className="relative flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative flex min-h-px w-full">
          <div className="relative content-start flex flex-wrap w-full px-2.5 md:px-0">
            <section className="relative w-full mb-[35px] animate-on-scroll">
              <div className="text-center">
                <h1 className="relative text-slate-900 text-[48px] md:text-[73px] font-bold inline-block leading-[1.15] align-middle mb-[36.5px]">
                  {t("gallery.title")}
                </h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
