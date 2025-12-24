
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, IMAGES } from '../constants';

const team = [
  {
    name: 'Mr. Ram Sanjai R',
    role: 'Founder & CEO',
    focus: 'Strategy, Vision, Government Relations',
    bio: 'Leading the company toward a zero-waste future through strategic government partnerships.',
    img: IMAGES.team.ram,
    fallback: 'https://picsum.photos/id/1/400/400'
  },
  {
    name: 'Mr. Naveen M',
    role: 'Co-founder & CMO',
    focus: 'Brand Positioning, Market Entry, Sales',
    bio: 'Driving market adoption by bridging ecological consciousness and practical construction needs.',
    img: IMAGES.team.naveen,
    fallback: 'https://picsum.photos/id/2/400/400'
  },
  {
    name: 'Mr. Rahul S',
    role: 'Co-founder & CTO',
    focus: 'Engineering, R&D, Machine Design',
    bio: 'The technical architect behind our proprietary dual-chamber extrusion technology.',
    img: IMAGES.team.rahul,
    fallback: 'https://picsum.photos/id/3/400/400'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-[#C6F6D5]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Minds Behind the Mission</h2>
          <div className="w-24 h-1 bg-[#2F855A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = member.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F855A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-[#2F855A] shadow-xl hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#2D3748] mb-1">{member.name}</h3>
                <p className="text-[#38A169] font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <div className="text-left space-y-4">
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase">Focus</span>
                    <p className="text-[#4A5568] font-medium">{member.focus}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase">Bio</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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

export default Team;
