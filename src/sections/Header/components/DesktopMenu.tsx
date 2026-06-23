import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type DesktopMenuProps = {
  activeSection?: string;
  onNavClick?: (href: string) => void;
};

export const DesktopMenu = ({ activeSection, onNavClick }: DesktopMenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t("nav.home"), href: "#accueil", page: "/" },
    { label: t("nav.cic"), href: "/cic", page: "/cic" },
    { label: t("nav.activities"), href: "/activites", page: "/activites" },
    { label: t("nav.realizations"), href: "/realisations", page: "/realisations" },
    { label: t("nav.references"), href: "#references", page: "/" },
    { label: t("nav.press"), href: "#presse", page: "/" },
    { label: t("nav.partnership"), href: "#partenaires", page: "/" },
    { label: t("nav.contact"), href: "#contact-section", page: "/" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[0]) => {
    e.preventDefault();
    if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
      navigate(link.href);
    } else {
      onNavClick?.(link.href);
    }
  };

  return (
    <nav className="flex items-center h-full">
      <ul className="flex items-center list-none pl-0 m-0">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href.startsWith("/") && !link.href.startsWith("/#")
              ? location.pathname === link.href
              : activeSection === link.href.slice(1);
          return (
            <li key={link.label} className="relative">
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link)}
                className={`nav-link-hover relative text-base font-medium flex items-center tracking-[0.01px] px-4 py-5 text-nowrap transition-colors duration-200 ${
                  isActive
                    ? "text-blue-900"
                    : "text-zinc-800 hover:text-blue-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-3 left-4 right-4 h-0.5 bg-blue-900 transition-transform duration-250 origin-center ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transform: isActive ? "scaleX(1)" : undefined }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
