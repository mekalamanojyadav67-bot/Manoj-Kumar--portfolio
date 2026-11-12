import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, BookMarked, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-900 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Academic Background
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education & Core Studies
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Formative engineering education laying the groundwork for Artificial Intelligence & Computer Science.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 relative overflow-hidden">
          
          {/* Subtle background gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-md">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
                  Undergraduate Program
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-amber-300 font-medium text-sm mt-0.5">
                  Specialization: {PERSONAL_INFO.specialization}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-950/70 border border-slate-800 px-3 py-2">
                <Calendar className="h-3.5 w-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.academicYear} (Undergraduate)</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-950/70 border border-slate-800 px-3 py-2">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>{PERSONAL_INFO.college}</span>
              </div>
            </div>
          </div>

          {/* Academic Modules / Learning Areas */}
          <div className="mt-6 pt-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              First-Year Coursework & Core Focus
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4">
                <div className="text-sm font-semibold text-white">Problem Solving & Python</div>
                <p className="mt-1.5 text-xs text-slate-400 leading-normal">
                  Algorithmic logic, control flow, functions, iterative loops, and computational thinking.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4">
                <div className="text-sm font-semibold text-white">Mathematics for Computing</div>
                <p className="mt-1.5 text-xs text-slate-400 leading-normal">
                  Foundations of discrete mathematics, calculus, and matrix algebra for intelligent algorithms.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4">
                <div className="text-sm font-semibold text-white">Fundamentals of Web Tech</div>
                <p className="mt-1.5 text-xs text-slate-400 leading-normal">
                  Semantic HTML5 structuring, modern CSS styling, web principles, and responsive UI layout.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4">
                <div className="text-sm font-semibold text-white">Introductory AI Concepts</div>
                <p className="mt-1.5 text-xs text-slate-400 leading-normal">
                  Exploration of machine learning terminology, intelligence paradigms, and generative models.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
