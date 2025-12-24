
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join the Green Revolution</h2>
          <p className="text-gray-600">Partner with us to transform waste into sustainable infrastructure.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-[#2D3748]">Partnership Opportunities</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-[#2F855A] shrink-0">
                    <span className="text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">For Investors</h4>
                    <p className="text-gray-500 text-sm">Seed funding opportunities and equity partnerships for a high-growth startup.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-[#2F855A] shrink-0">
                    <span className="text-xl">🏗️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">For Builders & Contractors</h4>
                    <p className="text-gray-500 text-sm">Bulk order discounts and pilot project collaborations for green building.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-[#2F855A] shrink-0">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">For Government Bodies</h4>
                    <p className="text-gray-500 text-sm">Sustainable housing and waste management partnerships for circular economy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-4 text-gray-600 hover:text-[#2F855A] transition-colors">
                <Mail className="text-[#2F855A]" size={20} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-4 text-gray-600">
                <Phone className="text-[#2F855A] mt-1" size={20} />
                <div className="flex flex-col">
                  {COMPANY_INFO.phone.split(',').map((p, i) => (
                    <a key={i} href={`tel:${p.trim()}`} className="hover:text-[#2F855A] transition-colors">{p.trim()}</a>
                  ))}
                </div>
              </div>
              <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-[#25D366] transition-colors">
                <MessageCircle className="text-[#25D366]" size={20} />
                <span className="font-bold">Chat on WhatsApp</span>
              </a>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="text-[#2F855A]" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {submitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-in fade-in">
                <CheckCircle size={64} className="text-[#38A169] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. Our team will contact you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name*</label>
                  <input required type="text" className="w-full px-4 py-3 bg-[#F7FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F855A] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address*</label>
                  <input required type="email" className="w-full px-4 py-3 bg-[#F7FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F855A] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-[#F7FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F855A] transition-colors" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Partnership Interest*</label>
                <select required className="w-full px-4 py-3 bg-[#F7FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F855A] transition-colors appearance-none">
                  <option value="">Select an option</option>
                  <option value="investor">Investor</option>
                  <option value="builder">Builder / Contractor</option>
                  <option value="government">Government Body</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-[#F7FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F855A] transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2F855A] text-white font-bold py-4 rounded-xl hover:bg-[#38A169] transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
