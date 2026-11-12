import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { GradeCalculatorModal } from './GradeCalculatorModal';
import { Play, Code, Github, CheckCircle, ChevronDown, ChevronUp, Copy, Check, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const project = PROJECTS[0]; // Student Grade Calculator

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.sampleCode);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Featured Work
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Projects & Practical Coding
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Hands-on software built during my first-year B.Tech CSE studies to reinforce Python programming fundamentals.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-800 bg-slate-900 px-3.5 py-2 rounded-lg hover:border-slate-700 transition-colors self-start md:self-auto shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden shadow-xl">
          
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Top metadata strip without pill boxes */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span className="text-amber-400 font-medium">{project.language}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.level}</span>
                  <span aria-hidden="true">·</span>
                  <span>Semester 1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Functional Interactive Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-600/25 hover:bg-blue-500 transition-all cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Run Live Simulator</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/90 px-3.5 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <Code className="h-3.5 w-3.5" />
                  <span>{showCode ? 'Hide Python Code' : 'View Python Code'}</span>
                  {showCode ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Project Content Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
              
              {/* Description & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Key Features Implemented
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Programming Concepts */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-amber-400" />
                    <span>Programming Concepts Mastered</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.keyConcepts.map((concept, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Status</span>
                      <span className="text-emerald-400 font-medium">Completed & Working</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-4 text-xs text-blue-200/90 leading-relaxed">
                  <strong className="text-blue-300 block mb-1">Why this project matters:</strong>
                  It bridges textbook syntax with actual computational flow—handling real errors, validating inputs gracefully, and structuring modular code that functions reliably.
                </div>
              </div>

            </div>

            {/* Expandable Python Code Snippet */}
            {showCode && (
              <div className="mt-4 pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="text-amber-400">student_grade_calculator.py</span>
                    <span className="text-slate-500">· 52 lines</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {codeCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{codeCopied ? 'Copied to Clipboard' : 'Copy Code'}</span>
                  </button>
                </div>

                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 overflow-x-auto">
                  <pre className="text-xs font-mono text-slate-300 leading-relaxed">
                    <code>{project.sampleCode}</code>
                  </pre>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Interactive Modal */}
      <GradeCalculatorModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
