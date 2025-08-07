import React from 'react';
import { Code, TrendingUp, Video, Brain, BarChart, Mic } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Departments = () => {
  const [ref, isVisible] = useScrollAnimation();

  const departments = [
    {
      name: 'Empirel Technology',
      subtitle: 'Building the tools of tomorrow, today.',
      icons: [Code, Brain, TrendingUp],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      services: ['AI & Machine Learning', 'Cloud Solutions', 'Web Applications', 'Mobile Development']
    },
    {
      name: 'Empirel Marketing',
      subtitle: 'Creative campaigns with measurable impact.',
      icons: [TrendingUp, BarChart, Mic],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-900/20 to-rose-900/20',
      services: ['Digital Strategy', 'Brand Development', 'Social Media', 'Content Marketing']
    },
    {
      name: 'Empirel Studio',
      subtitle: 'Where vision meets execution.',
      icons: [Video, Mic, Code],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-900/20 to-violet-900/20',
      services: ['Video Production', 'Photography', 'Sound Design', 'Post-Production']
    }
  ];

  return (
    <section id="departments" className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-8 text-white">
            Our <span className="text-teal-400">Departments</span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
            Three specialized divisions working in harmony to deliver exceptional results
          </p>
        </div>

        <div className="space-y-16">
          {departments.map((dept, index) => (
            <div
              key={dept.name}
              className={`relative transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${dept.bgColor} backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 group hover:border-teal-400/30 transition-all duration-500`}>
                
                {/* Floating Icons */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  {dept.icons.map((Icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center animate-bounce`}
                      style={{ 
                        animationDelay: `${iconIndex * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-orbitron text-4xl font-bold text-white mb-4">
                      {dept.name}
                    </h3>
                    <p className="font-inter text-xl text-teal-400 mb-6">
                      {dept.subtitle}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {dept.services.map((service) => (
                        <div
                          key={service}
                          className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-white/90 text-sm font-medium hover:bg-white/20 transition-colors duration-300 cursor-default"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${dept.color} opacity-20 animate-pulse`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${dept.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        {React.createElement(dept.icons[0], { className: "w-16 h-16 text-white" })}
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-teal-400 rounded-full animate-ping`}
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${1 + Math.random()}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;