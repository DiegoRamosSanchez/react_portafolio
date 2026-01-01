"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Linkedin, Github, Twitter, Clock } from "lucide-react"

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:tu@email.com", label: "tu@email.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", label: "linkedin.com/in/tuperfil" },
  { name: "GitHub", icon: Github, href: "https://github.com", label: "github.com/tuusuario" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", label: "@tuusuario" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí implementarías el envío del formulario
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Trabajemos Juntos</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-3" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla
            realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto, presupuesto y timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background resize-none border-border focus:border-primary transition-colors"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                Enviar mensaje
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Información de contacto</h3>
              <p className="text-muted-foreground leading-relaxed">
                Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para formar parte de
                tu visión.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs text-muted-foreground uppercase tracking-wide">{link.name}</p>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors truncate">
                        {link.label}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">Tiempo de respuesta</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generalmente respondo en menos de 24 horas. Para proyectos urgentes, contáctame directamente por email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
