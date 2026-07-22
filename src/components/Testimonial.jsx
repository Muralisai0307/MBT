import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-10 md:p-16 text-center relative">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#6CB2CD] rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50">
            <Quote className="w-8 h-8 text-white fill-current" />
          </div>

          <div className="mt-8">
            <blockquote className="text-2xl md:text-3xl font-medium text-[#374F6C] leading-relaxed mb-10">
              "MBT works with the district every step of the way during an audit. Attention to detail and their deep understanding of the Medi-Cal billing processes enhances compliance for state auditing purposes."
            </blockquote>
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-slate-400 font-bold text-xl overflow-hidden">
                SS
              </div>
              <h4 className="font-extrabold text-slate-900 text-lg">Suzie S.</h4>
              <p className="text-[#6CB2CD] font-bold text-sm tracking-wide uppercase mt-1">Visalia Unified School District</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
