import React from 'react';
import { GraduationCap, HeartPulse, BrainCircuit, Users } from 'lucide-react';

const programs = [
  {
    title: 'SIRAS',
    subtitle: 'IEPs, 504s, SSTs & CALPADS',
    description: 'Web-based support for special education data, offering powerful tools for compliant and efficient student management.',
    icon: GraduationCap,
  },
  {
    title: 'LEA Medi-Cal',
    subtitle: 'Billing Option Program',
    description: 'Maximize your reimbursements securely with our deep understanding of the Local Education Agency Medi-Cal Billing processes.',
    icon: HeartPulse,
  },
  {
    title: 'CYBHI',
    subtitle: 'Youth Behavioral Health',
    description: 'Comprehensive support and billing infrastructure for the California Youth Behavioral Health Initiative.',
    icon: BrainCircuit,
  },
  {
    title: 'Family PACT',
    subtitle: 'Access Care Treatment',
    description: 'Streamlined management and reporting for Planning Access Care Treatment programs within your district.',
    icon: Users,
  }
];

const Services = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-[#374F6C] mb-4 tracking-tight">Our Core Programs</h2>
          <p className="text-lg text-slate-600">
            Specialized solutions empowering educators and administrators to optimize efficiencies while providing comprehensive services to students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-[#6CB2CD]/50 transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-lg bg-[#374F6C]/10 text-[#374F6C] flex items-center justify-center mb-6 group-hover:bg-[#374F6C] group-hover:text-white transition-colors duration-300">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{program.title}</h3>
              <p className="text-sm font-bold text-[#6CB2CD] mb-4 uppercase tracking-wide">{program.subtitle}</p>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {program.description}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="#" className="inline-flex items-center text-[#374F6C] font-bold hover:text-[#6CB2CD] transition-colors">
                  Learn More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
