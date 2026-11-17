import React from 'react';
import { WHY_CHOOSE_ME } from '../data/portfolioData';
import { 
  Maximize2, 
  Smartphone, 
  Code2, 
  Zap, 
  Search, 
  Globe, 
  Layers, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export const WhyMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2
            id="whyme-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Built with attention to every detail.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            I don't just deliver markup; I deliver robust, production-grade front-end code built to scale with your product roadmap.
          </p>
        </div>

        {/* 8-Grid Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_ME.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="p-6 rounded-2xl bg-[#fbfbfa] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-[0_6px_25px_-5px_rgba(15,23,42,0.06)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  {item.metric && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700 font-mono">
                      {item.metric}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
