import {
  Code2, Cpu, Calculator, Cloud, Puzzle, BookOpen,
  Rocket, Heart, Leaf, Briefcase, GraduationCap, MessageSquare,
  Brain, Compass,
} from "lucide-react";

export const categoryIcons: Record<string, typeof Code2> = {
  "cat-1":  Code2,          // Programming Courses
  "cat-2":  Cpu,            // Technology Courses
  "cat-3":  Calculator,     // Basic Science
  "cat-4":  Cloud,          // Engineering Minor (Cloud)
  "cat-5":  Puzzle,         // Open Minor
  "cat-6":  BookOpen,       // Language Courses
  "cat-7":  Rocket,         // Capstone Project
  "cat-8":  Heart,          // Community Project
  "cat-9":  Leaf,           // Engineering Science
  "cat-10": Briefcase,      // Summer Training
  "cat-11": GraduationCap,  // Department Elective
  "cat-12": MessageSquare,  // Seminar
  "cat-13": Brain,          // Aptitude Elective
  "cat-14": Compass,        // Pathway Courses
};
