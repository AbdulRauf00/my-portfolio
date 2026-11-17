import React, { useState } from 'react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData';
import { ArrowRight, Download, CheckCircle, Award, Code2, Sparkles, FileText, Check } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      
      // Create a clean printable resume summary or trigger download
      const cvContent = `ABDUL RAUF - FRONT-END DEVELOPER\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nLocation: ${PERSONAL_INFO.location}\n\nPROFILE:\n${PERSONAL_INFO.heroDescription}\n\nCORE SKILLS:\nHTML5, CSS3, JavaScript ES6+, Tailwind CSS, Bootstrap, PHP, Laravel, MySQL, Git, Figma\n\nSERVICES:\nModern Website Development, Landing Pages, Figma/PSD to HTML, Dashboards, Website Optimization`;
      
      const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abdul_Rauf_FrontEnd_Developer_CV.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 800);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fbfbfa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            {PERSONAL_INFO.aboutHeading}
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Story & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-700 font-normal leading-relaxed">
              I am a passionate <strong className="text-slate-900 font-semibold">Front-End Web Developer</strong> specializing in creating responsive, modern, and SEO-friendly websites. I build business websites, landing pages, admin dashboards, portfolios, and custom web interfaces with clean, scalable, and maintainable code.
            </p>
            
            <p className="text-base text-slate-600 leading-relaxed">
              I focus on performance, accessibility, responsive design, and exceptional user experience — turning <strong className="text-slate-900 font-semibold">Figma and PSD designs into pixel-perfect, production-ready websites</strong> that load fast and work seamlessly on every screen resolution and browser.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Award className="w-4 h-4 text-blue-600" />
                <span>My Core Engineering Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Code should not only render beautifully for users, but it must also be clean and modular for engineering teams. Every layout shift is eliminated, every asset is compressed, and every semantic tag serves a deliberate purpose.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="about-download-cv-btn"
                onClick={handleDownloadCV}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 text-sm font-semibold transition-all duration-200 shadow-xs cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Downloaded CV</span>
                  </>
                ) : (
                  <>
                    <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                    <span>{downloading ? 'Preparing CV...' : 'Download CV'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ABOUT_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                id={`about-highlight-${idx}`}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-blue-300/80 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
