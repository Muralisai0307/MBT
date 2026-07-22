import React from 'react';
import { CheckCircle2, ShieldCheck, Database, LayoutDashboard, Clock, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'OptiClaim Software',
    desc: 'Custom billing software built specifically for schools, streamlining the entire reimbursement lifecycle.'
  },
  {
    icon: ShieldCheck,
    title: 'State Audit Compliance',
    desc: 'Expert support ensuring 100% compliance during complex state audits.'
  },
  {
    icon: FileCheck,
    title: 'GoalWizard Integration',
    desc: 'Legally defensible goal creation tools seamlessly integrated via SIRAS.'
  },
  {
    icon: LayoutDashboard,
    title: 'MIS-Summary Dashboards',
    desc: 'Comprehensive analytics and reporting to monitor district-wide performance.'
  },
  {
    icon: Database,
    title: 'SIS/CALPADS Synergy',
    desc: 'Smooth integrations with your existing Student Information Systems.'
  },
  {
    icon: Clock,
    title: 'Time-Saving Workflows',
    desc: 'Less time documenting means your staff spends more time serving students.'
  }
];

const WhyChooseMBT = () => {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#374F6C] rounded-2xl transform -rotate-2 scale-105 opacity-10 z-0"></div>
            <img 
              src="https://www.mbt4schools.com/uploads/1/2/1/9/121944568/editor/website-program-photos-4.png?1757001551" 
              alt="SIRAS Integration" 
              className="relative z-10 rounded-2xl shadow-xl object-cover w-full border border-slate-200 bg-white p-2"
            />
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#6CB2CD]/10 text-[#374F6C] font-bold text-sm mb-4">
              Technology & Expertise
            </div>
            <h2 className="text-4xl font-extrabold text-[#374F6C] mb-6 tracking-tight">Why Partner with MBT?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Not a SIRAS user? No problem! MBT's custom billing software, <strong>OptiClaim</strong>, is built specifically for schools. We ensure your practitioners spend less time on paperwork and more time doing what they do best.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-[#6CB2CD]" />
                    <h4 className="font-bold text-slate-900">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-9">{feature.desc}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMBT;
