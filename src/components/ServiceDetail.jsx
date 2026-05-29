import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiChevronRight, FiPhone, FiCheckCircle, FiCalendar, FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';
import { servicesData } from '../data/servicesData';
import Navbar from './Navbar';
import Footer from './Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find(s => s.id === serviceId);
    setService(foundService);
    if (foundService) {
      document.title = foundService.seo.title;
    }
    window.scrollTo(0, 0);
  }, [serviceId]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary font-bold">Service not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/80 mb-6"
          >
            <Link to="/" className="hover:text-accent transition-colors flex items-center gap-2">
              <FiHome size={16} />
              <span>Home</span>
            </Link>
            <FiChevronRight size={16} />
            <Link to="/#services" className="hover:text-accent transition-colors">Services</Link>
            <FiChevronRight size={16} />
            <span className="text-accent">{service.title}</span>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.shortIntro}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-gradient-gold text-white font-bold shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
              >
                <FiCalendar size={20} />
                Free Inspection
              </Link>
              <a
                href="tel:+919415598626"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-transparent border-2 border-accent text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300"
              >
                <FiPhone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
              About Our <span className="text-accent">{service.title}</span>
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Why Choose This <span className="text-accent">Service</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl bg-bg p-8 border border-gray-100 shadow-card hover:border-accent/30 hover:shadow-card-hover transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-card group-hover:scale-110 transition-transform duration-300">
                  <FiCheckCircle size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-primary mb-3 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-textSecondary">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              How We <span className="text-accent">Work</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:shadow-card-hover hover:border-accent/30 transition-all duration-500 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6 shadow-card animate-pulse-glow">
                      <span className="text-white font-black text-2xl">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-black text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-textSecondary text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <FiArrowRight size={24} className="text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-4">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Before & <span className="text-accent">After</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.beforeAfterImages.map((images, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={images.before}
                    alt="Before"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white py-3 text-center font-bold">
                    Before
                  </div>
                </div>
                <div className="group relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={images.after}
                    alt="After"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-gold text-white py-3 text-center font-bold">
                    After
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-bg transition-colors"
                >
                  <span className="text-lg font-bold text-primary pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <FiMinus size={24} className="text-accent flex-shrink-0" />
                  ) : (
                    <FiPlus size={24} className="text-accent flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="px-8 text-textSecondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready For <span className="text-accent">{service.title}</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get a free inspection today and let our experts handle all your waterproofing needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-gradient-gold text-white font-black text-lg shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                <FiCalendar size={24} />
                Get Free Inspection
              </Link>
              <a
                href="tel:+919415598626"
                className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-white/10 border-2 border-accent text-accent font-black text-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                <FiPhone size={24} />
                +91 94155 98626
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Get In <span className="text-accent">Touch</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-bg p-8 md:p-12 shadow-card border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary font-bold mb-3">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-primary font-bold mb-3">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-primary font-bold mb-3">Email Address</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-primary font-bold mb-3">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 text-primary placeholder-textSecondary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-gradient-gold text-white font-black text-lg shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
