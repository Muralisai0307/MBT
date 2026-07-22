import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-[100px] -z-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Ready to build something amazing?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your digital goals. Our team is ready to dive into your next big project.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
          Get a Free Consultation
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
