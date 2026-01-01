const skillCategories = [
  {
    title: "Backend & Microservicios",
    color: "blue",
    skills: [
      { name: "Java (Principal)", level: 95 },
      { name: "Spring Boot / WebFlux", level: 92 },
      { name: "Spring Security & JWT", level: 88 },
      { name: "Hibernate", level: 90 },
      { name: "Microservicios Reactivos", level: 85 },
    ],
  },
  {
    title: "Frontend & Mobile",
    color: "green",
    skills: [
      { name: "Angular 17 (Standalone)", level: 92 },
      { name: "JavaScript / HTML / CSS", level: 95 },
      { name: "Flutter", level: 80 },
      { name: "Bootstrap / Tailwind", level: 90 },
      { name: "Diseño Responsivo", level: 95 },
    ],
  },
  {
    title: "Bases de Datos & DevOps",
    color: "purple",
    skills: [
      { name: "PostgreSQL / SQL Server", level: 90 },
      { name: "Oracle / MySQL", level: 88 },
      { name: "Jenkins / CI-CD", level: 75 },
      { name: "SonarQube (Calidad)", level: 85 },
      { name: "Docker / Containerization", level: 78 },
    ],
  },
  {
    title: "Calidad & Blandas",
    color: "orange",
    skills: [
      { name: "JUnit 5 / Mockito", level: 88 },
      { name: "Optimización de Código", level: 92 },
      { name: "Resolución de Problemas", level: 95 },
      { name: "Trabajo en Equipo", level: 98 },
      { name: "Comunicación Efectiva", level: 90 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center lg:text-left">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Habilidades</h2>
            <div className="w-20 h-1 bg-primary rounded-full mt-3" />
          </div>
          <p className="text-lg text-muted-foreground">Tecnologías y herramientas con las que trabajo día a día</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
