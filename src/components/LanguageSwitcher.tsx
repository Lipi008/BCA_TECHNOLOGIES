import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = i18n.language === "en" ? "en" : "fr";

  const switchTo = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("cic-lang", lang);
    setOpen(false);
  };

  return (
    <div className="fixed bg-stone-900 shadow-[rgba(0,0,0,0.25)_0px_0px_8px_0px] h-auto text-center w-[66px] z-[9999999] overflow-hidden rounded-b-[5px] right-[10%] top-0 transition-all duration-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full pt-3 pb-2.5 px-6 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Language switcher"
      >
        <img
          src={currentLang === "fr"
            ? "https://c.animaapp.com/mml5038cleLxaZ/assets/fr_FR.png"
            : "https://c.animaapp.com/mml5038cleLxaZ/assets/en_US.png"
          }
          alt={currentLang === "fr" ? "Français" : "English"}
          className="w-[18px] h-auto mx-auto"
        />
      </button>
      {open && (
        <div className="flex flex-col p-2 bg-stone-900 border-t border-stone-700">
          <button
            onClick={() => switchTo("fr")}
            className={`flex items-center justify-center py-2 px-2 hover:bg-stone-700 rounded transition-colors ${currentLang === "fr" ? "bg-stone-700" : ""}`}
            title="Français"
          >
            <img src="https://c.animaapp.com/mml5038cleLxaZ/assets/fr_FR.png" alt="Français" className="w-[18px] h-auto mx-auto" />
          </button>
          <button
            onClick={() => switchTo("en")}
            className={`flex items-center justify-center py-2 px-2 hover:bg-stone-700 rounded transition-colors ${currentLang === "en" ? "bg-stone-700" : ""}`}
            title="English"
          >
            <img src="https://c.animaapp.com/mml5038cleLxaZ/assets/en_US.png" alt="English" className="w-[18px] h-auto mx-auto" />
          </button>
        </div>
      )}
    </div>
  );
};
