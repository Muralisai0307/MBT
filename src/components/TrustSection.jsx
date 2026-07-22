import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Users } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by California School Districts & Integrated With
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 items-center">
          
          <div className="flex items-center gap-3 text-slate-400 hover:text-[#374F6C] transition-colors duration-300">
            <FileCheck className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">CALPADS-Ready</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-400 hover:text-[#374F6C] transition-colors duration-300">
            <Users className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">CYBHI</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-400 hover:text-[#374F6C] transition-colors duration-300">
            <Landmark className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">LEA Medi-Cal</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-400 hover:text-[#374F6C] transition-colors duration-300">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Family PACT</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
