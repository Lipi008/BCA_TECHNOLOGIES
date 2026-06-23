export const NavbarActions = () => {
  return (
    <ul className="items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-end list-none min-h-0 min-w-0 gap-y-2 pl-4 md:flex-row md:min-h-[auto] md:min-w-[auto]">
      <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          role="button"
          title="Rechercher"
          href="#"
          className="bg-black/10 box-border caret-transparent inline-block leading-4 text-center text-nowrap align-middle p-1 rounded-[100px] border-2 border-solid border-transparent hover:bg-black/10"
        >
          <i className="relative box-border caret-transparent inline-block h-8 leading-8 text-nowrap align-middle w-8 font-odoo_ui_icons before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-odoo_ui_icons"></i>
        </a>
      </li>
      <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <h5 className="text-lg font-semibold box-border caret-transparent hidden leading-[21.6px] align-middle mr-[6.4px] font-oswald">
              Suivez-nous
            </h5>
            <a
              href="/website/social/facebook"
              aria-label="Facebook"
              className="text-indigo-800 box-border caret-transparent inline-block text-nowrap align-middle hover:text-blue-950 hover:border-blue-950"
            >
              <i className="relative items-center box-border caret-transparent flex h-10 justify-center leading-8 text-nowrap align-middle w-10 p-1 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-indigo-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome before:md:min-h-[auto] before:md:min-w-[auto]"></i>
            </a>
            <a
              href="/website/social/twitter"
              aria-label="X"
              className="text-black box-border caret-transparent inline-block text-nowrap align-middle"
            >
              <i className="relative items-center box-border caret-transparent flex h-10 justify-center leading-8 text-nowrap align-middle w-10 p-1 font-odoo_ui_icons before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-odoo_ui_icons before:md:min-h-[auto] before:md:min-w-[auto]"></i>
            </a>
            <a
              href="/website/social/linkedin"
              aria-label="LinkedIn"
              className="text-sky-600 box-border caret-transparent inline-block text-nowrap align-middle hover:text-sky-950 hover:border-sky-950"
            >
              <i className="relative items-center box-border caret-transparent flex h-10 justify-center leading-8 text-nowrap align-middle w-10 p-1 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-sky-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome before:md:min-h-[auto] before:md:min-w-[auto]"></i>
            </a>
            <a
              href="/website/social/instagram"
              aria-label="Instagram"
              className="text-pink-600 box-border caret-transparent inline-block text-nowrap align-middle hover:text-pink-900 hover:border-pink-900"
            >
              <i className="relative items-center box-border caret-transparent flex h-10 justify-center leading-8 text-nowrap align-middle w-10 p-1 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-pink-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome before:md:min-h-[auto] before:md:min-w-[auto]"></i>
            </a>
          </div>
        </div>
      </li>
      <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent">
          <section className="relative box-border caret-transparent">
            <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
              <a
                href="/contactus"
                className="text-white text-[19.2px] bg-fuchsia-800 box-border caret-transparent inline-block leading-[28.8px] text-center text-nowrap align-middle border-fuchsia-800 px-5 py-[7.584px] rounded-[1px] border-2 border-solid hover:bg-fuchsia-900 hover:border-fuchsia-900"
              >
                Contactez-nous
              </a>
            </div>
          </section>
        </div>
      </li>
    </ul>
  );
};
