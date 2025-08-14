import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.istockphoto.com/id/2196777835/photo/woman-riding-bike-on-flowering-grassland-mountain-top-trail.webp?a=1&b=1&s=612x612&w=0&k=20&c=oBMJlQxELcboEQFfpRTExSiIBVLsu3Hgc0biwjcwaG4="
          alt="Professional road bike"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Engineered for
            <span className="text-red-500 block">Performance</span>
          </h1>
          
          

     

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">6.8kg</div>
              <div className="text-gray-300">Ultra-lightweight</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">22 Speed</div>
              <div className="text-gray-300">Shimano Ultegra</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">Aero</div>
              <div className="text-gray-300">Wind-cutting design</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;