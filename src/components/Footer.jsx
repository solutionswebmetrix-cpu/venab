import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
} from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Roof Waterproofing',
    'Basement Waterproofing',
    'Terrace Waterproofing',
    'Bathroom Waterproofing',
    'Crack Filling',
  ];

  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-card">
                <span className="text-white font-black text-2xl">V</span>
              </div>
              <span className="text-3xl font-black text-white tracking-tight">
                Venab<span className="text-accent">Waterproofing</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Professional waterproofing solutions with guaranteed protection. Serving residential, commercial, and industrial properties.
            </p>
            <div className="flex items-center gap-4">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-gradient-gold transition-all duration-300 hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-white mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg text-gray-400 hover:text-accent transition-colors duration-300 font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black text-white mb-8">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-lg text-gray-400 hover:text-accent transition-colors duration-300 font-semibold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black text-white mb-8">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FiMapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-400 text-lg leading-relaxed">
                  Bhulanpur PAC, Lohta Bazar, Churamanpur, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FiPhone className="text-accent flex-shrink-0" size={24} />
                <a href="tel:+919415598626" className="text-gray-400 text-lg hover:text-accent transition-colors font-semibold">
                  +91 94155 98626
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FiMail className="text-accent flex-shrink-0" size={24} />
                <a href="mailto:info@venabwaterproofing.com" className="text-gray-400 text-lg hover:text-accent transition-colors font-semibold">
                  info@venabwaterproofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-base font-semibold">
            © 2024 Venab Waterproofing. All rights reserved.
          </p>
          <p className="text-gray-400 text-base font-semibold">
            Open 24 Hours • 5.0 ⭐ Google Rating
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
