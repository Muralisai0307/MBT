import React from 'react';
import { ShieldCheck, Database, LayoutDashboard, Clock, FileCheck, Network } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'OptiClaim® Software',
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
    icon: Network,
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
    <section id="why-us" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#374F6C]/10 text-[#374F6C] font-bold text-sm mb-4">
            Technology & Expertise
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Partner with MBT?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Not a SIRAS user? No problem! MBT's custom billing software, <strong>OptiClaim®</strong>, is built specifically for schools. We ensure your practitioners spend less time on paperwork and more time doing what they do best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-[#6CB2CD]/10 text-[#6CB2CD] flex items-center justify-center mb-6 group-hover:bg-[#6CB2CD] group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseMBT;
