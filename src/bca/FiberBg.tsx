import React from "react";

type Variant = "dark" | "light" | "blue" | "subtle";

interface FiberBgProps {
  variant?: Variant;
  className?: string;
}

/**
 * Decorative animated fiber optic SVG lines background.
 * Drop it as the first child of any relative/overflow-hidden section.
 */
export const FiberBg: React.FC<FiberBgProps> = ({ variant = "dark", className = "" }) => {
  const configs: Record<Variant, { colors: string[]; opacity: number }> = {
    dark: {
      colors: ["#FFD700", "#FF6B9D", "#4ECDC4", "#A78BFA", "#6EE7B7", "#FCA5A5", "#60A5FA", "#F9A8D4"],
      opacity: 0.18,
    },
    light: {
      colors: ["#2563EB", "#7C3AED", "#0EA5E9", "#8B5CF6", "#06B6D4", "#3B82F6", "#6D28D9", "#0369A1"],
      opacity: 0.12,
    },
    blue: {
      colors: ["#FFD700", "#FFFFFF", "#4ECDC4", "#A78BFA", "#60A5FA", "#F9A8D4", "#6EE7B7", "#FCA5A5"],
      opacity: 0.22,
    },
    subtle: {
      colors: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#6D28D9", "#2563EB", "#0EA5E9", "#7C3AED"],
      opacity: 0.06,
    },
  };

  const { colors, opacity } = configs[variant];

  // Pre-computed fiber path data (static so no re-render flicker)
  const fibers = [
    { d: "M-50,120 Q150,60 350,100 T750,80 T1050,110 T1300,90", w: 2.2, c: colors[0], dash: "", delay: "0s" },
    { d: "M-50,160 Q200,90 400,130 T800,105 T1100,140 T1300,115", w: 1.6, c: colors[1], dash: "8 4", delay: "0.4s" },
    { d: "M-50,200 Q250,130 450,165 T850,140 T1150,170 T1300,145", w: 2.5, c: colors[2], dash: "", delay: "0.8s" },
    { d: "M-50,240 Q300,165 510,198 T910,172 T1200,200 T1300,175", w: 1.8, c: colors[3], dash: "12 5", delay: "1.2s" },
    { d: "M-50,280 Q350,200 560,230 T960,204 T1250,230 T1300,205", w: 2.0, c: colors[4], dash: "", delay: "1.6s" },
    { d: "M-50,320 Q400,240 610,260 T1010,238 T1300,260", w: 1.5, c: colors[5], dash: "6 6", delay: "2.0s" },
    { d: "M-50,360 Q450,280 660,292 T1060,272 T1300,290", w: 2.2, c: colors[6], dash: "", delay: "0.6s" },
    { d: "M-50,400 Q500,322 710,324 T1100,308 T1300,324", w: 1.7, c: colors[7], dash: "10 4", delay: "1.0s" },
    { d: "M-50,440 Q550,364 760,356 T1150,342 T1300,358", w: 2.0, c: colors[0], dash: "", delay: "1.4s" },
    { d: "M-50,480 Q600,400 810,390 T1200,376 T1300,390", w: 1.5, c: colors[1], dash: "8 6", delay: "1.8s" },
    // Diagonal crossing fibers
    { d: "M1300,60 Q1100,180 900,220 T500,260 T100,300 T-50,340", w: 1.8, c: colors[2], dash: "", delay: "2.4s" },
    { d: "M1300,100 Q1050,230 850,260 T450,290 T50,320 T-50,370", w: 1.4, c: colors[3], dash: "12 4", delay: "2.8s" },
    // Short accent fiber bursts
    { d: "M200,40 Q280,100 320,160 T380,280", w: 1.2, c: colors[4], dash: "6 8", delay: "3.2s" },
    { d: "M800,20 Q850,100 870,180 T890,300", w: 1.2, c: colors[5], dash: "6 8", delay: "3.6s" },
    { d: "M1100,40 Q1120,120 1140,200 T1160,320", w: 1.2, c: colors[6], dash: "4 10", delay: "4.0s" },
  ];

  // Glowing dots at fiber intersections
  const dots = [
    { cx: 350, cy: 100, r: 3, c: colors[0] },
    { cx: 750, cy: 80, r: 2.5, c: colors[1] },
    { cx: 1050, cy: 110, r: 3, c: colors[2] },
    { cx: 200, cy: 200, r: 2, c: colors[3] },
    { cx: 560, cy: 230, r: 3, c: colors[4] },
    { cx: 960, cy: 204, r: 2.5, c: colors[5] },
    { cx: 660, cy: 292, r: 2, c: colors[6] },
    { cx: 1060, cy: 272, r: 3, c: colors[7] },
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      viewBox="0 0 1300 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {fibers.map((f, i) => (
          <linearGradient key={`fg${i}`} id={`fgr${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={f.c} stopOpacity="0" />
            <stop offset="30%" stopColor={f.c} stopOpacity={opacity * 1.5} />
            <stop offset="70%" stopColor={f.c} stopOpacity={opacity * 1.5} />
            <stop offset="100%" stopColor={f.c} stopOpacity="0" />
          </linearGradient>
        ))}
        {/* Pulse animation for dots */}
        <style>{`
          @keyframes fiberPulse {
            0%, 100% { opacity: 0.3; r: 2; }
            50% { opacity: 1; r: 5; }
          }
          @keyframes fiberDash {
            to { stroke-dashoffset: -40; }
          }
          .fiber-line { animation: fiberDash 4s linear infinite; }
          .fiber-dot { animation: fiberPulse 3s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Fiber lines */}
      {fibers.map((f, i) => (
        <path
          key={i}
          d={f.d}
          stroke={`url(#fgr${i})`}
          strokeWidth={f.w}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={f.dash || undefined}
          className={f.dash ? "fiber-line" : ""}
          style={{ animationDelay: f.delay, animationDuration: f.dash ? `${3 + i * 0.3}s` : undefined }}
        />
      ))}

      {/* Glowing intersection dots */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill={d.c}
          opacity={opacity * 4}
          className="fiber-dot"
          style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${2.5 + (i % 3) * 0.5}s` }}
        />
      ))}
    </svg>
  );
};
