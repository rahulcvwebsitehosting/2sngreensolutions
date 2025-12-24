
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Factory, Globe, BrickWall } from 'lucide-react';
import { COLORS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#C6F6D5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#2D3748]"
          >
            The Circular Economy in Action
          </motion.h2>
          <div className="w-24 h-1 bg-[#2F855A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10">
              <p className="text-lg leading-relaxed text-[#4A5568] mb-6">
                We are a Green-Tech startup dedicated to solving the twin crises of plastic pollution and industrial waste. By diverting non-biodegradable plastics from landfills and repurposing fly ash from power plants, we manufacture "EcoBricks" that outperform traditional clay and cement alternatives.
              </p>
              <h3 className="text-2xl font-bold text-[#2F855A] mb-3">Our Goal</h3>
              <p className="text-lg leading-relaxed text-[#4A5568]">
                To reduce the construction industry's carbon footprint while providing a cost-effective solution for durable, waterproof housing globally.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#2F855A] rounded-2xl -z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2F855A] shadow-lg mb-4 hover:scale-110 transition-transform cursor-pointer animate-pulse">
                  <Recycle size={32} />
                </div>
                <span className="font-bold text-[#2D3748]">Recycling</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2F855A] shadow-lg mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Factory size={32} />
                </div>
                <span className="font-bold text-[#2D3748]">Production</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2F855A] shadow-lg mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <BrickWall size={32} />
                </div>
                <span className="font-bold text-[#2D3748]">Infrastructure</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2F855A] shadow-lg mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Globe size={32} />
                </div>
                <span className="font-bold text-[#2D3748]">Environment</span>
              </div>
            </div>
            
            <div className="mt-12 text-center max-w-sm">
              <p className="font-mono text-sm uppercase tracking-widest text-[#2F855A] mb-4">Circular Workflow</p>
              <div className="flex items-center gap-2 justify-center">
                 <div className="w-3 h-3 rounded-full bg-[#2F855A]"></div>
                 <div className="w-12 h-1 bg-[#2F855A]/30"></div>
                 <div className="w-3 h-3 rounded-full bg-[#2F855A]"></div>
                 <div className="w-12 h-1 bg-[#2F855A]/30"></div>
                 <div className="w-3 h-3 rounded-full bg-[#2F855A]"></div>
              </div>
              <p className="mt-4 text-[#4A5568] italic font-medium">Plastic &rarr; Brick &rarr; Building &rarr; Sustainable Future</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
