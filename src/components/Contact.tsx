import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      setSentStatus('Please provide your name and message.');
      return;
    }

    const mailtoSubject = encodeURIComponent(subject || `Message from Portfolio visitor (${name})`);
    const mailtoBody = encodeURIComponent(`Hi Manoj,\n\nName: ${name}\n\nMessage:\n${message}\n\nRegards,\n${name}`);
    
    // Launch mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentStatus('Opening your mail client...');
    setTimeout(() => setSentStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Get In Touch
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-400">
            I am always eager to connect with fellow students, developers, professors, and tech mentors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950 text-blue-400 border border-blue-600/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-semibold text-white font-mono break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              {/* Action Buttons for Email */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? 'Copied Email' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* University & Degree Details Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm mb-0.5">{PERSONAL_INFO.degree}</strong>
                  <p className="text-slate-400 leading-normal">
                    Specialization in {PERSONAL_INFO.specialization} · {PERSONAL_INFO.academicYear}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/80">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm mb-0.5">{PERSONAL_INFO.college}</strong>
                  <p className="text-slate-400 leading-normal">
                    Undergraduate Campus Student
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-5"
            >
              <h3 className="text-lg font-bold text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400">
                Draft a message to discuss Python projects, university studies, or AI engineering discussions.
              </p>

              {sentStatus && (
                <div className="rounded-lg bg-blue-950/60 border border-blue-800 p-3 text-xs text-blue-300">
                  {sentStatus}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Connecting regarding Python / AI"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Manoj, I saw your Student Grade Calculator project..."
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">
                  Sends directly to {PERSONAL_INFO.email}
                </span>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Launch Mail Client</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
