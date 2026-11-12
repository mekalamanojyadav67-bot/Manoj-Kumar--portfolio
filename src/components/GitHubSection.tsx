import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, ArrowUpRight, GitBranch, Terminal, Star, Code2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-10 relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Github className="h-4 w-4" />
                <span>Open Source & Code Activity</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Follow My Code on GitHub
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                I document my code exercises, university coursework, and Python utilities openly. Visit my GitHub profile at <span className="font-mono text-amber-300">mekalamanojyadav67-bot</span> to inspect my repositories, commits, and student projects.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 font-mono">
                  <Terminal className="h-4 w-4 text-blue-400" />
                  <span>github.com/mekalamanojyadav67-bot</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitBranch className="h-4 w-4 text-emerald-400" />
                  <span>Public Repositories & Practice Code</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 justify-center">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 font-bold px-6 py-3.5 text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/5"
              >
                <Github className="h-5 w-5" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={`${PERSONAL_INFO.github}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Code2 className="h-4 w-4" />
                <span>Browse Repositories</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
