export const FooterCredits = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent w-full mx-auto px-[15px] py-4">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] gap-y-2">
          <div className="text-neutral-800/70 box-border caret-transparent gap-x-2 flex basis-auto flex-col-reverse grow-0 shrink-0 max-w-full min-h-[auto] min-w-[auto] gap-y-2 text-center w-full my-0 px-[15px] md:basis-[0%] md:grow md:text-left md:my-auto">
            <span className="text-sm box-border caret-transparent block leading-[21px] min-h-[auto] min-w-[auto] text-center align-middle mr-2 md:text-left">
              <br className="box-border caret-transparent text-center md:text-left" />
            </span>
          </div>
          <div className="text-sm box-border caret-transparent basis-auto grow-0 shrink-0 leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-center w-full mt-auto px-[15px] md:basis-[0%] md:grow md:text-right">
            <div className="box-border caret-transparent text-center md:text-right">
              Généré par
              <strong className="font-bold box-border caret-transparent text-center md:text-right">
                <a
                  href="http://www.odoo.com/?utm_source=db&utm_medium=website"
                  className="text-pink-900 box-border caret-transparent text-center md:text-right hover:text-pink-900 hover:underline hover:border-pink-900"
                >
                  Odoo
                </a>
              </strong>
              - Créer un{" "}
              <a
                href="http://www.odoo.com/app/website?utm_source=db&utm_medium=website"
                className="text-pink-900 box-border caret-transparent text-center md:text-right hover:text-pink-900 hover:underline hover:border-pink-900"
              >
                site web gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
