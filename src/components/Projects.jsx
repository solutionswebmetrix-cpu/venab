import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Residential Roof Waterproofing',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
    {
      title: 'Commercial Building Basement',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    },
    {
      title: 'Swimming Pool Construction',
      category: 'Specialized',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop',
    },
    {
      title: 'Hotel Terrace Waterproofing',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    },
    {
      title: 'Apartment Complex',
      category: 'Multi-Unit',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-4">
            Recent
            <span className="block text-accent">Work Showcase</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Browse through our portfolio of successful waterproofing projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8 w-full">
                  <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-accent font-semibold">
                    <span>View Project</span>
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
