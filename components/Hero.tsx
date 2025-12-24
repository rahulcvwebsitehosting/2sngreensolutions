
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Rebuilding the World, <br />
          <span className="text-[#38A169]">One Plastic Brick at a Time.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
        >
          Transforming PET/HDPE waste and industrial fly ash into 
          high-performance, carbon-negative building materials for a sustainable future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#product" 
            className="w-full sm:w-auto px-8 py-4 bg-[#2F855A] hover:bg-[#38A169] text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-2xl"
          >
            View the Innovation <ChevronRight size={20} />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-[#2F855A] text-[#C6F6D5] hover:bg-[#2F855A] hover:text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-[#F7FAFC]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
