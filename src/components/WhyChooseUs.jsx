import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiAward,
} from 'react-icons/fi';
import { whyChooseUsData } from '../data/servicesData';

const WhyChooseUs = () => {
  const features = whyChooseUsData.slice(0, 6);
  const benefits = whyChooseUsData.slice(6);

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
              Water damage can compromise the strength, safety, and value of your property. At Venab Waterproofing, we provide comprehensive waterproofing and protection solutions designed to safeguard your investment for years to come.
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
                    <FiAward size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    {feature.desc}
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
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCheckCircle size={18} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-bold">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
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
