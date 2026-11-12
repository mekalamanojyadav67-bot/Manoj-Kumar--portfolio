import React, { useState } from 'react';
import { X, Play, RotateCcw, Plus, Trash2, Check, Copy } from 'lucide-react';

interface SubjectMark {
  id: string;
  name: string;
  marks: number | '';
}

interface GradeResult {
  totalObtained: number;
  maxTotal: number;
  percentage: number;
  grade: string;
  gpa: number;
  remark: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const GradeCalculatorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [subjects, setSubjects] = useState<SubjectMark[]>([
    { id: '1', name: 'Mathematics', marks: 88 },
    { id: '2', name: 'Python Programming', marks: 94 },
    { id: '3', name: 'Physics', marks: 82 },
    { id: '4', name: 'English', marks: 85 },
  ]);

  const [result, setResult] = useState<GradeResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleMarkChange = (id: string, value: string) => {
    setErrorMsg(null);
    if (value === '') {
      setSubjects(subjects.map(s => s.id === id ? { ...s, marks: '' } : s));
      return;
    }
    const num = parseFloat(value);
    if (isNaN(num)) return;
    setSubjects(subjects.map(s => s.id === id ? { ...s, marks: Math.min(100, Math.max(0, num)) } : s));
  };

  const handleNameChange = (id: string, name: string) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, name } : s));
  };

  const addSubject = () => {
    const newId = (subjects.length + 1).toString();
    setSubjects([...subjects, { id: newId, name: `Subject ${newId}`, marks: 80 }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) {
      setErrorMsg('At least one subject is required.');
      return;
    }
    setSubjects(subjects.filter(s => s.id !== id));
  };

  const calculateGrade = () => {
    // Validate all marks are entered
    for (const sub of subjects) {
      if (sub.marks === '') {
        setErrorMsg(`Please enter valid marks (0-100) for ${sub.name || 'all subjects'}.`);
        return;
      }
    }
    setErrorMsg(null);

    const totalObtained = subjects.reduce((acc, curr) => acc + Number(curr.marks), 0);
    const maxTotal = subjects.length * 100;
    const percentage = (totalObtained / maxTotal) * 100;

    let grade = 'F';
    let gpa = 0.0;
    let remark = 'Needs Improvement';

    if (percentage >= 90) {
      grade = 'A+';
      gpa = 10.0;
      remark = 'Outstanding Performance';
    } else if (percentage >= 80) {
      grade = 'A';
      gpa = 9.0;
      remark = 'Excellent Performance';
    } else if (percentage >= 70) {
      grade = 'B';
      gpa = 8.0;
      remark = 'Very Good';
    } else if (percentage >= 60) {
      grade = 'C';
      gpa = 7.0;
      remark = 'Good';
    } else if (percentage >= 50) {
      grade = 'D';
      gpa = 6.0;
      remark = 'Pass';
    } else {
      grade = 'F';
      gpa = 0.0;
      remark = 'Needs Improvement (Fail)';
    }

    setResult({
      totalObtained,
      maxTotal,
      percentage,
      grade,
      gpa,
      remark,
    });
  };

  const resetForm = () => {
    setSubjects([
      { id: '1', name: 'Mathematics', marks: 88 },
      { id: '2', name: 'Python Programming', marks: 94 },
      { id: '3', name: 'Physics', marks: 82 },
      { id: '4', name: 'English', marks: 85 },
    ]);
    setResult(null);
    setErrorMsg(null);
  };

  const generateReportText = () => {
    if (!result) return '';
    return `=============================================
         STUDENT GRADE REPORT
=============================================
Subjects Evaluated:
${subjects.map(s => `- ${s.name}: ${s.marks}/100`).join('\n')}
---------------------------------------------
Total Marks   : ${result.totalObtained.toFixed(1)} / ${result.maxTotal}
Percentage    : ${result.percentage.toFixed(2)}%
Grade Letter  : ${result.grade}
GPA (10 Scale): ${result.gpa.toFixed(1)}
Evaluation    : ${result.remark}
=============================================
Developed in Python by Manoj Yadav (Joy University)`;
  };

  const handleCopyReport = () => {
    const text = generateReportText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <h3 className="text-xl font-bold text-white">Student Grade Calculator Simulator</h3>
              <p className="text-xs text-slate-400">Interactive execution of Manoj's Python grade logic</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Simulator Body */}
        <div className="mt-6 space-y-6">
          
          {/* Instructions */}
          <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-3 text-xs text-slate-300">
            Enter marks (0-100) for each course. The algorithm validates inputs, computes total marks and percentage, derives the 10-point GPA, and maps to university grade bands.
          </div>

          {errorMsg && (
            <div className="rounded-lg bg-red-950/50 border border-red-800/80 p-3 text-xs text-red-300">
              {errorMsg}
            </div>
          )}

          {/* Subject Inputs */}
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {subjects.map((sub, index) => (
              <div key={sub.id} className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 w-6">#{index + 1}</span>
                <input
                  type="text"
                  value={sub.name}
                  onChange={(e) => handleNameChange(sub.id, e.target.value)}
                  placeholder="Subject name"
                  className="flex-1 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <div className="relative w-28">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={sub.marks}
                    onChange={(e) => handleMarkChange(sub.id, e.target.value)}
                    placeholder="Marks"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm font-mono text-white text-right pr-9 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                  />
                  <span className="absolute right-2.5 top-2.5 text-xs text-slate-500 pointer-events-none">/100</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeSubject(sub.id)}
                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Remove subject"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={addSubject}
              className="flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 py-1.5 px-2.5 rounded-md hover:bg-blue-950/40 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Subject</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetForm}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
              <button
                type="button"
                onClick={calculateGrade}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Run Calculation</span>
              </button>
            </div>
          </div>

          {/* Results Output (Terminal Style) */}
          {result && (
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5" />
                  Execution Successful
                </span>
                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                >
                  <Copy className="h-3 w-3" />
                  <span>{copied ? 'Copied!' : 'Copy Report'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-3">
                <div className="bg-slate-900/80 rounded p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase">Total Marks</div>
                  <div className="text-base font-bold text-white tabular-nums">{result.totalObtained} / {result.maxTotal}</div>
                </div>
                <div className="bg-slate-900/80 rounded p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase">Percentage</div>
                  <div className="text-base font-bold text-blue-400 tabular-nums">{result.percentage.toFixed(2)}%</div>
                </div>
                <div className="bg-slate-900/80 rounded p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase">Grade</div>
                  <div className="text-base font-bold text-amber-400">{result.grade}</div>
                </div>
                <div className="bg-slate-900/80 rounded p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase">GPA (10-Scale)</div>
                  <div className="text-base font-bold text-emerald-400 tabular-nums">{result.gpa.toFixed(1)}</div>
                </div>
              </div>

              <div className="text-slate-300 text-[11px] pt-1">
                <span className="text-slate-500">Academic Remark:</span>{' '}
                <span className="text-white font-medium">{result.remark}</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
