import { useTranslation } from "react-i18next";

type ExpertiseTabsProps = {
  activeTab: number;
  onTabChange: (index: number) => void;
};

export const ExpertiseTabs = ({ activeTab, onTabChange }: ExpertiseTabsProps) => {
  const { t } = useTranslation();
  const TABS = t("expertise.tabs", { returnObjects: true }) as string[];
  return (
    <nav className="flex items-start mt-6 pt-2">
      <ul
        role="tablist"
        className="relative flex flex-col md:flex-row flex-wrap list-none pl-0 w-full bg-gray-100 rounded-[36px] p-1 gap-1"
      >
        {TABS.map((tab, idx) => (
          <li
            key={tab}
            role="presentation"
            className="flex-1 min-w-0"
          >
            <button
              role="tab"
              onClick={() => onTabChange(idx)}
              className={`expertise-tab-btn w-full text-center px-3 py-2.5 rounded-[30px] text-sm font-medium transition-all duration-250 ${
                activeTab === idx
                  ? "bg-blue-900 text-white shadow-md"
                  : "text-slate-700 hover:bg-white/60 hover:text-blue-900"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
