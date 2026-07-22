import React from 'react';

const AboutSection = () => {
  const leaders = [
    {
      name: "Reid Stephens",
      role: "President of Business Operations",
      bio: "Reid has been with MBT since 2009. He ensures MBT remains financially responsible while providing clients with cost-efficient contracts, and leads the technology team.",
      image: "https://www.mbt4schools.com/uploads/1/2/1/9/121944568/published/img-9468.jpg"
    },
    {
      name: "Kelly Lingenfelter",
      role: "President of Client Operations",
      bio: "Kelly has been with MBT since 2008. She ensures clients receive the best customer service in the industry and is constantly in communication with clients.",
      image: "https://www.mbt4schools.com/uploads/1/2/1/9/121944568/published/img-9448.jpg"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-[#6CB2CD] font-bold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Established in <span className="text-[#6CB2CD]">1994</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Founded by Roberta Stephens, MBT continues to be operated by the Stephens family. For over 25 years we have been committed to helping our partners maximize every reimbursement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 rounded-2xl p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our <span className="text-[#6CB2CD]">Mission</span></h3>
            <p className="text-slate-600 leading-relaxed">
              MBT is dedicated to providing consistent and personalized partnerships centered on transparency and up-to-date program knowledge. Our purpose is to provide guidance on best practices to optimize reimbursement programs and cost savings in a rapidly changing regulatory environment through our signature high-tech, high-touch partnership.
            </p>
          </div>
          
          <div className="bg-[#374F6C] rounded-2xl p-10 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">MBT <span className="text-[#6CB2CD]">Values</span></h3>
            <ul className="space-y-4">
              {['Integrity', 'Accountability', 'Respect', 'Heartfelt Service'].map((value, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#6CB2CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="font-semibold text-lg">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900">Our Leadership</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md group-hover:border-[#6CB2CD] transition-all duration-300">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{leader.name}</h4>
              <p className="text-[#6CB2CD] font-semibold mb-4">{leader.role}</p>
              <p className="text-slate-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
