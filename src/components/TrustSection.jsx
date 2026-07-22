import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14 items-center">
          
          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle2 className="w-5 h-5 text-[#6CB2CD]" />
            <span className="text-sm font-bold tracking-tight uppercase">Est. 1994</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-slate-200"></div>
          
          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle2 className="w-5 h-5 text-[#6CB2CD]" />
            <span className="text-sm font-bold tracking-tight uppercase">Powered by OptiClaim®</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-slate-200"></div>

          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle2 className="w-5 h-5 text-[#6CB2CD]" />
            <span className="text-sm font-bold tracking-tight uppercase">Integrated with SIRAS</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-slate-200"></div>

          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle2 className="w-5 h-5 text-[#6CB2CD]" />
            <span className="text-sm font-bold tracking-tight uppercase">California Education Focus</span>
          </div>
          
          <div className="hidden lg:block w-px h-6 bg-slate-200"></div>

          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-5 h-5 text-[#374F6C]" />
            <span className="text-sm font-bold tracking-tight uppercase">100% Audit Support</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
