
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Recycle, Sprout, Factory } from 'lucide-react';

const StatCounter: React.FC<{ end: number, suffix: string, duration: number }> = ({ end, suffix, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Impact: React.FC = () => {
  return (
    <section className="py-24 bg-[#2D3748] relative overflow-hidden text-white">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src="https://picsum.photos/id/10/800/800" alt="background" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why It Matters: <span className="text-[#38A169]">The Impact</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our mission is bigger than bricks. We are addressing global waste challenges with localized technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-[#38A169]/20 rounded-2xl flex items-center justify-center text-[#38A169] mb-6">
              <Recycle size={32} />
            </div>
            <h3 className="text-4xl font-bold mb-2">
              <StatCounter end={300} suffix="M+" duration={2} />
            </h3>
            <p className="text-[#38A169] font-bold uppercase tracking-widest text-sm mb-4">Tons Plastic Waste</p>
            <p className="text-gray-400 leading-relaxed">
              Over 300 million tons of plastic are produced annually. Most take 500+ years to decompose. We give that plastic a 500-year purpose.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-[#38A169]/20 rounded-2xl flex items-center justify-center text-[#38A169] mb-6">
              <Sprout size={32} />
            </div>
            <h3 className="text-4xl font-bold mb-2">0 <span className="text-lg font-normal">Soil Used</span></h3>
            <p className="text-[#38A169] font-bold uppercase tracking-widest text-sm mb-4">Zero Topsoil Extraction</p>
            <p className="text-gray-400 leading-relaxed">
              Traditional brick kilns strip away fertile agricultural soil. Our process uses zero soil, preserving vital farmland for future generations.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-[#38A169]/20 rounded-2xl flex items-center justify-center text-[#38A169] mb-6">
              <Factory size={32} />
            </div>
            <h3 className="text-4xl font-bold mb-2">100% <span className="text-lg font-normal">Locked</span></h3>
            <p className="text-[#38A169] font-bold uppercase tracking-widest text-sm mb-4">Industrial Waste Transformed</p>
            <p className="text-gray-400 leading-relaxed">
              Instead of letting fly ash contaminate groundwater, we lock it safely inside a polymer matrix, turning pollution into infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
