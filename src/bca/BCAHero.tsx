import { useTranslation } from "react-i18next";
import { FiberBg } from "./FiberBg";

export const BCAHero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="accueil"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Fond dégradé très doux ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* ── Fibres optiques animées ── */}
      <FiberBg variant="light" className="opacity-80" />

      {/* ── Halo derrière le logo ── */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: "min(90vw, 900px)",
          height: "min(90vw, 900px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* ── Logo principal ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <img
          src="https://c.animaapp.com/mn4bql9mR7qaS3/img/uploaded-asset-1774343028758-0.png"
          alt="BCA Technologies Limited"
          className="w-full object-contain select-none drop-shadow-xl"
          style={{ maxWidth: "min(95vw, 1100px)", maxHeight: "65vh" }}
        />

        {/* Tagline */}
        <p
          className="mt-6 text-base sm:text-xl font-bold text-gray-800 text-center tracking-widest uppercase"
          style={{ letterSpacing: "0.18em" }}
        >
          {t("hero.tagline")}
        </p>

        {/* Scroll hint */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-40">
          <svg
            className="animate-bounce"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* ── Lignes de fibre côté gauche (accent vertical) ── */}
      <svg
        className="absolute left-0 top-0 h-full pointer-events-none select-none"
        width="220"
        viewBox="0 0 220 800"
        preserveAspectRatio="xMinYMid meet"
        aria-hidden="true"
      >
        <defs>
          <style>{`
            @keyframes fiberSlideLeft {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -120; }
            }
          `}</style>
        </defs>
        {[
          { x1: 20, y1: 0, x2: 80, y2: 800, c: "#2563EB", w: 2.5, dash: "16 8", delay: "0s" },
          { x1: 55, y1: 0, x2: 20, y2: 800, c: "#8B5CF6", w: 1.8, dash: "10 12", delay: "0.5s" },
          { x1: 100, y1: 0, x2: 150, y2: 800, c: "#06B6D4", w: 2.0, dash: "20 6", delay: "1.0s" },
          { x1: 145, y1: 0, x2: 60, y2: 800, c: "#3B82F6", w: 1.5, dash: "8 14", delay: "1.5s" },
          { x1: 190, y1: 0, x2: 200, y2: 800, c: "#7C3AED", w: 2.2, dash: "14 10", delay: "2.0s" },
        ].map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={l.c}
            strokeWidth={l.w}
            strokeDasharray={l.dash}
            opacity="0.25"
            style={{
              animation: `fiberSlideLeft ${4 + i * 0.7}s linear infinite`,
              animationDelay: l.delay,
            }}
          />
        ))}
      </svg>

      {/* ── Lignes de fibre côté droit (accent vertical) ── */}
      <svg
        className="absolute right-0 top-0 h-full pointer-events-none select-none"
        width="220"
        viewBox="0 0 220 800"
        preserveAspectRatio="xMaxYMid meet"
        aria-hidden="true"
      >
        <defs>
          <style>{`
            @keyframes fiberSlideRight {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -120; }
            }
          `}</style>
        </defs>
        {[
          { x1: 200, y1: 0, x2: 140, y2: 800, c: "#06B6D4", w: 2.5, dash: "16 8", delay: "0.3s" },
          { x1: 165, y1: 0, x2: 200, y2: 800, c: "#2563EB", w: 1.8, dash: "10 12", delay: "0.8s" },
          { x1: 120, y1: 0, x2: 70, y2: 800, c: "#8B5CF6", w: 2.0, dash: "20 6", delay: "1.3s" },
          { x1: 75, y1: 0, x2: 160, y2: 800, c: "#7C3AED", w: 1.5, dash: "8 14", delay: "1.8s" },
          { x1: 30, y1: 0, x2: 20, y2: 800, c: "#3B82F6", w: 2.2, dash: "14 10", delay: "2.3s" },
        ].map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={l.c}
            strokeWidth={l.w}
            strokeDasharray={l.dash}
            opacity="0.25"
            style={{
              animation: `fiberSlideRight ${4 + i * 0.7}s linear infinite`,
              animationDelay: l.delay,
            }}
          />
        ))}
      </svg>
    </section>
  );
};
