import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3 text-center sm:text-left">
            <span className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-400">
              {PERSONAL_INFO.degree} ({PERSONAL_INFO.college})
            </span>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS · Aspiring AI Engineer Portfolio</p>
        </div>

      </div>
    </footer>
  );
};
