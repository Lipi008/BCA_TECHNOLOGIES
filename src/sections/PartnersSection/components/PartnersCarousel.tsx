const PARTNERS = [
  { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/itc2-300x300.jpg", alt: "ITC" },
  { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/kanvoo-300x300.jpg", alt: "Kanvoo" },
  { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/bca_technologie.jpg", alt: "BCA Technologie" },
  { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/sibelect.jpg", alt: "Sibelect" },
  { src: "https://c.animaapp.com/mml5038cleLxaZ/assets/spoc.jpg", alt: "SPOC" },
];

export const PartnersCarousel = () => {
  // Duplicate for seamless loop
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <div className="overflow-hidden pt-[50px] relative">
      {/* Fade edges */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="marquee-track">
          {doubled.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center w-[120px] md:w-[160px]"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain rounded-xl grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
