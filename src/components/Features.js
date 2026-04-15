import React from 'react';
import { Sparkles, Shield, Zap, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Every detail crafted to perfection with premium materials and exceptional attention to detail.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Durable construction that stands the test of time, designed for long-term performance.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and efficiency, delivering results when you need them most.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with audiences worldwide through our extensive network and platform.',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exceptional Design
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Crafted with precision and built for performance. 
            Experience the difference quality makes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <feature.icon size={24} className="text-white/70" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;