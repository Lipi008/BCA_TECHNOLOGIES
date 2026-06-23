import { MobileNavLogo } from "@/sections/Navbar/components/MobileNavLogo";
import { MobileNavToggle } from "@/sections/Navbar/components/MobileNavToggle";

export const MobileNav = () => {
  return (
    <nav
      aria-label="Mobile"
      className="relative items-center bg-[linear-gradient(135deg,rgb(203,94,238)_0%,rgb(75,225,236)_100%)] shadow-[rgba(0,0,0,0.15)_0px_15px_16px_0px] box-border caret-transparent block flex-wrap justify-between py-2 md:hidden md:py-0"
    >
      <div className="items-center box-border caret-transparent flex flex-wrap justify-between max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
        <div className="box-border caret-transparent flex grow min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <MobileNavLogo />
          <ul className="items-center box-border caret-transparent gap-x-2 flex list-none min-h-[auto] min-w-[auto] gap-y-2 ml-auto pl-0 md:min-h-0 md:min-w-0"></ul>
        </div>
        <MobileNavToggle />
      </div>
    </nav>
  );
};
