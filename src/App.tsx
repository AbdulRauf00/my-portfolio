import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { ServiceModal } from './components/ServiceModal';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Service } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    scrollToSection('contact');
    setTimeout(() => {
      const subjectSelect = document.getElementById('form-subject') as HTMLSelectElement;
      if (subjectSelect) {
        // Match option or default
        const match = Array.from(subjectSelect.options).find(opt => opt.value.includes(serviceTitle) || serviceTitle.includes(opt.value));
        if (match) {
          subjectSelect.value = match.value;
        }
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] text-slate-900 flex flex-col font-sans">
      {/* Sticky Top Navigation */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onViewWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Trust & Verified Stats */}
        <Stats />

        {/* 3. Editorial About Me */}
        <About onContactClick={() => scrollToSection('contact')} />

        {/* 4. Skills & Technologies */}
        <Skills />

        {/* 5. Services Grid */}
        <Services onSelectService={(s) => setSelectedService(s)} />

        {/* 6. Selected Work / Projects */}
        <Projects onContactClick={() => scrollToSection('contact')} />

        {/* 7. Development Process Timeline */}
        <Process />

        {/* 8. Why Choose Me / Value Proposition */}
        <WhyMe />

        {/* 9. Contact Section & Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForContact={handleSelectServiceForContact}
      />
    </div>
  );
}
