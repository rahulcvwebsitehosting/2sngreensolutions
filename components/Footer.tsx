
import React from 'react';
import { Linkedin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D3748] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={IMAGES.logo} alt="Logo" className="h-10 w-auto rounded" onError={(e) => {
               (e.target as HTMLImageElement).src = "https://via.placeholder.com/40?text=SN";
              }} />
              <span className="font-bold text-xl tracking-tight">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Rebuilding the world, one plastic brick at a time. High-performance, carbon-negative building materials.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Mission</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Product Details</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Technical Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#38A169]">📧</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38A169]">📞</span>
                <div className="flex flex-col">
                  {COMPANY_INFO.phone.split(',').map((p, i) => (
                    <a key={i} href={`tel:${p.trim()}`} className="hover:text-white transition-colors">{p.trim()}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38A169]">📍</span>
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. | Designed for a Sustainable Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
