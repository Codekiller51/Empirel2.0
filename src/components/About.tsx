import React from 'react';
import { Cpu, Megaphone, Camera } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const departments = [
    {
      icon: Cpu,
      name: 'Technology',
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-cyan-500/50'
    },
    {
      icon: Megaphone,
      name: 'Marketing',
      color: 'from-pink-500 to-rose-500',
      glow: 'shadow-rose-500/50'
    },
    {
      icon: Camera,
      name: 'Studio',
      color: 'from-purple-500 to-violet-500',
      glow: 'shadow-violet-500/50'
    }
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-8 text-white">
            About <span className="text-teal-400">Empirel</span>
          </h2>
          <p className="font-inter text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Empirel is the bridge between African creativity and the future of innovation. 
            We combine cutting-edge technology, strategic marketing, and professional media production 
            to elevate brands and empower the next generation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={dept.name}
              className={`relative group cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`relative bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl ${dept.glow} group-hover:shadow-2xl`}>
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
                    Empirel {dept.name}
                  </h3>
                  <p className="font-inter text-white/70 leading-relaxed">
                    {dept.name === 'Technology' && "Building tomorrow's digital solutions with AI, cloud computing, and innovative web applications."}
                    {dept.name === 'Marketing' && "Crafting compelling narratives and data-driven strategies that connect brands with their audience."}
                    {dept.name === 'Studio' && "Creating stunning visual content through professional video production, photography, and sound design."}
                  </p>
                </div>
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;