import { MobileNavbarLogo } from "@/sections/Header/components/MobileNavbarLogo";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const MobileNavbar = () => {
  return (
    <section className="relative box-border caret-transparent hidden pt-[7.2px] px-9">
      <div className="box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <div className="box-border caret-transparent flex min-h-px w-full md:w-[15%]">
          <div className="content-center items-center box-border caret-transparent flex grow flex-wrap w-full">
            <div className="box-border caret-transparent max-w-full">
              <MobileNavbarLogo />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex min-h-px w-full md:w-[69.332%]">
          <div className="content-center items-center box-border caret-transparent flex grow flex-wrap justify-center w-full">
            <div className="items-stretch box-border caret-transparent h-full max-w-full">
              <div className="items-stretch box-border caret-transparent flex h-full pointer-events-auto">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex min-h-px w-full md:w-[15%]">
          <div className="content-center items-center box-border caret-transparent flex grow flex-wrap justify-end w-full">
            <div className="box-border caret-transparent max-w-full">
              <div className="box-border caret-transparent pointer-events-auto">
                <a
                  href="en/index.html%3Felementor_library=liquid-kit-2%252F.html#modal-5299"
                  className="relative text-black font-medium items-center box-border caret-transparent inline-flex justify-center leading-[18px] text-nowrap align-middle bg-[position:0px_0px]"
                >
                  <span className="relative box-border caret-transparent block text-nowrap z-[3]">
                    Ecrivez-nous{" "}
                  </span>
                  <span className="relative text-white items-center bg-slate-700 box-border caret-transparent flex fill-white h-[46px] justify-center mb-[-5%] mt-[-5%] text-nowrap w-[46px] z-[3] ml-2 rounded-[180px]">
                    <i className="relative text-base font-normal box-border caret-transparent block fill-white tracking-[normal] leading-4 text-nowrap z-[3] font-lqd_essentials before:accent-auto before:box-border before:caret-transparent before:text-white before:fill-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-lqd_essentials"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
