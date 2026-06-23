import { useTranslation } from "react-i18next";
import { PressGrid } from "@/sections/PressSection/components/PressGrid";

export const PressSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-slate-300/40 box-border caret-transparent pt-0 pb-5 px-2.5 md:pt-[70px] md:pb-[50px] md:px-0">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] w-full px-2.5 md:px-0">
            <section className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-[35px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] w-full">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] w-full p-0 md:px-[15%] md:py-[0%]">
                    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
                      <div className="box-border caret-transparent">
                        <div className="relative box-border caret-transparent text-center">
                          <h1 className="relative text-slate-900 text-[73px] font-bold box-border caret-transparent inline-block leading-[83.95px] align-middle mb-[36.5px]">
                            {" "}
                            {t("press.title")}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
                      <div className="box-border caret-transparent p-0 md:px-[22%] md:py-[0%]">
                        <div className="relative box-border caret-transparent text-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
              <div className="box-border caret-transparent overflow-hidden md:overflow-visible">
                <div className="box-border caret-transparent">
                  <PressGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
