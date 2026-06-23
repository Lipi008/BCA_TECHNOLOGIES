import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";

export const DesktopNavbar = () => {
  return (
    <section className="relative box-border caret-transparent hidden pt-[7.2px] px-9 md:block">
      <div className="box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <div className="box-border caret-transparent flex min-h-px min-w-0 w-full md:min-w-[auto] md:w-[15%]">
          <div className="content-center items-center box-border caret-transparent flex grow flex-wrap min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <NavbarLogo />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex min-h-px min-w-0 w-full md:min-w-[auto] md:w-[79.332%]">
          <div className="content-center items-center box-border caret-transparent flex grow flex-wrap justify-center min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
            <div className="items-stretch box-border caret-transparent h-full max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <div className="items-stretch box-border caret-transparent flex h-full pointer-events-auto">
                <DesktopMenu />
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex min-h-px min-w-0 w-full md:min-w-[auto] md:w-[5%]">
          <div className="content-center items-center box-border caret-transparent flex grow flex-wrap justify-end min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]"></div>
        </div>
      </div>
    </section>
  );
};
