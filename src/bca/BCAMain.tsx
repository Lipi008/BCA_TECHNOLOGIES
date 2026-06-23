import { useEffect, useState } from "react";
import { BCAHeader } from "./BCAHeader";
import { BCAHero } from "./BCAHero";
import { BCAPresentation } from "./BCAPresentation";
import { BCASolutions } from "./BCASolutions";
import { BCAStats } from "./BCAStats";
import { BCARealisations } from "./BCARealisations";
import { BCAWhyUs } from "./BCAWhyUs";
import { BCAContact } from "./BCAContact";
import { BCAFooter } from "./BCAFooter";

export const BCAMain = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll-reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const targets = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale, .animate-on-scroll-up"
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white font-chivo">
      <BCAHeader />
      <main>
        <BCAHero />
        <BCAPresentation />
        <BCASolutions />
        <BCAStats />
        <BCARealisations />
        <BCAWhyUs />
        <BCAContact />
      </main>
      <BCAFooter />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 bottom-8 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-blue-700 to-purple-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </div>
  );
};
