import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { MobileNav } from "@/sections/Navbar/components/MobileNav";

export const Navbar = () => {
  return (
    <header className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] z-[1030]">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};
