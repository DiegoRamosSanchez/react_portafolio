import { useState } from 'react';
import './Skills.css';
import { skillCategories, labelColors } from '../../data/skills';

function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <p className="section-eyebrow">// stack</p>
        <h2 className="section-title">Habilidades</h2>
        <p className="skills__subtitle">
          Tecnologías y herramientas con las que construyo soluciones día a día
        </p>

        <div className="skills__wrapper">
          {/* Columna izquierda - Categorías */}
          <div className="skills__nav">
            <div className="skills__nav-header">
              <span className="skills__nav-label">Categorías</span>
            </div>
            <nav className="skills__nav-list">
              {skillCategories.map((cat, i) => {
                const avg = Math.round(
                  cat.skills.reduce((s, sk) => s + sk.level, 0) / cat.skills.length
                );
                const isActive = i === activeTab;
                return (
                  <button
                    key={cat.tag}
                    onClick={() => setActiveTab(i)}
                    className={`skills__nav-item ${isActive ? 'skills__nav-item--active' : ''}`}
                  >
                    <span className="skills__nav-icon">{cat.icon}</span>
                    <span className="skills__nav-name">{cat.tag}</span>
                    <span className="skills__nav-avg">{avg}%</span>
                  </button>
                );
              })}
            </nav>

            <div className="skills__nav-footer">
              <span className="skills__nav-label">Nivel</span>
              {Object.entries(labelColors).map(([label, color]) => (
                <div key={label} className="skills__legend-item">
                  <span className="skills__legend-dot" style={{ background: color }} />
                  <span className="skills__legend-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Skills */}
          <div className="skills__content">
            <div className="skills__content-header">
              <div className="skills__content-title">
                <span className="skills__content-icon">{active.icon}</span>
                <h3 className="skills__content-name">{active.tag}</h3>
              </div>
              <div className="skills__dots">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`skills__dot ${i === activeTab ? 'skills__dot--active' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="skills__list-header">
              <span>Tecnología</span>
              <span>Nivel</span>
              <span>%</span>
            </div>

            <div className="skills__list">
              {active.skills.map((skill, index) => {
                const color = labelColors[skill.label] || '#8A8FA3';
                return (
                  <div key={skill.name} className="skills__row">
                    <div className="skills__row-info">
                      <span className="skills__row-name">{skill.name}</span>
                      <div className="skills__row-bar">
                        <div 
                          className="skills__row-bar-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            background: color,
                          }}
                        />
                      </div>
                    </div>
                    <span 
                      className="skills__row-label"
                      style={{ 
                        color: color,
                        borderColor: color + '44'
                      }}
                    >
                      {skill.label}
                    </span>
                    <span 
                      className="skills__row-level"
                      style={{ color: color }}
                    >
                      {skill.level}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="skills__content-footer">
              <div className="skills__mini-bars">
                {active.skills.map((sk) => (
                  <div key={sk.name} className="skills__mini-bar-wrapper">
                    <div 
                      className="skills__mini-bar"
                      style={{
                        height: `${(sk.level / 100) * 28}px`,
                        background: labelColors[sk.label] + '88',
                        minHeight: '4px',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="skills__average">
                <span className="skills__average-label">Promedio</span>
                <span className="skills__average-number">
                  {Math.round(
                    active.skills.reduce((s, sk) => s + sk.level, 0) / active.skills.length
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;