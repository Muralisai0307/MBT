import React from 'react';
import { Search, Link, UserCheck, ShieldCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Assessment',
    description: "We evaluate your district's specific billing, IEP, and structural needs to form a custom plan."
  },
  {
    num: '02',
    icon: Link,
    title: 'Integration',
    description: 'Seamless connection with your existing SIS and CALPADS, ensuring no data is left behind.'
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Training & Support',
    description: 'Empowering your staff with hands-on training for our intuitive OptiClaim and SIRAS platforms.'
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Reimbursement',
    description: 'Maximize your district funding while ensuring 100% state audit compliance and peace of mind.'
  }
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-[#374F6C] mb-4 tracking-tight">Our Proven Process</h2>
          <p className="text-lg text-slate-600">
            A systematic approach to turn complex compliance into streamlined success.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 bg-slate-100 z-0 rounded-full">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#6CB2CD] to-[#374F6C] opacity-30"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-[#374F6C] mb-6 shadow-sm group-hover:border-[#6CB2CD] group-hover:shadow-md transition-all duration-300 relative">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#374F6C] rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
