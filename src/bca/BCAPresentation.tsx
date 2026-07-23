import React from "react";
import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCAPresentation = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section id="presentation" className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-blue-900/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-blue-800/40">
              {t("presentation.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              {t("presentation.title")}
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-300 leading-relaxed text-base">
              <p className="animate-on-scroll stagger-1">{t("presentation.text1")}</p>
              <p className="animate-on-scroll stagger-2">{t("presentation.text2")}</p>
              <p className="animate-on-scroll stagger-3">{t("presentation.text3")}</p>
              <p className="animate-on-scroll stagger-4">{t("presentation.text4")}</p>
              <p className="animate-on-scroll stagger-4">{t("presentation.text5")}</p>
              <p className="animate-on-scroll stagger-4">{t("presentation.text6")}</p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-on-scroll stagger-4">
                {[
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-blue-400"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label: t("presentation.founded_label"), value: "1er juill. 2026" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-blue-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: t("presentation.hq_label"), value: "Cocody Angré 9ème tranche, Abidjan, Côte d'Ivoire" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-blue-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, label: t("presentation.founder_label"), value: "G. P. ANGAHI" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-1 hover:border-blue-700/50 transition-colors duration-300">
                    <div className="w-5 h-5 text-blue-400">{item.icon}</div>
                    <span className="text-gray-500 text-[10px] uppercase tracking-widest">{item.label}</span>
                    <span className="text-white font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 animate-on-scroll-right">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
                  title: t("presentation.mission_title"),
                  text: t("presentation.mission_text"),
                  gradient: "from-blue-600/20 to-blue-800/20",
                  border: "border-blue-700/30",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
                  title: t("presentation.vision_title"),
                  text: t("presentation.vision_text"),
                  gradient: "from-purple-600/20 to-purple-800/20",
                  border: "border-purple-700/30",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 2 7 12 22 22 7 12 2"/><polyline points="2 7 12 12 22 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>,
                  title: t("presentation.values_title"),
                  text: t("presentation.values_text"),
                  gradient: "from-cyan-600/20 to-teal-800/20",
                  border: "border-cyan-700/30",
                },
              ].map((card, i) => (
                <div key={i} className={`bg-gradient-to-br ${card.gradient} border ${card.border} rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 text-white/90">{card.icon}</div>
                    <h3 className="font-bold text-white text-lg">{card.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section id="equipe" className="bg-white py-20 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              {t("team.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              {t("team.title")}
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base">{t("team.subtitle")}</p>
            <div className="mt-5 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t("team.members", { returnObjects: true }) as Array<{ name: string; role: string; bio: string; initials: string; color: string }>).map((member, i) => (
              <div key={i} className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300`}>
                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-xl mb-4 shadow-md`}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-blue-700 transition-colors">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mt-1 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section id="partenaires" className="bg-gray-50 py-16 px-6 relative overflow-hidden">
        <FiberBg variant="subtle" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              {t("partners.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
              {t("partners.title")}
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">{t("partners.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {(t("partners.list", { returnObjects: true }) as Array<{ name: string; icon: string }>).map((p, i) => (
              <div key={i} className={`animate-on-scroll stagger-${(i % 3) + 1} group bg-white rounded-xl border border-gray-100 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300`}>
                <span className="text-3xl">{p.icon}</span>
                <span className="text-xs font-semibold text-gray-500 text-center leading-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
