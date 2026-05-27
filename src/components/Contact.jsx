import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Get In Touch
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to protect your property? Contact us for a free inspection and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <FiPhone size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                  <a href="tel:+919415598626" className="text-slate-300 text-lg hover:text-primary transition-colors">
                    +91 94155 98626
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <FiMail size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                  <a href="mailto:info@venabwaterproofing.com" className="text-slate-300 text-lg hover:text-primary transition-colors">
                    info@venabwaterproofing.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                  <p className="text-slate-300 text-lg">
                    Bhulanpur PAC, Lohta Bazar, Churamanpur, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <FiClock size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Availability</h3>
                  <p className="text-slate-300 text-lg">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Describe your waterproofing needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <FiSend />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
