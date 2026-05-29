import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'projects', 'testimonials', 'contact'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const targetId = href.slice(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-card border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-24">
          <Link 
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center">
              <span className="text-white font-black text-2xl">V</span>
            </div>
            <span className="text-3xl font-black tracking-tight text-primary">
              Venab
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = (link.href === '/' && location.pathname === '/') ||
                             (link.href.startsWith('/#') && activeSection === link.href.slice(2) && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`transition-all duration-300 relative group font-semibold text-lg ${
                    isActive 
                      ? 'text-accent' 
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-accent rounded-full transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919415598626"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-gradient-gold text-white font-bold shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <FiPhone size={20} />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-2"
          >
            {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="md:hidden bg-white border-t border-gray-100 shadow-card"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => {
                const isActive = (link.href === '/' && location.pathname === '/') ||
                               (link.href.startsWith('/#') && activeSection === link.href.slice(2) && location.pathname === '/');
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block text-xl w-full text-left transition-colors duration-300 font-semibold ${
                      isActive ? 'text-accent' : 'text-primary hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="tel:+919415598626"
                className="inline-flex items-center justify-center gap-3 w-full rounded-full px-8 py-5 bg-gradient-gold text-white font-bold shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
              >
                <FiPhone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
