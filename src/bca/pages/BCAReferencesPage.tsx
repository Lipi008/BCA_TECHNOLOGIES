import { useTranslation } from "react-i18next";
import { FiberBg } from "../FiberBg";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

/* -----------------------------------------------
   Références = logos des entreprises clientes
   Remplacez les `logo` URLs par vos vrais logos
----------------------------------------------- */
const REFERENCES = [
  {
    name: "Orange CI",
    logo: "https://logo.clearbit.com/orange.com",
  },
  {
    name: "MTN Côte d'Ivoire",
    logo: "https://logo.clearbit.com/mtn.com",
  },
  {
    name: "Moov Africa",
    logo: "https://logo.clearbit.com/moov-africa.com",
  },
  {
    name: "SFR",
    logo: "https://logo.clearbit.com/sfr.fr",
  },
  {
    name: "Ministère des TIC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Coat_of_arms_of_Ivory_Coast.svg/120px-Coat_of_arms_of_Ivory_Coast.svg.png",
  },
  {
    name: "Côte d'Ivoire Télécom",
    logo: "https://logo.clearbit.com/telecom.ci",
  },
  {
    name: "Canal+ Afrique",
    logo: "https://logo.clearbit.com/canalplus.com",
  },
  {
    name: "Société Générale CI",
    logo: "https://logo.clearbit.com/societegenerale.com",
  },
  {
    name: "BICICI",
    logo: "https://logo.clearbit.com/bicici.com",
  },
  {
    name: "Université FHB",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Universit%C3%A9_F%C3%A9lix-Houphou%C3%ABt-Boigny_logo.png/120px-Universit%C3%A9_F%C3%A9lix-Houphou%C3%ABt-Boigny_logo.png",
  },
  {
    name: "TOTAL Énergies CI",
    logo: "https://logo.clearbit.com/totalenergies.com",
  },
  {
    name: "Bolloré Africa Logistics",
    logo: "https://logo.clearbit.com/bollore.com",
  },
];

export const BCAReferencesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero badge={t("nav.references")} title={t("references.title")} subtitle={t("references.subtitle")} />

      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {REFERENCES.map((ref, i) => (
              <div
                key={i}
                className={`animate-on-scroll stagger-${(i % 3) + 1} group flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all p-5`}
              >
                <div className="w-24 h-16 flex items-center justify-center">
                  <img
                    src={ref.logo}
                    alt={ref.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-gray-400 text-sm">
            Et bien d&#39;autres entreprises en Côte d&#39;Ivoire et en Afrique de l&#39;Ouest…
          </p>
        </div>
      </section>
    </>
  );
};
