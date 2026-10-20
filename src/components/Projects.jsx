import React, { useState } from 'react';
import { ArrowUpRight, Filter, Layers, Database, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Enterprise ERP', 'Process / BPMN', 'Web & APIs'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const renderDiagram = (type) => {
    switch (type) {
      case 'pipeline':
        return (
          <div className="my-4 p-4 bg-[#020f1c] rounded-lg border border-[#293644] overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#293644] mb-3">
              <span className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#7cd1fb]">
                DATA PIPELINE FLOW
              </span>
              <span className="font-['Space_Grotesk'] text-[11px] text-[#a6b0bc]">
                LATENCY: 42ms
              </span>
            </div>
            {/* SVG Data Pipeline */}
            <svg
              className="w-full h-16 text-[#7cd1fb]"
              fill="none"
              viewBox="0 0 400 65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="18"
                width="85"
                height="28"
                rx="4"
                fill="#13212e"
                stroke="#293644"
                strokeWidth="1"
              />
              <text
                x="52"
                y="35"
                fill="#d6e4f6"
                fontFamily="Space Grotesk"
                fontSize="9"
                textAnchor="middle"
              >
                Manual Billing
              </text>

              <path
                d="M100 32 H140"
                stroke="#7cd1fb"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />
              <polygon fill="#7cd1fb" points="140,32 133,28 133,36" />

              <rect
                x="145"
                y="10"
                width="115"
                height="44"
                rx="4"
                fill="#8f1230"
                fillOpacity="0.3"
                stroke="#8f1230"
                strokeWidth="1.5"
              />
              <text
                x="202"
                y="28"
                fill="#ffb2b8"
                fontFamily="Space Grotesk"
                fontSize="9"
                fontWeight="600"
                textAnchor="middle"
              >
                Automated FSD Engine
              </text>
              <text
                x="202"
                y="43"
                fill="#d6e4f6"
                fontFamily="Space Grotesk"
                fontSize="8"
                textAnchor="middle"
              >
                BPMN 2.0 Verified
              </text>

              <path d="M265 32 H305" stroke="#7cd1fb" strokeWidth="1.5" />
              <polygon fill="#7cd1fb" points="305,32 298,28 298,36" />

              <rect
                x="310"
                y="18"
                width="80"
                height="28"
                rx="4"
                fill="#13212e"
                stroke="#293644"
                strokeWidth="1"
              />
              <text
                x="350"
                y="35"
                fill="#7cd1fb"
                fontFamily="Space Grotesk"
                fontSize="9"
                fontWeight="bold"
                textAnchor="middle"
              >
                Ledger Sync
              </text>
            </svg>
          </div>
        );

      case 'progress':
        return (
          <div className="my-4 p-4 bg-[#020f1c] rounded-lg border border-[#293644]">
            <div className="flex items-center justify-between pb-2 border-b border-[#293644] mb-2.5">
              <span className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#7cd1fb]">
                METRIC AGGREGATION ENGINE
              </span>
              <span className="font-['Space_Grotesk'] text-[11px] text-[#a6b0bc]">
                98.4% ADOPTION
              </span>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-[#1e2b39] rounded h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#00789e] to-[#7cd1fb] h-full rounded transition-all duration-1000"
                  style={{ width: '82%' }}
                ></div>
              </div>
              <div className="flex justify-between font-['Space_Grotesk'] text-[11px] text-[#a6b0bc]">
                <span>Q4 Objective Alignment Rate</span>
                <span className="text-[#7cd1fb] font-bold">82% Completed</span>
              </div>
            </div>
          </div>
        );

      case 'warehouse':
        return (
          <div className="my-4 p-4 bg-[#020f1c] rounded-lg border border-[#293644]">
            <div className="flex items-center justify-between pb-2 border-b border-[#293644] mb-2.5">
              <span className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#7cd1fb]">
                STOCK REORDER RULES
              </span>
              <span className="font-['Space_Grotesk'] text-[11px] text-[#a6b0bc]">
                FIFO COMPLIANT
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 font-['Space_Grotesk'] text-center">
              <div className="p-2 bg-[#13212e] rounded border border-[#293644]">
                <div className="text-[#a6b0bc] text-[9px]">LOC_HUB_A</div>
                <div className="text-[#7cd1fb] text-xs font-bold mt-0.5">99.8%</div>
              </div>
              <div className="p-2 bg-[#13212e] rounded border border-[#293644]">
                <div className="text-[#a6b0bc] text-[9px]">LOC_HUB_B</div>
                <div className="text-[#7cd1fb] text-xs font-bold mt-0.5">99.4%</div>
              </div>
              <div className="p-2 bg-[#13212e] rounded border border-[#293644]">
                <div className="text-[#a6b0bc] text-[9px]">REPLENISH</div>
                <div className="text-[#ffb2b8] text-xs font-bold mt-0.5">AUTO</div>
              </div>
            </div>
          </div>
        );

      case 'terminal':
        return (
          <div className="my-4 p-4 bg-[#020f1c] rounded-lg border border-[#293644] font-['Space_Grotesk']">
            <div className="flex items-center justify-between pb-2 border-b border-[#293644] mb-2 text-[#7cd1fb] text-[11px]">
              <span>IDENTITY_VERIFY_ENDPOINT</span>
              <span className="font-bold text-[#7cd1fb] bg-[#00789e]/20 px-2 py-0.5 rounded border border-[#7cd1fb]/40">
                STATUS: 200 OK
              </span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#ffb2b8] font-bold bg-[#8f1230]/40 px-1.5 py-0.5 rounded border border-[#8f1230]">
                  POST
                </span>
                <span className="text-[#d6e4f6]">/api/v1/auth/customer-verify</span>
              </div>
              <div className="text-[#a6b0bc] text-[11px] pt-1">
                → Drop-off reduced from 34.2% down to 6.8%
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#061421] border-b border-[#293644]" id="projects">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#293644]">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] tracking-widest uppercase">
            03 / FEATURED WORK
          </span>
          <span className="font-['Space_Grotesk'] text-xs text-[#a6b0bc] uppercase tracking-wider">
            Case Studies • Production Systems
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f4f6f8] tracking-tight">
              Selected Case Studies & Implementations
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] max-w-2xl mt-2">
              Detailed breakdowns showing business problem formulation, technical architecture, and validated operational impact.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#020f1c] border border-[#293644] rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-['Space_Grotesk'] font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#1e2b39] text-[#7cd1fb] border border-[#293644] shadow-sm'
                    : 'text-[#a6b0bc] hover:text-[#d6e4f6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-7 rounded-xl bg-[#0f1d2a] border border-[#293644] hover:border-[#7cd1fb] transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#020f1c]"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#ffb2b8] uppercase tracking-wider bg-[#8f1230]/20 px-2 py-0.5 rounded border border-[#8f1230]/40">
                    {project.badge}
                  </span>
                  <span className="font-['Space_Grotesk'] text-[11px] font-mono text-[#a6b0bc]">
                    {project.sysId}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#f4f6f8] group-hover:text-[#7cd1fb] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Render Custom Visual Diagram */}
                {renderDiagram(project.diagramType)}

                {/* Problem / Solution Structure */}
                <div className="space-y-3 text-xs sm:text-sm font-['Inter'] text-[#a6b0bc]">
                  <div>
                    <strong className="text-[#7cd1fb] font-semibold font-['Space_Grotesk'] text-xs uppercase block mb-1">
                      The Problem:
                    </strong>
                    {project.problem}
                  </div>
                  <div>
                    <strong className="text-[#7cd1fb] font-semibold font-['Space_Grotesk'] text-xs uppercase block mb-1">
                      The Solution:
                    </strong>
                    {project.solution}
                  </div>
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="pt-5 mt-5 border-t border-[#293644]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#a6b0bc]">
                    Role: <span className="text-[#d6e4f6] font-medium">{project.role}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#13212e] border border-[#293644] font-['Space_Grotesk'] text-[10px] text-[#d6e4f6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] hover:text-[#ffb2b8] transition-colors group/btn"
                >
                  <span>View Case Study Architecture</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
