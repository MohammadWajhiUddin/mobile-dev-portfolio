export interface Experience {
  company: string
  role: string
  duration: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    company: "Zaytech",
    role: "Lead AI Mobile Application Developer",
    duration: "2025 — Present",
    achievements: [
      "Leading AI-powered mobile application development initiatives",
      "Implementing cutting-edge AI/ML features in mobile platforms",
      "Mentoring development team on best practices and emerging technologies",
    ],
  },
  {
    company: "QATSCO UK",
    role: "Senior Mobile Application Developer",
    duration: "2022 — 2025",
    achievements: [
      "Architected and delivered multiple enterprise-grade mobile applications",
      "Led mobile development team ensuring code quality and project delivery",
      "Implemented performance optimization reducing app load time by 35%",
    ],
  },
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
