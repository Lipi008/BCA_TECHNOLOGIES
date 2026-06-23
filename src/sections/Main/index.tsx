import { TickerBanner } from "@/sections/TickerBanner";
import { HeroSection } from "@/sections/HeroSection";
import { IntroSection } from "@/sections/IntroSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { KeyFiguresSection } from "@/sections/KeyFiguresSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ReferencesSection } from "@/sections/ReferencesSection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent grow shrink-0 min-h-[auto] min-w-[auto]">
      <div className="box-border caret-transparent">
        <TickerBanner />
        <HeroSection />
        <IntroSection
          variant="hero"
          sectionClassName=""
          innerDivClassName=""
          heroTitle="Innover, sécuriser, connecter : l’Afrique en mouvement"
        />
        <IntroSection variant="presentation" />
        <ExpertiseSection />
        <ExpertiseSection
          sectionClassName="relative bg-stone-50 box-border caret-transparent pb-16"
          showBackground={true}
          showServiceCards={true}
          serviceCards={[
            {
              imageSrc:
                "https://c.animaapp.com/mn4bql9mR7qaS3/assets/rendering-3d-du-cable-fibre-optique_75891-6404.webp",
              imageAlt: "",
              title: "Fibre Optique\u00A0",
              description: (
                <>
                  Conception, déploiement et maintenance de{" "}
                  <b className="font-bold box-border caret-transparent break-words">
                    réseaux fibre optique
                  </b>
                  fiables et performants (FTTH, FTTB, FTTC, FTTN, GPON). Nos
                  infrastructures permettent le déploiement de services voix,
                  vidéo et données de dernière génération, avec rapidité et
                  stabilité garanties.&nbsp;
                </>
              ),
            },
            {
              imageSrc:
                "/web/image/544-fa94a9e1/t%C3%A9l%C3%A9chargement%20%284%29.jpg",
              imageAlt: "",
              title: (
                <>
                  <b className="font-black box-border caret-transparent break-words">
                    Sécurité Professionnelle
                  </b>
                </>
              ),
              description: (
                <>
                  Solutions complètes pour la{" "}
                  <b className="font-bold box-border caret-transparent break-words">
                    protection des bâtiments et des personnes
                  </b>{" "}
                  : interphones vidéo Wi-Fi, ouvre portes GSM, contrôle d’accès
                  et systèmes anti intrusion, avec installation et service
                  après-vente réactif.&nbsp;
                </>
              ),
            },
            {
              imageSrc:
                "/web/image/545-bf96a0de/t%C3%A9l%C3%A9chargement%20%285%29.jpg",
              imageAlt: "",
              title: (
                <b className="font-black box-border caret-transparent break-words">
                  Solutions Intelligentes
                </b>
              ),
              description: (
                <>
                  Importation, vente et maintenance d’
                  <b className="font-bold box-border caret-transparent break-words">
                    objets connectés et équipements intelligents
                  </b>
                  , incluant le contrôle d’accès automatisé et l’agriculture
                  intelligente, pour rendre les infrastructures plus{" "}
                  <b className="font-bold box-border caret-transparent break-words">
                    efficaces, sécurisées et innovantes
                  </b>
                  .&nbsp;
                </>
              ),
            },
          ]}
        />
        <SolutionsSection />
        <KeyFiguresSection />
        <TestimonialsSection />
        <ReferencesSection />
      </div>
      <div className="box-border caret-transparent hidden h-0"></div>
      <div className="box-border caret-transparent"></div>
    </main>
  );
};
