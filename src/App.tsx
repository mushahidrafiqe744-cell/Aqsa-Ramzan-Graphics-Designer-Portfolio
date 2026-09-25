import React, { useState } from 'react';
import { Header, SectionTab } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesAndSkills } from './components/ServicesAndSkills';
import { BottomSections, ProjectItem } from './components/BottomSections';

import { DedicatedHomeView } from './components/DedicatedHomeView';
import { DedicatedAboutView } from './components/DedicatedAboutView';
import { DedicatedServicesView } from './components/DedicatedServicesView';
import { DedicatedSkillsView } from './components/DedicatedSkillsView';
import { DedicatedExperienceView } from './components/DedicatedExperienceView';
import { DedicatedPortfolioView } from './components/DedicatedPortfolioView';
import { DedicatedWhyChooseMeView } from './components/DedicatedWhyChooseMeView';
import { DedicatedContactView } from './components/DedicatedContactView';
import { SectionFooter } from './components/SectionFooter';

import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ServiceModal } from './components/ServiceModal';

import { ArrowLeft, Sparkles, Home } from 'lucide-react';
import { GoldSparkle } from './components/IconsAndDecorations';

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('Logo Design');

  const handleOpenContactModal = (subject?: string) => {
    if (subject) setContactSubject(subject);
    setIsContactModalOpen(true);
  };

  const handleSelectTab = (tab: SectionTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F6F3EB] text-[#1A2821] flex flex-col justify-between selection:bg-[#C99742] selection:text-white pb-6">
      
      {/* 1. Top Header Navigation Bar */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenContactModal={() => handleOpenContactModal('General Inquiry')}
      />

      {/* 2. Clean Breadcrumb / Active Section Indicator Bar */}
      {activeTab !== 'home' && activeTab !== 'view-all' && (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-1 pb-2">
          <div className="flex items-center justify-between bg-[#EDE7DA] border border-[#DDD5C5] px-4 py-2.5 rounded-2xl animate-slide-up shadow-xs">
            <button
              onClick={() => handleSelectTab('home')}
              className="flex items-center gap-2 text-xs font-bold text-[#142820] hover:text-[#C99742] transition-all hover:-translate-x-1 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>← Back to Home</span>
            </button>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C99742] uppercase tracking-wider bg-white/80 px-3 py-1 rounded-full border border-[#DDD5C5]">
              <Sparkles className="w-3.5 h-3.5 animate-shimmer" />
              <span>Section: {activeTab.replace('-', ' ')}</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Main Dynamic View (Individual standalone pages with animated components) */}
      <main className="flex-1 flex flex-col justify-center">
        
        {/* TAB 1: SEPARATE HOME SECTION */}
        {activeTab === 'home' && (
          <DedicatedHomeView
            onNavigateToTab={handleSelectTab}
          />
        )}

        {/* TAB 2: SEPARATE ABOUT ME SECTION */}
        {activeTab === 'about' && (
          <DedicatedAboutView
            onOpenContact={(subject) => {
              setContactSubject(subject || 'About Inquiry');
              handleSelectTab('contact');
            }}
          />
        )}

        {/* TAB 3: SEPARATE SERVICES SECTION */}
        {activeTab === 'services' && (
          <DedicatedServicesView
            onSelectService={(serviceName) => setSelectedService(serviceName)}
            onOpenContact={(subject) => {
              setContactSubject(subject || 'Service Inquiry');
              handleSelectTab('contact');
            }}
          />
        )}

        {/* TAB 4: SEPARATE SKILLS & TOOLS SECTION */}
        {activeTab === 'skills' && (
          <DedicatedSkillsView />
        )}

        {/* TAB 5: SEPARATE EXPERIENCE SECTION */}
        {activeTab === 'experience' && (
          <DedicatedExperienceView
            onOpenContact={(subject) => {
              setContactSubject(subject || 'Experience Inquiry');
              handleSelectTab('contact');
            }}
          />
        )}

        {/* TAB 6: SEPARATE PORTFOLIO / WORK SECTION */}
        {activeTab === 'portfolio' && (
          <DedicatedPortfolioView
            onOpenProject={(project) => setSelectedProject(project)}
            onOpenContact={(subject) => {
              setContactSubject(subject || 'Portfolio Inquiry');
              handleSelectTab('contact');
            }}
          />
        )}

        {/* TAB 7: SEPARATE WHY CHOOSE ME SECTION */}
        {activeTab === 'why-choose-me' && (
          <DedicatedWhyChooseMeView
            onOpenContact={(subject) => {
              setContactSubject(subject || 'Why Choose Me Inquiry');
              handleSelectTab('contact');
            }}
          />
        )}

        {/* TAB 8: SEPARATE CONTACT & BRIEF FORM SECTION */}
        {activeTab === 'contact' && (
          <DedicatedContactView
            prefillSubject={contactSubject}
          />
        )}

        {/* TAB 9: VIEW ALL (Full Poster Layout) */}
        {activeTab === 'view-all' && (
          <div className="animate-in fade-in duration-300">
            <HeroSection
              onViewWork={() => handleSelectTab('portfolio')}
              onOpenAbout={() => handleSelectTab('about')}
            />
            <div onClick={() => handleSelectTab('about')} className="cursor-pointer" title="Click to open full About Me page">
              <AboutSection />
            </div>
            <ServicesAndSkills
              onSelectService={(serviceName) => setSelectedService(serviceName)}
              onOpenServices={() => handleSelectTab('services')}
              onOpenSkills={() => handleSelectTab('skills')}
              onOpenExperience={() => handleSelectTab('experience')}
            />
            <BottomSections
              onOpenContact={() => handleSelectTab('contact')}
              onOpenProject={(project) => setSelectedProject(project)}
              onOpenWhyChooseMe={() => handleSelectTab('why-choose-me')}
              onOpenPortfolio={() => handleSelectTab('portfolio')}
            />
          </div>
        )}

      </main>

      {/* 4. Complete Branded Universal Section Footer on Every Section */}
      <SectionFooter
        onSelectTab={handleSelectTab}
        onOpenContact={(subject) => {
          setContactSubject(subject || 'Footer Inquiry');
          handleSelectTab('contact');
        }}
      />

      {/* Modals & Interactive Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOrderSimilar={(projectName) => {
          setContactSubject(`Project like ${projectName}`);
          handleSelectTab('contact');
        }}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefillSubject={contactSubject}
      />

      <ServiceModal
        serviceName={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceName) => {
          setContactSubject(`Package for ${serviceName}`);
          handleSelectTab('contact');
        }}
      />
    </div>
  );
}
