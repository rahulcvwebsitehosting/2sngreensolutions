
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, Link, Flame } from 'lucide-react';
import { IMAGES } from '../constants';

const features = [
  {
    icon: <Droplets className="text-blue-500" />,
    title: '100% Waterproof',
    desc: 'Near-zero water absorption prevents wall dampness and fungal growth.'
  },
  {
    icon: <ShieldCheck className="text-green-600" />,
    title: 'Superior Strength',
    desc: 'Tested to withstand higher compressive loads than standard Grade-A clay bricks.'
  },
  {
    icon: <Link className="text-orange-500" />,
    title: 'Lightweight & Interlocking',
    desc: 'Designed for faster construction and reduced structural load on foundations.'
  },
  {
    icon: <Flame className="text-red-500" />,
    title: 'Fire Resistant',
    desc: 'Processed with stabilized additives to meet global fire safety standards.'
  }
];

const Product: React.FC = () => {
  return (
    <section id="product" className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Introducing the EcoBrick
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A high-density polymer-sand composite that sequesters plastic permanently within our cities' infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src={IMAGES.prototype} 
              alt="EcoBrick Prototype" 
              className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/800/600?bricks";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <span className="bg-[#38A169] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Advanced Prototype</span>
                <h3 className="text-white text-2xl font-bold mt-2">Next-Gen Construction</h3>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-transparent hover:border-[#2F855A]"
              >
                <div className="mb-4">{f.icon}</div>
                <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#2F855A] rounded-2xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4">Engineering for Efficiency</h3>
            <p className="text-lg text-[#C6F6D5]">
              Our interlocking system eliminates the need for excessive mortar, reduces labor costs by 40%, and allows for rapid assembly in diverse environments.
            </p>
          </div>
          <button className="whitespace-nowrap bg-white text-[#2F855A] font-bold px-8 py-4 rounded-lg hover:bg-[#F7FAFC] transition-colors shadow-lg">
            Download Tech Brief
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
