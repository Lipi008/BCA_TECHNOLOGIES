import { useState, useEffect } from "react";
import { BCAHeader } from "./BCAHeader";
import { BCAFooter } from "./BCAFooter";
import { BCAHomePage } from "./pages/BCAHomePage";
import { BCAAboutPage } from "./pages/BCAAboutPage";
import { BCAActivitiesPage } from "./pages/BCAActivitiesPage";
import { BCAOffresPage } from "./pages/BCAOffresPage";
import { BCARealisationsPage } from "./pages/BCARealisationsPage";
import { BCAReferencesPage } from "./pages/BCAReferencesPage";
import { BCAPartenairesPage } from "./pages/BCAPartenairesPage";
import { BCAActualitesPage } from "./pages/BCAActualitesPage";
import { BCAContactPage } from "./pages/BCAContactPage";

export type PageId =
  | "accueil"
  | "about"
  | "activites"
  | "offres"
  | "realisations"
  | "references"
  | "partenaires"
  | "actualites"
  | "contact";

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  const valid: PageId[] = ["accueil","about","activites","offres","realisations","references","partenaires","actualites","contact"];
  return valid.includes(hash as PageId) ? (hash as PageId) : "accueil";
}

export const BCARouter = () => {
  const [page, setPage] = useState<PageId>(getPageFromHash);
  const [scrollRevealReady, setScrollRevealReady] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0 });
      setScrollRevealReady(false);
      setTimeout(() => setScrollRevealReady(true), 50);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    setScrollRevealReady(true);
  }, []);

  useEffect(() => {
    if (!scrollRevealReady) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const targets = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale, .animate-on-scroll-up"
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page, scrollRevealReady]);

  const navigate = (p: PageId) => {
    window.location.hash = p;
  };

  const pages: Record<PageId, JSX.Element> = {
    accueil: <BCAHomePage navigate={navigate} />,
    about: <BCAAboutPage />,
    activites: <BCAActivitiesPage navigate={navigate} />,
    offres: <BCAOffresPage navigate={navigate} />,
    realisations: <BCARealisationsPage />,
    references: <BCAReferencesPage />,
    partenaires: <BCAPartenairesPage />,
    actualites: <BCAActualitesPage />,
    contact: <BCAContactPage />,
  };

  return (
    <div className="overflow-x-hidden bg-white font-chivo">
      <BCAHeader currentPage={page} navigate={navigate} />
      <main>{pages[page]}</main>
      <BCAFooter navigate={navigate} />
    </div>
  );
};
