export interface Experience {
  company: string
  role: string
  duration: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    company: "TechNova Labs",
    role: "Senior Mobile Developer",
    duration: "2023 — Present",
    achievements: [
      "Architected and launched 3 cross-platform apps serving 500K+ combined users",
      "Reduced app bundle size by 40% through code splitting and lazy loading",
      "Led a team of 5 developers, implementing CI/CD pipelines and code review practices",
    ],
  },
  {
    company: "AppForge Studios",
    role: "Mobile Developer",
    duration: "2021 — 2023",
    achievements: [
      "Built 10+ production-grade mobile apps using Flutter and React Native",
      "Integrated RESTful APIs and GraphQL endpoints for real-time data sync",
      "Achieved 98% crash-free rate through comprehensive testing and performance monitoring",
    ],
  },
  {
    company: "Digital Boost Inc.",
    role: "Junior Developer",
    duration: "2019 — 2021",
    achievements: [
      "Developed responsive UI components and implemented state management with Riverpod",
      "Collaborated with design team to create pixel-perfect, accessible interfaces",
      "Contributed to open-source mobile libraries used by 2K+ developers",
    ],
  },
]
