import React from 'react';

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 md:p-16 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
          
          {/* Huge watermark quote */}
          <div className="absolute top-4 left-8 text-[180px] font-serif leading-none text-slate-100 opacity-50 select-none pointer-events-none font-bold">
            "
          </div>

          <div className="relative z-10 text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-10 italic">
              "MBT works with the district every step of the way during an audit. Attention to detail and their deep understanding of the Medi-Cal billing processes enhances compliance for state auditing purposes."
            </blockquote>
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[#374F6C] rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl shadow-md">
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
