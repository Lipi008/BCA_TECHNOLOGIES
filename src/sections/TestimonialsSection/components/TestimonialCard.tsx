export type TestimonialCardProps = {
  quote: React.ReactNode;
  authorName: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <blockquote className="relative bg-white box-border caret-transparent gap-x-6 flex flex-col h-full gap-y-6 w-full mb-4 mx-auto p-6 rounded-[6.4px]">
      <div className="absolute text-white bg-fuchsia-800 box-border caret-transparent hidden w-1 left-0 inset-y-0"></div>
      <div className="absolute box-border caret-transparent hidden w-full left-2/4 top-0">
        <i
          role="img"
          className="text-white bg-fuchsia-800 box-border caret-transparent block h-12 leading-[48px] text-center align-middle w-12 mx-auto rounded-[6.4px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[48px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"
        ></i>
      </div>
      <div
        aria-label="4 étoiles sur 5"
        className="box-border caret-transparent min-h-[auto] min-w-[auto]"
      >
        <strong className="font-bold box-border caret-transparent hidden">
          Évaluation
        </strong>
        <div className="box-border caret-transparent">
          <span className="text-yellow-400 box-border caret-transparent">
            <i
              role="presentation"
              className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"
            ></i>
            <i
              role="presentation"
              className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"
            ></i>
            <i
              role="presentation"
              className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"
            ></i>
            <i
              role="presentation"
              className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"
            ></i>
          </span>
          <span className="text-[color(srgb_0.129412_0.145098_0.160784_/_0.15)] box-border caret-transparent">
            <i
              role="presentation"
              className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-[color(srgb_0.129412_0.145098_0.160784_/_0.15)] before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"
            ></i>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent min-h-[auto] min-w-[auto] mb-auto">
        {props.quote}
      </p>
      <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2 text-left w-full">
        <span className="bg-gray-50 box-border caret-transparent block h-12 leading-[48px] min-h-[auto] min-w-[auto] text-center align-middle w-12 rounded-[50%] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[48px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></span>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <strong className="font-bold box-border caret-transparent">
            {props.authorName}
          </strong>
          <br className="box-border caret-transparent" />
        </div>
      </div>
    </blockquote>
  );
};
