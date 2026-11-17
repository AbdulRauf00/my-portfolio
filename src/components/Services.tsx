import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Service } from '../types';
import { 
  Globe, 
  Flame, 
  Figma, 
  FileCode, 
  LayoutDashboard, 
  Gauge, 
  ArrowUpRight, 
  Check, 
  Layers,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Figma': return <Figma className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fbfbfa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I DO</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            What I can build for you.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            High-standard front-end engineering services tailored for businesses, agencies, startups, and product teams looking for reliability and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => onSelectService(service)}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] transition-all duration-200 flex flex-col justify-between group cursor-pointer relative"
            >
              <div>
                {/* Card Top: Index & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {service.index}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-200 shadow-xs">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Best For & Interactive Arrow */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium truncate max-w-[190px]">
                  {service.bestFor}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
