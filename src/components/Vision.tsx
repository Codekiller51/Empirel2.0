import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Vision = () => {
  const [ref, isVisible] = useScrollAnimation();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800"
      >
        {/* Tanzania-inspired pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22african%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22 fill=%22%23006B3C%22 opacity=%220.3%22/%3E%3Cpath d=%22M30,10 L50,30 L30,50 L10,30 Z%22 fill=%22none%22 stroke=%22%2300FFC6%22 stroke-width=%220.5%22 opacity=%220.2%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23african)%22/%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Glowing cityscape silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-96">
          <div className="relative h-full">
            {/* Kilimanjaro-inspired mountain silhouette */}
            <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-gradient-to-t from-slate-600 to-transparent rounded-t-full opacity-60"></div>
            
            {/* City buildings */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 bg-gradient-to-t from-slate-600 to-slate-500"
                style={{
                  left: `${i * 6 + 10}%`,
                  width: `${2 + Math.random() * 3}%`,
                  height: `${60 + Math.random() * 80}px`,
                }}
              >
                {/* Building lights */}
                {[...Array(Math.floor(Math.random() * 3) + 1)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      top: `${20 + j * 20}%`,
                      left: '50%',
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Floating figure silhouette */}
          <div className="relative mb-16">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="w-16 h-20 bg-gradient-to-b from-teal-400 to-transparent rounded-t-full opacity-80"></div>
              </div>
            </div>
          </div>

          <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-12 text-white">
            Our <span className="text-teal-400">Vision</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <blockquote className="font-inter text-2xl md:text-3xl text-white/90 leading-relaxed mb-8 italic">
              "Empowering Africa's next generation through technology and media, 
              building bridges between local creativity and global innovation."
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: 'Innovation',
                  description: 'Pioneering solutions that address real African challenges',
                  icon: '🚀'
                },
                {
                  title: 'Empowerment',
                  description: 'Creating opportunities for local talent to thrive globally',
                  icon: '💪'
                },
                {
                  title: 'Impact',
                  description: 'Measuring success by the positive change we create',
                  icon: '🌍'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 transform hover:scale-105 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-16 w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Vision;