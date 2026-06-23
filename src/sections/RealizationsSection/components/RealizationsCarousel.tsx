import { useState, useEffect } from "react";

const CARDS = [
  { title: "Déploiement WiFi", category: "Travaux", href: "#realisations" },
  { title: "Maintenance curative", category: "Travaux", href: "#realisations" },
  { title: "Déploiement FTTH", category: "Travaux", href: "#realisations" },
];

export const RealizationsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = CARDS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  return (
    <div className="relative">
      {/* Cards grid - 3 visible on desktop, 1 on mobile */}
      <div className="hidden md:flex gap-6">
        {CARDS.map((card, idx) => (
          <div key={idx} className="flex-1 card-hover">
            <article className="bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_50px_0px] mb-6 pt-6 pb-4 px-4 rounded-xl overflow-hidden">
              <div className="relative overflow-hidden mb-4 rounded-[10px] bg-gradient-to-br from-blue-100 to-blue-200 h-[200px] flex items-center justify-center">
                <img
                  alt={card.title}
                  src="https://c.animaapp.com/mml5038cleLxaZ/assets/image-5.svg"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                />
              </div>
              <div>
                <h2 className="text-black text-base font-bold tracking-[-0.2px] leading-[19.2px] mb-1">
                  {card.title}
                </h2>
                <ul className="inline-flex list-none pl-0">
                  <li>
                    <span className="text-black/50 text-[13px]">{card.category}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {CARDS.map((card, idx) => (
            <div key={idx} className="flex-shrink-0 w-full px-1">
              <article className="bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_50px_0px] mb-6 pt-5 pb-4 px-4 rounded-xl">
                <div className="relative overflow-hidden mb-4 rounded-[10px] bg-gradient-to-br from-blue-100 to-blue-200 h-[180px] flex items-center justify-center">
                  <img
                    alt={card.title}
                    src="https://c.animaapp.com/mml5038cleLxaZ/assets/image-5.svg"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <h2 className="text-black text-base font-bold tracking-[-0.2px] mb-1">{card.title}</h2>
                <span className="text-black/50 text-[13px]">{card.category}</span>
              </article>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="#1a32c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#1a32c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-blue-900" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
