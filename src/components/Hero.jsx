import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#6CB2CD] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#374F6C]/10 text-[#374F6C] font-bold text-sm mb-6 border border-[#374F6C]/20">
              <span className="flex h-2 w-2 rounded-full bg-[#6CB2CD]"></span>
              Trusted EdTech & Healthcare Partner
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Your All-In-One Solution for <span className="text-[#374F6C]">School Healthcare Billing</span> & Compliance.
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Seamlessly manage IEPs, 504s, SSTs, CALPADS reporting, and Medi-Cal billing with MBT’s integrated platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <a href="#book-demo" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#374F6C] hover:bg-[#2b3e55] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#programs" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-lg text-[#374F6C] bg-transparent border-2 border-[#374F6C] hover:bg-[#374F6C]/5 transition-all">
                Explore Programs
              </a>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 lg:ml-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#374F6C] to-[#6CB2CD] rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] flex items-center justify-center">
              <img 
                src="https://www.mbt4schools.com/uploads/1/2/1/9/121944568/background-images/614253346.png" 
                alt="Education Administrators collaborating on dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              
              {/* Floating UI Elements for modern feel */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Audit Status</p>
                  <p className="text-lg font-bold text-emerald-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    100% Compliant
                  </p>
                </div>
                <div className="h-10 w-10 bg-[#374F6C] rounded-full flex items-center justify-center text-white">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
