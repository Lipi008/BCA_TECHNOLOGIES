export const MobileSearch = () => {
  return (
    <div className="fixed bg-white w-full p-2.5 left-0 bottom-0 md:hidden z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] transition-transform duration-300">
      <form role="search" className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          placeholder="Rechercher..."
          name="s"
          className="form-input-animated text-base h-10 tracking-[normal] w-full border border-zinc-100 pl-[42px] pr-[30px] rounded-lg border-solid"
        />
      </form>
    </div>
  );
};
