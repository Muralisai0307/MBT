import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e2b3c] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 bg-white inline-block p-2 rounded-md shadow-sm">
              <img src="https://www.mbt4schools.com/uploads/1/2/1/9/121944568/2012-final-mbt-logo.gif" alt="MBT Logo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your all-in-one solution for IEPs, 504s, SSTs, CALPADS reporting, and Medi-Cal billing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Programs</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#programs" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">SIRAS Systems</a></li>
              <li><a href="#programs" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">LEA Medi-Cal Billing</a></li>
              <li><a href="#programs" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">CYBHI Support</a></li>
              <li><a href="#programs" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Family PACT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company & Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">About Us</a></li>
              <li><a href="#news" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">News & Updates</a></li>
              <li><a href="https://portal.mbt4schools.com/login.xhtml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Help Center</a></li>
              <li><a href="https://portal.mbt4schools.com/login.xhtml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Client Portal Login</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal & Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#book-demo" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#6CB2CD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CB2CD] rounded">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Medical Billing Technologies, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
