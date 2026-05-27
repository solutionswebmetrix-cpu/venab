import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  const services = [
    'Roof Waterproofing',
    'Wall Leakage Repair',
    'Bathroom Waterproofing',
    'Terrace Treatment',
    'Basement Waterproofing',
    'Crack Filling',
    'Chemical Coating',
    'Industrial Waterproofing',
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Venab<span className="text-primary">Water</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Professional waterproofing solutions with guaranteed protection. Serving residential, commercial, and industrial properties.
            </p>
            <div className="flex items-center gap-3">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  Bhulanpur PAC, Lohta Bazar, Churamanpur, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary flex-shrink-0" />
                <a href="tel:+919415598626" className="text-slate-400 hover:text-primary transition-colors">
                  +91 94155 98626
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-primary flex-shrink-0" />
                <a href="mailto:info@venabwaterproofing.com" className="text-slate-400 hover:text-primary transition-colors">
                  info@venabwaterproofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 Venab Water Proofing. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Open 24 Hours • 5.0 ⭐ Google Rating
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
