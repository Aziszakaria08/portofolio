import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#061421]/90 backdrop-blur-xl border-b border-[#293644] shadow-lg shadow-[#020f1c]/50'
          : 'bg-[#061421]/60 backdrop-blur-md border-b border-[#1e2b39]'
      }`}
    >
      <div className="h-16 max-w-[1320px] mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-[#8f1230] border border-[#ffb2b8]/40 flex items-center justify-center text-[#ffdadb] font-['Space_Grotesk'] font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-200">
            AZ
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-[#d6e4f6] font-bold text-sm tracking-tight sm:inline-block">
              {personalInfo.name}
            </span>
            <span className="font-['Space_Grotesk'] text-[#7cd1fb] text-[10px] uppercase tracking-wider font-medium">
              SYS.ARCH // BA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#020f1c]/50 border border-[#293644] rounded-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold transition-all duration-200 rounded ${
                  isActive
                    ? 'bg-[#1e2b39] text-[#d6e4f6] border border-[#293644] shadow-sm'
                    : 'text-[#a6b0bc] hover:text-[#d6e4f6] hover:bg-[#13212e]/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Header Controls */}
        <div className="flex items-center gap-4">
          {/* Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f1d2a] border border-[#293644]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7cd1fb] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7cd1fb]"></span>
            </span>
            <span className="font-['Space_Grotesk'] text-xs text-[#7cd1fb] font-medium tracking-normal">
              {personalInfo.status}
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg border border-[#8f1230] bg-[#8f1230]/20 text-[#ffb2b8] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-[#8f1230] hover:text-[#f4f6f8] active:scale-[0.98] shadow-sm hover:shadow-[#8f1230]/30"
          >
            Get in Touch
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#d6e4f6] hover:text-[#7cd1fb] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061421]/95 backdrop-blur-2xl border-b border-[#293644] px-5 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-sm font-['Space_Grotesk'] uppercase tracking-wider font-semibold ${
                activeSection === link.id
                  ? 'bg-[#1e2b39] text-[#7cd1fb] border border-[#293644]'
                  : 'text-[#a6b0bc] hover:text-[#d6e4f6]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#293644] flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-xs text-[#7cd1fb] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7cd1fb] inline-block animate-pulse"></span>
              {personalInfo.status}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
