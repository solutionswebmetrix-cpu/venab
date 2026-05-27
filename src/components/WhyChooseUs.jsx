import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCheck,
  FiShield,
  FiAward,
  FiClock,
  FiUsers,
  FiPhone,
  FiBox,
} from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiShield,
      title: 'Guaranteed Protection',
      description: '100% satisfaction guarantee on all our waterproofing services.',
    },
    {
      icon: FiAward,
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of industry experience.',
    },
    {
      icon: FiClock,
      title: '24/7 Service',
      description: 'Round-the-clock emergency service for urgent waterproofing needs.',
    },
    {
      icon: FiUsers,
      title: '500+ Happy Clients',
      description: 'Trusted by hundreds of satisfied customers across the region.',
    },
    {
      icon: FiPhone,
      title: 'Free Inspection',
      description: 'Get a free professional inspection and quote for your property.',
    },
    {
      icon: FiBox,
      title: 'Premium Materials',
      description: 'Only the highest quality materials for long-lasting results.',
    },
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight"
            >
              The Most Trusted
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Waterproofing Experts
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              With over a decade of experience, we deliver premium waterproofing solutions that protect your property for years to come.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {reasons.slice(0, 2).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <FiCheck className="text-green-400" size={16} />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{reason.title}</h4>
                    <p className="text-slate-400 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, scale: 0.8, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100, damping: 12 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)',
                  borderColor: 'rgba(6, 182, 212, 0.3)',
                }}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4"
                >
                  <reason.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
