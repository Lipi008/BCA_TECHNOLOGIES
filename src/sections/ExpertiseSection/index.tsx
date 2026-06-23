import { ServiceCard } from "@/sections/ExpertiseSection/components/ServiceCard";

export type ServiceCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export type ExpertiseSectionProps = {
  sectionClassName?: string;
  title?: string;
  showBackground?: boolean;
  showServiceCards?: boolean;
  serviceCards?: ServiceCardProps[];
};

export const ExpertiseSection = (props: ExpertiseSectionProps) => {
  const {
    sectionClassName = "relative box-border caret-transparent pt-10",
    title = "Domaines d'expertise",
    showBackground = false,
    showServiceCards = false,
    serviceCards = [],
  } = props;

  return (
    <section className={sectionClassName}>
      {showBackground && (
        <div className="absolute bg-[url('https://wwwbcatechltdcom.odoo.com/html_editor/shape/html_builder/Rainy/06.svg?c1=%23994277&c2=%23d7cdaa&c3=%23FBFAF7')] bg-no-repeat bg-size-[100%] box-border caret-transparent hidden pointer-events-none overflow-hidden bg-bottom inset-0 md:block"></div>
      )}
      <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-neutral-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
        <h2 className="text-[26.8625px] font-semibold box-border caret-transparent leading-[32.235px] text-left mb-2 font-oswald md:text-[38px] md:leading-[45.6px]">
          {title}
        </h2>
        {showServiceCards && serviceCards.length > 0 && (
          <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
