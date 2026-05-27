import React from 'react';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiDroplet,
  FiCoffee,
  FiSun,
  FiBriefcase,
  FiTool,
  FiBox,
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Roof Waterproofing',
      description: 'Complete roof protection with premium materials and expert installation.',
    },
    {
      icon: FiDroplet,
      title: 'Wall Leakage Repair',
      description: 'Fix wall seepage and dampness with advanced chemical treatments.',
    },
    {
      icon: FiCoffee,
      title: 'Bathroom Waterproofing',
      description: 'Prevent bathroom leaks and moisture damage with lasting solutions.',
    },
    {
      icon: FiSun,
      title: 'Terrace Treatment',
      description: 'Protect your terrace from rainwater and weather damage.',
    },
    {
      icon: FiBox,
      title: 'Basement Waterproofing',
      description: 'Keep your basement dry and protected from groundwater.',
    },
    {
      icon: FiTool,
      title: 'Crack Filling',
      description: 'Professional crack repair to prevent water ingress.',
    },
    {
      icon: FiDroplet,
      title: 'Chemical Coating',
      description: 'Advanced chemical coatings for long-lasting protection.',
    },
    {
      icon: FiBriefcase,
      title: 'Industrial Waterproofing',
      description: 'Industrial-grade waterproofing for commercial properties.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="services" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight"
          >
            Professional Waterproofing
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive waterproofing services for residential, commercial, and industrial properties.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotate: 2,
                boxShadow: '0 25px 50px -12px rgba(6,182,212,0.25)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl transition-all duration-500 group"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
              >
                <service.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
