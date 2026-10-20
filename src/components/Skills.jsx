import React from 'react';
import { LineChart, Network, Code2, Wrench, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (name) => {
    switch (name) {
      case 'LineChart':
        return <LineChart size={28} className="text-[#7cd1fb]" />;
      case 'Network':
        return <Network size={28} className="text-[#7cd1fb]" />;
      case 'Code2':
        return <Code2 size={28} className="text-[#7cd1fb]" />;
      case 'Wrench':
        return <Wrench size={28} className="text-[#7cd1fb]" />;
      default:
        return <Code2 size={28} className="text-[#7cd1fb]" />;
    }
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'primary':
        return 'bg-[#8f1230]/30 border-[#ffb2b8]/60 text-[#ffb2b8]';
      case 'secondary':
        return 'bg-[#00789e]/20 border-[#7cd1fb]/60 text-[#7cd1fb]';
      default:
        return 'bg-[#13212e] border-[#293644] text-[#a6b0bc]';
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#020f1c] border-b border-[#293644]" id="skills">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-3 mb-10 border-b border-[#293644] gap-4">
          <div>
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] tracking-widest block mb-1">
              02 / EXPERTISE
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f4f6f8] tracking-tight">
              Structured Competencies & Technical Toolkit
            </h2>
          </div>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] max-w-sm">
            A balanced framework combining rigorous analytical documentation with hands-on system architecture and delivery.
          </p>
        </div>

        {/* 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-[#1e2b39] border border-[#293644] flex flex-col justify-between hover:border-[#7cd1fb] transition-all duration-300 group hover:shadow-xl hover:shadow-[#020f1c]"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-[#0f1d2a] border border-[#293644] group-hover:border-[#7cd1fb]/40 transition-colors">
                    {getIcon(category.icon)}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded font-['Space_Grotesk'] text-[10px] font-bold tracking-wider border ${getBadgeStyle(
                      category.badgeType
                    )}`}
                  >
                    {category.badge}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#f4f6f8] mb-2">
                  {category.title}
                </h3>
                <p className="font-['Inter'] text-xs text-[#a6b0bc] mb-5 leading-relaxed min-h-[40px]">
                  {category.description}
                </p>

                {/* Skill List */}
                <ul className="space-y-2.5 font-['Space_Grotesk'] text-xs text-[#d6e4f6] border-t border-[#293644] pt-4">
                  {category.skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#7cd1fb] rounded-full shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Focus Tag */}
              <div className="mt-6 pt-3 border-t border-[#293644]/60 font-['Space_Grotesk'] text-[11px] font-semibold text-[#7cd1fb] uppercase tracking-wider">
                {category.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
