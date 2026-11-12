import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Target, Compass, BookOpen, Cpu, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            About Me
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Driven by curiosity, grounded in fundamentals
          </h2>
          <p className="mt-3 text-base text-slate-400">
            My background as a first-year Computer Science student and my long-term vision to become an AI Engineer.
          </p>
        </div>

        {/* 2-Column Split: Narrative Story & Key Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a first-year undergraduate pursuing my Bachelor of Technology (B.Tech) in <strong className="text-white font-semibold">Computer Science Engineering</strong> with a dedicated specialization in <strong className="text-amber-300 font-semibold">{PERSONAL_INFO.specialization}</strong> at <strong className="text-white font-semibold">{PERSONAL_INFO.college}</strong>.
            </p>

            <p>
              My journey into technology began with an enthusiasm for how computer programs can think, adapt, and solve everyday challenges. Currently, I am building strong foundational programming skills in <span className="text-blue-400 font-medium">Python</span>, writing logic scripts, and understanding core computing principles. Alongside Python, I am exploring <span className="text-blue-400 font-medium">HTML & CSS</span> for foundational web development, enabling me to build clean, functional user interfaces.
            </p>

            <p>
              My definitive career goal is to become an <strong className="text-white font-semibold">AI Engineer</strong>. Rather than jumping straight to complex black-box tools, I believe in mastering the stepping stones: writing clean algorithmic logic, understanding data structures, grasping mathematics for computing, and continually building hands-on projects.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-y-3 gap-x-6 text-sm text-slate-400">
              <div>
                <span className="text-slate-500 text-xs block">Current Status</span>
                <span className="text-slate-200 font-medium">1st Year Undergrad Student</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Institution</span>
                <span className="text-slate-200 font-medium">{PERSONAL_INFO.college}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Ambition</span>
                <span className="text-amber-400 font-medium">{PERSONAL_INFO.title}</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-950/80 border border-blue-600/30 p-2.5 text-blue-400 shrink-0">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Career Goal: AI Engineer</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-normal">
                    Committed to developing expertise in intelligent systems, machine learning workflows, and practical applications that solve tangible problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-amber-950/80 border border-amber-600/30 p-2.5 text-amber-400 shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">University Foundation</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-normal">
                    Studying at Joy University, engaging with curriculum in programming logic, mathematics, and introductory artificial intelligence fundamentals.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-indigo-950/80 border border-indigo-600/30 p-2.5 text-indigo-400 shrink-0">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Practical Learning Focus</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-normal">
                    Strengthening problem solving with hands-on beginner projects like the Student Grade Calculator, reinforcing conditions, loops, and modular code.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
