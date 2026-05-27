import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Residential Roof Waterproofing',
      category: 'Roofing',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20residential%20roof%20waterproofing%20project%2C%20professional%20construction%2C%20high%20quality%20photography&image_size=square_hd',
    },
    {
      title: 'Commercial Building Basement',
      category: 'Basement',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=commercial%20building%20basement%20waterproofing%2C%20industrial%20construction%2C%20professional%20work&image_size=square_hd',
    },
    {
      title: 'Luxury Bathroom Renovation',
      category: 'Bathroom',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20bathroom%20waterproofing%20and%20renovation%2C%20modern%20design&image_size=square_hd',
    },
    {
      title: 'Terrace Garden Waterproofing',
      category: 'Terrace',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=terrace%20garden%20waterproofing%20project%2C%20green%20roof%2C%20modern%20building&image_size=square_hd',
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20warehouse%20waterproofing%20project%2C%20large%20scale%20construction&image_size=square_hd',
    },
    {
      title: 'Wall Leakage Repair',
      category: 'Repair',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20wall%20leakage%20repair%20and%20waterproofing%20work&image_size=square_hd',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Recent
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work Showcase
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Browse through our portfolio of successful waterproofing projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <span className="text-primary text-sm font-semibold mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="inline-flex items-center gap-2 text-white">
                    <span>View Project</span>
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
