import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Maximize2, 
  Code2, 
  Layers, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { mushahidData, DeveloperProject } from '../data/portfolioData';

interface DeveloperProjectsProps {
  onSelectProject: (project: DeveloperProject) => void;
  onOpenContact: (subject: string) => void;
}

export const DeveloperProjects: React.FC<DeveloperProjectsProps> = ({
  onSelectProject,
  onOpenContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'E-Commerce',
    'SaaS & Tools',
    'UI / Graphic Design',
  ];

  const filteredProjects = mushahidData.projects.filter((project) => {
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
          // FEATURED WORK
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#142820] tracking-tight">
          Portfolio & Case Studies
        </h2>
        <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
        <p className="text-sm text-[#4E6157] max-w-xl">
          Explore production-grade full-stack applications, interactive UI systems, and branding designs engineered for real-world impact.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#142820] text-[#E4BF75] shadow-md'
                  : 'bg-[#EDE8DC] text-[#142820] hover:bg-[#DDD5C5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#5C6B62] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tech or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[#D5CDBC] bg-white text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#C99742]"
          />
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#EDE8DC]/80 border border-[#DDD5C5] hover:border-[#C99742] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail with overlay */}
              <div 
                onClick={() => onSelectProject(project)}
                className="relative aspect-[16/10] bg-[#142820] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#142820]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E4BF75] text-[#142820] flex items-center justify-center shadow-md">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#142820]/90 backdrop-blur-xs text-[#E4BF75] text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-[#C99742]/50">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <h3 
                  onClick={() => onSelectProject(project)}
                  className="font-serif-display text-xl font-bold text-[#142820] mb-1 group-hover:text-[#C99742] transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#5C6B62] mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs text-[#384D42] leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-semibold bg-white/80 text-[#142820] border border-[#D5CDBC] px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-6 pb-6 pt-3 border-t border-[#D8CFBD] flex items-center justify-between gap-3">
              <button
                onClick={() => onSelectProject(project)}
                className="text-xs font-bold uppercase tracking-wider text-[#142820] hover:text-[#C99742] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Case Study</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenContact(`Project Inquiry for ${project.title}`)}
                className="bg-[#142820] hover:bg-[#1C3A2E] text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
