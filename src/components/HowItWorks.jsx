import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Assessment',
    description: "We evaluate your district's specific billing, IEP, and structural needs to form a custom plan."
  },
  {
    num: '02',
    title: 'Integration',
    description: 'Seamless connection with your existing SIS and CALPADS, ensuring no data is left behind.'
  },
  {
    num: '03',
    title: 'Training & Support',
    description: 'Empowering your staff with hands-on training for our intuitive OptiClaim and SIRAS platforms.'
  },
  {
    num: '04',
    title: 'Reimbursement & Compliance',
    description: 'Maximize your district funding while ensuring 100% state audit compliance and peace of mind.'
  }
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-24 bg-[#374F6C] text-white relative">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        {/* Subtle background pattern */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Our Proven Process</h2>
          <p className="text-lg text-[#6CB2CD]">
            A systematic approach to turn complex compliance into streamlined success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-[#6CB2CD]/30 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#2b3e55] border-4 border-[#374F6C] flex items-center justify-center text-3xl font-black text-[#6CB2CD] mb-8 shadow-lg shadow-black/20 relative">
                {step.num}
                {/* Inner dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#2b3e55]"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
