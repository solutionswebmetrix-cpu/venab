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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-white"
            >
              Protect Your Home <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                From Water Damage
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-lg md:text-2xl leading-relaxed text-slate-300 max-w-2xl"
            >
              Professional Waterproofing Solutions with Guaranteed Protection. 24/7 emergency service available.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-5 mt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-xl transition-all duration-300"
              >
                <FiCalendar />
                Get Free Inspection
              </motion.a>
              <motion.a
                href="tel:+919415598626"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold transition-all duration-300"
              >
                <FiPhone />
                Call Now
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-left"
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
