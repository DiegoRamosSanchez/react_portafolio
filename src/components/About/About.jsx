import { aboutData, techStack } from '../../data/about';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <p className="section-eyebrow">{aboutData.eyebrow}</p>
        <h2 className="section-title">{aboutData.title}</h2>
        
        <div className="about__content">
          {/* Columna izquierda - Texto y estadísticas */}
          <div className="about__main">
            <div className="about__text-wrapper">
              {aboutData.paragraphs.map((text, index) => (
                <p 
                  key={index} 
                  className="about__text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
            
            <div className="about__stats">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="stat__number">{stat.number}</span>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Tech Stack con iconos */}
          <div className="about__tech">
            <h3 className="about__tech-title">Stack Tecnológico</h3>
            <div className="about__tech-grid">
              {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="about__tech-item" 
                  style={{ borderColor: 'var(--border)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = tech.color;
                    e.currentTarget.style.boxShadow = `0 4px 12px ${tech.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="about__tech-icon"
                    dangerouslySetInnerHTML={{ __html: tech.icon }}
                    style={{ color: tech.color }}
                  />
                  <span className="about__tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;