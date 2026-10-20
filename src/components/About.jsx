import React from 'react';
import { Terminal, Clock, Layers, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const getIcon = (name) => {
    switch (name) {
      case 'Clock':
        return <Clock size={20} className="text-[#7cd1fb]" />;
      case 'Layers':
        return <Layers size={20} className="text-[#7cd1fb]" />;
      case 'GitBranch':
        return <GitBranch size={20} className="text-[#7cd1fb]" />;
      default:
        return <Layers size={20} className="text-[#7cd1fb]" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#061421] border-b border-[#293644]" id="about">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b border-[#293644]">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] tracking-widest uppercase">
            01 / ABOUT ME
          </span>
          <span className="font-['Space_Grotesk'] text-xs text-[#a6b0bc] uppercase tracking-wider">
            Profile & Analytical Philosophy
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Philosophy Callout & Metric Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Core Philosophy Quote Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#0f1d2a] border border-[#293644] relative overflow-hidden group hover:border-[#7cd1fb]/40 transition-colors">
              <div className="absolute top-2 right-2 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal size={70} className="text-[#7cd1fb]" />
              </div>
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] uppercase tracking-widest block mb-3">
                Core Philosophy
              </span>
              <p className="font-['Space_Grotesk'] text-lg sm:text-xl text-[#f4f6f8] font-semibold leading-snug">
                “Software fails not at the syntax level, but at the ambiguous boundary between business intent and technical translation.”
              </p>
            </div>

            {/* Metric Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {personalInfo.tenureMetrics.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-[#1e2b39] border border-[#293644] flex items-center justify-between hover:border-[#7cd1fb]/50 transition-all duration-200"
                >
                  <div>
                    <div className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#7cd1fb] tracking-wider uppercase">
                      {item.label}
                    </div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-[#d6e4f6] mt-0.5">
                      {item.value}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#13212e] border border-[#293644] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f4f6f8] tracking-tight mb-6">
                Bridging Business Needs and Technology
              </h2>

              <div className="space-y-4 text-[#a6b0bc] font-['Inter'] text-sm sm:text-base leading-relaxed">
                <p>
                  Holding a formal degree in Information Systems, I specialize in dissecting fragmented operational workflows and rearchitecting them into coherent, scalable digital solutions. My methodology balances exhaustive qualitative requirements elicitation with concrete technical verification.
                </p>
                <p>
                  From legacy municipal utility frameworks (such as regional PDAM billing) to modern ERP rollouts, I coordinate across executive boards, department heads, and software engineering squads. I author audit-grade Business Requirements Documents (BRD), Functional Specifications (FSD), and interactive system flowcharts in BPMN 2.0 to minimize scope drift and eradicate engineering ambiguity.
                </p>
              </div>
            </div>

            {/* Direct Competency Checklist */}
            <div className="mt-8 pt-6 border-t border-[#293644]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#d6e4f6] uppercase tracking-wider mb-4">
                Verified Core Capabilities
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-['Space_Grotesk'] text-xs text-[#d6e4f6]">
                {personalInfo.competencyChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5 p-2 rounded bg-[#0f1d2a]/60 border border-[#293644]/60">
                    <CheckCircle2 size={15} className="text-[#7cd1fb] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
