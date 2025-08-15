import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers{' '}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((item, idx) => (
          <div
            key={idx}
            className="max-w-[340px] border border-[#eeeded] shadow-lg rounded px-8 py-12 text-center"
          >
            <img src={item.image} className="w-20 h-20 rounded-full mx-auto mb-4" alt="" />
            <h2 className="text-xl text-gray-700 font-medium">{item.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{item.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: item.rating }, (_, idx) => (
                <img src={assets.star_icon} key={idx} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
