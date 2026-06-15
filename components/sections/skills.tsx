"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { skillCategories } from "@/lib/data/skills"
import { useRef, type ComponentType } from "react"

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
}

function SkillIcon({ icon: Icon, label }: { icon: ComponentType<{ className?: string }>; label: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted"
      whileHover={{ x: 4 }}
    >
      <motion.span
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="size-4 shrink-0 text-primary" />
      </motion.span>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  )
}

const categoryColors = [
  "from-blue-600 to-cyan-500",
  "from-violet-600 to-purple-500",
  "from-amber-600 to-orange-500",
  "from-emerald-600 to-teal-500",
]

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 px-4 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 h-[300px] w-[300px] -translate-x-1/3 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            What I Know
          </motion.span>
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Skills &{" "}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, ci) => (
            <TiltCard key={category.title}>
              <motion.div
                variants={itemVariants}
                className="glow-card rounded-xl p-6"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: ci * 0.1 }}
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${categoryColors[ci]} text-sm font-bold text-white shadow-lg`}
                >
                  {ci + 1}
                </motion.div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.skills.map((skill) => (
                    <SkillIcon key={skill.name} icon={skill.icon} label={skill.name} />
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
