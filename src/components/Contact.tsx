import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-8 text-white">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
            Ready to innovate, create, and elevate? Let's build the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 peer"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 -top-2 text-sm text-teal-400 bg-slate-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-teal-400">
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 peer"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-4 -top-2 text-sm text-teal-400 bg-slate-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-teal-400">
                      Your Email
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 peer"
                    placeholder="Company (Optional)"
                  />
                  <label className="absolute left-4 -top-2 text-sm text-teal-400 bg-slate-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-teal-400">
                    Company (Optional)
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 peer resize-none"
                    placeholder="Your Message"
                  ></textarea>
                  <label className="absolute left-4 -top-2 text-sm text-teal-400 bg-slate-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-teal-400">
                    Your Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl font-semibold text-white hover:from-teal-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white font-semibold">hello@empirel.co.tz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <p className="text-white font-semibold">+255 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Location</p>
                      <p className="text-white font-semibold">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Follow Us</h3>
                
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'from-blue-500 to-blue-600' },
                    { icon: Twitter, color: 'from-sky-500 to-sky-600' },
                    { icon: Instagram, color: 'from-pink-500 to-rose-500' },
                    { icon: Linkedin, color: 'from-blue-600 to-blue-700' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group`}
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Tanzania Map */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <div className="w-full h-48 bg-gradient-to-br from-teal-900/30 to-green-900/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-teal-400 animate-bounce" />
                    <p className="font-orbitron text-xl font-bold">Tanzania</p>
                    <p className="text-white/60">East Africa</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;