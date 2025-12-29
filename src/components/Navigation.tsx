import wisdomLogoFull from '../assets/wisdom_logo_with_copy_horizontal.png';
import wisdomLogoCompact from '../assets/wisdom_logo.png';

type Tab = 'home' | 'universities' | 'professors';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  isTransparent?: boolean;
}

export default function Navigation({ activeTab, onTabChange, isTransparent = false }: NavigationProps) {
  const tabs = [
    { id: 'universities' as Tab, label: 'Universities' },
    { id: 'professors' as Tab, label: 'Professors' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-colors ${
      isTransparent
        ? 'bg-transparent'
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => onTabChange('home')}
            className="group"
          >
            <img
              src={wisdomLogoCompact}
              alt="Wisdom"
              className="h-8 sm:h-10 w-auto sm:hidden group-hover:opacity-75 transition-opacity"
            />
            <img
              src={wisdomLogoFull}
              alt="Wisdom - Real. Deep. Learning."
              className="hidden sm:block h-8 w-auto group-hover:opacity-75 transition-opacity"
            />
          </button>

          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`text-sm font-medium transition-colors relative pb-0.5 ${
                  activeTab === tab.id
                    ? (isTransparent ? 'text-gray-700' : 'text-gray-900')
                    : (isTransparent ? 'text-gray-600 hover:text-gray-700' : 'text-gray-500 hover:text-gray-900')
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className={`absolute -bottom-[21px] left-0 right-0 h-0.5 ${
                    isTransparent ? 'bg-gray-700' : 'bg-primary'
                  }`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
