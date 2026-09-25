import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Send, Sparkles, Layers } from 'lucide-react';
import { DeveloperProject } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: DeveloperProject | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#F6F3EB] rounded-3xl overflow-hidden shadow-2xl border border-[#C99742]/50 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#142820] text-white border-b border-[#234234]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C99742]" />
            <h3 className="font-serif-display text-lg sm:text-xl font-bold tracking-wide">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Screenshot Visual */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#D5CDBC] bg-[#142820] shadow-inner max-h-[380px] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover max-h-[380px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtitle & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#D8CFBD]">
            <span className="text-xs font-mono font-bold uppercase bg-[#142820] text-[#E4BF75] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-[#5C6B62]">
              {project.subtitle}
            </span>
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#142820] mb-2">
              Architecture & System Overview
            </h4>
            <p className="text-sm text-[#2D3E35] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#142820] mb-3">
                Key Technical Capabilities & Features
              </h4>
              <div className="space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C99742] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2A3D33] font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#142820] mb-2.5">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold bg-[#142820] text-[#E4BF75] px-3 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white py-3.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E4BF75]" />
              <span>Discuss Building Similar Web App</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-full border border-[#142820] text-[#142820] text-xs font-bold tracking-wider uppercase hover:bg-[#ECE6D8] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
