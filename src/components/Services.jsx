import React from 'react';
import { motion } from 'framer-motion';
import {
  FiDroplet,
  FiShield,
  FiHome,
  FiCheck,
  FiStar,
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiDroplet,
      title: 'Roof Waterproofing',
      description: 'Premium roof protection with luxury materials and craftsmanship.',
    },
    {
      icon: FiShield,
      title: 'Basement Waterproofing',
      description: 'Keep your basement dry and protected with our expert solutions.',
    },
    {
      icon: FiHome,
      title: 'Terrace Waterproofing',
      description: 'Elegant terrace solutions for long-lasting water protection.',
    },
    {
      icon: FiCheck,
      title: 'Bathroom Waterproofing',
      description: 'Luxury bathroom waterproofing for premium properties.',
    },
    {
      icon: FiStar,
      title: 'Crack Filling',
      description: 'Professional crack sealing to protect your valuable property.',
    },
    {
      icon: FiShield,
      title: 'Chemical Treatment',
      description: 'Advanced chemical treatments for maximum waterproofing.',
    },
    {
      icon: FiDroplet,
      title: 'Heat Insulation',
      description: 'Premium thermal insulation for energy efficiency.',
    },
    {
      icon: FiCheck,
      title: 'Swimming Pool',
      description: 'Luxury waterproofing for pools and water features.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-4">
            Premium Waterproofing
            <span className="block text-accent">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Luxury waterproofing services tailored for discerning residential and commercial clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -12,
                boxShadow: '0 20px 60px -20px rgba(245,158,11,0.25)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group rounded-2xl bg-white p-8 border border-gray-100 shadow-card hover:border-accent/30 transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-card group-hover:shadow-card-hover transition-all duration-300"
              >
                <service.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-black text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-textSecondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
