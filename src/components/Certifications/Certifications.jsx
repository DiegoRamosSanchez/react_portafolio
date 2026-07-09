import { useState } from 'react';
import './Certifications.css';
import { certifications, typeConfig, filters } from '../../data/certifications';

function Certifications() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? certifications
    : certifications.filter((c) => c.type === activeFilter);

  return (
    <section id="certifications" className="certifications">
      <div className="certifications__container">
        <p className="section-eyebrow">// certificaciones</p>
        <h2 className="section-title">Certificados</h2>
        <p className="certifications__subtitle">
          Cursos académicos culminados y diplomas otorgados a lo largo de la carrera profesional
        </p>

        {/* Filtros */}
        <div className="certifications__filters">
          {filters.map((filter) => {
            const label = filter === "Todos" 
              ? "Todos" 
              : typeConfig[filter]?.label || filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`certifications__filter ${activeFilter === filter ? 'certifications__filter--active' : ''}`}
              >
                {label}
              </button>
            );
          })}
          <span className="certifications__count">
            {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
          </span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="certifications__empty">
            <span className="certifications__empty-icon">📄</span>
            <p>Sin resultados</p>
          </div>
        ) : (
          <div className="certifications__grid">
            {filtered.map((cert, index) => {
              const config = typeConfig[cert.type] || typeConfig.certificado;
              return (
                <div key={cert.id} className="certifications__card">
                  {/* Imagen */}
                  <div className="certifications__card-image">
                    <img src={cert.image} alt={cert.title} />
                    <div className="certifications__card-overlay" />
                    <span 
                      className="certifications__card-badge"
                      style={{ 
                        background: config.accentColor + '20',
                        color: config.accentColor,
                        borderColor: config.accentColor + '44',
                      }}
                    >
                      <span className="certifications__card-badge-icon">{config.icon}</span>
                      {config.label}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="certifications__card-body">
                    <div className="certifications__card-header">
                      <span className="certifications__card-institution">
                        {cert.institution} · {cert.date}
                      </span>
                      <h3 className="certifications__card-title">{cert.title}</h3>
                    </div>

                    <p className="certifications__card-description">{cert.description}</p>

                    {/* Tags */}
                    <div className="certifications__card-tags">
                      {cert.tags.map((tag, i) => (
                        <span key={i} className="certifications__card-tag">{tag}</span>
                      ))}
                    </div>

                    {/* Enlace */}
                    <div className="certifications__card-footer">
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certifications__card-link"
                        style={{ color: config.accentColor }}
                      >
                        Ver credencial
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;