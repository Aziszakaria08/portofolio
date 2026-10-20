import React from 'react';
import { Calendar, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#020f1c] border-b border-[#293644]" id="experience">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#293644]">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] tracking-widest uppercase">
            04 / EXPERIENCE
          </span>
          <span className="font-['Space_Grotesk'] text-xs text-[#a6b0bc] uppercase tracking-wider">
            Career Milestones • Delivery
          </span>
        </div>

        <div className="mb-10">
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f4f6f8] tracking-tight">
            Career Trajectory & Delivery Milestones
          </h2>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] max-w-xl mt-2">
            Demonstrated progression from technical systems analysis to leading high-stakes enterprise ERP transformation initiatives.
          </p>
        </div>

        {/* Vertical Editorial Timeline with Hairline Stem */}
        <div className="relative pl-6 md:pl-10 space-y-8 before:content-[''] before:absolute before:left-[7px] md:before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-[#293644]">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node */}
              {exp.active ? (
                <div className="absolute -left-[30px] md:-left-[34px] top-1.5 h-3.5 w-3.5 bg-[#7cd1fb] ring-4 ring-[#061421] shadow-lg shadow-[#7cd1fb]/50 animate-pulse"></div>
              ) : (
                <div className="absolute -left-[30px] md:-left-[34px] top-1.5 h-3.5 w-3.5 bg-[#293644] ring-4 ring-[#061421] group-hover:bg-[#7cd1fb] transition-colors"></div>
              )}

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#1e2b39] border border-[#293644] group-hover:border-[#7cd1fb]/60 transition-colors duration-200 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#f4f6f8]">
                    {exp.role}
                  </h3>
                  <span
                    className={`font-['Space_Grotesk'] text-xs font-semibold px-2.5 py-1 rounded self-start md:self-auto border ${
                      exp.active
                        ? 'text-[#7cd1fb] bg-[#00789e]/20 border-[#7cd1fb]/40'
                        : 'text-[#a6b0bc] bg-[#0f1d2a] border-[#293644]'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="font-['Space_Grotesk'] text-xs font-semibold text-[#ffb2b8] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="text-[#293644]">•</span>
                  <span className="text-[#a6b0bc] font-normal">{exp.location}</span>
                </div>

                <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Achievement Metric Badges */}
                <div className="flex flex-wrap gap-2 font-['Space_Grotesk'] text-[11px] text-[#d6e4f6]">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#0f1d2a] border border-[#293644] flex items-center gap-1.5"
                    >
                      <CheckCircle2 size={12} className="text-[#7cd1fb]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
