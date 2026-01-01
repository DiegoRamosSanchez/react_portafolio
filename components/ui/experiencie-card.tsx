interface ExperienceCardProps {
  period: string
  title: string
  company: string
  description: string
  skills: string[]
}

export function ExperienceCard({ period, title, company, description, skills }: ExperienceCardProps) {
  return (
    <div className="group relative">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-48 flex-shrink-0">
          <p className="text-sm font-medium text-muted-foreground">{period}</p>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title} · {company}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
