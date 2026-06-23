export type IntroSectionProps = {
  variant: "hero" | "presentation";
  sectionClassName?: string;
  innerDivClassName?: string;
  heroTitle?: string;
  presentationParagraphs?: React.ReactNode[];
  readMoreHref?: string;
  readMoreText?: string;
};

export const IntroSection = (props: IntroSectionProps) => {
  const {
    variant,
    sectionClassName = "",
    innerDivClassName = "",
    heroTitle = "Innover, sécuriser, connecter : l'Afrique en mouvement",
    presentationParagraphs,
    readMoreHref = "https://wwwbcatechltdcom.odoo.com/a-propos-de",
    readMoreText = "Lire la suite",
  } = props;

  if (variant === "hero") {
    return (
      <section
        className={`relative box-border caret-transparent bg-stone-50 pb-1 ${sectionClassName}`}
      >
        <div
          className={`relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter md:max-w-[720px] before:text-neutral-800 after:text-neutral-800 ${innerDivClassName}`}
        >
          <h2 className="text-stone-950 text-[26.8625px] font-semibold box-border caret-transparent leading-[32.235px] text-left mb-2 font-oswald md:text-[38px] md:leading-[45.6px]">
            <span className="text-[21.525px] box-border caret-transparent leading-[25.83px] md:text-2xl md:leading-[28.8px]">
              {heroTitle}
            </span>
            <br className="text-[26.8625px] box-border caret-transparent leading-[32.235px] md:text-[38px] md:leading-[45.6px]" />
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative box-border caret-transparent text-white bg-stone-950 pb-8 ${sectionClassName}`}
    >
      <div
        className={`relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter md:max-w-[1140px] before:text-white after:text-white ${innerDivClassName}`}
      >
        <p className="box-border caret-transparent mb-4">
          <br className="box-border caret-transparent" />
        </p>
        <p className="box-border caret-transparent text-left mb-4">
          <span className="text-[26.8625px] box-border caret-transparent leading-[40.2938px] md:text-[38px] md:leading-[57px]">
            <strong className="text-[26.8625px] font-bold box-border caret-transparent leading-[40.2938px] md:text-[38px] md:leading-[57px]">
              PRESENTATION
            </strong>
          </span>
        </p>
        {presentationParagraphs ? (
          presentationParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="box-border caret-transparent text-justify mb-4"
            >
              {paragraph}
            </p>
          ))
        ) : (
          <>
            <p className="box-border caret-transparent text-justify mb-4">
              BUSINESS CANADA AFRICA TECHNOLOGIES LIMITED, en abrégé BCA
              TECHNOLOGIES LIMITED, est une société basée à Abidjan, dans la
              commune de Cocody. Fondée en 2017 par Monsieur Gbran Georges
              Poiret ANGAHI, l'entreprise est née d'une vision ambitieuse :
              contribuer activement au développement technologique du continent
              africain à travers des solutions innovantes et adaptées aux
              réalités locales.
            </p>
            <p className="box-border caret-transparent text-justify mb-4">
              Spécialisée dans la fourniture de matériels télécoms,
              informatiques et électroniques, ainsi que de systèmes de sécurité
              et d'équipements divers, BCA TECHNOLOGIES LIMITED propose des
              solutions fiables et performantes destinées aux entreprises ,
              institutions et particuliers .
            </p>
            <p className="box-border caret-transparent text-justify mb-4">
              Acteur engagé dans le développement des technologies de
              l'information et de la communication en Afrique, l'entreprise
              accompagne ses partenaires dans leur transformation digitale en
              mettant l'accent sur la qualité, la rigueur et l'excellence
              opérationnelle.
            </p>
            <p className="box-border caret-transparent text-justify mb-4">
              Convaincue que la réussite repose sur la confiance, la proximité
              et l'exigence professionnelle, BCA TECHNOLOGIES LIMITED place
              l'écoute, la réactivité et la satisfaction client au cœur de sa
              démarche. Son ambition est de s'imposer comme un partenaire
              stratégique de référence en Afrique, en offrant un accompagnement
              de haut niveau et une valeur ajoutée durable à chaque projet
              réalisé.
            </p>
          </>
        )}
        <p className="box-border caret-transparent mb-4">
          <a
            href={readMoreHref}
            className="text-[19.2px] bg-fuchsia-800 box-border caret-transparent inline-block leading-[28.8px] text-center align-middle border-fuchsia-800 px-5 py-[7.584px] rounded-[1px] border-2 border-solid hover:bg-fuchsia-900 hover:border-fuchsia-900"
          >
            {readMoreText}
          </a>
        </p>
      </div>
    </section>
  );
};
