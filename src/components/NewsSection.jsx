import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "MBT Acquires SIRAS Systems",
      date: "Sept. 10, 2025",
      category: "Press Release",
      excerpt: "Medical Billing Technologies, Inc. (MBT) announced it has acquired SIRAS Systems, creating California's first fully integrated compliance and reimbursement platform for student services.",
      link: "https://www.mbt4schools.com/news/mbt-acquires-siras-systems-to-become-californias-first-fully-integrated-compliance-and-reimbursement-platform-for-student-services",
      image: "https://www.mbt4schools.com/uploads/1/2/1/9/121944568/screenshot-2025-09-10-at-2-19-25-pm_orig.png"
    }
  ];

  return (
    <section id="news" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#6CB2CD] font-bold tracking-wider uppercase text-sm">Latest Updates</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Company <span className="text-[#374F6C]">News</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Read the latest announcements, feature updates, and press releases from MBT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {newsItems.map((news, index) => (
            <a 
              key={index} 
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative bg-slate-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6CB2CD] bg-[#6CB2CD]/10 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm font-medium text-slate-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#374F6C] transition-colors">
                  {news.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-[#374F6C] font-semibold group-hover:text-[#6CB2CD] transition-colors mt-auto">
                  Read Full Article
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
