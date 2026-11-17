import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { 
  FileCode2, 
  Palette, 
  Code2, 
  Sparkles, 
  LayoutGrid, 
  Smartphone, 
  Globe2, 
  Figma, 
  Image, 
  Zap, 
  Server, 
  Layers, 
  Database, 
  GitBranch, 
  GitPullRequest, 
  Terminal,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { label: string; value: SkillCategory; count: number }[] = [
    { label: 'All Technologies', value: 'all', count: SKILLS_DATA.length },
    { label: 'Frontend & UI', value: 'frontend', count: SKILLS_DATA.filter(s => s.category === 'frontend').length },
    { label: 'Backend & Data', value: 'backend', count: SKILLS_DATA.filter(s => s.category === 'backend').length },
    { label: 'Dev Tools & Workflow', value: 'tools', count: SKILLS_DATA.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Globe2': return <Globe2 className="w-5 h-5" />;
      case 'Figma': return <Figma className="w-5 h-5" />;
      case 'Image': return <Image className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>TECHNOLOGIES</span>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Tools & technologies I work with.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              A focused stack for building fast, reliable, and beautiful web experiences — from front-end interfaces to complete web solutions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`skill-filter-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeCategory === cat.value ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="p-5 rounded-2xl bg-[#fbfbfa] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-800 flex items-center justify-center group-hover:text-blue-600 group-hover:border-blue-200 group-hover:shadow-xs transition-all">
                    {getIcon(skill.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/60 text-slate-700 font-mono">
                    {skill.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="capitalize">{skill.category}</span>
                {skill.highlight && (
                  <span className="text-blue-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Core Strength
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-700 text-center sm:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>Need a custom technology stack or legacy codebase migration? I adapt quickly to your team's tooling.</span>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap"
          >
            Discuss stack requirements →
          </a>
        </div>

      </div>
    </section>
  );
};
