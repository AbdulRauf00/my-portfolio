import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Sparkles, Code2, Gauge, Smartphone, Monitor, Tablet, CheckCircle2, Copy, Check, Terminal, ExternalLink, Zap } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'performance'>('preview');
  const [copiedCode, setCopiedCode] = useState(false);
  const [simulatedDevice, setSimulatedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeWidgetTab, setActiveWidgetTab] = useState<'overview' | 'analytics' | 'activity'>('overview');

  const sampleSnippet = `// Clean, modular front-end architecture
import { createClientUI } from '@rauf/core';

export const ModernInterface = () => {
  const { metrics, status } = usePerformance({
    targetLighthouse: 100,
    responsiveGrid: 'mobile-first',
    accessibility: 'WCAG-AA'
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <StatusBadge status={status} />
        <CoreWebVitals fcp="0.4s" cls="0.00" />
      </div>
      <InteractiveGrid dataset={metrics} />
    </div>
  );
};`;

  const copySnippet = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-120 pointer-events-none" />
      
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Eyebrow badge */}
          <div
            id="hero-eyebrow"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-300/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-6 transition-all hover:bg-slate-900/10 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>AVAILABLE FOR FREELANCE · PAKISTAN</span>
          </div>

          {/* Main Headings */}
          <h1
            id="hero-main-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Hi, I'm <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-8">Abdul Rauf</span>.
          </h1>

          <p
            id="hero-subheadline"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight leading-snug mb-6 max-w-3xl"
          >
            {PERSONAL_INFO.heroSubheadline}
          </p>

          {/* Hero Description */}
          <p
            id="hero-description"
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-9"
          >
            {PERSONAL_INFO.heroDescription}
          </p>

          {/* CTAs */}
          <div id="hero-actions" className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              id="hero-view-work-btn"
              onClick={onViewWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm tracking-wide transition-all duration-200 shadow-xs hover:border-slate-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Let's Work Together</span>
            </button>
          </div>

          {/* Micro badges below CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pixel-Perfect UI
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sub-Second Load Times
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Figma & PSD to Clean HTML
            </span>
          </div>
        </div>

        {/* HERO VISUAL: Premium Interactive Product Interface Mockup */}
        <div id="hero-interactive-mockup" className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all">
            
            {/* Top SaaS Browser / Console Header Bar */}
            <div className="bg-slate-900 text-slate-300 px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              
              {/* Left: Window Controls & URL Bar */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300">
                  <span className="text-slate-500">https://</span>
                  <span className="text-blue-400">rauf.dev</span>
                  <span className="text-slate-400">/modern-frontend-engine</span>
                </div>
              </div>

              {/* Center: Mode Switcher Tabs */}
              <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg border border-slate-700/60 text-xs">
                <button
                  id="hero-tab-preview"
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>UI Preview</span>
                </button>
                <button
                  id="hero-tab-code"
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Clean Code</span>
                </button>
                <button
                  id="hero-tab-perf"
                  onClick={() => setActiveTab('performance')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    activeTab === 'performance'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Gauge className="w-3.5 h-3.5" />
                  <span>Audit (100)</span>
                </button>
              </div>

              {/* Right: Viewport Simulator Icons */}
              <div className="hidden md:flex items-center gap-1 text-slate-400">
                <button
                  onClick={() => setSimulatedDevice('desktop')}
                  title="Desktop View (100%)"
                  className={`p-1.5 rounded-md hover:text-white transition-colors ${
                    simulatedDevice === 'desktop' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSimulatedDevice('tablet')}
                  title="Tablet View (768px)"
                  className={`p-1.5 rounded-md hover:text-white transition-colors ${
                    simulatedDevice === 'tablet' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSimulatedDevice('mobile')}
                  title="Mobile View (375px)"
                  className={`p-1.5 rounded-md hover:text-white transition-colors ${
                    simulatedDevice === 'mobile' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Area Inside Browser Mockup */}
            <div className="p-4 sm:p-6 bg-slate-50/60 min-h-[380px] flex items-center justify-center">
              
              {/* TAB 1: UI PREVIEW */}
              {activeTab === 'preview' && (
                <div
                  className={`w-full transition-all duration-300 mx-auto ${
                    simulatedDevice === 'mobile'
                      ? 'max-w-sm'
                      : simulatedDevice === 'tablet'
                      ? 'max-w-xl'
                      : 'max-w-4xl'
                  }`}
                >
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6">
                    {/* Mockup App Subheader */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                          AR
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">Nexus Component Engine</div>
                          <div className="text-xs text-slate-500">Built with HTML5, Tailwind & Vanilla JS</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs font-medium text-slate-600">
                          <button
                            onClick={() => setActiveWidgetTab('overview')}
                            className={`px-2.5 py-1 rounded-md transition-colors ${
                              activeWidgetTab === 'overview' ? 'bg-white text-slate-900 shadow-xs' : ''
                            }`}
                          >
                            Overview
                          </button>
                          <button
                            onClick={() => setActiveWidgetTab('analytics')}
                            className={`px-2.5 py-1 rounded-md transition-colors ${
                              activeWidgetTab === 'analytics' ? 'bg-white text-slate-900 shadow-xs' : ''
                            }`}
                          >
                            Metrics
                          </button>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                          Live UI
                        </span>
                      </div>
                    </div>

                    {/* Interactive Widget Content */}
                    {activeWidgetTab === 'overview' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div className="text-xs text-slate-500 font-medium">Core Web Vitals</div>
                          <div className="text-xl font-bold text-slate-900 mt-1">99.8% Pass</div>
                          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                            <Zap className="w-3 h-3" /> FCP: 0.38s
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div className="text-xs text-slate-500 font-medium">Figma Translation</div>
                          <div className="text-xl font-bold text-slate-900 mt-1">1:1 Accuracy</div>
                          <div className="text-[11px] text-blue-600 font-semibold flex items-center gap-1 mt-1">
                            <Check className="w-3 h-3" /> Zero UI Drift
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div className="text-xs text-slate-500 font-medium">Architecture</div>
                          <div className="text-xl font-bold text-slate-900 mt-1">Modular & Scalable</div>
                          <div className="text-[11px] text-slate-600 font-medium flex items-center gap-1 mt-1">
                            Clean ES6+ Modules
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                          <span>Rendering Pipeline Efficiency</span>
                          <span className="font-bold text-slate-900">60 FPS</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full w-[96%] rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                            <div className="text-slate-400 text-[10px]">Bundle Payload</div>
                            <div className="font-bold text-slate-900">18.4 KB (Gzipped)</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                            <div className="text-slate-400 text-[10px]">Accessibility Compliance</div>
                            <div className="font-bold text-emerald-600">WCAG 2.1 AA Compliant</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom Status Bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
                      <span className="font-mono text-[11px]">Abdul Rauf // Front-End Engineering Lab</span>
                      <span className="text-blue-600 font-medium hover:underline cursor-pointer flex items-center gap-1" onClick={onViewWork}>
                        Explore full showcase <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CLEAN CODE */}
              {activeTab === 'code' && (
                <div className="w-full max-w-3xl bg-slate-950 text-slate-100 rounded-xl p-4 sm:p-5 font-mono text-xs shadow-inner overflow-x-auto relative">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-blue-400" />
                      <span>InterfaceModule.ts</span>
                    </div>
                    <button
                      onClick={copySnippet}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-slate-200 leading-relaxed overflow-x-auto whitespace-pre">
                    <code>{sampleSnippet}</code>
                  </pre>
                </div>
              )}

              {/* TAB 3: PERFORMANCE AUDIT */}
              {activeTab === 'performance' && (
                <div className="w-full max-w-2xl bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Google Lighthouse Audit Report</h4>
                      <p className="text-xs text-slate-500">Audited on Mobile & Desktop targets</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      All Metrics Green
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                      <div className="text-2xl font-extrabold text-emerald-600">100</div>
                      <div className="text-xs font-semibold text-slate-700 mt-0.5">Performance</div>
                      <div className="text-[10px] text-emerald-700 mt-1">FCP 0.3s</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                      <div className="text-2xl font-extrabold text-emerald-600">100</div>
                      <div className="text-xs font-semibold text-slate-700 mt-0.5">Accessibility</div>
                      <div className="text-[10px] text-emerald-700 mt-1">ARIA / WCAG AA</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                      <div className="text-2xl font-extrabold text-emerald-600">100</div>
                      <div className="text-xs font-semibold text-slate-700 mt-0.5">Best Practices</div>
                      <div className="text-[10px] text-emerald-700 mt-1">Secure & Modern</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                      <div className="text-2xl font-extrabold text-emerald-600">100</div>
                      <div className="text-xs font-semibold text-slate-700 mt-0.5">SEO</div>
                      <div className="text-[10px] text-emerald-700 mt-1">Structured Data</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs text-slate-600">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Speed Index</span>
                      <span className="font-bold text-slate-900">0.6s</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Total Blocking Time</span>
                      <span className="font-bold text-slate-900">0ms</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Cumulative Layout Shift</span>
                      <span className="font-bold text-slate-900">0.00</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
