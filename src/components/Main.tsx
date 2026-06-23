import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { DirectorMessageSection } from "@/sections/DirectorMessageSection";
import { RealizationsSection } from "@/sections/RealizationsSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { PressSection } from "@/sections/PressSection";
import { GallerySection } from "@/sections/GallerySection";
import { ContactSection } from "@/sections/ContactSection";

export const Main = () => {
  const { t } = useTranslation();
  return (
    <main id="accueil" className="relative bg-white bg-[url('https://www.cicables.com/wp-content/uploads/2021/10/bg-1.svg')] z-[2] bg-center overflow-x-hidden">
      {/* Hero */}
      <HeroSection
        iconSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-3.svg"
        iconAlt="Icon"
        subtitle="Global Experience"
        title="Côte d'ivoire câble"
        titleGradient="bg-[linear-gradient(310deg,rgb(59,89,255)_0%,rgb(252,135,0)_100%)]"
        description={t("hero.description")}
        buttonText={t("hero.cta")}
        buttonHref="#contact"
        ovalImageSrc="https://c.animaapp.com/mml5038cleLxaZ/assets/Oval.svg"
        ovalImageAlt=""
        contentWidthVariant="md:w-[66.666%]"
        ovalVisibilityClass="hidden"
      />

      {/* Stats */}
      <section id="stats">
        <StatsSection />
      </section>

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Expertise / Activités */}
      <section id="expertise">
        <ExpertiseSection />
      </section>

      {/* Director Message */}
      <DirectorMessageSection />

      {/* Réalisations */}
      <section id="realisations">
        <RealizationsSection />
      </section>

      {/* References section (slate-700 "Nos Références") */}
      <section id="references" className="relative bg-slate-700 pt-5 pb-10">
        <div className="absolute leading-[0px] w-full overflow-hidden left-0 -bottom-px">
          <img
            src="https://c.animaapp.com/mml5038cleLxaZ/assets/icon-10.svg"
            alt=""
            className="relative h-[60px] align-baseline w-[calc(100%_+_1.3px)] left-2/4 -translate-x-1/2"
          />
        </div>
        <div className="relative flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
          <div className="relative flex min-h-px w-full">
            <div className="relative content-start flex flex-wrap w-full p-2.5">
              <section className="relative w-full">
                <div className="relative flex flex-col items-center text-center max-w-[500px] mx-auto px-5 mb-6 animate-on-scroll">
                  <h1 className="text-white text-[42px] md:text-[62px] font-bold leading-tight mb-8">
                    {t("references.title")}
                  </h1>
                </div>
              </section>
              <section className="relative w-full">
                <div className="relative flex flex-wrap max-w-[1140px] mx-auto justify-center items-center gap-4 md:gap-0">
                  {[
                    { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/image-9.svg", w: "w-[120px] md:w-[155px]" },
                    { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/image-10.svg", w: "w-[180px] md:w-[250px]" },
                    { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/image-11.svg", w: "w-[140px] md:w-[180px]" },
                    { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/image-12.svg", w: "w-[100px] md:w-[130px]" },
                    { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/image-13.svg", w: "w-[100px] md:w-[130px]" },
                  ].map((logo, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center p-4 animate-on-scroll stagger-${i + 1}`}
                    >
                      <img
                        src={logo.src}
                        alt=""
                        className={`${logo.w} max-w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200`}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partenaires">
        <PartnersSection />
      </section>

      {/* Press */}
      <section id="presse">
        <PressSection />
      </section>

      {/* Gallery */}
      <section id="galerie">
        <GallerySection />
      </section>

      {/* Contact section */}
      <ContactSection />
    </main>
  );
};
