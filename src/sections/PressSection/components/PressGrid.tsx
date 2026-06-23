const PRESS_ITEMS = [
  {
    href: "#presse",
    category: "Blog",
    date: "3 ans ago",
    title: "LA FIBRE JUSQU'À JACQUEVILLE",
  },
  {
    href: "#presse",
    category: "Blog Single",
    date: "3 ans ago",
    title: "RÉUNION BILAN SEMESTRE 1_2023",
  },
  {
    href: "#presse",
    category: "Blog Single",
    date: "4 ans ago",
    title: "NOUS DÉMOCRATISONS L'INTERNET TRÈS HAUT DÉBIT",
  },
];

export const PressGrid = () => {
  return (
    <div className="relative flex flex-wrap -mx-2.5 gap-y-4">
      {PRESS_ITEMS.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col shrink-0 float-none min-h-px w-full mb-[30px] px-2.5 md:w-[33.3333%] animate-on-scroll stagger-${idx + 1}`}
        >
          <article className="press-card relative flex grow flex-wrap overflow-hidden pt-[80%] rounded-xl cursor-pointer">
            {/* Background image */}
            <div className="absolute h-full w-full left-0 top-0 overflow-hidden rounded-xl">
              <figure className="relative h-full w-full overflow-hidden">
                <img
                  alt=""
                  src="https://c.animaapp.com/mml5038cleLxaZ/assets/image-14.svg"
                  className="press-card-img h-full max-w-full object-cover w-full"
                />
              </figure>
            </div>

            {/* Gradient overlay */}
            <header className="absolute flex flex-col h-full justify-between w-full p-6 left-0 top-0">
              <div className="absolute bg-[linear-gradient(rgba(0,0,0,0)_0px,rgb(0,0,0)_100%)] h-full w-full left-0 top-0" />

              {/* Tag */}
              <div className="relative text-[11px] font-bold tracking-[1.1px] uppercase z-[3]">
                <span className="relative text-black bg-white px-2.5 py-2 rounded inline-block hover:bg-gray-100 transition-colors">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <div className="relative z-[3]">
                <time className="text-white/70 text-[11px] font-bold tracking-[1.1px] uppercase">
                  {item.date}
                </time>
                <h2 className="text-white text-xl md:text-2xl font-bold tracking-[-0.2px] leading-[1.2] break-words mt-2 hover:text-blue-200 transition-colors">
                  {item.title}
                </h2>
              </div>
            </header>

            <a
              href={item.href}
              className="absolute block h-full w-full z-[2] left-0 top-0"
              aria-label={item.title}
            />
          </article>
        </div>
      ))}
    </div>
  );
};
