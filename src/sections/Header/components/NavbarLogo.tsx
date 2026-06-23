export const NavbarLogo = () => {
  return (
    <div className="pointer-events-auto">
      <div className="flex py-4">
        <a
          href="#accueil"
          className="flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <img
            src="https://c.animaapp.com/mml5038cleLxaZ/assets/favicon2.png"
            alt="Côte d'Ivoire Câbles"
            className="w-[50px] h-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
};
