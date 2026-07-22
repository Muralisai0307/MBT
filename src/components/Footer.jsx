import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e2b3c] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 bg-white inline-block p-2 rounded-md">
              <img src="https://www.mbt4schools.com/uploads/1/2/1/9/121944568/2012-final-mbt-logo.gif" alt="MBT Logo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your all-in-one solution for IEPs, 504s, SSTs, CALPADS reporting, and Medi-Cal billing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Programs</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#6CB2CD] transition-colors">SIRAS Systems</a></li>
              <li><a href="#" className="hover:text-[#6CB2CD] transition-colors">LEA Medi-Cal Billing</a></li>
              <li><a href="#" className="hover:text-[#6CB2CD] transition-colors">CYBHI Support</a></li>
              <li><a href="#" className="hover:text-[#6CB2CD] transition-colors">Family PACT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/about.html" className="hover:text-[#6CB2CD] transition-colors">About Us</a></li>
              <li><a href="/careers.html" className="hover:text-[#6CB2CD] transition-colors">Careers</a></li>
              <li><a href="/news.html" className="hover:text-[#6CB2CD] transition-colors">News</a></li>
              <li><a href="http://portal.mbt4schools.com/login.xhtml" className="hover:text-[#6CB2CD] transition-colors">Client Portal Login</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal & Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/contact.html" className="hover:text-[#6CB2CD] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#6CB2CD] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6CB2CD] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700/50 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Medical Billing Technologies, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
