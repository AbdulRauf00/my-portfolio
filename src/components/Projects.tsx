import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Maximize2,
  FolderGit2
} from 'lucide-react';

interface ProjectsProps {
  onContactClick: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Business', value: 'business' },
    { label: 'Landing Page', value: 'landing-page' },
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Conversion', value: 'conversion' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects.find(p => p.featured) || (activeCategory === 'all' ? PROJECTS_DATA[0] : null);
  const regularProjects = featuredProject 
    ? filteredProjects.filter(p => p.id !== featuredProject.id)
    : filteredProjects;

  return (
    <section id="work" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
              <span>SELECTED WORK</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              A selection of projects I've built.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              A mix of business websites, landing pages, dashboards, and design-to-code projects built with performance, usability, and polish in mind.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`project-filter-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED SPOTLIGHT PROJECT (When available) */}
        {featuredProject && (
          <div
            id={`featured-project-${featuredProject.id}`}
            onClick={() => setSelectedProject(featuredProject)}
            className="mb-10 rounded-3xl bg-[#fbfbfa] border border-slate-200/90 hover:border-slate-300 overflow-hidden shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_-10px_rgba(15,23,42,0.08)] transition-all duration-300 group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Details */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide">
                      Featured Project
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-medium">
                      {featuredProject.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Highlights */}
                  {featuredProject.highlights && (
                    <div className="mt-6 space-y-2">
                      {featuredProject.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-xs font-medium text-slate-700 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats & CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                  {featuredProject.metrics && (
                    <div className="flex items-center gap-4">
                      {featuredProject.metrics.map((m, idx) => (
                        <div key={idx} className="text-left">
                          <span className="block text-xs text-slate-400 font-medium">{m.label}</span>
                          <span className="text-sm font-extrabold text-slate-900 font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="inline-flex items-center gap-1.5 font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Right Preview Image */}
              <div className="lg:col-span-6 bg-slate-900 relative overflow-hidden min-h-[280px] lg:min-h-full">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
              </div>

            </div>
          </div>
        )}

        {/* REGULAR PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="rounded-2xl bg-[#fbfbfa] border border-slate-200/90 hover:border-slate-300 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Container with subtle zoom */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-white text-slate-900 shadow-md flex items-center justify-center">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-600 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[11px] text-slate-400 font-mono">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 text-xs">
                <span className="text-slate-400 font-medium">
                  {project.metrics?.[0]?.value ? `Metric: ${project.metrics[0].value}` : 'Production Ready'}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal deep dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContactClick={onContactClick}
        />

      </div>
    </section>
  );
};
