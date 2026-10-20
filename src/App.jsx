import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#061421] text-[#d6e4f6] font-['Inter'] selection:bg-[#8f1230] selection:text-[#ffdadb] relative">
      {/* Sticky Modular Navigation */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="w-full">
        <Hero onOpenInquiry={() => setInquiryOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Contact onOpenInquiry={() => setInquiryOpen(true)} />
      </main>

      {/* Modular Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={() => setInquiryOpen(true)}
        />
      )}

      {/* Interactive Direct Message / Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}
