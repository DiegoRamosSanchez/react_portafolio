import { useState, useRef, useEffect } from 'react';
import './Experience.css';
import { experiences } from '../../data/experience';

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience__container">
        <p className="section-eyebrow">// experiencia</p>
        <h2 className="section-title">Experiencia</h2>
        <p className="experience__subtitle">
          Mi trayectoria profesional en el desarrollo de software y sistemas
        </p>

        <div className="experience__timeline">
          {/* Línea vertical */}
          <div className="experience__line-wrapper">
            <div 
              className="experience__line"
              style={{
                height: inView ? '100%' : '0%',
                transition: 'height 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>

          {experiences.map((job, index) => {
            const isActive = index === activeIndex;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={job.id} 
                className={`experience__item ${isEven ? 'experience__item--left' : 'experience__item--right'}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Círculo en la línea */}
                <div className="experience__dot-wrapper">
                  <div 
                    className={`experience__dot ${job.current ? 'experience__dot--current' : ''}`}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'scale(1)' : 'scale(0)',
                      transition: `opacity 0.5s ease ${index * 150 + 200}ms, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 150 + 200}ms`,
                    }}
                  />
                  {job.current && (
                    <div className="experience__dot-pulse" />
                  )}
                </div>

                {/* Contenido - Card + Imagen lado a lado */}
                <div className="experience__card-wrapper">
                  {/* Imagen */}
                  <div 
                    className="experience__image-wrapper"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView 
                        ? 'translateX(0) translateY(0)' 
                        : isEven 
                          ? 'translateX(30px) translateY(20px)' 
                          : 'translateX(-30px) translateY(20px)',
                      transition: `opacity 0.7s ease ${index * 150 + 100}ms, transform 0.7s ease ${index * 150 + 100}ms`,
                    }}
                  >
                    <img 
                      src={job.image} 
                      alt={job.imageAlt}
                      className="experience__image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div 
                    className="experience__card"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView 
                        ? 'translateX(0) translateY(0)' 
                        : isEven 
                          ? 'translateX(-30px) translateY(20px)' 
                          : 'translateX(30px) translateY(20px)',
                      transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms`,
                    }}
                  >
                    <div className={`experience__card-inner ${isActive ? 'experience__card-inner--active' : ''}`}>
                      {/* Badge actual */}
                      {job.current && (
                        <span className="experience__badge">
                          <span className="experience__badge-dot" />
                          Actual
                        </span>
                      )}

                      {/* Periodo */}
                      <div className="experience__period">
                        <span className="experience__period-icon">📅</span>
                        <span>{job.period}</span>
                      </div>

                      {/* Título */}
                      <h3 className="experience__title">{job.title}</h3>

                      {/* Empresa y ubicación */}
                      <div className="experience__company">
                        <span className="experience__company-name">{job.company}</span>
                        <span className="experience__company-sep">·</span>
                        <span className="experience__location">📍 {job.location}</span>
                      </div>

                      {/* Descripción */}
                      <p className="experience__description">{job.description}</p>

                      {/* Tecnologías */}
                      <div className="experience__skills">
                        {job.skills.map((skill) => (
                          <span key={skill} className="experience__skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;