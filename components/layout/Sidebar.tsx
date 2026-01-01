"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Home, User, Briefcase, FolderGit2, Code2, Mail, Menu, X, Sun, Moon, Sparkles, ChevronLeft } from "lucide-react"

const navigationItems = [
  { name: "Inicio", icon: Home, href: "#hero" },
  { name: "Sobre mí", icon: User, href: "#about" },
  { name: "Experiencia", icon: Briefcase, href: "#experience" },
  { name: "Proyectos", icon: FolderGit2, href: "#projects" },
  { name: "Habilidades", icon: Code2, href: "#skills" },
  { name: "Contacto", icon: Mail, href: "#contact" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(href.slice(1))
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2.5 rounded-xl bg-sidebar border border-sidebar-border shadow-lg hover:bg-sidebar-accent transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          />
          <X
            className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/60 backdrop-blur-md z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen bg-sidebar border-r border-sidebar-border z-40
          transform transition-all duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed ? "lg:w-20" : "lg:w-72"}
          flex flex-col shadow-2xl
          w-72
        `}
      >
        <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
          <div
            className={`flex items-center gap-3 transition-all duration-300 ${isCollapsed ? "lg:opacity-0 lg:w-0" : "opacity-100"}`}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 flex items-center justify-center shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Sparkles className="w-6 h-6 text-sidebar-primary-foreground relative z-10" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-sidebar-foreground tracking-tight line-clamp-1">Diego Alexander</h2>
              <p className="text-xs text-sidebar-foreground/60 font-medium">Analista de Sistemas</p>
            </div>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1.5">
            {navigationItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.slice(1)

              return (
                <li key={item.name} style={{ animationDelay: `${index * 50}ms` }} className="animate-slide-in-left">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300 group relative overflow-hidden
                      ${
                        isActive
                          ? "bg-sidebar-primary/20 text-sidebar-foreground shadow-sm scale-[1.02] border border-sidebar-primary/30"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:scale-[1.02]"
                      }
                    `}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-sidebar-primary/10 transition-all duration-300 rounded-xl" />
                    )}

                    {!isActive && (
                      <div className="absolute inset-0 bg-sidebar-accent/0 group-hover:bg-sidebar-accent transition-all duration-300 rounded-xl" />
                    )}

                    <div className="relative flex items-center gap-3 flex-1">
                      <Icon
                        className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                          isActive ? "text-sidebar-primary scale-110" : "group-hover:scale-110"
                        }`}
                      />
                      <span
                        className={`font-medium transition-all duration-300 ${
                          isCollapsed ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    {isActive && (
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-sidebar-primary shadow-lg transition-all duration-300 ${
                          isCollapsed ? "lg:hidden" : ""
                        }`}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden"
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-sidebar-accent/0 group-hover:bg-sidebar-accent transition-all duration-300 rounded-xl" />

            <div className="relative flex items-center gap-3 flex-1">
              <div className="relative w-5 h-5">
                <Sun
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    theme === "light" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
              <span
                className={`font-medium transition-all duration-300 ${
                  isCollapsed ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100"
                }`}
              >
                {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
              </span>
            </div>
          </button>
        </div>

        <div
          className={`p-4 border-t border-sidebar-border transition-all duration-300 ${
            isCollapsed ? "lg:opacity-0 lg:hidden" : "opacity-100"
          }`}
        >
          <p className="text-xs text-sidebar-foreground/50 text-center font-medium">© 2025 Diego Alexander</p>
        </div>
      </aside>
    </>
  )
}
