import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://shoplineimg.com/62b000d1ebcca800681ae739/69e5b6626cf04eb895fdcf34/375x.webp?source_format=png",
      title: "【Specialized】Sirrus X 5.0",
      highlight: "城市車成車 / 金色",
      stats: [
        { value: "Future Shock 1.5 減震系統", label: "吸收路面震動" },
        { value: "可更直挺舒適騎姿", label: "配更寬穩定外胎" },
        { value: "適用日常城市通勤、運動、出遊、礫石等多形路段", label: " " }
      ]
    },
    {
      image: "https://shoplineimg.com/62b000d1ebcca800681ae739/697878debb83b1a1fbaba986/375x.webp?source_format=png",
      title: "絕版出清【PINARELLO】F9 車架組 ",
      highlight: "G210 Blue Sapphire 湖水綠",
      stats: [
        { value: "新塗裝 G210 Blue Sapphire 湖水綠，適合有個性、亮麗大顯身手的你", label: " " },
        { value: " ", label: " " },
        { value: " ", label: " " }
      ]
    },
    {
      image: "https://shoplineimg.com/62b000d1ebcca800681ae739/6933cf66d23cd8001489abd3/800x.webp?source_format=png",
      title: "新色【Pinarello】NEW DOGMA F 車架組",
      highlight: "G117 星耀紅",
      stats: [
        { value: "更輕、更空力卻舒適，較前代少約 108g", label: " " },
        { value: "全新 M40X 碳纖材質、各部件全新設計更為空力外", label: " " },
        { value: "相容更大的胎寬32mm ", label: " " }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[65vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 mt-16">
      {/* Subtle light overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* ── Left: Text content ── */}
      <div className="relative z-10 flex-1 px-8 md:px-14 lg:px-20 flex flex-col justify-center">
        {/* 新車公告徽章 */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            2025–2026 新車
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          {slides[currentSlide].title}
          <span className="text-red-600 block">{slides[currentSlide].highlight}</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {slides[currentSlide].stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/90 transition-colors duration-300 shadow-sm"
            >
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Slide dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Right: Contained image ── */}
      <div className="relative z-10 w-[42%] h-full flex items-center justify-center shrink-0 pr-6">
        {/* Prev / Next arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute h-[85%] w-full object-contain transition-opacity duration-1000 drop-shadow-2xl ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;