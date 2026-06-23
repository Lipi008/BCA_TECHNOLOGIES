import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="relative bg-stone-50 box-border caret-transparent pt-4 pb-20">
      <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-neutral-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
        <h2 className="text-stone-950 text-[26.8625px] font-semibold box-border caret-transparent leading-[32.235px] mb-2 font-oswald md:text-[38px] md:leading-[45.6px]">
          Témoignages de clients
        </h2>
        <p className="text-lg font-light box-border caret-transparent leading-[27px] mb-4">
          Ce que nos clients disent de nous.
        </p>
        <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full pt-4 px-[15px] md:w-[33.3333%]">
            <TestimonialCard
              quote={
                <>
                  « Grâce à l’équipe de{" "}
                  <strong className="font-bold box-border caret-transparent">
                    BCA Technologies Limited
                  </strong>
                  , notre entreprise a pu déployer une solution de fibre optique
                  fiable et performante en un temps record. Leur réactivité et
                  leur expertise technique ont largement dépassé nos attentes. »
                </>
              }
              authorName="Michel Koffi"
            />
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full pt-4 px-[15px] md:w-[33.3333%]">
            <TestimonialCard
              quote={
                <>
                  « Nous avons travaillé avec{" "}
                  <strong className="font-bold box-border caret-transparent">
                    BCA Technologies Limited
                  </strong>{" "}
                  pour moderniser notre système domotique et l’intégration a été
                  impeccable. Leur accompagnement de A à Z nous a vraiment
                  rassurés. »
                </>
              }
              authorName="Ali Ouattara"
            />
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full pt-4 px-[15px] md:w-[33.3333%]">
            <TestimonialCard
              quote={
                <>
                  « L’innovation est au cœur de ce que fait{" "}
                  <strong className="font-bold box-border caret-transparent">
                    BCA Technologies Limited
                  </strong>
                  . Leur conseil et leur sens de l’écoute ont été déterminants
                  pour le succès de notre projet technologique. »
                </>
              }
              authorName="Laura N'guessan"
            />
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full pt-4 pb-24 px-[15px] md:w-[33.3333%]">
            <TestimonialCard
              quote={
                <>
                  « Professionnalisme, disponibilité et solutions sur mesure :
                  c’est ce qui nous a le plus marqués chez{" "}
                  <strong className="font-bold box-border caret-transparent">
                    BCA Technologies Limited
                  </strong>
                  . Nous les recommandons vivement à toute organisation
                  cherchant des prestations de qualité. »
                </>
              }
              authorName="Gabriel Sokoury"
            />
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full pt-4 pb-24 px-[15px] md:w-[33.3333%]">
            <TestimonialCard
              quote={
                <>
                  « Très bonne expérience avec{" "}
                  <strong className="font-bold box-border caret-transparent">
                    BCA Technologies Limited
                  </strong>
                  . Leur équipe a su répondre à nos besoins spécifiques en
                  domotique intelligente avec des solutions simples et
                  efficaces. »
                </>
              }
              authorName="Ange Kouadio"
            />
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full pt-4 pb-24 px-[15px] md:w-[33.3333%]">
            <TestimonialCard
              quote={
                <>
                  « Ce fut un plaisir de collaborer avec{" "}
                  <strong className="font-bold box-border caret-transparent">
                    BCA Technologies Limited
                  </strong>
                  . Ils ont parfaitement compris nos objectifs en matière de
                  connectivité et d’innovation, et ont livré un service
                  irréprochable. »
                </>
              }
              authorName="Davide Gnabry"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
