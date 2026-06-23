import { useTranslation } from "react-i18next";
import { PartnersCarousel } from "@/sections/PartnersSection/components/PartnersCarousel";

export const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-[linear-gradient(40deg,rgba(18,81,239,0)_31%,rgba(52,54,77,0)_100%)] pt-5 pb-16">
      <div className="absolute leading-[0px] w-full overflow-hidden left-0 -bottom-px">
        <img
          src="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-10.svg"
          alt=""
          className="relative h-[60px] align-baseline w-[calc(100%_+_1.3px)] left-2/4 -translate-x-1/2"
        />
      </div>
      <div className="relative flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px] px-4 md:px-0">
        <div className="relative flex min-h-px w-full">
          <div className="relative content-start flex flex-wrap w-full p-2.5">

            {/* Heading */}
            <section className="relative w-full text-center mb-6 animate-on-scroll">
              <h1 className="relative text-black text-[48px] md:text-[62px] font-bold inline-block leading-[1.15] align-middle mb-8">
                {t("partners.title")}
              </h1>
            </section>

            {/* Marquee carousel */}
            <div className="relative w-full animate-on-scroll stagger-1">
              <PartnersCarousel />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
