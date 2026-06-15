"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, Code2, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/data/projects"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
}

function DetailsModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number]
  onClose: () => void
}) {
  const [current, setCurrent] = useState(0)
  const images = project.detailsImages || (project.image ? [project.image] : [])

  const next = () => setCurrent((p) => (p + 1) % images.length)
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h3 className="font-semibold">{project.title}</h3>
          <button onClick={onClose} className="rounded-lg p-1 transition-colors hover:bg-muted">
            <X className="size-5" />
          </button>
        </div>

        <div className="relative flex items-center bg-black/90">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.2 }}
              className="relative flex aspect-[9/19] h-[75vh] items-center justify-center"
            >
              <Image
                src={images[current]}
                alt={`${project.title} screenshot ${current + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 rounded-full bg-background/60 p-2 backdrop-blur transition-colors hover:bg-background/90"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 rounded-full bg-background/60 p-2 backdrop-blur transition-colors hover:bg-background/90"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 border-t border-border px-5 py-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedProject = projects.find((p) => p.title === selected)

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-4 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
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
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <Sparkles className="size-3.5" />
            My Work
          </motion.span>
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            A selection of apps I&apos;ve designed and built from the ground up.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => {
            const hasImage = !!project.image
            const hasDetails = !!project.detailsImages?.length || !!project.image
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="glow-card group rounded-xl overflow-hidden"
              >
                {hasImage ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                ) : (
                  <motion.div
                    className={`flex items-center justify-center bg-gradient-to-br ${project.gradient} relative overflow-hidden p-10`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute right-[-30px] top-[-30px] size-40 rounded-full bg-white/5"
                    />
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute bottom-[-20px] left-[-20px] size-28 rounded-full bg-white/5"
                    />
                    {project.icon && (
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="size-14 text-white/90 drop-shadow-lg" />
                      </motion.div>
                    )}
                  </motion.div>
                )}
                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                      className="text-[10px] font-mono font-medium text-muted-foreground"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, ti) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + ti * 0.05 }}
                      >
                        <Badge variant="secondary" className="font-mono text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {hasDetails && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          onClick={() => setSelected(project.title)}
                        >
                          <Eye className="mr-1.5 size-3.5" />
                          View Details
                        </Button>
                      </motion.div>
                    )}
                    {project.githubUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          nativeButton={false}
                          render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}
                        >
                          <Code2 className="mr-1.5 size-3.5" />
                          GitHub
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <DetailsModal
            project={selectedProject}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
