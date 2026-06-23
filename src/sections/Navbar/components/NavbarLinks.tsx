export const NavbarLinks = () => {
  return (
    <ul
      role="menu"
      className="box-border caret-transparent flex flex-col list-none min-h-0 min-w-0 mr-auto pl-0 md:flex-row md:min-h-[auto] md:min-w-[auto]"
    >
      <li
        role="presentation"
        className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
      >
        <a
          role="menuitem"
          href="/"
          className="text-black box-border caret-transparent block text-nowrap px-0 py-2 border-b-0 md:p-4 md:border-b-8 hover:text-black/80 hover:border-black/70"
        >
          <span className="box-border caret-transparent text-nowrap">
            ACCUEIL
          </span>
        </a>
      </li>
      <li
        role="presentation"
        className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
      >
        <a
          role="menuitem"
          href="/a-propos-de"
          className="text-black/70 box-border caret-transparent block text-nowrap px-0 py-2 border-b-0 border-black/70 md:p-4 md:border-b-transparent md:border-b-8 hover:text-black/80 hover:border-t-black/80 hover:border-b-transparent hover:border-x-black/80"
        >
          <span className="box-border caret-transparent text-nowrap">
            BCA TECHNOLOGIES LIMITED
          </span>
        </a>
      </li>
      <li
        role="presentation"
        className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
      >
        <a
          role="menuitem"
          href="/services"
          className="text-black/70 box-border caret-transparent block text-nowrap px-0 py-2 border-b-0 border-black/70 md:p-4 md:border-b-transparent md:border-b-8 hover:text-black/80 hover:border-t-black/80 hover:border-b-transparent hover:border-x-black/80"
        >
          <span className="box-border caret-transparent text-nowrap">
            SOLUTIONS
          </span>
        </a>
      </li>
      <li
        role="presentation"
        className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
      >
        <a
          role="menuitem"
          href="/realisation"
          className="text-black/70 box-border caret-transparent block text-nowrap px-0 py-2 border-b-0 border-black/70 md:p-4 md:border-b-transparent md:border-b-8 hover:text-black/80 hover:border-t-black/80 hover:border-b-transparent hover:border-x-black/80"
        >
          <span className="box-border caret-transparent text-nowrap">
            REALISATIONS
          </span>
        </a>
      </li>
    </ul>
  );
};
