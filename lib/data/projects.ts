import { Coffee, UtensilsCrossed } from "lucide-react"
import type { ComponentType } from "react"

export interface Project {
  title: string
  description: string
  image?: string
  icon?: ComponentType<{ className?: string }>
  gradient?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: "M Mart",
    description:
      "A full-featured mobile app for online shopping with product browsing, cart management, secure checkout, and order tracking.",
    image: "/Screenshot_1778217762.png",
    tags: ["Flutter", "Firebase", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pharmacy Management System",
    description:
      "A comprehensive mobile app for medicine sales, inventory tracking, prescription management, and supplier order management.",
    image: "/2.png",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Zus Coffee",
    description:
      "A coffee ordering app with menu browsing, customization options, loyalty rewards, and real-time order status updates.",
    icon: Coffee,
    gradient: "from-amber-700 to-amber-500",
    tags: ["Flutter", "Firebase", "Cloud Functions"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Food Recipes Details",
    description:
      "A recipe discovery app featuring detailed step-by-step instructions, ingredient lists, nutritional information, and meal planning.",
    icon: UtensilsCrossed,
    gradient: "from-green-700 to-emerald-500",
    tags: ["React Native", "Edamam API", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
]
