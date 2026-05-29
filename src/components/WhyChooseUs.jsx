import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiShield,
  FiClock,
  FiAward,
  FiUsers,
  FiThumbsUp,
} from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiShield,
      title: '10 Year Warranty',
      description: 'Complete peace of mind with our luxury warranty coverage.',
    },
    {
      icon: FiCheckCircle,
      title: 'Premium Materials',
      description: 'Only the finest materials for discerning clients.',
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Highly skilled and certified waterproofing specialists.',
    },
    {
      icon: FiClock,
      title: '24/7 Emergency Service',
      description: 'Always available when you need us the most.',
    },
    {
      icon: FiAward,
      title: '5-Star Rated',
      description: 'Trusted by hundreds of satisfied clients.',
    },
    {
      icon: FiThumbsUp,
      title: '100% Satisfaction',
      description: 'Guaranteed results or we fix it for free.',
    },
  ];

  const benefits = [
    'Free site inspection',
    'Guaranteed waterproofing',
    'Competitive pricing',
    'Quick response',
    'Professional staff',
    'Latest technology',
    'Eco-friendly',
    'Licensed & insured',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-8">
              We Deliver
              <span className="block text-accent">Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-textSecondary mb-10 leading-relaxed">
              Experience luxury waterproofing with unmatched quality, attention to detail, and a commitment to perfection.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-2xl bg-bg border border-gray-100 hover:border-accent/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-card">
                    <feature.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-10 border border-gray-800 shadow-luxury">
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mb-8 shadow-card animate-pulse-glow">
                <FiAward size={38} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                Trusted by
                <br />
                <span className="text-accent">500+ Clients</span>
              </h3>
              
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <FiCheckCircle size={18} className="text-accent" />
                    </div>
                    <span className="text-gray-200 text-lg font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">10+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">5.0</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
