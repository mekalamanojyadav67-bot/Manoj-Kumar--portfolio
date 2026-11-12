import { SkillItem, ProjectItem, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Manoj Yadav',
  title: 'Aspiring AI Engineer',
  degree: 'B.Tech in Computer Science Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  college: 'Joy University',
  academicYear: 'First Year',
  email: 'mekalamanojyadav67@gmail.com',
  github: 'https://github.com/mekalamanojyadav67-bot',
  bio: 'A motivated First-Year B.Tech Computer Science student at Joy University specializing in AI and Machine Learning. Passionate about problem-solving through Python, exploring the fundamentals of computing and web development, with an ambitious career goal of becoming an AI Engineer.',
  profileImage: '/assets/aistudio/IMG-20261016-WA0007_3e323a28.jpg',
};

export const TECHNICAL_SKILLS: SkillItem[] = [
  {
    name: 'Python Programming',
    category: 'Language',
    levelName: 'Beginner',
    percentage: 55,
    description: 'Foundations of Python syntax, data types, conditional branching, loops, functions, and console-based problem solving.',
    highlights: ['Variables & Data Types', 'Control Flow (if/elif/else)', 'Loops (for & while)', 'Functions & Modules', 'Input Validation']
  },
  {
    name: 'HTML5',
    category: 'Web',
    levelName: 'Foundational',
    percentage: 65,
    description: 'Structuring web pages with clean semantic markup, accessible forms, tables, links, and multimedia elements.',
    highlights: ['Semantic Tags', 'Forms & Inputs', 'Document Structure', 'Links & Navigation', 'Basic Accessibility']
  },
  {
    name: 'CSS3',
    category: 'Web',
    levelName: 'Foundational',
    percentage: 60,
    description: 'Styling interfaces with CSS selectors, typography, colors, the box model, Flexbox layouts, and responsive media queries.',
    highlights: ['Flexbox Layouts', 'Box Model & Sizing', 'Responsive Design', 'Color Palettes & Units', 'Transitions']
  },
  {
    name: 'Basic Web Development',
    category: 'Web',
    levelName: 'Beginner',
    percentage: 50,
    description: 'Integrating HTML structure and CSS styling to build responsive, clean personal web pages and interactive UI components.',
    highlights: ['Page Layout Architecture', 'Responsive UI for Devices', 'Developer Tools & Debugging', 'Component Hierarchy']
  },
  {
    name: 'Basic GenAI Knowledge',
    category: 'AI & Concept',
    levelName: 'Beginner',
    percentage: 45,
    description: 'Conceptual understanding of Generative AI, Large Language Models (LLMs), prompt structuring, and future AI workflows.',
    highlights: ['Generative AI Core Concepts', 'Prompt Engineering Fundamentals', 'Tokenization & Embeddings Basics', 'AI Ethics & Applications']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    category: 'Python Application',
    language: 'Python',
    level: 'Beginner Project',
    shortDescription: 'A Python console utility that takes subject marks, calculates totals, percentages, GPA, and assigns letter grades based on academic thresholds.',
    fullDescription: 'Built as a foundational Python project to solidify programming logic. The Student Grade Calculator allows users to input scores across academic subjects, performs input validation to ensure marks are within the valid 0–100 range, calculates total marks and percentage, derives the grade point average (GPA), and assigns letter grades (A+, A, B, C, D, F) with pass/fail evaluation.',
    features: [
      'Interactive multi-subject mark entry with input validation (0-100 check)',
      'Automated aggregate calculation for Total Marks and Percentage',
      'Letter grade determination based on academic grading scales',
      'GPA computation and performance summary generation',
      'Clean terminal output formatting with structured borders'
    ],
    keyConcepts: [
      'Conditional Logic (if / elif / else)',
      'While Loops for robust user input error handling',
      'List collections for dynamic subject score storage',
      'Custom functions for modular calculations',
      'Python f-strings for formatted output'
    ],
    sampleCode: `# Student Grade Calculator - Python Beginner Project
# Author: Manoj Yadav (Joy University - B.Tech CSE AI & ML)

def get_valid_marks(subject_name):
    """Prompts for valid subject marks between 0 and 100."""
    while True:
        try:
            marks = float(input(f"Enter marks for {subject_name} (0 - 100): "))
            if 0 <= marks <= 100:
                return marks
            print("Error: Marks must be between 0 and 100.")
        except ValueError:
            print("Error: Please enter a numeric score.")

def calculate_grade(percentage):
    """Determines grade letter and grade points."""
    if percentage >= 90:
        return "A+", 10.0, "Outstanding"
    elif percentage >= 80:
        return "A", 9.0, "Excellent"
    elif percentage >= 70:
        return "B", 8.0, "Very Good"
    elif percentage >= 60:
        return "C", 7.0, "Good"
    elif percentage >= 50:
        return "D", 6.0, "Pass"
    else:
        return "F", 0.0, "Needs Improvement"

def main():
    print("=" * 45)
    print("      STUDENT GRADE CALCULATOR")
    print("=" * 45)
    
    subjects = ["Mathematics", "Python Programming", "Physics", "English"]
    scores = {}
    
    for sub in subjects:
        scores[sub] = get_valid_marks(sub)
        
    total_obtained = sum(scores.values())
    max_total = len(subjects) * 100
    percentage = (total_obtained / max_total) * 100
    grade, gpa, remark = calculate_grade(percentage)
    
    print("-" * 45)
    print(f"Total Marks   : {total_obtained:.1f} / {max_total}")
    print(f"Percentage    : {percentage:.2f}%")
    print(f"Grade Letter  : {grade}")
    print(f"GPA (10-Scale): {gpa:.1f}")
    print(f"Evaluation    : {remark}")
    print("=" * 45)

if __name__ == "__main__":
    main()`,
    githubUrl: 'https://github.com/mekalamanojyadav67-bot'
  }
];

