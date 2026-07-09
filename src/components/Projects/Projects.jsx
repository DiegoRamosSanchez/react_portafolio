import { useState } from 'react';
import './Projects.css';
import { projects as allProjects, filters } from '../../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <p className="section-eyebrow">// proyectos</p>
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="projects__subtitle">
          Una selección de mis trabajos más recientes que demuestran mis capacidades técnicas y creatividad
        </p>

        {/* Filtros */}
        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`projects__filter ${activeFilter === filter ? 'projects__filter--active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid de proyectos - 3 columnas iguales */}
        {filtered.length === 0 ? (
          <p className="projects__empty">No hay proyectos en esta categoría.</p>
        ) : (
          <div className="projects__grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;