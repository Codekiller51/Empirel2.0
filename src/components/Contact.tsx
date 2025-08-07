import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Code, TrendingUp, Video } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const departments = [
    {
      name: 'Empirel Technology',
      icon: Code,
      email: 'tech@empirel.co.tz',
      phone: '+255 123 456 789',
      location: 'Tech Hub, Dar es Salaam',
      color: 'from-primary-600 to-primary-800',
      services: ['AI Development', 'Cloud Solutions', 'Web Applications', 'Mobile Apps']
    },
    {
      name: 'Empirel Marketing',
      icon: TrendingUp,
      email: 'marketing@empirel.co.tz',
      phone: '+255 123 456 790',
      location: 'Creative District, Dar es Salaam',
      color: 'from-secondary-600 to-secondary-800',
      services: ['Digital Strategy', 'Brand Development', 'Social Media', 'Content Marketing']
    },
    {
      name: 'Empirel Studio',
      icon: Video,
      email: 'studio@empirel.co.tz',
      phone: '+255 123 456 791',
      location: 'Media Center, Dar es Salaam',
      color: 'from-accent-600 to-accent-500',
      services: ['Video Production', 'Photography', 'Sound Design', 'Post-Production']
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-neutral-50">
            Get In <span className="text-accent-500">Touch</span>
          </h2>
          <p className="font-poppins text-xl text-neutral-200 max-w-3xl mx-auto">
            Ready to innovate, create, and elevate? Connect with the right department for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-neutral-50/5 backdrop-blur-lg rounded-3xl p-8 border border-neutral-50/10 hover:border-accent-500/30 transition-all duration-500">
              <h3 className="font-playfair text-2xl font-bold text-neutral-50 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-700/50 border border-neutral-50/20 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 peer"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 -top-2 text-sm text-accent-400 bg-primary-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-focus:-top-2 peer-focus:text-accent-400">
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
                      className="w-full px-4 py-4 bg-primary-700/50 border border-neutral-50/20 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 peer"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-4 -top-2 text-sm text-accent-400 bg-primary-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-focus:-top-2 peer-focus:text-accent-400">
                      Your Email
                    </label>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-primary-700/50 border border-neutral-50/20 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 peer"
                      placeholder="Company (Optional)"
                    />
                    <label className="absolute left-4 -top-2 text-sm text-accent-400 bg-primary-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-focus:-top-2 peer-focus:text-accent-400">
                      Company (Optional)
                    </label>
                  </div>
                  
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-700/50 border border-neutral-50/20 rounded-xl text-neutral-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                    >
                      <option value="">Select Department</option>
                      <option value="technology">Technology</option>
                      <option value="marketing">Marketing</option>
                      <option value="studio">Studio</option>
                    </select>
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-4 bg-primary-700/50 border border-neutral-50/20 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 peer resize-none"
                    placeholder="Your Message"
                  ></textarea>
                  <label className="absolute left-4 -top-2 text-sm text-accent-400 bg-primary-800 px-2 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-focus:-top-2 peer-focus:text-accent-400">
                    Your Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-accent-600 to-accent-500 rounded-xl font-semibold text-primary-900 hover:from-accent-500 hover:to-accent-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* General Contact Info */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="space-y-8">
              <div className="bg-neutral-50/5 backdrop-blur-lg rounded-3xl p-8 border border-neutral-50/10">
                <h3 className="font-playfair text-2xl font-bold text-neutral-50 mb-6">Main Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm">General Email</p>
                      <p className="text-neutral-50 font-semibold">hello@empirel.co.tz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-neutral-50" />
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm">Main Phone</p>
                      <p className="text-neutral-50 font-semibold">+255 123 456 788</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-neutral-50" />
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm">Headquarters</p>
                      <p className="text-neutral-50 font-semibold">Empirel Tower, Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-neutral-50/5 backdrop-blur-lg rounded-3xl p-8 border border-neutral-50/10">
                <h3 className="font-playfair text-2xl font-bold text-neutral-50 mb-6">Follow Us</h3>
                
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
            </div>
          </div>
        </div>

        {/* Department Contact Cards */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <h3 className="font-playfair text-3xl font-bold text-neutral-50 text-center mb-12">
            Department Contacts
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className={`bg-neutral-50/5 backdrop-blur-lg rounded-3xl p-6 border border-neutral-50/10 hover:border-accent-500/30 transition-all duration-500 hover:shadow-xl group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="w-8 h-8 text-neutral-50" />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-neutral-50 mb-2">
                    {dept.name}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-accent-400" />
                    <span className="text-neutral-300 text-sm">{dept.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-accent-400" />
                    <span className="text-neutral-300 text-sm">{dept.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-accent-400" />
                    <span className="text-neutral-300 text-sm">{dept.location}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-50/10">
                  <p className="text-neutral-400 text-xs mb-2">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {dept.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-neutral-50/10 rounded text-neutral-300 text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;