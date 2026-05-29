import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">巡揚單車</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              專注於頂級公路車的選品與銷售，提供車友專業的購車建議、精準 Fitting 服務，追求極致性能與品質。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">自行車品牌</h4>
            <ul className="space-y-3">
              <li><a href="/products?category=Cervelo" className="text-gray-400 hover:text-white transition-colors duration-200">Cervelo</a></li>
              <li><a href="/products?category=Specialized" className="text-gray-400 hover:text-white transition-colors duration-200">Specialized</a></li>
              <li><a href="/products?category=PINARELLO" className="text-gray-400 hover:text-white transition-colors duration-200">PINARELLO</a></li>
              <li><a href="/products?category=BMC" className="text-gray-400 hover:text-white transition-colors duration-200">BMC</a></li>
              <li><a href="/products?category=Scott" className="text-gray-400 hover:text-white transition-colors duration-200">Scott</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">客戶服務</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">尺寸建議</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">保固說明</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">保養維修</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">常見問題</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">聯絡我們</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">聯絡資訊</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-500" />
                <span className="text-gray-400">service@syoungbike.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500" />
                <span className="text-gray-400">04-2238-8899</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-500 mt-1" />
                <span className="text-gray-400">
                  台中市北屯區軍福十五路 280 號<br />
                  巡揚單車（北屯店）
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 巡揚單車 Syoung Bike. 版權所有。
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">隱私權政策</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">服務條款</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie 政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;