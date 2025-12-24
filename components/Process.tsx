
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Scissors, Flame, RotateCw, Box, Zap } from 'lucide-react';
import { IMAGES } from '../constants';

const steps = [
  { icon: <Recycle />, name: 'Collect', desc: 'Sourcing PET/HDPE waste from recycling centers.' },
  { icon: <Scissors />, name: 'Shred', desc: 'Industrial shredding to uniform particle size.' },
  { icon: <Flame />, name: 'Melt', desc: 'Dual-chamber heating reaching 260°C.' },
  { icon: <RotateCw />, name: 'Mix', desc: 'Twin-screw extrusion with sand and fly ash (2:3:1).' },
  { icon: <Box />, name: 'Mold', desc: 'Precision interlocking molding & cooling.' }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">From Waste to Wonder</h2>
          <p className="text-gray-600">Our proprietary manufacturing process ensures quality and sustainability at every step.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gray-200 z-0"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#2F855A] shadow-lg mb-6 group-hover:bg-[#2F855A] group-hover:text-white transition-all transform group-hover:-translate-y-2 border border-gray-100">
                  {step.icon}
                </div>
                <div className="mb-2">
                  <span className="text-xs font-mono font-bold text-[#38A169] uppercase tracking-tighter">Step {idx + 1}</span>
                  <h4 className="text-xl font-bold text-[#2D3748]">{step.name}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                
                {/* Connector Arrow Mobile */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden my-6 text-gray-300">
                    <div className="w-px h-12 bg-gray-300 mx-auto"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
             <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#2D3748]">
               <div className="p-2 bg-[#C6F6D5] rounded-lg">
                 <Zap size={24} className="text-[#2F855A]" />
               </div>
               Industrial Efficiency
             </h3>
             <p className="text-gray-600 leading-relaxed mb-6">
               Our dual-chamber system ensures that the plastic melt temperature never exceeds 280°C, preventing any harmful gas emission during production. The resulting composite is inert, safe, and incredibly durable.
             </p>
             <div className="grid grid-cols-3 gap-4">
               <div className="text-center p-3 bg-[#F7FAFC] rounded-xl border border-gray-100">
                 <p className="text-2xl font-bold text-[#2F855A]">260°C</p>
                 <p className="text-[10px] font-bold text-gray-400 uppercase">Melt Point</p>
               </div>
               <div className="text-center p-3 bg-[#F7FAFC] rounded-xl border border-gray-100">
                 <p className="text-2xl font-bold text-[#2F855A]">2:3:1</p>
                 <p className="text-[10px] font-bold text-gray-400 uppercase">Ratio Mix</p>
               </div>
               <div className="text-center p-3 bg-[#F7FAFC] rounded-xl border border-gray-100">
                 <p className="text-2xl font-bold text-[#2F855A]">Zero</p>
                 <p className="text-[10px] font-bold text-gray-400 uppercase">Emissions</p>
               </div>
             </div>
          </div>
          <div className="flex-1 w-full h-80 bg-[#E2E8F0] rounded-2xl overflow-hidden relative group shadow-inner">
            <img 
              src={IMAGES.efficiency} 
              alt="Industrial Efficiency - Clean Tech Production" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest px-2 py-1 bg-[#2F855A]/80 rounded">Live Laboratory R&D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
