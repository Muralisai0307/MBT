import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    organization: '',
    email: '', 
    phone: '',
    message: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon to schedule your demo.');
    setFormData({ name: '', organization: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="book-demo" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-[#374F6C] mb-6 tracking-tight">Ready to optimize your district's billing?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Schedule a personalized demo to see how MBT's OptiClaim and SIRAS platforms can streamline your workflows and maximize reimbursements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#374F6C]/10 flex items-center justify-center text-[#374F6C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Email Us</p>
                  <p className="font-semibold text-slate-900">contact@mbt4schools.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#6CB2CD] focus:border-[#6CB2CD] transition-colors outline-none bg-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-bold text-slate-700 mb-2">School District / Organization</label>
                    <input
                      type="text"
                      id="organization"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#6CB2CD] focus:border-[#6CB2CD] transition-colors outline-none bg-white"
                      placeholder="Visalia Unified"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#6CB2CD] focus:border-[#6CB2CD] transition-colors outline-none bg-white"
                      placeholder="jane@district.edu"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#6CB2CD] focus:border-[#6CB2CD] transition-colors outline-none bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#6CB2CD] focus:border-[#6CB2CD] transition-colors outline-none resize-none bg-white"
                    placeholder="Tell us about your current billing challenges..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#374F6C] hover:bg-[#2b3e55] text-white font-bold py-4 rounded-md transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
                >
                  Book Demo
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
