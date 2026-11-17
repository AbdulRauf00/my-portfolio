import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ArrowRight, GitBranch, Terminal } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-[#fbfbfa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>DEVELOPMENT WORKFLOW</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            From idea to polished product.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            A battle-tested 4-step engineering lifecycle that guarantees predictable delivery, clean code, and zero surprises.
          </p>
        </div>

        {/* 4 Steps Modern SaaS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              onClick={() => setActiveStep(idx)}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                activeStep === idx
                  ? 'bg-white border-blue-400 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.12)]'
                  : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-2xl font-extrabold transition-colors ${
                    activeStep === idx ? 'text-blue-600' : 'text-slate-300 group-hover:text-slate-600'
                  }`}>
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-blue-600 mb-3">
                  {step.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Step Key Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-1.5">
                {step.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
