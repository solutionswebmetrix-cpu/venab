import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
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
          {servicesData.map((service, index) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`}
              className="block"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  boxShadow: '0 20px 60px -20px rgba(245,158,11,0.25)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group rounded-2xl bg-white p-8 border border-gray-100 shadow-card hover:border-accent/30 transition-all duration-500 cursor-pointer h-full"
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
                  {service.shortIntro}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
