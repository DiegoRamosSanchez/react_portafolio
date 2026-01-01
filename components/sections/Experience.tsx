import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    period: "Mar. 2025 — Jul. 2025",
    title: "Blockchain Analyst / Developer",
    company: "Software QuickCash (QC)",
    location: "Remoto",
    description:
      "Desarrollé QuickCash, una billetera digital integrada con MetaMask. Implementé microservicios reactivos con Java 17, WebFlux y Spring Security, integrando el frontend en Angular 17 standalone con Ethers.js para la conexión a blockchain.",
    skills: ["Java 17", "Spring Boot", "WebFlux", "Angular 17", "MetaMask", "PostgreSQL"],
    current: true,
  },
  {
    period: "Ago. 2024 — Jul. 2025",
    title: "Analista de Sistemas",
    company: "Nuestros Pequeños Hermanos (NPH)",
    location: "Social / ONG",
    description:
      "Diseñé e implementé una arquitectura de microservicios reactivos para la gestión de programas sociales. Automaticé flujos de trabajo reduciendo costos operativos y asegurando la calidad con Jenkins, JUnit y SonarQube.",
    skills: ["Java 17", "Spring Boot", "Firebase Auth", "Angular 17", "SonarQube", "PostgreSQL"],
  },
  {
    period: "Ago. 2023 — Jul. 2024",
    title: "Programador de Aplicaciones",
    company: "Empresa Florería Manu (FM)",
    location: "Cañete - Lima",
    description:
      "Desarrollé una solución integral (web y móvil) para la gestión de ventas y stock en tiempo real. Utilicé Flutter para la aplicación móvil y Angular para la plataforma web, con backend en Spring Boot y Oracle DB.",
    skills: ["Java 17", "Spring Boot", "Flutter", "Angular 17", "Oracle DB", "Hibernate"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center lg:text-left">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Experiencia</h2>
            <div className="w-20 h-1 bg-primary rounded-full mt-3" />
          </div>
          <p className="text-lg text-muted-foreground">Mi trayectoria profesional en el desarrollo web</p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-border to-transparent" />

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-20 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2">
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      experience.current
                        ? "bg-primary border-primary shadow-lg shadow-primary/50 scale-125"
                        : "bg-background border-border"
                    }`}
                  />
                  {experience.current && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold">{experience.title}</h3>
                      {experience.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                          Actual
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-primary">{experience.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
