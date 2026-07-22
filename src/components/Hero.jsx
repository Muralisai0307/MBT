import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-36 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 relative overflow-hidden">
      {/* Premium subtle lighting effect behind text */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#374F6C]/10 to-[#6CB2CD]/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-center lg:text-left relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-[#374F6C] font-bold text-sm mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Trusted EdTech & Healthcare Partner
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Your All-In-One Solution for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#374F6C] to-[#6CB2CD]">School Healthcare Billing</span> & Compliance.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Seamlessly manage IEPs, 504s, SSTs, CALPADS reporting, and Medi-Cal billing with MBT’s integrated platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a href="#book-demo" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#374F6C] hover:bg-[#2b3e55] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#programs" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm">
                <PlayCircle className="w-5 h-5 text-[#6CB2CD]" />
                Explore Programs
              </a>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 lg:ml-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#374F6C] to-[#6CB2CD] rounded-2xl transform rotate-3 scale-[1.02] opacity-15"></div>
            {/* Realistic Dashboard Mockup */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="OptiClaim Dashboard Interface" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">State Audit Status</p>
                  <p className="text-lg font-bold text-emerald-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    100% Compliant
                  </p>
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
