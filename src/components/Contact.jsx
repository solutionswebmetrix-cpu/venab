import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 94155 98626',
      href: 'tel:+919415598626',
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'info@venabwaterproofing.com',
      href: 'mailto:info@venabwaterproofing.com',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Bhulanpur PAC, Lohta Bazar, Churamanpur, Uttar Pradesh',
    },
    {
      icon: FiClock,
      title: 'Availability',
      value: 'Open 24 Hours',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-4">
            Get In Touch
            <span className="block text-accent">Today</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Ready to protect your property? Contact us for a free inspection and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="rounded-2xl bg-white p-7 border border-gray-100 shadow-card hover:border-accent/30 hover:shadow-card-hover transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-card">
                    <info.icon size={30} className="text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-primary font-black text-lg mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-xl text-primary hover:text-accent transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xl text-primary font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl bg-white p-10 border border-gray-100 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-primary font-black mb-3 text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-bg border border-gray-100 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 text-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-primary font-black mb-3 text-lg">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-bg border border-gray-100 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 text-lg"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-primary font-black mb-3 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-bg border border-gray-100 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 text-lg"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-primary font-black mb-3 text-lg">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-5 rounded-2xl bg-bg border border-gray-100 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 text-lg resize-none"
                    placeholder="Describe your waterproofing needs..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full px-10 py-6 bg-gradient-gold text-white font-black text-lg shadow-card hover:shadow-card-hover transition-all duration-300 animate-pulse-glow"
                >
                  <FiSend size={22} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
