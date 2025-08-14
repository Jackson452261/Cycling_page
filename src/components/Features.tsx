import React from 'react';
import { Zap, Wind, Gauge, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Advanced aerodynamic frame geometry reduces drag by 15% compared to traditional designs, giving you the competitive edge."
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Aerodynamic Excellence",
      description: "Wind tunnel tested frame with integrated cable routing and optimized tube shapes for maximum efficiency."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Precision Engineering",
      description: "Every component is meticulously crafted using the finest materials and cutting-edge manufacturing processes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uncompromising Quality",
      description: "Built to withstand the demands of professional racing while maintaining comfort for long-distance rides."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Champions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every detail matters when pursuing excellence. Our road bikes are designed 
            with cutting-edge technology to deliver unmatched performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-50 group-hover:bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <div className="text-red-600 group-hover:text-red-700 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Features;