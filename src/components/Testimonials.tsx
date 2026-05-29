import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  bike: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '林志豪',
    location: '台中',
    rating: 5,
    review: '入手 Cervelo R5 車架後，爬坡效率大幅提升！巡揚的專業建議讓我選到最適合自己的尺寸，服務態度也非常好，下次換輪組一定再來！',
    bike: 'Cervelo R5 爬坡車架組',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: '陳美玲',
    location: '新竹',
    rating: 5,
    review: '第一次購買高階公路車，對 Specialized Aethos 愛不釋手！車店師傅細心幫我 fitting，騎起來舒適又快，完全超出預期！',
    bike: 'Specialized Aethos Expert 成車',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: '王建明',
    location: '台北',
    rating: 5,
    review: 'PINARELLO DOGMA F 真的是一台夢幻逸品，騎起來輕飄飄的感覺無法言喻。巡揚的售後服務也很完善，有問題隨時都能得到解答。',
    bike: 'Pinarello NEW DOGMA F 車架組',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: '張雅婷',
    location: '台南',
    rating: 5,
    review: '騎了 BMC Teammachine 參加了人生第一場公路車賽，成績非常滿意！感謝巡揚幫我做好完整的賽前調整，下坡控制非常穩定！',
    bike: 'BMC Teammachine SLR Three 成車',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    name: '黃俊傑',
    location: '高雄',
    rating: 5,
    review: '趁出清活動入手 Specialized S-Works Tarmac SL8，價格實在太划算了。整台車質感超好，塗裝美到捨不得騎，哈！巡揚真的是業界良心。',
    bike: 'Specialized S-Works Tarmac SL8 車架組',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    name: '劉宗翰',
    location: '台中',
    rating: 5,
    review: 'Scott Addict RC 是我踏入公路車世界的第一台車，巡揚的師傅耐心解釋各種零件知識，讓我一個新手也能快速上手，非常感謝！',
    bike: 'Scott Addict RC 成車',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=60',
  },
];

const VISIBLE = 3;
const AUTO_PLAY_INTERVAL = 4000;

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((prev) => (prev + dir + total) % total);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, total]
  );

  useEffect(() => {
    const timer = setInterval(() => go(1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [go]);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < VISIBLE; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">顧客評價</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            騎士們怎麼說
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            來自全台各地車友的真實心得，見證巡揚單車的品質與服務
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ opacity: isAnimating ? 0.6 : 1, transition: 'opacity 0.3s ease' }}
          >
            {getVisible().map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className={`bg-gray-50 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${
                  idx === 1 ? 'md:scale-105 md:shadow-lg border-red-100' : ''
                }`}
              >
                <Quote className="w-8 h-8 text-red-500 mb-4 opacity-60" />

                <p className="text-gray-700 leading-relaxed flex-1 mb-6 text-sm md:text-base">
                  {t.review}
                </p>

                <div className="mt-auto">
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-4">
                    {t.bike}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-red-100"
                      />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-gray-400 text-xs">{t.location}</p>
                      </div>
                    </div>
                    <div className="flex space-x-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop prev/next */}
          <button
            onClick={() => go(-1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-3 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200 hidden md:flex items-center justify-center"
            aria-label="上一則"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-3 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200 hidden md:flex items-center justify-center"
            aria-label="下一則"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrent(i);
                  setTimeout(() => setIsAnimating(false), 400);
                }
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-red-600 w-6 h-2.5'
                  : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
              }`}
              aria-label={`跳到第 ${i + 1} 則評價`}
            />
          ))}
        </div>

        {/* Mobile prev/next */}
        <div className="flex justify-center space-x-4 mt-6 md:hidden">
          <button
            onClick={() => go(-1)}
            className="bg-white border border-gray-200 shadow rounded-full p-3 hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="bg-white border border-gray-200 shadow rounded-full p-3 hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