export const LEARNING_JOURNEY: JourneyMilestone[] = [
  {
    step: '01',
    title: 'Computer Science & Python Foundations',
    period: 'Current Focus · Semester 1',
    status: 'Completed',
    summary: 'Started university journey at Joy University with Computer Science fundamentals. Mastered core Python building blocks including variables, condition trees, loops, and modular code writing.',
    learnings: ['Python Data Types & Operators', 'Logic structures (if/elif/else)', 'Loops & input handling', 'Algorithmic thinking']
  },
  {
    step: '02',
    title: 'Practical Python Project Implementation',
    period: 'Current Focus · Semester 1',
    status: 'In Progress',
    summary: 'Applying foundational Python to real problem-solving exercises. Built the Student Grade Calculator to handle dynamic user inputs and structured calculations.',
    learnings: ['Input validation loops', 'Mathematical calculations in Python', 'Code structuring into reusable functions', 'Terminal formatting']
  },
  {
    step: '03',
    title: 'Web Basics (HTML & CSS)',
    period: 'Active Track · First Year',
    status: 'In Progress',
    summary: 'Learning to build and style web documents. Exploring semantic HTML elements, CSS Box Model, Flexbox layouts, and structuring responsive web pages for multi-device viewing.',
    learnings: ['Semantic HTML5 structure', 'CSS styling & modern color schemes', 'Flexbox and responsive layouts', 'Clean code organization']
  },
  {
    step: '04',
    title: 'GenAI Foundations & Exploration',
    period: 'First Year Exploration',
    status: 'In Progress',
    summary: 'Beginning initial study of Generative AI principles, understanding how LLMs operate, exploring practical prompting, and preparing for specialized AI coursework.',
    learnings: ['Core Generative AI concepts', 'Prompt structure & engineering', 'Ethical AI foundations', 'Emerging developer tooling']
  },
  {
    step: '05',
    title: 'Data Structures, OOP & Machine Learning Basics',
    period: 'Upcoming · Second Year',
    status: 'Upcoming',
    summary: 'Future milestone within the B.Tech CSE (AI & ML) curriculum: Object-Oriented Programming (OOP) in Python, core data structures, linear algebra, and introductory machine learning algorithms.',
    learnings: ['OOP principles (Classes & Inheritance)', 'Data Structures (Lists, Stacks, Queues)', 'Math for Machine Learning', 'Introductory ML modeling']
  }
];
