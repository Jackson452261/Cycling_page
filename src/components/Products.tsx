import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { Search, X } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState(() => searchParams.get('category') ?? '');

  React.useEffect(() => {
    setSelectedCategory(searchParams.get('category') ?? '');
  }, [searchParams]);

  const [selectedPriceRange, setSelectedPriceRange] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  const products = [
    // ── Specialized ──────────────────────────────────────────
    {
      id: 's1',
      name: '限量聯名【Specialized】S-Works Tarmac SL8 車架組 / 藝術家 Beaufort',
      category: 'Specialized',
      price: 189000,
      image: 'https://shoplineimg.com/62b000d1ebcca800681ae739/69948c43c05d5763b6b3daf7/540x.webp?source_format=png',
      rating: 5.0,
      reviews: 18,
      features: ['限量聯名款', 'S-Works 最高等級', 'Tarmac SL8 平台'],
      isNew: true,
    },
    {
      id: 's2',
      name: '新色【Specialized】S-Works Tarmac SL8 成車 / 裂焰紅',
      category: 'Specialized',
      price: 410000,
      image: 'https://shoplineimg.com/62b000d1ebcca800681ae739/69948dbce4e93e57a0ef82b1/540x.webp?source_format=png',
      rating: 4.9,
      reviews: 34,
      features: ['Shimano Dura-Ace Di2', 'Roval Rapide CLX 輪組', '含功率計'],
    },
    {
      id: 's3',
      name: '新色【Specialized】S-Works Aethos 2 成車 / 白雲石',
      category: 'Specialized',
      price: 386000,
      image: 'https://shoplineimg.com/62b000d1ebcca800681ae739/69158cc911f8a90016a09c9a/540x.webp?source_format=png',
      rating: 4.9,
      reviews: 27,
      features: ['Shimano DA Di2', '含功率計', '超輕量設計'],
    },
    {
      id: 's4',
      name: '廠商出清【Specialized】Aethos Expert 成車 / Deep Lake',
      category: 'Specialized',
      price: 132300,
      originalPrice: 188800,
      image: 'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
      rating: 4.8,
      reviews: 52,
      features: ['出清優惠 7折', 'Shimano Ultegra Di2', '超輕量爬坡'],
      isBestseller: true,
    },
    {
      id: 's5',
      name: '【Specialized】Crux 車架組 / 抹茶紅豆',
      category: 'Specialized',
      price: 94500,
      image: 'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60',
      rating: 4.7,
      reviews: 41,
      features: ['礫石車架', '32mm 胎寬', '可裝貨架'],
    },
    // ── Cervelo ──────────────────────────────────────────────
    {
      id: 'c1',
      name: '出清優惠【Cervelo】R5 爬坡車架組 / Deep BlueSunset 落日藍（含龍頭把手）',
      category: 'Cervelo',
      price: 131250,
      originalPrice: 175000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60',
      rating: 4.9,
      reviews: 63,
      features: ['出清 7.5折', '含龍頭把手', '爬坡幾何設計'],
      isBestseller: true,
    },
    {
      id: 'c2',
      name: '【Cervelo】S5 MY26 車架組 / Carnelian 星鑽紅',
      category: 'Cervelo',
      price: 194000,
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop&q=60',
      rating: 4.9,
      reviews: 29,
      features: ['MY26 新款', '空力頂級設計', '高剛性碳纖維'],
      isNew: true,
    },
    {
      id: 'c3',
      name: '新色【Cervelo】MY26 Soloist 車架組 / 液態銀綠',
      category: 'Cervelo',
      price: 99000,
      image: 'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
      rating: 4.8,
      reviews: 17,
      features: ['MY26 新色', '全能幾何', '爬坡與空力兼顧'],
      isNew: true,
    },
    {
      id: 'c4',
      name: '新款現貨【Cervelo】MY26 R5 車架組 / 曜石黑 銅金標',
      category: 'Cervelo',
      price: 194000,
      image: 'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60',
      rating: 4.9,
      reviews: 22,
      features: ['MY26 現貨', '曜石黑配色', '輕量爬坡設計'],
    },
    // ── PINARELLO ────────────────────────────────────────────
    {
      id: 'p1',
      name: '絕版出清【PINARELLO】F9 車架組 / G210 Blue Sapphire 湖水綠',
      category: 'PINARELLO',
      price: 138000,
      originalPrice: 184000,
      image: 'https://shoplineimg.com/62b000d1ebcca800681ae739/697878debb83b1a1fbaba986/375x.webp?source_format=png',
      rating: 4.8,
      reviews: 45,
      features: ['絕版出清', '全新塗裝', 'ONDA 碳纖前叉'],
      isBestseller: true,
    },
    {
      id: 'p2',
      name: '新色【Pinarello】NEW DOGMA F 車架組 / G117 星耀紅',
      category: 'PINARELLO',
      price: 298000,
      image: 'https://shoplineimg.com/62b000d1ebcca800681ae739/6933cf66d23cd8001489abd3/800x.webp?source_format=png',
      rating: 5.0,
      reviews: 31,
      features: ['較前代少 108g', '全新 M40X 碳纖', '相容 32mm 胎寬'],
      isNew: true,
    },
    // ── BMC ──────────────────────────────────────────────────
    {
      id: 'b1',
      name: '新款【BMC】Teammachine SLR01 車架組 / VAR1 霧黑白標',
      category: 'BMC',
      price: 168000,
      image: 'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=600&auto=format&fit=crop&q=60',
      rating: 4.8,
      reviews: 38,
      features: ['SLR 最高階碳纖', '空力頂規', 'MY26 新款'],
      isNew: true,
    },
    {
      id: 'b2',
      name: '新款【BMC】Teammachine SLR Three 成車 / Neon Red 消光紅',
      category: 'BMC',
      price: 99000,
      image: 'https://images.unsplash.com/photo-1578949678951-d4d4d390f582?w=600&auto=format&fit=crop&q=60',
      rating: 4.7,
      reviews: 54,
      features: ['Shimano 105 Di2', '消光紅配色', '入門輕量碳纖'],
    },
    // ── Scott ─────────────────────────────────────────────────
    {
      id: 'sc1',
      name: 'Scott Addict RC 成車',
      category: 'Scott',
      price: 88000,
      image: 'https://images.unsplash.com/photo-1456990493443-0d0ee2a630cc?w=600&auto=format&fit=crop&q=60',
      rating: 4.7,
      reviews: 66,
      features: ['輕量碳纖車架', 'Shimano 105', '競賽幾何'],
    },
  ];

  const categories = [...new Set(products.map(product => product.category))];
  const priceRanges = [
    { label: 'NT$10萬 以下', min: 0, max: 100000 },
    { label: 'NT$10萬 – 20萬', min: 100000, max: 200000 },
    { label: 'NT$20萬 – 35萬', min: 200000, max: 350000 },
    { label: 'NT$35萬 以上', min: 350000, max: Infinity },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        priceMatch = product.price >= range.min && product.price < range.max;
      }
    }
    
    const searchMatch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSearchQuery('');
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            自行車品牌挑選
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                顯示 {filteredProducts.length} 個 {products.length} 自行車
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="搜尋車款名稱..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full md:w-64 pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <ProductFilter
                categories={categories}
                priceRanges={priceRanges}
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                onCategoryChange={setSelectedCategory}
                onPriceRangeChange={setSelectedPriceRange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">找不到</h3>
            <p className="text-gray-600 mb-4"> </p>
            <button
              onClick={handleClearFilters}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              清除篩選
            </button>
          </div>
        )}

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default Products;