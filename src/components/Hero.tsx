import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, TrendingUp, Video } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 'technology',
      title: 'Empirel Technology',
      subtitle: 'Building Tomorrow\'s Digital Solutions',
      description: 'Harness the power of AI, cloud computing, and cutting-edge web applications to transform your business.',
      icon: Code,
      gradient: 'bg-department-tech',
      backgroundType: 'image',
      backgroundUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      features: ['AI & Machine Learning', 'Cloud Solutions', 'Web Applications', 'Mobile Development'],
      cta: 'Explore Tech Solutions'
    },
    {
      id: 'marketing',
      title: 'Empirel Marketing',
      subtitle: 'Strategic Campaigns That Drive Results',
      description: 'Data-driven marketing strategies that connect your brand with the right audience at the right time.',
      icon: TrendingUp,
      gradient: 'bg-department-marketing',
      backgroundType: 'image',
      backgroundUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      features: ['Digital Strategy', 'Brand Development', 'Social Media', 'Content Marketing'],
      cta: 'Boost Your Brand'
    },
    {
      id: 'studio',
      title: 'Empirel Studio',
      subtitle: 'Where Vision Meets Creative Excellence',
      description: 'Professional video production, photography, and sound design that brings your stories to life.',
      icon: Video,
      gradient: 'bg-department-studio',
      backgroundType: 'video',
      backgroundUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      features: ['Video Production', 'Photography', 'Sound Design', 'Post-Production'],
      cta: 'Create With Us'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const TextReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const words = text.split(' ');
    return (
      <span className="text-reveal">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-2"
            style={{ animationDelay: `${delay + index * 0.1}s` }}
          >
            {word}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.backgroundType === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.backgroundUrl} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
              ></div>
            )}
            {/* Gradient overlay for readability */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-80`}></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-500 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-neutral-50 mb-6">
            <TextReveal text="EMPIREL" />
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto">
            <TextReveal text="Innovate. Create. Elevate." delay={0.5} />
          </p>
        </div>

        {/* Slider container */}
        <div className="slider-container max-w-6xl mx-auto">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full absolute inset-0' 
                      : 'opacity-0 translate-x-full absolute inset-0'
                } transition-all duration-800 ease-out`}
              >
                <div className={`${slide.gradient} rounded-3xl p-8 md:p-12 glass border border-neutral-50/20`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-left">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-accent-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 animate-pulse shadow-lg shadow-accent-500/50 border border-white/20">
                          <slide.icon className="w-8 h-8 text-primary-900" />
                        </div>
                        <div>
                          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-50 drop-shadow-lg">
                            {slide.title}
                          </h2>
                        </div>
                      </div>
                      
                      <h3 className="font-poppins text-xl md:text-2xl text-accent-300 mb-6 font-semibold drop-shadow-md">
                        {slide.subtitle}
                      </h3>
                      
                      <p className="font-inter text-neutral-100 text-lg leading-relaxed mb-8 drop-shadow-sm bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        {slide.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {slide.features.map((feature, featureIndex) => (
                          <div
                            key={feature}
                            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-neutral-100 text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-accent-400/50"
                            style={{ animationDelay: `${featureIndex * 0.1}s` }}
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className="px-8 py-4 bg-accent-500/90 hover:bg-accent-600 text-primary-900 font-poppins font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm border border-accent-400/30 hover:border-accent-300">
                        {slide.cta}
                      </button>
                    </div>
                    
                    {/* Visual element */}
                    <div className="relative">
                      <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/30 flex items-center justify-center shadow-2xl">
                        <slide.icon className="w-32 h-32 text-accent-500 animate-float" />
                      </div>
                      
                      {/* Floating elements */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-accent-400 rounded-full animate-ping"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${1.5 + Math.random()}s`
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

        {/* Navigation controls */}
        <div className="flex items-center justify-center mt-12 space-x-6">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-neutral-50 hover:text-accent-400 transition-all duration-300 disabled:opacity-50 border border-white/20 hover:border-accent-400/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent-500 w-8 shadow-lg shadow-accent-500/50' 
                    : 'bg-white/30 hover:bg-white/50 border border-white/20'
                }`}
              ></button>
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-neutral-50 hover:text-accent-400 transition-all duration-300 disabled:opacity-50 border border-white/20 hover:border-accent-400/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;