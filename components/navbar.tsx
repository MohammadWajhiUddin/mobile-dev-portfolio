"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold tracking-tight"
        >
          WU<span className="text-primary">.</span>
        </motion.a>
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onHoverStart={() => setHovered(link.href)}
              onHoverEnd={() => setHovered(null)}
              className="relative rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {hovered === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}
