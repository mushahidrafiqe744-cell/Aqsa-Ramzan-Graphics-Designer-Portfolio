import React from 'react';
import { X, CheckCircle, Send, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectItem } from './BottomSections';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOrderSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOrderSimilar
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#F6F3EB] rounded-3xl overflow-hidden shadow-2xl border border-[#C99742]/40 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#142820] text-white border-b border-[#234234]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C99742]" />
            <h3 className="font-serif-display text-lg font-bold tracking-wide">
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual Image */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#D5CDBC] bg-[#142820] shadow-inner max-h-[360px] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain max-h-[360px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details & Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#ECE6D8] p-4 rounded-2xl border border-[#DDD5C5]">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#63726A] font-bold">Category</p>
              <p className="text-sm font-semibold text-[#142820]">{project.category}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#63726A] font-bold">Client / Project</p>
              <p className="text-sm font-semibold text-[#142820]">{project.client}</p>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142820] mb-2">
              Design Overview & Impact
            </h4>
            <p className="text-sm text-[#384A41] leading-relaxed">
              {project.description} Crafted with focus on brand distinction, optimal typographic harmony, and cross-platform versatility across print and digital channels.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-[#142820] text-[#E4BF75] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOrderSimilar(project.title);
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#142820] hover:bg-[#1C3A2E] text-white py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E4BF75]" />
              <span>Inquire About Similar Design</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-[#142820] text-[#142820] text-xs font-bold tracking-wider uppercase hover:bg-[#ECE6D8] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
