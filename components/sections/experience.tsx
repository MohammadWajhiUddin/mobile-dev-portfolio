"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data/experience"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -60, rotate: -5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
}

const dotColors = ["from-blue-500 to-cyan-500", "from-violet-500 to-purple-500", "from-amber-500 to-orange-500"]

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 px-4 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-3xl">
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
            Career
          </motion.span>
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Work{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            My professional journey building mobile apps.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-[23px] top-0 h-full w-[2px] origin-top bg-gradient-to-b from-primary via-accent to-transparent"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experiences.map((exp, i) => (
              <motion.div key={exp.company} variants={itemVariants} className="relative pl-14">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: i * 0.2 + 0.1,
                  }}
                  className={`absolute left-[14px] top-1.5 z-10 size-5 rounded-full bg-gradient-to-br ${dotColors[i]} shadow-lg shadow-primary/20`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 2 }}
                    className="absolute inset-0 rounded-full bg-primary/30"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="glow-card rounded-xl p-6"
                >
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.2 }}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                    >
                      {exp.duration}
                    </motion.span>
                  </div>
                  <p className="mb-4 text-sm font-medium text-primary/80">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, ai) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + ai * 0.1 + i * 0.2 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: ai * 0.3 }}
                          className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
