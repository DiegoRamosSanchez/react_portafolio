import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link 
      to={`/project/${project.slug}`}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          className={`project-card__image ${hovered ? 'project-card__image--hover' : ''}`}
        />
      )}
      
      <div className="project-card__overlay">
        <div className="project-card__gradient" />
        
        <div className="project-card__header">
          <span className="project-card__category">{project.category}</span>
          {project.status && (
            <span className={`project-card__status project-card__status--${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
          )}
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__author">{project.author} • {project.year}</p>
          
          <div className={`project-card__details ${hovered ? 'project-card__details--visible' : ''}`}>
            <p className="project-card__description">{project.description}</p>
            
            <div className="project-card__tags">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;