import React from 'react';
import { LEARNING_JOURNEY } from '../data/portfolioData';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 border-t border-slate-900 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Roadmap & Milestones
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Programming Learning Journey
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Tracing my progression from starting code syntax to building projects and gearing up for AI engineering.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {LEARNING_JOURNEY.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                <div className="flex items-start gap-4">
                  {/* Step Index Circle */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                    item.status === 'Completed'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-600/30'
                      : item.status === 'In Progress'
                      ? 'bg-blue-950 text-blue-400 border border-blue-600/30'
                      : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}>
                    {item.step}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
                      <span>{item.period}</span>
                      <span aria-hidden="true">·</span>
                      <span className={`font-medium ${
                        item.status === 'Completed'
                          ? 'text-emerald-400'
                          : item.status === 'In Progress'
                          ? 'text-blue-400'
                          : 'text-slate-500'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {item.summary}
                    </p>
                  </div>
                </div>

              </div>

              {/* Learning tags */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {item.learnings.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-950/80 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
