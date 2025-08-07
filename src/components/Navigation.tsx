import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'departments', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleDepartmentClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsDepartmentsOpen(false);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'contact', label: 'Contact' },
  ];

  const departments = [
    { name: 'Technology', url: 'https://tech.empirel.co.tz' },
    { name: 'Marketing', url: 'https://marketing.empirel.co.tz' },
    { name: 'Studio', url: 'https://studio.empirel.co.tz' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.departments-dropdown')) {
        setIsDepartmentsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-teal-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 
              onClick={() => scrollToSection('hero')}
              className="font-playfair text-2xl font-bold text-accent-500 cursor-pointer hover:text-accent-400 transition-colors duration-300"
            >
              EMPIREL
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-accent-500 border-b-2 border-accent-500'
                      : 'text-neutral-50 hover:text-accent-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Departments Dropdown */}
              <div className="relative departments-dropdown">
                <button
                  onMouseEnter={() => setIsDepartmentsOpen(true)}
                  className="flex items-center px-3 py-2 text-sm font-medium text-neutral-50 hover:text-accent-400 transition-all duration-300"
                >
                  Departments
                  <ChevronDown 
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isDepartmentsOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-lg rounded-lg border border-teal-400/20 shadow-xl transition-all duration-300 ${
                    isDepartmentsOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsDepartmentsOpen(true)}
                  onMouseLeave={() => setIsDepartmentsOpen(false)}
                >
                  <div className="py-2">
                    {departments.map((dept) => (
                      <button
                        key={dept.name}
                        onClick={() => handleDepartmentClick(dept.url)}
                        className="w-full text-left px-4 py-3 text-sm text-neutral-50 hover:text-accent-400 hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span>Empirel {dept.name}</span>
                        <svg 
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={() => {
                  // Login functionality will be added later
                  console.log('Login clicked');
                }}
                className="flex items-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium text-sm rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-50 hover:text-accent-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-accent-500'
                    : 'text-neutral-50 hover:text-accent-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Departments */}
            <div className="px-3 py-2">
              <div className="text-neutral-400 text-sm font-medium mb-2">Departments</div>
              {departments.map((dept) => (
                <button
                  key={dept.name}
                  onClick={() => handleDepartmentClick(dept.url)}
                  className="block w-full text-left px-3 py-2 text-sm text-neutral-50 hover:text-accent-400 transition-colors"
                >
                  Empirel {dept.name}
                </button>
              ))}
            </div>

            {/* Mobile Login */}
            <div className="px-3 py-2">
              <button
                onClick={() => {
                  // Login functionality will be added later
                  console.log('Login clicked');
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium text-sm rounded-lg transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;