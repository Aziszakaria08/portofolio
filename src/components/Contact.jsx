import React from 'react';
import { Mail, MessageSquare, Share2, Terminal, Clock, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenInquiry }) {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#061421]" id="contact">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b border-[#293644]">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] tracking-widest uppercase">
            05 / CONTACT
          </span>
          <span className="font-['Space_Grotesk'] text-xs text-[#a6b0bc] uppercase tracking-wider">
            Inquiries • Advisory Consultation
          </span>
        </div>

        {/* Main Striking Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#1e2b39] border border-[#293644] p-8 md:p-12 shadow-2xl">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#8f1230]/20 blur-[100px]"></div>
          <div className="pointer-events-none absolute left-10 -top-20 h-60 w-60 rounded-full bg-[#7cd1fb]/10 blur-[80px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="px-3 py-1 rounded-full bg-[#00789e]/20 border border-[#7cd1fb] font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] uppercase tracking-widest inline-block mb-4">
                Open for Consultative Engagements
              </span>

              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f6f8] tracking-tight mb-4">
                Have a Project in Mind?
              </h2>

              <p className="font-['Inter'] text-sm sm:text-base text-[#a6b0bc] max-w-xl leading-relaxed mb-8">
                Let's discuss business process re-engineering, ERP implementation, or digital modernization specifications. I am currently available for select advisory roles and high-impact BA contracts.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-lg bg-[#8f1230] text-[#ffdadb] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider border border-[#ffb2b8]/30 transition-all duration-200 hover:bg-[#aa1a3c] shadow-lg shadow-[#8f1230]/20 active:scale-[0.98]"
                >
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </a>

                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#293644] text-[#d6e4f6] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider transition-colors hover:border-[#7cd1fb] hover:text-[#7cd1fb] hover:bg-[#13212e]/50"
                >
                  <MessageSquare size={16} />
                  <span>Quick Inquiry Form</span>
                </button>
              </div>
            </div>

            {/* Right Verified Coordinates Column */}
            <div className="lg:col-span-5 bg-[#020f1c] p-6 rounded-xl border border-[#293644] shadow-inner">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#a6b0bc] uppercase tracking-widest pb-3 border-b border-[#293644] mb-4">
                Direct Verified Coordinates
              </div>

              <div className="space-y-3 font-['Space_Grotesk'] text-xs">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#13212e] hover:bg-[#1e2b39] border border-[#293644] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Share2 size={16} className="text-[#7cd1fb]" />
                    <span className="text-[#d6e4f6] font-semibold">LinkedIn</span>
                  </div>
                  <span className="text-[#a6b0bc] group-hover:text-[#7cd1fb] transition-colors flex items-center gap-1">
                    /in/azis-zakaria-ba <ArrowRight size={12} />
                  </span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#13212e] hover:bg-[#1e2b39] border border-[#293644] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Terminal size={16} className="text-[#7cd1fb]" />
                    <span className="text-[#d6e4f6] font-semibold">GitHub</span>
                  </div>
                  <span className="text-[#a6b0bc] group-hover:text-[#7cd1fb] transition-colors flex items-center gap-1">
                    azis-dev <ArrowRight size={12} />
                  </span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#13212e] border border-[#293644]">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#7cd1fb]" />
                    <span className="text-[#d6e4f6] font-semibold">Timezone</span>
                  </div>
                  <span className="text-[#7cd1fb] font-bold">
                    UTC+7 (WIB) / GMT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
