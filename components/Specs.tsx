
import React from 'react';
// Added Landmark, ShieldCheck, and Globe to the imports to resolve the "Cannot find name" errors
import { Check, X, Landmark, ShieldCheck, Globe } from 'lucide-react';

const specs = [
  { param: 'Compressive Strength', eco: '8.5 MPa', clay: '7.0 MPa', better: 'eco' },
  { param: 'Water Absorption', eco: '<1%', clay: '15-20%', better: 'eco' },
  { param: 'Weight', eco: '2.2 kg', clay: '3.0 kg', better: 'eco' },
  { param: 'Thermal Conductivity', eco: 'Low (Insulating)', clay: 'High', better: 'eco' },
  { param: 'Fire Resistance', eco: 'Class B', clay: 'Class A', better: 'clay' },
  { param: 'Carbon Footprint', eco: 'Negative', clay: 'Positive', better: 'eco' },
  { param: 'Cost per Unit', eco: '₹8-10', clay: '₹12-15', better: 'eco' },
];

const Specs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Engineering Excellence</h2>
          <p className="text-gray-600">The numbers speak for themselves. How our EcoBrick stacks up against the competition.</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2D3748] text-white">
                <th className="p-6 text-lg">Parameter</th>
                <th className="p-6 text-lg bg-[#2F855A]">SN EcoBrick</th>
                <th className="p-6 text-lg">Traditional Clay Brick</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr key={i} className={`group hover:bg-[#F7FAFC] transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7FAFC]/50'}`}>
                  <td className="p-6 font-medium border-b border-gray-100">{s.param}</td>
                  <td className={`p-6 border-b border-gray-100 font-bold ${s.better === 'eco' ? 'text-[#2F855A]' : ''}`}>
                    {s.eco}
                    {s.better === 'eco' && <Check className="inline ml-2 text-[#38A169]" size={18} />}
                  </td>
                  <td className={`p-6 border-b border-gray-100 text-gray-400 ${s.better === 'clay' ? 'text-orange-500' : ''}`}>
                    {s.clay}
                    {s.better === 'clay' && <Check className="inline ml-2 text-orange-500" size={18} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {specs.map((s, i) => (
            <div key={i} className="bg-[#F7FAFC] p-6 rounded-xl border border-gray-200">
              <h4 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-3">{s.param}</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[#2D3748]">SN EcoBrick</span>
                <span className={`font-bold ${s.better === 'eco' ? 'text-[#2F855A]' : 'text-gray-600'}`}>{s.eco}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Clay Brick</span>
                <span className={`text-sm ${s.better === 'clay' ? 'text-orange-500' : 'text-gray-400'}`}>{s.clay}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-70">
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-help">
             <Landmark size={24} />
             <span className="font-bold text-xs">BIS Pending</span>
           </div>
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-help">
             <ShieldCheck size={24} />
             <span className="font-bold text-xs">Government Approved</span>
           </div>
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-help">
             <Globe size={24} />
             <span className="font-bold text-xs">Carbon Negative Certified</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
