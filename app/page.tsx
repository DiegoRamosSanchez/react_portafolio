import { Sidebar } from "@/components/layout/Sidebar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main content with proper spacing for sidebar */}
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
