
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Landmark, Construction, Factory, Home, Sprout } from 'lucide-react';

const currentPhase = [
  { icon: <Microscope />, title: 'Laboratory Excellence', content: 'Successfully developed dual-chamber extrusion prototype for perfect material ratio.' },
  { icon: <Landmark />, title: 'Government Backed', content: 'Operating under government funding for BIS (Bureau of Indian Standards) certifications.' },
  { icon: <Construction />, title: 'Pilot Testing', content: 'Partnering with local bodies for non-load-bearing installations like pavements.' }
];

const futureVision = [
  { icon: <Factory />, title: 'Industrial Scaling', time: '2025-2026', content: 'Moving to fully automated manufacturing capable of processing tons daily.' },
  { icon: <Home />, title: 'Eco-Housing', time: '2026-2027', content: 'Developing Lego-style interlocking bricks for rapid disaster relief housing.' },
  { icon: <Sprout />, title: 'Carbon Credits', time: '2027+', content: 'Establishing transparent supply chains where bricks earn global plastic-offset credits.' }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Current Progress & Future Roadmap</h2>
          <div className="w-24 h-1 bg-[#2F855A] mx-auto"></div>
        </div>

        {/* Current Phase */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#C6F6D5] text-[#2F855A] px-4 py-2 rounded-full font-bold uppercase text-sm tracking-widest">Stage 01</div>
            <h3 className="text-2xl font-bold text-[#4A5568]">Current Prototype Phase</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentPhase.map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F7FAFC] p-8 rounded-2xl border-t-4 border-[#2F855A] shadow-lg"
              >
                <div className="text-[#2F855A] mb-4">{card.icon}</div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-gray-600 leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="relative mb-24 hidden md:block">
           <div className="absolute top-1/2 w-full h-1 bg-[#E2E8F0] -translate-y-1/2 z-0"></div>
           <div className="flex justify-between items-center relative z-10">
             <div className="w-4 h-4 rounded-full bg-[#2F855A] border-4 border-white shadow"></div>
             <div className="w-8 h-8 rounded-full bg-[#38A169] border-4 border-white shadow animate-ping absolute left-1/2 -translate-x-1/2"></div>
             <div className="w-8 h-8 rounded-full bg-[#2F855A] border-4 border-white shadow absolute left-1/2 -translate-x-1/2"></div>
             <div className="w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow"></div>
           </div>
           <div className="flex justify-between mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
             <span>R&D Past</span>
             <span>Current Prototype</span>
             <span>Future Scaling</span>
           </div>
        </div>

        {/* Future Vision */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#2D3748] text-white px-4 py-2 rounded-full font-bold uppercase text-sm tracking-widest">Stage 02</div>
            <h3 className="text-2xl font-bold text-[#4A5568]">The Road Ahead</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {futureVision.map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#2D3748] p-8 rounded-2xl text-white overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-[#38A169] group-hover:scale-110 transition-transform">{card.icon}</div>
                    <span className="font-mono text-[#38A169] text-sm">{card.time}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{card.content}</p>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38A169]/10 rounded-full -mr-16 -mt-16 group-hover:bg-[#38A169]/20 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
