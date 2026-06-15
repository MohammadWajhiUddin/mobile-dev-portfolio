"use client"

import { ArrowRight, Mail, Smartphone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.4, delay: i * 0.04 },
  }),
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  const name = "Wajih Uddin"

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 animate-float rounded-full bg-accent/10 blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

        <div className="absolute top-[15%] left-[10%] size-4 animate-float rounded-full border-2 border-primary/30" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[25%] right-[15%] size-3 animate-float rounded-full bg-primary/40" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[30%] left-[20%] size-5 animate-float-slow rounded-full border-2 border-accent/30" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[20%] right-[10%] size-3 animate-float rounded-full bg-accent/40" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] right-[25%] size-2 animate-float rounded-full bg-primary/60" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] left-[30%] size-4 animate-float-slow rounded-full border-2 border-primary/20" style={{ animationDelay: "0.8s" }} />
      </div>

      <motion.div style={{ y } as never} className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Smartphone className="size-4" />
          </motion.span>
          Mobile App Developer
        </motion.div>

        <h1 className="mb-4 overflow-hidden text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block"
          >
            Hi, I&apos;m
          </motion.span>
          <span className="inline-flex flex-wrap justify-center">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-gradient inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="block"
          >
            I build apps people love
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Cross-platform mobile developer with 6+ years of experience shipping
          apps to millions of users. I turn complex ideas into seamless,
          delightful mobile experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#projects" />}
              className="animate-pulse-glow"
            >
              View Projects
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              <Mail className="mr-2 size-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#skills"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors"
          >
            <ChevronDown className="size-8" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
