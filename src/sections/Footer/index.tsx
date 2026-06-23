import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCredits } from "@/sections/Footer/components/FooterCredits";

export const Footer = () => {
  return (
    <footer className="bg-stone-50 box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto]">
      <div className="box-border caret-transparent break-words">
        <FooterContent />
      </div>
      <FooterCredits />
    </footer>
  );
};
