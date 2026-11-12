import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Github, Mail, Sparkles, Terminal, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[620px] rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-amber-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Unboxed natural kicker */}
            <div className="flex items-center flex-wrap gap-2 text-xs font-medium tracking-wide text-blue-400">
              <span>Joy University</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>B.Tech CSE (AI & ML)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400">First Year Student</span>
            </div>

            {/* Headline with balanced wrap */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <span>{PERSONAL_INFO.title}</span>
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-blue-300">
                  Python & AIML
                </span>
              </p>
            </div>

            {/* Lead Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              First-year engineering student at <span className="text-slate-200 font-medium">Joy University</span> passionate about programming logic in Python, foundational web technologies, and generative AI concepts. Actively building projects and strengthening algorithmic thinking to engineer intelligent systems.
            </p>

            {/* Quick Badges / Meta Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs text-slate-300">
              <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-3">
                <span className="text-slate-500 block text-[11px]">Academic Year</span>
                <span className="font-semibold text-white">1st Year B.Tech</span>
              </div>
              <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-3">
                <span className="text-slate-500 block text-[11px]">Primary Language</span>
                <span className="font-semibold text-amber-300 flex items-center gap-1">
                  <span>Python</span>
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-lg bg-slate-900/80 border border-slate-800 p-3">
                <span className="text-slate-500 block text-[11px]">Department</span>
                <span className="font-semibold text-blue-400 truncate block">CSE (AI & ML)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 hover:shadow-blue-500/35 transition-all"
              >
                <span>View My Projects</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Circular Profile Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              
              {/* Python decorative rings */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/40 via-amber-400/20 to-blue-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              {/* Circular profile frame */}
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full p-2 bg-gradient-to-b from-blue-500/60 via-slate-800 to-amber-500/60 shadow-2xl">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Manoj Yadav - First Year Computer Science Engineering Student"
                    className="h-full w-full object-cover object-[50%_28%] hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Status pill-free floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-max rounded-lg bg-slate-900/95 border border-slate-700/80 px-4 py-2 shadow-xl backdrop-blur-md flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-slate-200">
                  Open to Learning & Collaborating
                </span>
              </div>
            </div>

            {/* Terminal snippet below photo */}
            <div className="mt-10 w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900/90 p-3.5 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400">intro.py</span>
                </div>
                <span className="text-[11px] text-blue-400">Python 3.12</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <p><span className="text-blue-400">class</span> <span className="text-amber-300">StudentEngineer</span>:</p>
                <p className="pl-4"><span className="text-slate-400">name</span> = <span className="text-emerald-400">"Manoj Yadav"</span></p>
                <p className="pl-4"><span className="text-slate-400">focus</span> = <span className="text-emerald-400">"AI & Machine Learning"</span></p>
                <p className="pl-4"><span className="text-slate-400">goal</span> = <span className="text-emerald-400">"Aspiring AI Engineer"</span></p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
