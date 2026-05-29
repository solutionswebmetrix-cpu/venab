import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      text: 'Excellent service! They fixed our roof leakage problem completely. Very professional team.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      text: 'Outstanding waterproofing work. Our basement is finally dry. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      location: 'Bangalore',
      text: 'Professional and on-time service. The quality of work exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Neha Patel',
      location: 'Pune',
      text: 'Best waterproofing service we have ever used. Great attention to detail.',
      rating: 5,
    },
    {
      name: 'Vikram Joshi',
      location: 'Hyderabad',
      text: 'Very reliable and trustworthy. They provided a complete solution at a fair price.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-4">
            What Our Clients
            <span className="block text-accent">Say About Us</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-bg border border-gray-100 p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-accent fill-accent text-xl" />
                  ))}
                </div>
                <p className="text-lg text-primary leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-card">
                    <span className="text-white font-black text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-primary font-black text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-textSecondary text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="custom-swiper-pagination flex justify-center mt-4" />
      </div>
    </section>
  );
};

export default Testimonials;
