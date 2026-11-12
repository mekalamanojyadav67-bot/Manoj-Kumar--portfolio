import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header with Top Bar Contract */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-grow">
        {/* Section 1: Home (Hero with Name, Intro, Circular Profile Photo, Python Visuals) */}
        <Hero />

        {/* Section 2: About Me (Background & Career Goals) */}
        <About />

        {/* Section 3: Education (Joy University, B.Tech CSE AI & ML, First Year) */}
        <Education />

        {/* Section 4: Skills (Technical skills with attractive progress indicators) */}
        <Skills />

        {/* Section 5: Projects (Student Grade Calculator with interactive runner) */}
        <Projects />

        {/* Section 6: Learning Journey (Programming learning progress) */}
        <LearningJourney />

        {/* Section 7: GitHub (Link GitHub profile) */}
        <GitHubSection />

        {/* Section 8: Contact (Email address & contact action) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
