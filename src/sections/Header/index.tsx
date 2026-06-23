import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const NAV_LINKS = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.cic"), href: "/cic" },
    { label: t("nav.activities"), href: "/activites" },
    { label: t("nav.realizations"), href: "/realisations" },
    { label: t("nav.references"), href: "#references" },
    { label: t("nav.press"), href: "#presse" },
    { label: t("nav.partnership"), href: "#partenaires" },
    { label: t("nav.contact"), href: "#contact-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/") && !href.startsWith("/#")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Section not found on current page → go to homepage then scroll
        navigate("/" + href);
      }
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/97 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-9 py-2 max-w-[1280px] mx-auto">
          <div className="flex-shrink-0">
            <NavbarLogo />
          </div>
          <nav className="flex-1 flex justify-center">
            <DesktopMenu activeSection={activeSection} onNavClick={handleNavClick} />
          </nav>
          <div className="flex-shrink-0 w-[5%]" />
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-neutral-100"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={() => handleNavClick("#accueil")}
            className="flex items-center"
          >
            <img
              src="https://c.animaapp.com/mml5038cleLxaZ/assets/favicon2.png"
              alt="Côte d'Ivoire Câbles"
              className="w-10 h-10 object-contain"
            />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col justify-center items-end w-8 h-8 gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                isMenuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0 w-4" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                isMenuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
              }`}
            />
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white border-t border-gray-100 px-5 pt-3 pb-6 shadow-lg">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, idx) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block py-3 px-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-900 ${
                      activeSection === link.href.slice(1)
                        ? "text-blue-900 bg-blue-50"
                        : "text-slate-800"
                    }`}
                    style={{ transitionDelay: isMenuOpen ? `${idx * 40}ms` : "0ms" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:bg-blue-800 active:scale-95"
              >
                {t("nav.contactUs")}
              </a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px] md:h-[90px]" />
    </>
  );
};
