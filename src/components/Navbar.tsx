import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface SubGroup {
  title: string;
  items: string[];
}

interface FilterTab {
  label: string;
  groups: SubGroup[];
}

interface NavItem {
  label: string;
  filterTabs?: FilterTab[];
  groups?: SubGroup[];
}

const navData: NavItem[] = [
  {
    label: '自行車品牌',
    groups: [
      {
        title: '自行車品牌',
        items: [
          'Cervelo',
          'PINARELLO',
          'BMC',
          'Scott',
          'Specialized',
          
        ],
      },
     
      {
        title: '輪組品牌',
        items: [
          'PRINCETON CARBONWORKS 輪組',
          'Vision',
          'DT Swiss 輪組',
          'Syncros 輪組',
          'SCOPE',
          'Roval 輪組',
        ],
      },
       
    ],
  },
  
  
  {
    label: '騎士裝備',
    filterTabs: [
      {
        label: '所有裝備',
        groups: [
          {
            title: 'PEdALED',
            items: [
              'PEdALED Man',
              'PEdALED Women',
              'PEdALED 背心、外套',
              'PEdALED 車襪',
              'PEdALED 手套',
              'PEdALED 水壺、配件',
            ],
          },
          {
            title: 'MAAP',
            items: [
              'MAAP Man',
              'MAAP Woman',
              'MAAP 休閒系列',
              'MAAP 車襪',
              'MAAP 手套',
              'MAAP 水壺、配件',
            ],
          },
          {
            title: '人身部品',
            items: [
              'POC',
              'Nimbl 卡鞋',
              'KPLUS 安全帽',
              'KASK 安全帽',
              'SCICON 眼鏡',
            ],
          },
          {
            title: '人身、車身包款',
            items: ['WOTANCRAFT 沃坦', 'Thermaltake 曜越', 'RESTRAP'],
          },
        ],
      },
      {
        label: 'PEdALED',
        groups: [
          {
            title: 'PEdALED',
            items: [
              'PEdALED Man',
              'PEdALED Women',
              'PEdALED 背心、外套',
              'PEdALED 車襪',
              'PEdALED 手套',
              'PEdALED 水壺、配件',
            ],
          },
        ],
      },
      {
        label: 'MAAP',
        groups: [
          {
            title: 'MAAP',
            items: [
              'MAAP Man',
              'MAAP Woman',
              'MAAP 休閒系列',
              'MAAP 車襪',
              'MAAP 手套',
              'MAAP 水壺、配件',
            ],
          },
        ],
      },
      {
        label: '人身部品',
        groups: [
          {
            title: '人身部品',
            items: [
              'POC',
              'Nimbl 卡鞋',
              'KPLUS 安全帽',
              'KASK 安全帽',
              'SCICON 眼鏡',
            ],
          },
          {
            title: '包款',
            items: ['WOTANCRAFT 沃坦', 'Thermaltake 曜越', 'RESTRAP'],
          },
        ],
      },
    ],
  },
 
  
  {
    label: '單車配件',
    filterTabs: [
      {
        label: '所有配件',
        groups: [
          {
            title: '輕量化改裝',
            items: [
              'Carbon-Ti 輕量化齒盤、碟盤',
              'Darimo 輕量化把手、座管',
              'SRM 功率計',
              'GALFER 碟盤、來令片',
              'AMP 來令片',
              'Hope 卡鉗',
            ],
          },
          {
            title: '車用保養用品',
            items: [
              'Juice Lubes 保養油、清潔用品',
              'Ceramicspeed 改裝配件、保養品',
              'Muc-Off',
            ],
          },
          {
            title: '訓練補給、修護、舒緩品',
            items: [
              'WiNSPORTS',
              'UP Sport',
              'Theragun 按摩槍',
              'CALBOMB 碳水炸彈果膠',
              'GA 黃金甲',
              '橋膚科 防曬乳',
            ],
          },
          {
            title: '訓練台、駐車架',
            items: ['Wahoo', '鐵竹工藝', 'SEASUCKER 海吸王'],
          },
          {
            title: '碼表座、手機支架',
            items: ['FRAMESANDGEAR 碼表座、勾爪', 'LOOP 碼表座'],
          },
        ],
      },
      {
        label: '改裝零件',
        groups: [
          {
            title: '輕量化改裝',
            items: [
              'Carbon-Ti 輕量化齒盤、碟盤',
              'Darimo 輕量化把手、座管',
              'SRM 功率計',
              'GALFER 碟盤、來令片',
              'AMP 來令片',
              'Hope 卡鉗',
            ],
          },
        ],
      },
      {
        label: '保養用品',
        groups: [
          {
            title: '車用保養用品',
            items: [
              'Juice Lubes 保養油、清潔用品',
              'Ceramicspeed 改裝配件、保養品',
              'Muc-Off',
            ],
          },
        ],
      },
      {
        label: '訓練相關',
        groups: [
          {
            title: '訓練補給、修護、舒緩品',
            items: [
              'WiNSPORTS',
              'UP Sport',
              'Theragun 按摩槍',
              'CALBOMB 碳水炸彈果膠',
              'GA 黃金甲',
              '橋膚科 防曬乳',
            ],
          },
          {
            title: '訓練台、駐車架',
            items: ['Wahoo', '鐵竹工藝', 'SEASUCKER 海吸王'],
          },
          {
            title: '碼表座、手機支架',
            items: ['FRAMESANDGEAR 碼表座、勾爪', 'LOOP 碼表座'],
          },
        ],
      },
    ],
  },
 
  
  {
    label: '門市資訊',
    groups: [
      {
        title: '台中門市',
        items: ['巡揚北屯店', '巡揚南屯店', 'Specialized 中央公園店'],
      },
      {
        title: '新竹門市',
        items: ['巡揚竹北店'],
      },
    ],
  },
  
];

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getActiveGroups = (item: NavItem): SubGroup[] => {
    if (item.filterTabs) {
      return item.filterTabs[activeTabIndex]?.groups ?? [];
    }
    return item.groups ?? [];
  };

  const handleNavEnter = (index: number) => {
    setActiveIndex(index);
    setActiveTabIndex(0);
  };

  const handleNavLeave = () => {
    setActiveIndex(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div ref={navRef} onMouseLeave={handleNavLeave}>
        {/* Main navbar row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-black italic tracking-tight text-gray-900 hover:text-red-600 transition-colors duration-200 select-none"
            >
              <img
                src="https://shoplineimg.com/62b000d1ebcca800681ae739/62b1bd0e6ff51600300ae80e/1200x.webp?source_format=png"
                alt="巡揚單車"
                className="h-8 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav – centered */}
            <nav className="hidden md:flex flex-1 items-center justify-center space-x-1 flex-nowrap">
              {navData.map((item, index) => (
                <button
                  key={item.label}
                  onMouseEnter={() => handleNavEnter(index)}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`relative px-4 py-5 text-sm font-semibold transition-colors duration-150 flex items-center gap-1 group ${
                    activeIndex === index
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gray-900 transition-transform duration-200 origin-center ${
                      activeIndex === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Right slot: hamburger on mobile, empty on desktop */}
            <div className="flex justify-end shrink-0">
              <button
                className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Dropdown */}
        {activeIndex !== null && (
          <div
            className="hidden md:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-xl"
            onMouseEnter={() => setActiveIndex(activeIndex)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter tabs (only for items with filterTabs) */}
              {navData[activeIndex].filterTabs && (
                <div className="flex items-center space-x-2 border-b border-gray-100 py-1">
                  {navData[activeIndex].filterTabs!.map((tab, tabIdx) => (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTabIndex(tabIdx)}
                      className={`px-4 py-3 text-sm font-semibold transition-colors duration-150 relative ${
                        activeTabIndex === tabIdx
                          ? 'text-gray-900'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {tab.label}
                      {activeTabIndex === tabIdx && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Grid of category groups */}
              <div className="py-8 grid grid-cols-3 gap-x-12 gap-y-6">
                {getActiveGroups(navData[activeIndex]).map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      {group.title}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setActiveIndex(null);
                              navigate(`/products?category=${encodeURIComponent(item)}`);
                            }}
                            className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors duration-150 text-left"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          {navData.map((item, index) => (
            <div key={item.label} className="border-b border-gray-100">
              <button
                onClick={() =>
                  setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-4 py-4 text-sm font-semibold text-gray-800"
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileExpandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileExpandedIndex === index && (
                <div className="bg-gray-50 px-4 pb-4">
                  {/* Mobile filter tabs */}
                  {item.filterTabs && (
                    <div className="flex flex-wrap gap-2 pt-3 pb-2">
                      {item.filterTabs.map((tab, tabIdx) => (
                        <button
                          key={tab.label}
                          onClick={() => setActiveTabIndex(tabIdx)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                            activeTabIndex === tabIdx
                              ? 'bg-gray-900 text-white border-gray-900'
                              : 'bg-white text-gray-600 border-gray-300'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Mobile groups */}
                  {(item.filterTabs
                    ? item.filterTabs[activeTabIndex]?.groups ?? []
                    : item.groups ?? []
                  ).map((group) => (
                    <div key={group.title} className="mt-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {group.title}
                      </p>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                        {group.items.map((subItem) => (
                          <li key={subItem}>
                            <button
                              onClick={() => {
                                setIsMobileOpen(false);
                                navigate(`/products?category=${encodeURIComponent(subItem)}`);
                              }}
                              className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors text-left"
                            >
                              {subItem}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
