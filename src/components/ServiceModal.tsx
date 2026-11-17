import React from 'react';
import { Service } from '../types';
import { X, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectForContact: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectForContact }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        id="service-detail-modal"
        className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full overflow-hidden shadow-2xl relative my-8 animate-in zoom-in-95 duration-200 flex flex-col"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
              Service {service.index}
            </span>
            <span className="text-xs text-slate-400">Detailed Scope</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900 font-semibold block mb-1">Ideal For:</strong>
            <span>{service.bestFor}</span>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Standard Deliverables & Guarantees
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium">Ready to get started?</span>
          <button
            onClick={() => {
              onClose();
              onSelectForContact(service.title);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
