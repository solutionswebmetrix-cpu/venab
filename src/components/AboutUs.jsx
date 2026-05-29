import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiChevronRight,
  FiAward,
  FiUsers,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiHome as FiHouse,
  FiShoppingBag,
  FiBookOpen,
  FiPackage,
  FiBox,
  FiBriefcase,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
import { servicesData } from '../data/servicesData';

const AboutUs = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '5.0', label: 'Google Rating' },
  ];

  const whyChooseUs = [
    {
      icon: FiUsers,
      title: 'Experienced Professionals',
      description: 'Our team consists of highly trained waterproofing specialists with years of industry experience.',
    },
    {
      icon: FiShield,
      title: 'Premium Materials',
      description: 'We use trusted waterproofing products known for reliability, durability, and performance.',
    },
    {
      icon: FiAward,
      title: 'Advanced Technology',
      description: 'Modern waterproofing systems ensure maximum protection and long-lasting results.',
    },
    {
      icon: FiCheckCircle,
      title: 'Customized Solutions',
      description: 'Every project receives a solution tailored to its specific requirements.',
    },
    {
      icon: FiShoppingBag,
      title: 'Affordable Pricing',
      description: 'Transparent pricing without compromising quality.',
    },
    {
      icon: FiAward,
      title: 'Quality Assurance',
      description: 'Strict quality checks ensure every project meets our standards.',
    },
    {
      icon: FiClock,
      title: 'Timely Completion',
      description: 'Projects are completed efficiently and professionally.',
    },
    {
      icon: FiUsers,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction remains our highest priority.',
    },
  ];

  const process = [
    { step: 1, title: 'Site Inspection', description: 'Detailed assessment of leakage and moisture problems.' },
    { step: 2, title: 'Problem Analysis', description: 'Identification of root causes and risk factors.' },
    { step: 3, title: 'Solution Planning', description: 'Selection of the most effective waterproofing system.' },
    { step: 4, title: 'Professional Application', description: 'Implementation using premium materials and expert workmanship.' },
    { step: 5, title: 'Quality Testing', description: 'Final inspection to ensure complete waterproof protection.' },
  ];

  const industries = [
    { icon: FiHouse, name: 'Residential Buildings' },
    { icon: FiHouse, name: 'Villas & Homes' },
    { icon: FiHome, name: 'Apartments' },
    { icon: FiBriefcase, name: 'Commercial Buildings' },
    { icon: FiShoppingBag, name: 'Shopping Complexes' },
    { icon: FiShield, name: 'Hospitals' },
    { icon: FiBookOpen, name: 'Schools & Colleges' },
    { icon: FiShield, name: 'Hotels' },
    { icon: FiPackage, name: 'Warehouses' },
    { icon: FiBox, name: 'Factories' },
    { icon: FiPackage, name: 'Industrial Facilities' },
    { icon: FiBriefcase, name: 'Government Projects' },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90" />
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
            <span className="text-accent">About Us</span>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              India's <span className="text-accent">Trusted Waterproofing Experts</span>
            </h1>
            <p className="text-2xl text-white/90 font-bold mb-4">
              Protecting Structures. Preserving Value. Delivering Excellence.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              We specialize in providing advanced waterproofing solutions that protect properties from water-related damage and ensure long-term structural durability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed mb-8">
                Water damage is one of the most common yet costly problems faced by homeowners, builders, commercial property owners, and industrial facilities. Leakage, seepage, dampness, cracks, and moisture penetration can significantly reduce the lifespan of a structure while affecting its appearance, safety, and value.
              </p>
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed">
                At Venab Waterproofing, we specialize in providing advanced waterproofing solutions that protect properties from water-related damage and ensure long-term structural durability. With years of industry experience, skilled professionals, premium-quality materials, and modern waterproofing technologies, we have become a trusted name for waterproofing services across Uttar Pradesh.
              </p>
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed mt-8">
                Whether you are dealing with a leaking roof, damp basement, cracked terrace, bathroom seepage, swimming pool leakage, or excessive heat absorption, our customized solutions are designed to provide complete protection and lasting results.
              </p>
              <p className="text-xl text-primary font-bold mt-8">
                We believe waterproofing is not just a repair service—it is an investment in the future of your property.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=700&fit=crop"
                  alt="Waterproofing Work"
                  className="rounded-3xl shadow-luxury"
                />
                <div className="absolute -bottom-8 -left-8 bg-gradient-gold p-8 rounded-2xl shadow-card">
                  <div className="text-5xl font-black text-white mb-2">10+</div>
                  <div className="text-white/90 font-bold">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 text-center hover:shadow-card-hover transition-all duration-500"
              >
                <div className="text-5xl font-black text-accent mb-4">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-primary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Venab Waterproofing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              About <span className="text-accent">Venab Waterproofing</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg text-textSecondary leading-relaxed mb-16"
          >
            <p className="mb-8">
              Venab Waterproofing is a professional waterproofing and structural protection company dedicated to delivering reliable, cost-effective, and long-lasting waterproofing solutions for residential, commercial, industrial, and institutional properties.
            </p>
            <p className="mb-8">
              Our company was established with a vision to help property owners protect their investments from the damaging effects of water infiltration. Through years of practical experience and continuous innovation, we have developed effective waterproofing systems that address the root causes of leakage and moisture problems.
            </p>
            <p className="mb-8">
              We understand that every building is unique. That's why our experts carefully inspect each project before recommending the most suitable waterproofing solution. From small residential repairs to large-scale commercial waterproofing projects, we maintain the same commitment to quality, professionalism, and customer satisfaction.
            </p>
            <p className="text-xl font-bold text-primary">
              Our mission is to provide superior waterproofing services that improve building durability, enhance safety, reduce maintenance costs, and deliver complete peace of mind to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-card border border-gray-100"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mb-8 shadow-card">
                <FiAward size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">Our Vision</h3>
              <p className="text-xl text-textSecondary leading-relaxed">
                To become one of India's most trusted waterproofing companies by delivering innovative solutions, exceptional workmanship, and unmatched customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary p-10 rounded-3xl shadow-card border border-gray-800"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mb-8 shadow-card">
                <FiShield size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To protect buildings and infrastructure from water damage through advanced waterproofing technologies, professional expertise, and long-term service excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Waterproofing Is Important */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              Why <span className="text-accent">Waterproofing Is Important</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg text-textSecondary leading-relaxed mb-12"
          >
            <p className="mb-8">
              Many people only consider waterproofing after a leakage problem appears. However, preventive waterproofing is one of the smartest investments a property owner can make.
            </p>
            <p className="font-bold text-xl text-primary mb-8">Without proper waterproofing:</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Roofs develop cracks and leakage',
              'Basements suffer from moisture intrusion',
              'Walls become damp and discolored',
              'Mold and fungus begin to grow',
              'Structural strength decreases over time',
              'Interior finishes become damaged',
              'Maintenance costs increase significantly',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 bg-bg p-6 rounded-2xl border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle size={18} className="text-white" />
                </div>
                <p className="text-lg font-semibold text-primary">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12 text-xl font-bold text-primary text-center"
          >
            Professional waterproofing helps eliminate these risks while protecting the structural integrity and value of your property.
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                as={Link}
                to={`/services/${service.id}`}
                className="group rounded-2xl bg-white p-8 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-card group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {service.shortIntro}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              Why Choose <span className="text-accent">Venab Waterproofing</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-bg p-8 rounded-2xl border border-gray-100 hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-card">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-primary mb-4">{feature.title}</h3>
                <p className="text-textSecondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              Our <span className="text-accent">Waterproofing Process</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 text-center h-full flex flex-col">
                    <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6 shadow-card animate-pulse-glow">
                      <span className="text-white font-black text-3xl">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-black text-primary mb-4">{step.title}</h3>
                    <p className="text-textSecondary leading-relaxed flex-grow">{step.description}</p>
                  </div>

                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <FiChevronRight size={32} className="text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              Industries <span className="text-accent">We Serve</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-bg p-6 rounded-2xl border border-gray-100 hover:border-accent/30 transition-all duration-500 text-center"
              >
                <industry.icon size={36} className="text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
              Customer Satisfaction <span className="text-accent">Is Our Priority</span>
            </h2>
            <p className="text-xl text-textSecondary leading-relaxed mb-6">
              At Venab Waterproofing, we measure success by the satisfaction of our clients. Every project we undertake reflects our commitment to quality, reliability, and long-term performance.
            </p>
            <p className="text-xl text-textSecondary leading-relaxed">
              We believe in building lasting relationships through trust, transparency, and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Get a Free Site Inspection Today
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Don't wait until water damage becomes a costly problem. Contact Venab Waterproofing today and let our experts provide the right waterproofing solution for your property.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <FiPhone size={28} className="text-accent" />
                </div>
                <a href="tel:+919415598626" className="text-2xl font-bold text-white">
                  +91 94155 98626
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <FiMapPin size={28} className="text-accent" />
                </div>
                <p className="text-xl font-bold text-white">
                  Bhulanpur PAC, Lohta Bazar, Churamanpur, Uttar Pradesh 221108
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-gradient-gold text-white font-black text-lg shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Get Free Inspection
              </Link>
              <a
                href="tel:+919415598626"
                className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-white/10 border-2 border-accent text-accent font-black text-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                <FiPhone size={24} />
                Call Now
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-2xl font-black text-white mb-2">Venab Waterproofing</p>
              <p className="text-xl text-accent font-bold">
                Protecting Structures. Preserving Value. Delivering Excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
