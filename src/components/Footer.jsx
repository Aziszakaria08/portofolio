import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#020f1c] border-t border-[#293644] py-12">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-[#8f1230] border border-[#ffb2b8]/40 flex items-center justify-center text-[#ffdadb] font-['Space_Grotesk'] font-bold text-xs">
            AZ
          </div>
          <span className="font-['Inter'] text-xs text-[#a6b0bc]">
            © 2026 {personalInfo.name}. Designed with purpose & technical precision.
          </span>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-6 font-['Space_Grotesk'] text-xs">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a6b0bc] hover:text-[#7cd1fb] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#293644]">/</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a6b0bc] hover:text-[#7cd1fb] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#293644]">/</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#a6b0bc] hover:text-[#7cd1fb] transition-colors"
          >
            Email
          </a>
          <span className="text-[#293644]">/</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#7cd1fb] hover:text-[#ffb2b8] transition-colors font-bold uppercase tracking-wider"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
