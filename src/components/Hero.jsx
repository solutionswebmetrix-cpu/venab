import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiCalendar } from 'react-icons/fi';

const Hero = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '5.0', label: 'Google Rating' },
    { number: '24/7', label: 'Available' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <video
          src="/Banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-primary/60"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-goldLight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 border border-accent/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Trusted Waterproofing Experts</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              Protect Your Home with
              <br />
              <span className="text-accent">Premium Waterproofing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
            >
              Luxury waterproofing solutions tailored for discerning residential and commercial clients. Guaranteed protection, 24/7 emergency service available.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(245,158,11,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-gradient-gold text-white font-black text-lg shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <FiCalendar size={22} />
                Get Free Inspection
              </motion.a>
              <motion.a
                href="tel:+919415598626"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-transparent border-2 border-accent text-accent font-black text-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                <FiPhone size={22} />
                Call Now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: 'spring' }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
