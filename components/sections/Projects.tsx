"use client"

import { useState } from "react"
import { ExternalLink, Star, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/ui/project-modal"

interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
  features?: string[]
}

const projects: Project[] = [
  {
    title: "QuickCash (QC) Blockchain Wallet",
    description:
      "Billetera digital orientada a transacciones rápidas y seguras con integración de activos digitales mediante tecnología Blockchain y MetaMask.",
    image: "/modern-ecommerce-dashboard.jpg",
    tags: ["Java 17", "Spring Boot", "WebFlux", "Angular 17", "MetaMask"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    features: [
      "Integración transparente con MetaMask mediante Ethers.js",
      "Arquitectura de microservicios reactivos con Spring WebFlux",
      "Gestión de activos digitales segura y descentralizada",
      "Frontend moderno en Angular 17 con componentes standalone",
      "Calidad garantizada con JUnit 5, Mockito y SonarQube",
    ],
  },
  {
    title: "NPH Social Data Management",
    description:
      "Sistema administrativo integral para la gestión de datos sociales, optimizando programas de ayuda comunitaria y reduciendo costos operativos.",
    image: "/task-management-kanban.jpg",
    tags: ["Spring Boot", "Angular 17", "PostgreSQL", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Arquitectura distribuida basada en microservicios",
      "Seguridad avanzada con JWT y Firebase Authentication",
      "Integración de APIs documentada con Swagger/Postman",
      "Control de información clave para toma de decisiones",
      "CI/CD implementado con Jenkins y SonarQube",
    ],
  },
  {
    title: "ChatMatic (CHM) Virtual Assistant",
    description:
      "Servicio cognitivo de asistente virtual basado en IA para automatizar la gestión de consultas en tiempo real y mejorar la atención al usuario.",
    image: "/analytics-charts-dashboard.jpg",
    tags: ["OpenAI", "Azure", "Spring Boot", "Angular 17"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Integración con modelos de IA de OpenAI en Azure",
      "Comprensión y generación de lenguaje natural (NLP)",
      "Backend seguro con JWT y autenticación robusta",
      "Interfaz de chat moderna e intuitiva",
      "Optimización de carga operativa del personal",
    ],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center lg:text-left">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-primary rounded-full mt-3" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Una selección de mis trabajos más recientes que demuestran mis capacidades técnicas y creatividad
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(project)}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                project.featured ? "md:grid md:grid-cols-5 md:gap-0" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden bg-muted ${project.featured ? "md:col-span-3 md:h-full" : "h-72"}`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-primary-foreground text-center space-y-3 p-6">
                    <Info className="w-8 h-8 mx-auto" />
                    <p className="font-medium text-lg uppercase tracking-wider">Ver detalles</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 md:p-8 ${project.featured ? "md:col-span-2 flex flex-col justify-between" : ""}`}>
                <div className="space-y-4">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3" />
                      Destacado
                    </span>
                  )}
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 gap-2 hover:scale-105 active:scale-95 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation() // Evitar que el clic en el botón abra el modal dos veces
                      handleOpenModal(project)
                    }}
                  >
                    Detalles
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent hover:scale-105 active:scale-95 transition-transform"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
