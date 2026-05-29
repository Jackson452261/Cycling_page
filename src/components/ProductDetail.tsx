import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Check, Heart, Share2, ShoppingCart } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Product data – mirrors Products.tsx
  const products = [
    // ── Specialized ───────────────────────────────────────────
    {
      id: 's1',
      name: '限量聯名【Specialized】S-Works Tarmac SL8 車架組 / 藝術家 Beaufort',
      category: 'Specialized',
      price: 189000,
      images: [
        'https://shoplineimg.com/62b000d1ebcca800681ae739/69948c43c05d5763b6b3daf7/540x.webp?source_format=png',
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 5.0,
      reviews: 18,
      description: '與知名藝術家 Beaufort 限量聯名，採用 S-Works 最高等級碳纖維材質，Tarmac SL8 平台結合藝術塗裝，兼具極致性能與收藏價值。',
      features: ['限量聯名款', 'S-Works 最高等級碳纖', 'Tarmac SL8 平台', '藝術家手繪塗裝', '風洞測試空力設計', '輕量競賽幾何'],
      specifications: { '車架材質': 'S-Works FACT 12r Carbon', '重量': '約 800g（尺寸 56）', '傳動系統': 'Shimano Dura-Ace Di2', '煞車系統': '油壓碟煞', '輪組': 'Roval Rapide CLX', '胎寬': '26–32mm', '把手': 'S-Works Aerofly II Carbon', '座墊': 'S-Works Power' },
      sizes: ['44', '49', '52', '54', '56', '58', '61'],
      colors: ['Beaufort 聯名藝術塗裝'],
      isNew: true,
    },
    {
      id: 's2',
      name: '新色【Specialized】S-Works Tarmac SL8 成車 / 裂焰紅',
      category: 'Specialized',
      price: 410000,
      images: [
        'https://shoplineimg.com/62b000d1ebcca800681ae739/69948dbce4e93e57a0ef82b1/540x.webp?source_format=png',
        'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.9,
      reviews: 34,
      description: 'Tarmac SL8 全新裂焰紅配色成車，搭載 Shimano Dura-Ace Di2、Roval Rapide CLX 輪組及功率計，職業賽場等級的完整套件。',
      features: ['Shimano Dura-Ace Di2 電子變速', 'Roval Rapide CLX 輪組', '含功率計', 'S-Works 車架', '油壓碟煞', '無線電子換檔'],
      specifications: { '車架材質': 'S-Works FACT 12r Carbon', '重量': '約 7.0 kg（完整成車）', '傳動系統': 'Shimano Dura-Ace Di2 12速', '煞車系統': '油壓碟煞', '輪組': 'Roval Rapide CLX', '胎寬': '28mm', '把手': 'S-Works Aerofly II Carbon', '座墊': 'S-Works Power' },
      sizes: ['44', '49', '52', '54', '56', '58', '61'],
      colors: ['裂焰紅'],
    },
    {
      id: 's3',
      name: '新色【Specialized】S-Works Aethos 2 成車 / 白雲石',
      category: 'Specialized',
      price: 386000,
      images: [
        'https://shoplineimg.com/62b000d1ebcca800681ae739/69158cc911f8a90016a09c9a/540x.webp?source_format=png',
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.9,
      reviews: 27,
      description: 'Aethos 2 採用革命性超輕量設計，白雲石配色典雅出色，含 Shimano Dura-Ace Di2 及功率計，爬坡競賽的頂級利器。',
      features: ['Shimano DA Di2 電子變速', '含功率計', '超輕量設計', 'Aethos 車架平台', '爬坡競賽幾何', '白雲石全新配色'],
      specifications: { '車架材質': 'S-Works FACT 12r Carbon', '重量': '約 6.4 kg（完整成車）', '傳動系統': 'Shimano Dura-Ace Di2 12速', '煞車系統': '油壓碟煞', '輪組': 'Roval Alpinist CLX', '胎寬': '28mm', '把手': 'S-Works Carbon Compact', '座墊': 'S-Works Power' },
      sizes: ['44', '49', '52', '54', '56', '58'],
      colors: ['白雲石'],
    },
    {
      id: 's4',
      name: '廠商出清【Specialized】Aethos Expert 成車 / Deep Lake',
      category: 'Specialized',
      price: 132300,
      originalPrice: 188800,
      images: [
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.8,
      reviews: 52,
      description: '廠商出清優惠 7折！Aethos Expert 搭載 Shimano Ultegra Di2，超輕量爬坡車架，Deep Lake 深藍配色，性價比極高的入手機會。',
      features: ['出清優惠 7折', 'Shimano Ultegra Di2', '超輕量爬坡', 'Aethos 車架', '油壓碟煞', 'Deep Lake 配色'],
      specifications: { '車架材質': 'FACT 11r Carbon', '重量': '約 6.8 kg（完整成車）', '傳動系統': 'Shimano Ultegra Di2 12速', '煞車系統': '油壓碟煞', '輪組': 'Roval Alpinist CL', '胎寬': '28mm', '把手': 'Specialized Comp Carbon', '座墊': 'Body Geometry Power Expert' },
      sizes: ['49', '52', '54', '56', '58'],
      colors: ['Deep Lake 深藍'],
      isBestseller: true,
    },
    {
      id: 's5',
      name: '【Specialized】Crux 車架組 / 抹茶紅豆',
      category: 'Specialized',
      price: 94500,
      images: [
        'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.7,
      reviews: 41,
      description: 'Crux 是 Specialized 的礫石王者，抹茶紅豆配色清新獨特，支援 32mm 胎寬，可安裝貨架，兼容公路與礫石多元路況。',
      features: ['礫石車架', '32mm 胎寬', '可裝貨架', '多路況兼容', '碳纖維車架', '輕量設計'],
      specifications: { '車架材質': 'FACT 11r Carbon', '重量': '約 900g（車架）', '傳動系統': '相容 1x / 2x', '煞車系統': '油壓碟煞（140/160mm）', '最大胎寬': '700c × 38mm', '前叉': 'Crux Carbon Fork', '座管': 'D-Shape Carbon', '顏色': '抹茶紅豆' },
      sizes: ['44', '49', '52', '54', '56', '58', '61'],
      colors: ['抹茶紅豆'],
    },
    // ── Cervelo ───────────────────────────────────────────────
    {
      id: 'c1',
      name: '出清優惠【Cervelo】R5 爬坡車架組 / Deep BlueSunset 落日藍（含龍頭把手）',
      category: 'Cervelo',
      price: 131250,
      originalPrice: 175000,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.9,
      reviews: 63,
      description: '出清優惠 7.5折！Cervelo R5 爬坡王者，Deep BlueSunset 落日藍配色，含一體式龍頭把手，輕量碳纖設計專為爬坡而生。',
      features: ['出清 7.5折', '含龍頭把手', '爬坡幾何設計', 'Cervelo R5 平台', '輕量碳纖維', '專業競賽規格'],
      specifications: { '車架材質': 'Squoval Monocoque Carbon', '重量': '約 780g（尺寸 54）', '傳動系統': '相容 Shimano / SRAM', '煞車系統': '油壓碟煞', '最大胎寬': '32mm', '前叉': 'Cervelo Carbon Fork', '配件': '含一體式龍頭把手', '顏色': 'Deep BlueSunset 落日藍' },
      sizes: ['48', '51', '54', '56', '58'],
      colors: ['Deep BlueSunset 落日藍'],
      isBestseller: true,
    },
    {
      id: 'c2',
      name: '【Cervelo】S5 MY26 車架組 / Carnelian 星鑽紅',
      category: 'Cervelo',
      price: 194000,
      images: [
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.9,
      reviews: 29,
      description: 'Cervelo S5 MY26 空力旗艦，Carnelian 星鑽紅全新塗裝，採用最新空力管型與高剛性碳纖維，風洞優化設計，計時賽和平路衝刺的最強武器。',
      features: ['MY26 全新款', '空力頂級設計', '高剛性碳纖維', '風洞測試優化', '整合式走線', '計時 / 衝刺幾何'],
      specifications: { '車架材質': 'Squoval Monocoque Aero Carbon', '重量': '約 850g（尺寸 54）', '傳動系統': '相容 Shimano / SRAM', '煞車系統': '油壓碟煞', '最大胎寬': '30mm', '前叉': 'S5 Aero Fork', '走線': '完全內藏式', '顏色': 'Carnelian 星鑽紅' },
      sizes: ['48', '51', '54', '56', '58'],
      colors: ['Carnelian 星鑽紅'],
      isNew: true,
    },
    {
      id: 'c3',
      name: '新色【Cervelo】MY26 Soloist 車架組 / 液態銀綠',
      category: 'Cervelo',
      price: 99000,
      images: [
        'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.8,
      reviews: 17,
      description: 'Cervelo Soloist MY26 液態銀綠全新配色，全能幾何設計同時兼顧爬坡輕量與平路空力效率，日常訓練與比賽的最佳選擇。',
      features: ['MY26 新色', '全能幾何', '爬坡與空力兼顧', 'Soloist 平台', '輕量碳纖維', '多功能用途'],
      specifications: { '車架材質': 'Squoval Monocoque Carbon', '重量': '約 820g（尺寸 54）', '傳動系統': '相容 Shimano / SRAM', '煞車系統': '油壓碟煞', '最大胎寬': '32mm', '前叉': 'Cervelo Carbon Fork', '顏色': '液態銀綠' },
      sizes: ['48', '51', '54', '56', '58'],
      colors: ['液態銀綠'],
      isNew: true,
    },
    {
      id: 'c4',
      name: '新款現貨【Cervelo】MY26 R5 車架組 / 曜石黑 銅金標',
      category: 'Cervelo',
      price: 194000,
      images: [
        'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.9,
      reviews: 22,
      description: 'Cervelo R5 MY26 現貨供應，曜石黑搭配銅金標誌，典雅霸氣。輕量爬坡設計配合最新碳纖維工藝，爬坡性能再升級。',
      features: ['MY26 現貨即出', '曜石黑配色', '銅金標誌', '輕量爬坡設計', '高剛性碳纖維', '整合走線系統'],
      specifications: { '車架材質': 'Squoval Monocoque Carbon', '重量': '約 780g（尺寸 54）', '傳動系統': '相容 Shimano / SRAM', '煞車系統': '油壓碟煞', '最大胎寬': '32mm', '前叉': 'R5 Carbon Fork', '顏色': '曜石黑 / 銅金標' },
      sizes: ['48', '51', '54', '56', '58'],
      colors: ['曜石黑 銅金標'],
    },
    // ── PINARELLO ─────────────────────────────────────────────
    {
      id: 'p1',
      name: '絕版出清【PINARELLO】F9 車架組 / G210 Blue Sapphire 湖水綠',
      category: 'PINARELLO',
      price: 138000,
      originalPrice: 184000,
      images: [
        'https://shoplineimg.com/62b000d1ebcca800681ae739/697878debb83b1a1fbaba986/375x.webp?source_format=png',
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.8,
      reviews: 45,
      description: 'PINARELLO F9 絕版出清，G210 Blue Sapphire 湖水綠全新塗裝，搭配標誌性 ONDA 碳纖前叉，適合有個性、亮麗大顯身手的你。',
      features: ['絕版出清優惠', 'G210 Blue Sapphire 塗裝', 'ONDA 碳纖前叉', '整合式走線', '競賽幾何', '輕量高剛性'],
      specifications: { '車架材質': 'Torayca T1100 1K Dream Carbon', '重量': '約 840g（尺寸 530）', '傳動系統': '相容 Shimano / Campagnolo', '煞車系統': '油壓碟煞', '最大胎寬': '28mm', '前叉': 'Pinarello ONDA Carbon', '走線': '全內藏式', '顏色': 'G210 Blue Sapphire 湖水綠' },
      sizes: ['465', '500', '515', '530', '550', '565'],
      colors: ['G210 Blue Sapphire 湖水綠'],
      isBestseller: true,
    },
    {
      id: 'p2',
      name: '新色【Pinarello】NEW DOGMA F 車架組 / G117 星耀紅',
      category: 'PINARELLO',
      price: 298000,
      images: [
        'https://shoplineimg.com/62b000d1ebcca800681ae739/6933cf66d23cd8001489abd3/800x.webp?source_format=png',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 5.0,
      reviews: 31,
      description: 'NEW DOGMA F 全新世代旗艦，較前代減輕約 108g，採用全新 M40X 碳纖材質，各部件重新設計更空力，相容 32mm 胎寬，G117 星耀紅配色耀眼奪目。',
      features: ['較前代少約 108g', '全新 M40X 碳纖材質', '各部件全新空力設計', '相容 32mm 胎寬', 'G117 星耀紅配色', '頂級競賽旗艦'],
      specifications: { '車架材質': 'Torayca M40X Carbon', '重量': '約 740g（尺寸 530）', '傳動系統': '相容 Shimano / Campagnolo / SRAM', '煞車系統': '油壓碟煞（140/160mm）', '最大胎寬': '32mm', '前叉': 'DOGMA F Carbon Fork', '走線': '完全整合式', '顏色': 'G117 星耀紅' },
      sizes: ['465', '500', '515', '530', '550', '565'],
      colors: ['G117 星耀紅'],
      isNew: true,
    },
    // ── BMC ───────────────────────────────────────────────────
    {
      id: 'b1',
      name: '新款【BMC】Teammachine SLR01 車架組 / VAR1 霧黑白標',
      category: 'BMC',
      price: 168000,
      images: [
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.8,
      reviews: 38,
      description: 'BMC Teammachine SLR01 MY26 全新款，SLR 最高階碳纖維車架，VAR1 霧黑白標低調霸氣，兼具空力與輕量，頂級競賽規格。',
      features: ['SLR 最高階碳纖維', '空力管型設計', 'MY26 全新款', '霧黑白標配色', '整合式走線', '競賽幾何'],
      specifications: { '車架材質': 'BMC Hybrid Monocoque Carbon', '重量': '約 790g（尺寸 54）', '傳動系統': '相容 Shimano / SRAM', '煞車系統': '油壓碟煞', '最大胎寬': '30mm', '前叉': 'Teammachine SLR Carbon', '顏色': 'VAR1 霧黑白標' },
      sizes: ['47', '51', '54', '56', '58', '61'],
      colors: ['VAR1 霧黑白標'],
      isNew: true,
    },
    {
      id: 'b2',
      name: '新款【BMC】Teammachine SLR Three 成車 / Neon Red 消光紅',
      category: 'BMC',
      price: 99000,
      images: [
        'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.7,
      reviews: 54,
      description: 'BMC Teammachine SLR Three 成車，搭載 Shimano 105 Di2 電子變速，Neon Red 消光紅亮眼配色，入門 SLR 平台的最佳起點。',
      features: ['Shimano 105 Di2 電子變速', 'Neon Red 消光紅配色', '入門輕量碳纖', 'SLR 車架平台', '完整成車配置', '油壓碟煞'],
      specifications: { '車架材質': 'BMC Hybrid Monocoque Carbon', '重量': '約 8.2 kg（完整成車）', '傳動系統': 'Shimano 105 Di2 12速', '煞車系統': '油壓碟煞', '輪組': 'BMC Deda', '最大胎寬': '32mm', '前叉': 'Teammachine SLR Carbon', '顏色': 'Neon Red 消光紅' },
      sizes: ['47', '51', '54', '56', '58'],
      colors: ['Neon Red 消光紅'],
    },
    // ── Scott ─────────────────────────────────────────────────
    {
      id: 'sc1',
      name: 'Scott Addict RC 成車',
      category: 'Scott',
      price: 88000,
      images: [
        'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
      ],
      rating: 4.7,
      reviews: 66,
      description: 'Scott Addict RC 搭載輕量碳纖維車架與 Shimano 105 傳動套件，競賽幾何精準操控，是訓練與週末騎乘的理想成車選擇。',
      features: ['輕量碳纖維車架', 'Shimano 105 傳動', '競賽幾何', '油壓碟煞', '整合走線', '多尺寸選擇'],
      specifications: { '車架材質': 'HMF Carbon', '重量': '約 7.8 kg（完整成車）', '傳動系統': 'Shimano 105 12速', '煞車系統': '油壓碟煞', '輪組': 'Syncros Capital 1.5', '最大胎寬': '32mm', '前叉': 'Scott Addict RC Carbon', '顏色': '黑 / 白' },
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
      colors: ['消光黑白', '亮面藍'],
    },
  ];

  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === index ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                  {product.category}
                </span>
                {product.isBestseller && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Bestseller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm font-medium text-gray-700 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  NT${product.price.toLocaleString('zh-TW')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    NT${product.originalPrice.toLocaleString('zh-TW')}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 font-semibold transition-colors duration-200 ${
                      selectedSize === size
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors duration-200 ${
                      selectedColor === color
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>加入購物車</span>
              </button>
              <button className="p-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200">
                <Heart size={20} />
              </button>
              <button className="p-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors duration-200">
                <Share2 size={20} />
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">產品特色</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">規格表</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-600 font-medium">{key}</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;