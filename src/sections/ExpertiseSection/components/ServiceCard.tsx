export type ServiceCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="box-border caret-transparent shrink-0 max-w-full min-h-6 min-w-[auto] w-full pt-[88px] pb-4 px-[15px] md:w-[33.3333%]">
      <div className="relative bg-white box-border caret-transparent flex flex-col h-full min-w-[min(288px,100%)] break-words border overflow-hidden rounded-[6.4px] border-solid border-[color(srgb_0.129412_0.145098_0.160784_/_0.15)]">
        <figure className="relative box-border caret-transparent min-h-[auto] min-w-[auto] break-words w-full before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:pt-[56.25%] before:border-separate before:font-inter">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="absolute box-border caret-transparent h-full max-w-full object-cover break-words w-full left-0 top-0"
          />
        </figure>
        <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] break-words p-4">
          <h2 className="text-lg font-semibold box-border caret-transparent leading-[21.6px] break-words mb-2 font-oswald">
            {props.title}
          </h2>
          <p className="box-border caret-transparent break-words">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
