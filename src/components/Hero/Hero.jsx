import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        {/* Columna izquierda - Contenido */}
        <div className="hero__content">
          {/* Breadcrumb */}
          <div className="hero__breadcrumb">
            <span className="hero__breadcrumb-item">~</span>
            <span className="hero__breadcrumb-sep">/</span>
            <span className="hero__breadcrumb-item">darsys</span>
            <span className="hero__breadcrumb-sep">/</span>
            <span className="hero__breadcrumb-item hero__breadcrumb-item--active">home</span>
          </div>

          {/* Kicker */}
          <div className="hero__kicker">
            <span className="hero__kicker-line"></span>
            <span className="hero__kicker-text">Analista de Sistemas &amp; Dev</span>
          </div>

          {/* Título */}
          <h1 className="hero__title">
            <span className="hero__title-name">Diego</span>
            <span className="hero__title-name hero__title-name--light">
              Alexander{" "}
              <span className="hero__title-name--outline">Ramos</span>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="hero__subtitle">
            <span className="hero__subtitle-prefix">$_role</span>
            <span className="hero__subtitle-role">Fullstack Developer</span>
            <span className="hero__subtitle-sep">|</span>
            <span className="hero__subtitle-specialty">Java Specialist</span>
          </div>

          {/* Descripción */}
          <p className="hero__description">
            Egresado en <span className="hero__highlight">Análisis de Sistemas</span> con
            experiencia en <span className="hero__highlight">microservicios reactivos</span>,{" "}
            <span className="hero__highlight">Blockchain</span> y desarrollo Fullstack con{" "}
            <span className="hero__highlight">Java 17 &amp; Angular</span>.
            Arquitecturas escalables para Fintech y Banca Digital.
          </p>

          {/* Botones */}
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Hablemos <span className="btn__icon">↗</span>
            </a>
            <a 
              href="https://darsys.pages.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--ghost"
            >
              <span className="btn__icon">⬇</span> Ver CV Online
            </a>
          </div>

          {/* Servicios */}
          <div className="hero__services">
            <div className="hero__service">
              <span className="hero__service-tag">Backend</span>
              <span className="hero__service-label">Microservicios &amp; APIs reactivas</span>
            </div>
            <div className="hero__service">
              <span className="hero__service-tag">Frontend</span>
              <span className="hero__service-label">Angular 17 · Flutter · UI moderna</span>
            </div>
            <div className="hero__service">
              <span className="hero__service-tag">Blockchain</span>
              <span className="hero__service-label">Smart contracts · MetaMask · Web3</span>
            </div>
            <div className="hero__service">
              <span className="hero__service-tag">DevOps</span>
              <span className="hero__service-label">Docker · CI/CD · PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Columna derecha - Visual */}
        <div className="hero__visual">
          <div className="hero__visual-container">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3E5d3p0dG9mY2F0Z2VybWFuZGVyYW1vc3BhY2V4JmN0PWc/qgQUggAC3Pfv687qPC/giphy.gif" 
              alt="Coding animation"
              className="hero__gif"
            />
            <div className="hero__visual-overlay">
              <span className="hero__visual-label">// coding in progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;