import { useTranslation } from "react-i18next";
import { RealizationsCarousel } from "@/sections/RealizationsSection/components/RealizationsCarousel";

export const RealizationsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative px-[15px] py-[35px] md:px-0 md:py-[50px]">
      <div className="relative flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative flex min-h-px w-full">
          <div className="relative content-start flex flex-wrap text-center w-full p-2.5">

            {/* Section heading */}
            <section className="relative w-full mb-[35px]">
              <div className="relative flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative flex min-h-px w-full">
                  <div className="relative content-start flex flex-wrap w-full p-0 md:px-[15%]">
                    <div className="relative w-full animate-on-scroll">
                      <h2 className="relative text-slate-900 text-[40px] md:text-[73px] font-bold inline-block tracking-[-0.2px] leading-[1.2] align-middle mb-8 md:mb-[36.5px]">
                        {t("realizations.title")}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Carousel */}
            <div className="relative w-full animate-on-scroll stagger-1">
              <div className="overflow-hidden md:overflow-visible">
                <RealizationsCarousel />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
