import { Code2, Sparkles, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Escribo código mantenible y escalable siguiendo las mejores prácticas de la industria",
  },
  {
    icon: Sparkles,
    title: "Diseño Elegante",
    description: "Creo interfaces intuitivas y atractivas que mejoran la experiencia del usuario",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Optimizo cada detalle para garantizar aplicaciones rápidas y eficientes",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Sobre mí</h2>
              <div className="w-20 h-1 bg-primary rounded-full mt-3" />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Text */}
            <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-xl leading-relaxed">
                Soy un Analista de Sistemas titulado con un fuerte enfoque en el desarrollo de software y la
                optimización de procesos.
              </p>

              <p>
                Cuento con sólidos conocimientos en{" "}
                <span className="text-foreground font-semibold">arquitecturas distribuidas</span>, automatización y
                gestión de bases de datos. Me considero una persona adaptable con una rápida capacidad de aprendizaje
                para enfrentar nuevos desafíos.
              </p>

              <p>
                He desarrollado soluciones que van desde{" "}
                <span className="text-foreground font-semibold">billeteras digitales con Blockchain</span> hasta
                sistemas administrativos complejos, aplicando siempre principios de diseño limpio y calidad de código
                garantizada mediante testing riguroso.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="group flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
