"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:diegoramossanchez2004@gmail.com", label: "Email" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 lg:pt-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
            <span className="text-sm font-medium">Disponible para nuevos proyectos</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
                Hola, soy{" "}
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Diego Alexander
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                  Analista de Sistemas & Fullstack Developer
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            Egresado y titulado en Análisis de Sistemas con experiencia en{" "}
            <span className="text-foreground font-medium">arquitecturas de microservicios reactivos</span> y desarrollo{" "}
            <span className="text-foreground font-medium">Fullstack con Java y Angular</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-base gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              Hablemos de tu proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base gap-2 bg-transparent hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <a href="https://diegocvonline.netlify.app" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Ver CV Online
              </a>
            </Button>
          </div>

          <div className="flex gap-3 pt-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 active:scale-95"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
    </section>
  )
}
