import { FooterInfo } from "@/sections/Footer/components/FooterInfo";
import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <section className="relative box-border caret-transparent break-words text-left pt-8 pb-4">
      <div className="relative box-border caret-transparent break-words"></div>
      <div className="relative box-border caret-transparent break-words w-full mx-auto px-[15px]">
        <footer className="text-white bg-[linear-gradient(135deg,rgb(10,10,10),rgb(28,28,28))] box-border caret-transparent break-words px-5 py-[60px] font-segoe_ui">
          <div className="box-border caret-transparent gap-x-[50px] grid grid-cols-[1fr] max-w-[1200px] break-words gap-y-[50px] text-center m-auto md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:text-left">
            <FooterInfo />
            <FooterContact />
            <FooterLinks />
          </div>
          <div className="text-[13.6px] box-border caret-transparent leading-[20.4px] opacity-70 break-words text-center mt-[50px] pt-5 border-t-white/20 border-b-white border-x-white border-t">
            © 2026 BCA TECHNOLOGIES LIMITED. Tous droits réservés.
          </div>
        </footer>
      </div>
    </section>
  );
};
