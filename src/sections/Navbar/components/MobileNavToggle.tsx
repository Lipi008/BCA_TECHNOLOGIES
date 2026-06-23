export const MobileNavToggle = () => {
  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center text-nowrap align-middle p-2 rounded-[1px] md:min-h-0 md:min-w-0 hover:border-transparent"
    >
      <span className="bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2030%2030%27%3e%3cpath%20stroke=%27rgba%2833,%2037,%2041,%200.75%29%27%20stroke-linecap=%27round%27%20stroke-miterlimit=%2710%27%20stroke-width=%272%27%20d=%27M4%207h22M4%2015h22M4%2023h22%27/%3e%3c/svg%3e)] bg-no-repeat bg-size-[100%] box-border caret-transparent inline-block h-6 text-nowrap align-middle w-6 bg-center"></span>
    </button>
  );
};
