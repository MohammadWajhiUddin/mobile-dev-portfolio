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
    company: "NCBC HEC SZABIST",
    role: "Mobile Application Developer",
    duration: "2020 — 2022",
    achievements: [
      "Designed and developed cross-platform mobile applications using React Native",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Conducted user testing and implemented feedback to enhance app usability",
    ],
  },

  {
    company: "PlanZ.",
    role: "Junior Developer",
    duration: "2019 — 2020",
    achievements: [
      "Developed responsive UI components and implemented state management with Riverpod",
      "Collaborated with design team to create pixel-perfect, accessible interfaces",
      "Contributed to open-source mobile libraries used by 2K+ developers",
    ],
  },
]
