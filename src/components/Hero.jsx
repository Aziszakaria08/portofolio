import React from 'react';
import { ArrowDown, ArrowRight, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#061421] pt-28 pb-16 lg:py-24 border-b border-[#293644]">
      {/* Subtle Ambient Lighting Effects */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#7cd1fb]/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#8f1230]/15 blur-[100px]"></div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Top Monograph Meta Row */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#293644] gap-3">
          <div className="flex items-center gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#7cd1fb] tracking-widest uppercase">
              {personalInfo.tagline}
            </span>
            <span className="text-[#293644]">/</span>
            <span className="font-['Space_Grotesk'] text-xs text-[#a6b0bc] uppercase tracking-wider">
              {personalInfo.affiliation}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e2b39] border border-[#293644] rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffb2b8] animate-pulse"></span>
            <span className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#d6e4f6] tracking-wider">
              {personalInfo.edition}
            </span>
          </div>
        </div>

        {/* Main Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Sub-label with decorative line */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#8f1230]"></span>
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#ffb2b8] tracking-widest uppercase">
                {personalInfo.title}
              </span>
            </div>

            {/* Main Editorial Hero Heading */}
            <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl font-bold text-[#d6e4f6] tracking-tight uppercase select-none mb-2">
              PORT<span className="text-[#7cd1fb]">FOLIO</span>
            </h1>

            <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-[#d6e4f6] font-semibold mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6e4f6] via-[#d6e4f6] to-[#7cd1fb]">
                {personalInfo.name}
              </span>
            </div>

            <p className="font-['Inter'] text-base sm:text-lg text-[#a6b0bc] max-w-xl leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-lg bg-[#8f1230] text-[#ffdadb] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider border border-[#ffb2b8]/30 transition-all duration-200 hover:bg-[#aa1a3c] hover:shadow-lg hover:shadow-[#8f1230]/30 active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </a>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#293644] text-[#d6e4f6] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:border-[#7cd1fb] hover:text-[#7cd1fb] hover:bg-[#13212e]/50 group"
              >
                <span>Contact Me</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#293644]">
              {personalInfo.metrics.map((metric, i) => (
                <div key={i}>
                  <div
                    className={`font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold ${
                      metric.highlight ? 'text-[#7cd1fb]' : 'text-[#d6e4f6]'
                    }`}
                  >
                    {metric.value}
                  </div>
                  <div className="font-['Space_Grotesk'] text-[11px] font-medium text-[#a6b0bc] uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Frame Graphic (Col 8-12) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Burgundy Geometric Accent Block */}
              <div className="absolute -top-3 -right-3 w-32 h-32 bg-[#8f1230]/60 rounded-lg -z-0 border border-[#8f1230]"></div>

              {/* Cyan Ambient Glow */}
              <div className="absolute -bottom-5 -left-5 w-44 h-44 bg-[#00789e]/20 rounded-xl -z-0 blur-2xl"></div>

              {/* Main Portrait / Blueprint Card */}
              <div className="relative z-10 rounded-xl overflow-hidden bg-[#1e2b39] border border-[#293644] shadow-2xl">
                {/* Visual Canvas Area */}
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#020f1c] flex flex-col justify-between p-6">
                  {/* Subtle Grid Background */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, #7cd1fb 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  ></div>

                  {/* Top Technical Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-['Space_Grotesk'] text-[10px] tracking-widest text-[#7cd1fb] bg-[#00789e]/20 border border-[#7cd1fb]/40 px-2.5 py-1 rounded">
                      SYSTEMS ARCHITECT
                    </span>
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#a6b0bc]">
                      STATUS: ONLINE
                    </span>
                  </div>

                  {/* Center Architectural Blueprint Monogram */}
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-24 h-24 mx-auto rounded-xl bg-gradient-to-br from-[#13212e] to-[#020f1c] border border-[#7cd1fb]/40 flex items-center justify-center mb-4 shadow-xl shadow-[#020f1c]">
                      <Terminal size={40} className="text-[#7cd1fb]" />
                    </div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-[#f4f6f8] tracking-tight">
                      Azis Zakaria
                    </div>
                    <div className="font-['Space_Grotesk'] text-xs text-[#ffb2b8] tracking-wide mt-1">
                      {personalInfo.degrees}
                    </div>
                    <p className="font-['Inter'] text-xs text-[#a6b0bc] max-w-[260px] mx-auto mt-2 leading-relaxed">
                      Specialized in BPMN 2.0, enterprise ERP migrations, and municipal public utility frameworks.
                    </p>
                  </div>

                  {/* Live Technical Metrics Mini Strip */}
                  <div className="relative z-10 grid grid-cols-2 gap-2 pt-3 border-t border-[#293644] text-left">
                    <div className="bg-[#13212e]/80 p-2 rounded border border-[#293644]">
                      <span className="block text-[9px] font-['Space_Grotesk'] text-[#a6b0bc] uppercase">
                        Core Method
                      </span>
                      <span className="text-xs font-['Space_Grotesk'] font-bold text-[#7cd1fb]">
                        BPMN 2.0 / FSD
                      </span>
                    </div>
                    <div className="bg-[#13212e]/80 p-2 rounded border border-[#293644]">
                      <span className="block text-[9px] font-['Space_Grotesk'] text-[#a6b0bc] uppercase">
                        ERP Practice
                      </span>
                      <span className="text-xs font-['Space_Grotesk'] font-bold text-[#ffb2b8]">
                        Odoo / Custom
                      </span>
                    </div>
                  </div>
                </div>

                {/* Frame Meta Strip */}
                <div className="p-4 bg-[#13212e] border-t border-[#293644] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cd1fb] animate-ping"></span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#d6e4f6] uppercase font-semibold">
                      Azis Zakaria, B.S. IS
                    </span>
                  </div>
                  <span className="font-['Space_Grotesk'] text-xs text-[#7cd1fb] font-mono">
                    ARCH_ID #8042
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 group text-[#a6b0bc] hover:text-[#7cd1fb] transition-colors"
          >
            <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-widest">
              SCROLL DOWN
            </span>
            <ArrowDown size={16} className="animate-bounce text-[#7cd1fb]" />
          </a>
        </div>
      </div>
    </section>
  );
}
