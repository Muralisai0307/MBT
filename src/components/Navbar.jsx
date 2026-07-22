import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="https://www.mbt4schools.com/uploads/1/2/1/9/121944568/2012-final-mbt-logo.gif" alt="Medical Billing Technologies Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#programs" className="text-slate-700 hover:text-[#374F6C] font-semibold transition-colors">Programs</a>
            <a href="#why-us" className="text-slate-700 hover:text-[#374F6C] font-semibold transition-colors">Why MBT</a>
            <a href="#process" className="text-slate-700 hover:text-[#374F6C] font-semibold transition-colors">Process</a>
            <a href="#testimonials" className="text-slate-700 hover:text-[#374F6C] font-semibold transition-colors">Testimonials</a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#book-demo" className="bg-[#374F6C] hover:bg-[#2b3e55] text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book a Demo
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-slate-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
