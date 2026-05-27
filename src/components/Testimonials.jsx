import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rakesh Sharma',
      location: 'Varanasi',
      rating: 5,
      text: 'Excellent service! They fixed our roof leakage problem completely. Very professional team and reasonable prices.',
    },
    {
      name: 'Priya Patel',
      location: 'Churamanpur',
      rating: 5,
      text: 'Best waterproofing service in the area. Our bathroom is now completely dry. Highly recommend Venab Water Proofing!',
    },
    {
      name: 'Amit Singh',
      location: 'Lohta Bazar',
      rating: 5,
      text: '24/7 emergency service saved us during heavy rains. Quick response and quality work. 5 stars!',
    },
    {
      name: 'Sunita Verma',
      location: 'Bhulanpur',
      rating: 5,
      text: 'They did an amazing job with our basement waterproofing. The team was courteous and professional throughout.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            What Our Clients
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
