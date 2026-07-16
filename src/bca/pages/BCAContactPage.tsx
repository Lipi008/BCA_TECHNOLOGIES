import { FiberBg } from "../FiberBg";
import { BCAContact } from "../BCAContact";
import { useTranslation } from "react-i18next";

const PageHero = ({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) => (
  <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #143278 0%, #0e2d6e 60%, #008CBE 100%)" }}>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-widest">{badge}</div>
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-blue-200 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export const BCAContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHero badge={t("contact.badge")} title={t("contact.title")} subtitle={t("contact.subtitle")} />
      <BCAContact />
    </>
  );
};
