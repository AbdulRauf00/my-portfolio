import React from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative z-10 py-6 border-y border-slate-200/80 bg-white/80 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className={`flex flex-col justify-center ${
                idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              } group`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 hidden xl:inline-block">
                  Verified
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
