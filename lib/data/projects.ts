import { Coffee, UtensilsCrossed } from "lucide-react"
import type { ComponentType } from "react"

export interface Project {
  title: string
  description: string
  image?: string
  detailsImages?: string[]
  icon?: ComponentType<{ className?: string }>
  gradient?: string
  tags: string[]
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: "M Mart",
    description:
      "A full-featured mobile app for online shopping with product browsing, cart management, secure checkout, and order tracking.",
    image: "/mmart/2.png",
    detailsImages: [
      "/mmart/Screenshot 2026-05-08 123949.png",
      "/mmart/2.png",
      "/mmart/3.png",
      "/mmart/4.png",
      "/mmart/5.png",
    ],
    tags: ["Flutter", "Firebase", "Stripe"],
    githubUrl: "#",
  },
  {
    title: "Pharmacy Management System",
    description:
      "A comprehensive mobile app for medicine sales, inventory tracking, prescription management, and supplier order management.",
    image: "/pharmacy/Screenshot_1778217752.png",
    detailsImages: [
      "/pharmacy/Screenshot_1778217752.png",
      "/pharmacy/Screenshot_1778217754.png",
      "/pharmacy/Screenshot_1778217762.png",
      "/pharmacy/Screenshot_1778217767.png",
      "/pharmacy/Screenshot_1778217770.png",
      "/pharmacy/Screenshot_1778217771.png",
      "/pharmacy/Screenshot_1778217774.png",
      "/pharmacy/Screenshot_1778217776.png",
    ],
    tags: ["React Native", "Node.js", "PostgreSQL"],
    githubUrl: "#",
  },
  {
    title: "Zus Coffee",
    description:
      "A coffee ordering app with menu browsing, customization options, loyalty rewards, and real-time order status updates.",
    icon: Coffee,
    gradient: "from-amber-700 to-amber-500",
    tags: ["Flutter", "Firebase", "Cloud Functions"],
    githubUrl: "#",
  },
  {
    title: "Food Recipes Details",
    description:
      "A recipe discovery app featuring detailed step-by-step instructions, ingredient lists, nutritional information, and meal planning.",
    icon: UtensilsCrossed,
    gradient: "from-green-700 to-emerald-500",
    tags: ["React Native", "Edamam API", "Redux"],
    githubUrl: "#",
  },
]
