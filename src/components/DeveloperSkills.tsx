import React, { useState } from 'react';
import { 
  Monitor, 
  Server, 
  Database, 
  Cpu, 
  Code2, 
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { mushahidData, DeveloperSkillCategory } from '../data/portfolioData';

export const DeveloperSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = mushahidData.skillCategories;

  const filteredCategories = activeTab === 'All' 
    ? categories 
    : categories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-xs font-bold font-mono text-[#C99742] uppercase tracking-[0.25em] mb-2">
          // TECHNICAL EXPERTISE
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#142820] tracking-tight">
          Skills & Tech Stack
        </h2>
        <div className="w-12 h-1 bg-[#C99742] my-4 rounded-full" />
        <p className="text-sm text-[#4E6157] max-w-xl">
          A comprehensive breakdown of my programming languages, frameworks, backend architectures, databases, and development workflows.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'All'
              ? 'bg-[#142820] text-[#E4BF75] shadow-md'
              : 'bg-[#EDE8DC] text-[#142820] hover:bg-[#DDD5C5]'
          }`}
        >
          All Skills ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(cat.category)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === cat.category
                ? 'bg-[#142820] text-[#E4BF75] shadow-md'
                : 'bg-[#EDE8DC] text-[#142820] hover:bg-[#DDD5C5]'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((categoryGroup) => (
          <div
            key={categoryGroup.category}
            className="bg-[#EDE8DC]/80 border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#C99742] transition-all"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D8CFBD]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#142820] text-[#C99742] flex items-center justify-center font-bold">
                  {categoryGroup.category.includes('Frontend') && <Monitor className="w-5 h-5" />}
                  {categoryGroup.category.includes('Backend') && <Server className="w-5 h-5" />}
                  {categoryGroup.category.includes('Databases') && <Database className="w-5 h-5" />}
                  {categoryGroup.category.includes('Tools') && <Cpu className="w-5 h-5" />}
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[#142820]">
                  {categoryGroup.category}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5C6B62] font-semibold">
                {categoryGroup.skills.length} Technologies
              </span>
            </div>

            {/* Individual Skills List with Proficiency Meter */}
            <div className="space-y-4">
              {categoryGroup.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center text-xs font-semibold text-[#142820] mb-1.5">
                    <span className="group-hover:text-[#C99742] transition-colors">{skill.name}</span>
                    <span className="font-mono text-[#5C6B62]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#D8CFBD] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#142820] via-[#2A4839] to-[#C99742] transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
