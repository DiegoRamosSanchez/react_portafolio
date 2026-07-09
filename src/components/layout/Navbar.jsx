import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const tabs = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'certifications', label: 'Certificaciones' },
  { id: 'contact', label: 'Contacto' },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectDetail = location.pathname.includes('/project/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Solo detectar sección activa si estamos en la página principal
      if (!isProjectDetail) {
        const sections = tabs.map(tab => document.getElementById(tab.id));
        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveTab(tabs[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectDetail]);

  // Si estamos en la página de detalle, no hay sección activa
  useEffect(() => {
    if (isProjectDetail) {
      setActiveTab(null);
    }
  }, [isProjectDetail]);

  const scrollTo = (id) => {
    // Si estamos en la página de detalle, navegar a la página principal primero
    if (isProjectDetail) {
      navigate('/');
      // Esperar a que la página cargue y luego hacer scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveTab(id);
      }, 300);
    } else {
      // Si ya estamos en la página principal, hacer scroll directamente
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveTab(id);
    }
  };

  return (
    <nav className={`editor-nav ${isScrolled ? 'editor-nav--scrolled' : ''}`}>
      <div className="editor-nav__dots">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
      </div>
      <div className="editor-nav__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`editor-nav__tab ${activeTab === tab.id ? 'editor-nav__tab--active' : ''}`}
            onClick={() => scrollTo(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;