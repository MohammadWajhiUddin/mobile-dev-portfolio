import { Smartphone, Globe, Database, Terminal, Palette, GitBranch } from "lucide-react"
import type { ComponentType } from "react"

export interface Skill {
  name: string
  icon: ComponentType<{ className?: string }>
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "React Native", icon: Smartphone },
      { name: "Swift", icon: Smartphone },
      { name: "Kotlin", icon: Smartphone },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind", icon: Globe },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Firebase", icon: Database },
      { name: "Node.js", icon: Terminal },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Terminal },
    ],
  },
]
