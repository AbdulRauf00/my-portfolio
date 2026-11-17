import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Gauge, Zap, Layers, Smartphone, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        id="project-detail-modal"
        className="bg-white rounded-3xl border border-slate-200 max-w-3xl w-full overflow-hidden shadow-2xl relative my-8 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono">Case Study</span>
          </div>

          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Title & Overview */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Project Preview Image with Browser Frame */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-sm">
            <div className="px-4 py-2 bg-slate-900 flex items-center gap-2 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-slate-400 font-mono ml-2 truncate">
                https://demo.rauf.dev/projects/{project.id}
              </span>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Performance & Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key Architecture Highlights */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Key Engineering Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Interested in building a similar project?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
