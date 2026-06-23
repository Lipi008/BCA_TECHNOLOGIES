import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

export const DesktopNav = () => {
  return (
    <nav
      aria-label="Main"
      className="relative items-center bg-[linear-gradient(135deg,rgb(203,94,238)_0%,rgb(75,225,236)_100%)] shadow-[rgba(0,0,0,0.15)_0px_15px_16px_0px] box-border caret-transparent hidden flex-wrap justify-between py-2 md:block md:flex-nowrap md:justify-start md:py-0"
    >
      <div className="items-center box-border caret-transparent flex flex-wrap justify-between w-full mx-auto px-[15px] md:flex-nowrap">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarActions />
      </div>
    </nav>
  );
};
