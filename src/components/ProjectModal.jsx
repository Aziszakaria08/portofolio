import React from 'react';
import { X, ArrowUpRight, CheckCircle2, FileText, Users, Clock, Database } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenInquiry }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#061421]/90 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-3xl rounded-xl bg-[#1e2b39] border border-[#293644] shadow-2xl overflow-hidden my-8 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="p-5 sm:p-6 bg-[#13212e] border-b border-[#293644] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#7cd1fb] uppercase tracking-wider">
                {project.sysId}
              </span>
              <span className="text-[#293644]">•</span>
              <span className="font-['Space_Grotesk'] text-xs text-[#ffb2b8] uppercase font-semibold">
                {project.category}
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f4f6f8]">
              {project.title}
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] mt-1">
              Role: <span className="text-[#d6e4f6] font-medium">{project.role}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#0f1d2a] text-[#a6b0bc] hover:text-[#f4f6f8] hover:bg-[#293644] transition-colors shrink-0"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Executive Overview */}
          <div className="bg-[#0f1d2a] p-4 rounded-lg border border-[#293644]">
            <h4 className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] uppercase tracking-wider mb-2">
              System Abstract
            </h4>
            <p className="font-['Inter'] text-sm text-[#d6e4f6] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Deliverables & Context Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-[#13212e] rounded-lg border border-[#293644]">
              <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xs text-[#7cd1fb] mb-1">
                <Users size={14} />
                <span className="font-semibold uppercase">Client / Environment</span>
              </div>
              <div className="font-['Inter'] text-sm font-medium text-[#f4f6f8]">
                {project.deepDive?.client || 'Enterprise Client'}
              </div>
            </div>

            <div className="p-3.5 bg-[#13212e] rounded-lg border border-[#293644]">
              <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xs text-[#7cd1fb] mb-1">
                <Clock size={14} />
                <span className="font-semibold uppercase">Project Timeline</span>
              </div>
              <div className="font-['Inter'] text-sm font-medium text-[#f4f6f8]">
                {project.deepDive?.timeline || 'Agile Delivery'}
              </div>
            </div>
          </div>

          {/* Metrics Validation Cards */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-xs font-bold text-[#f4f6f8] uppercase tracking-wider mb-3">
              Validated Production Metrics
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics?.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0f1d2a] border border-[#293644] text-center">
                  <div className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#7cd1fb]">
                    {m.value}
                  </div>
                  <div className="font-['Space_Grotesk'] text-[10px] text-[#a6b0bc] uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#020f1c] border border-[#293644]">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffb2b8] uppercase tracking-wider block mb-2">
                Operational Problem
              </span>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#020f1c] border border-[#293644]">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#7cd1fb] uppercase tracking-wider block mb-2">
                Engineered Solution
              </span>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#a6b0bc] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.deepDive?.architectureHighlights && (
            <div>
              <h4 className="font-['Space_Grotesk'] text-xs font-bold text-[#f4f6f8] uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText size={14} className="text-[#7cd1fb]" />
                Architecture & Engineering Specifications
              </h4>
              <ul className="space-y-2.5 font-['Inter'] text-xs sm:text-sm text-[#d6e4f6]">
                {project.deepDive.architectureHighlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 p-2.5 rounded bg-[#13212e] border border-[#293644]">
                    <CheckCircle2 size={16} className="text-[#7cd1fb] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#a6b0bc] uppercase tracking-wider block mb-2">
              Technology & Method Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded bg-[#0f1d2a] border border-[#293644] font-['Space_Grotesk'] text-xs font-medium text-[#7cd1fb]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#13212e] border-t border-[#293644] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider text-[#a6b0bc] hover:text-[#f4f6f8] transition-colors"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#8f1230] text-[#ffdadb] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:bg-[#aa1a3c] transition-colors border border-[#ffb2b8]/30"
          >
            <span>Consult on Similar Architecture</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
