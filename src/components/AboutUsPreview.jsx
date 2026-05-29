import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiAward,
  FiShield,
  FiClock,
  FiUsers,
  FiChevronRight,
} from 'react-icons/fi';

const AboutUsPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
            India's <span className="text-accent">Trusted Waterproofing Experts</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Protecting structures, preserving value, and delivering excellence since day one.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-lg text-textSecondary leading-relaxed mb-6">
              At Venab Waterproofing, we specialize in providing reliable, long-lasting, and cost-effective waterproofing solutions for residential, commercial, and industrial properties. With years of experience and a commitment to quality, we help protect buildings from water leakage, seepage, dampness, cracks, and structural damage.
            </p>
            <p className="text-lg text-textSecondary leading-relaxed mb-8">
              Our expert team uses advanced waterproofing materials and proven techniques to ensure maximum protection and durability. From roof waterproofing to swimming pool waterproofing, we deliver professional services tailored to every project.
            </p>
            
            <Link
              to="/about-us"
              className="inline-flex items-center gap-3 text-accent font-bold text-lg hover:gap-4 transition-all duration-300"
            >
              Learn More About Us
              <FiChevronRight size={20} />
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop"
              alt="About Venab Waterproofing"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-bg p-8 rounded-2xl border border-gray-100 text-center">
            <div className="text-5xl font-black text-accent mb-4">10+</div>
            <div className="text-xl font-bold text-primary">Years Experience</div>
          </div>
          <div className="bg-bg p-8 rounded-2xl border border-gray-100 text-center">
            <div className="text-5xl font-black text-accent mb-4">500+</div>
            <div className="text-xl font-bold text-primary">Projects Completed</div>
          </div>
          <div className="bg-bg p-8 rounded-2xl border border-gray-100 text-center">
            <div className="text-5xl font-black text-accent mb-4">5.0</div>
            <div className="text-xl font-bold text-primary">Google Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreview;
