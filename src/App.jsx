import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import WhyChooseMBT from './components/WhyChooseMBT';
import HowItWorks from './components/HowItWorks';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseMBT />
        <HowItWorks />
        <Testimonial />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
