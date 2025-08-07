import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import Vision from './components/Vision';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-primary-900 text-neutral-50 overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Departments />
      <Vision />
      <Contact />
    </div>
  );
}

export default App;