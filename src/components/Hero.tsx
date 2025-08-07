import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles, Code, TrendingUp, Video, Brain, Zap } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      title: "EMPIREL",
      subtitle: "Innovate. Create. Elevate.",
      description: "Bridging African creativity with global innovation through cutting-edge technology, strategic marketing, and professional media production.",
      background: "from-primary-900 via-primary-800 to-secondary-900",
      icon: Sparkles,
      transition: "fade",
      cta: { primary: "Discover Our Story", secondary: "Explore Services" }
    },
    {
      id: 2,
      title: "EMPIREL TECHNOLOGY",
      subtitle: "Building Tomorrow's Solutions",
      description: "Harness the power of AI, cloud computing, and innovative web applications to transform your digital presence and drive business growth.",
      background: "from-blue-900 via-cyan-800 to-primary-900",
      icon: Code,
      transition: "slide",
      cta: { primary: "View Tech Solutions", secondary: "Start Project" }
    },
    {
      id: 3,
      title: "EMPIREL MARKETING",
      subtitle: "Strategic Brand Excellence",
      description: "Data-driven marketing strategies that connect your brand with the right audience, creating compelling narratives that drive measurable results.",
      background: "from-rose-900 via-pink-800 to-secondary-900",
      icon: TrendingUp,
      transition: "zoom",
      cta: { primary: "Marketing Services", secondary: "Get Strategy" }
    },
    {
      id: 4,
      title: "EMPIREL STUDIO",
      subtitle: "Visual Storytelling Mastery",
      description: "Professional video production, photography, and sound design that brings your vision to life with cinematic quality and creative excellence.",
      background: "from-purple-900 via-violet-800 to-primary-900",
      icon: Video,
      transition: "flip",
      cta: { primary: "Studio Portfolio", secondary: "Book Session" }
    },
    {
      id: 5,
      title: "AI-POWERED FUTURE",
      subtitle: "Next-Gen Innovation Hub",
      description: "Experience the future of business automation with our cutting-edge AI solutions, machine learning models, and intelligent systems.",
      background: "from-emerald-900 via-teal-800 to-primary-900",
      icon: Brain,
      transition: "parallax",
      cta: { primary: "AI Solutions", secondary: "Learn More" }
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, currentSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Touch/swipe functionality
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      startX = 0;
      startY = 0;
    };

    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.addEventListener('touchstart', handleTouchStart);
      heroElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('touchstart', handleTouchStart);
        heroElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key >= '1' && e.key <= '5') {
        goToSlide(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTransitionClass = (slideIndex: number, transition: string) => {
    const isActive = slideIndex === currentSlide;
    const isPrev = slideIndex === (currentSlide - 1 + slides.length) % slides.length;
    const isNext = slideIndex === (currentSlide + 1) % slides.length;

    switch (transition) {
      case 'fade':
        return `transition-opacity duration-800 ease-in-out ${
          isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'
        }`;
      
      case 'slide':
        return `transition-transform duration-800 ease-in-out ${
          isActive ? 'translate-x-0 z-20' : 
          isPrev ? '-translate-x-full z-10' : 
          'translate-x-full z-10'
        }`;
      
      case 'zoom':
        return `transition-all duration-800 ease-in-out ${
          isActive ? 'scale-100 opacity-100 z-20' : 'scale-110 opacity-0 z-10'
        }`;
      
      case 'flip':
        return `transition-all duration-800 ease-in-out transform-gpu ${
          isActive ? 'rotateY-0 opacity-100 z-20' : 'rotateY-90 opacity-0 z-10'
        }`;
      
      case 'parallax':
        return `transition-all duration-1000 ease-out ${
          isActive ? 'translate-y-0 scale-100 opacity-100 z-20' : 
          'translate-y-10 scale-95 opacity-0 z-10'
        }`;
      
      default:
        return `transition-opacity duration-800 ease-in-out ${
          isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'
        }`;
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      role="banner"
      aria-label="Hero slider"
    >
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 ${getTransitionClass(index, slide.transition)}`}
            aria-hidden={index !== currentSlide}
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.background}`}>
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #FAD707 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, #D0A51D 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    animation: 'float 20s ease-in-out infinite'
                  }}
                />
              </div>

              {/* Floating elements specific to each slide */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float opacity-20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${8 + Math.random() * 4}s`
                    }}
                  >
                    <slide.icon 
                      className="w-6 h-6 text-accent-500" 
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(250, 215, 7, 0.6))'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex items-center">
              <div className="w-full">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-accent-500/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-accent-500/30">
                    <slide.icon className="w-12 h-12 text-accent-500" />
                  </div>
                </div>

                {/* Main heading */}
                <h1 className="font-playfair text-6xl md:text-8xl font-bold text-neutral-50 mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="font-poppins text-2xl md:text-4xl font-light text-accent-400 mb-8">
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p className="font-inter text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="group px-8 py-4 bg-accent-500 hover:bg-accent-600 text-primary-900 font-poppins font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent-500/25 flex items-center space-x-3"
                  >
                    <span>{slide.cta.primary}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('departments')}
                    className="group px-8 py-4 bg-transparent border-2 border-neutral-50/30 hover:border-accent-500 text-neutral-50 hover:text-accent-500 font-poppins font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-3"
                  >
                    <Play className="w-5 h-5" />
                    <span>{slide.cta.secondary}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-30 pointer-events-none">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="pointer-events-auto w-12 h-12 bg-neutral-50/10 hover:bg-neutral-50/20 backdrop-blur-lg rounded-full flex items-center justify-center text-neutral-50 hover:text-accent-500 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="pointer-events-auto w-12 h-12 bg-neutral-50/10 hover:bg-neutral-50/20 backdrop-blur-lg rounded-full flex items-center justify-center text-neutral-50 hover:text-accent-500 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3" role="tablist" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed ${
                index === currentSlide 
                  ? 'bg-accent-500 shadow-lg shadow-accent-500/50' 
                  : 'bg-neutral-50/30 hover:bg-neutral-50/50'
              }`}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-50/10 z-30">
        <div 
          className="h-full bg-accent-500 transition-all duration-100 ease-linear"
          style={{ 
            width: isAutoPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%'
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-30 bg-neutral-50/10 backdrop-blur-lg rounded-full px-4 py-2">
        <span className="text-neutral-50 font-inter text-sm">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default Hero;