import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { Code, Check, Terminal, Layout, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Language' | 'Web' | 'AI & Concept'>('All');

  const filteredSkills = activeCategory === 'All'
    ? TECHNICAL_SKILLS
    : TECHNICAL_SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Technical Competencies
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills & Progress Indicators
            </h2>
            <p className="mt-3 text-base text-slate-400">
              An honest, transparent view of my active technical skills and beginner-to-foundational learning benchmarks.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs font-medium self-start md:self-auto">
            {(['All', 'Language', 'Web', 'AI & Concept'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'Language' ? 'Python' : cat === 'AI & Concept' ? 'GenAI' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span className="text-amber-400 font-medium">{skill.levelName}</span>
                      <span aria-hidden="true">·</span>
                      <span>{skill.category}</span>
                    </div>
                  </div>

                  <span className="text-base font-mono font-bold text-blue-400 tabular-nums">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress bar indicator */}
                <div className="w-full bg-slate-950 rounded-full h-2 mb-4 overflow-hidden border border-slate-800/80 p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-amber-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Sub-skill highlights */}
              <div className="border-t border-slate-800/70 pt-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Key Learnings
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Academic Integrity Note */}
        <div className="mt-10 rounded-xl border border-slate-800/70 bg-slate-900/30 p-4 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span>Progress percentages represent syllabus completion and active comfort levels in my first-year curriculum.</span>
          </div>
          <span className="text-slate-500 font-mono text-[11px]">Updated Semester 1 · 2025/2026</span>
        </div>

      </div>
    </section>
  );
};
