"use client"

import { useState, useRef, type FormEvent } from "react"
import { Code2, Link, MessageCircle, Send, Mail, MapPin, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

const WEB3FORMS_KEY = "268ec26b-56cb-4f26-a598-b5102937178c"

const socialLinks = [
  { label: "GitHub", href: "#", icon: Code2, color: "hover:text-[#6e5494]" },
  { label: "LinkedIn", href: "#", icon: Link, color: "hover:text-[#0a66c2]" },
  { label: "Twitter", href: "#", icon: MessageCircle, color: "hover:text-[#1da1f2]" },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const form = formRef.current
    if (!form) return

    const data = new FormData(form)
    data.append("access_key", WEB3FORMS_KEY)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }

    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-4 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl">
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
            Connect
          </motion.span>
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="glow-card rounded-xl p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Contact Info
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3 text-sm"
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Mail className="size-4 shrink-0 text-primary" />
                  </motion.span>
                  <span className="text-muted-foreground">mohammad.wajhiuddin@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-sm"
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    animate={{ y: [0, -3, 0, 3, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <MapPin className="size-4 shrink-0 text-primary" />
                  </motion.span>
                  <span className="text-muted-foreground">Karachi, Pakistan</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glow-card rounded-xl p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Social
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      nativeButton={false}
                      render={
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        />
                      }
                    >
                      <social.icon className="size-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            onSubmit={handleSubmit}
            className="glow-card rounded-xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-semibold">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </motion.div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" className="w-full animate-pulse-glow" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : status === "success" ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      Message sent! ✨
                    </motion.span>
                  ) : status === "error" ? (
                    <span>Something went wrong</span>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="ml-2 size-4" />
                      </motion.span>
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
