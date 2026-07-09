import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './ProjectDetail.css';
import { projects } from '../../data/projects';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <h2>Proyecto no encontrado</h2>
        <Link to="/" className="project-detail__back-link">Volver al portafolio</Link>
      </div>
    );
  }

  const allImages = [project.image, ...(project.gallery || [])].filter(Boolean);

  const statusColors = {
    "En Producción": "status--production",
    "En Desarrollo": "status--development",
    "Completado": "status--completed",
  };

  return (
    <div className="project-detail">
      <div className="project-detail__container">
        {/* Botón volver */}
        <Link to="/#projects" className="project-detail__back">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver a proyectos
        </Link>

        {/* Hero */}
        <div className="project-detail__hero">
          <img src={allImages[0]} alt={project.title} className="project-detail__hero-image" />
          <div className="project-detail__hero-overlay">
            <div className="project-detail__hero-content">
              <div className="project-detail__hero-badges">
                <span className="project-detail__badge project-detail__badge--category">
                  {project.category}
                </span>
                {project.status && (
                  <span className={`project-detail__badge project-detail__badge--status ${statusColors[project.status] || ''}`}>
                    {project.status}
                  </span>
                )}
              </div>
              <h1 className="project-detail__hero-title">{project.title}</h1>
              <p className="project-detail__hero-meta">
                {project.author} · {project.year}
              </p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="project-detail__content">
          <div className="project-detail__main">
            {/* Descripción */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">Sobre el proyecto</h2>
              <p className="project-detail__description">{project.longDescription || project.description}</p>
            </div>

            {/* Galería */}
            {allImages.length > 1 && (
              <div className="project-detail__section">
                <h2 className="project-detail__section-title">Galería</h2>
                <div className="project-detail__gallery">
                  <div className="project-detail__gallery-main">
                    <img src={allImages[activeImage]} alt={`${project.title} screenshot`} />
                  </div>
                  <div className="project-detail__gallery-thumbs">
                    {allImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`project-detail__gallery-thumb ${activeImage === i ? 'project-detail__gallery-thumb--active' : ''}`}
                      >
                        <img src={img} alt={`Thumbnail ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="project-detail__section">
                <h2 className="project-detail__section-title">Funcionalidades clave</h2>
                <ul className="project-detail__features">
                  {project.features.map((feature, i) => (
                    <li key={i} className="project-detail__feature">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#22C55E" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="project-detail__sidebar">
            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="project-detail__card">
                <h3 className="project-detail__card-title">Stack tecnológico</h3>
                <div className="project-detail__tech-list">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="project-detail__tech-item">
                      <span className="project-detail__tech-name">{tech.name}</span>
                      <span className="project-detail__tech-role">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="project-detail__card">
              <h3 className="project-detail__card-title">Tecnologías</h3>
              <div className="project-detail__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-detail__tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Enlaces */}
            <div className="project-detail__card">
              <h3 className="project-detail__card-title">Enlaces</h3>
              <div className="project-detail__links">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--github">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Ver código
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--demo">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Ver demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;