
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
             <img src={IMAGES.logo} alt="Logo" className="h-10 w-auto rounded" onError={(e) => {
               (e.target as HTMLImageElement).src = "https://via.placeholder.com/40?text=SN";
             }} />
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#2F855A]' : 'text-white'}`}>
              {COMPANY_INFO.name}
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-[#38A169] ${scrolled ? 'text-[#2D3748]' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#2F855A] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#38A169] transition-transform hover:-translate-y-1 shadow-lg"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-[#2D3748]' : 'text-white'} hover:text-[#38A169] focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 pb-6 px-4 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-2xl font-semibold text-[#2D3748] hover:text-[#2F855A]"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-[#2F855A] text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
