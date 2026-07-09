import { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { socialLinks, specialties } from '../../data/contac';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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

  const sanitizePlainText = (input) => {
    if (!input) return "";
    let s = input.replace(/<[^>]*>/g, "");
    s = s.replace(/on\w+\s*=\s*["'][^"']*["']/gi, "");
    s = s.replace(/(javascript|data|vbscript):/gi, "");
    s = s.replace(/&[#\w]+;/g, "");
    s = s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
    return s.slice(0, 5000).trim();
  };

  const hasMalicious = (v) =>
    [/<script/i, /<iframe/i, /javascript:/i, /data:/i, /eval\s*\(/i].some((p) => p.test(v));

  const handleChange = (field, value) => {
    const san = sanitizePlainText(value);
    if (hasMalicious(value)) {
      setErrors(prev => ({ ...prev, [field]: "No se permiten etiquetas HTML o código" }));
    } else {
      setErrors(prev => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
    }
    setFormData(prev => ({ ...prev, [field]: san }));
  };

  const validate = () => {
    const e = {};
    if (formData.name.length < 2) e.name = "Mínimo 2 caracteres";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Email inválido";
    if (formData.message.length < 10) e.message = "Mínimo 10 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mjglveke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizePlainText(formData.name),
          email: sanitizePlainText(formData.email),
          subject: sanitizePlainText(formData.subject),
          message: sanitizePlainText(formData.message),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldWrap = "contact__field-wrap";
  const inputCls = "contact__input";
  const labelCls = "contact__label";

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__container">
        <p className="section-eyebrow">// contacto</p>
        <h2 className="section-title">Trabajemos Juntos</h2>
        <p className="contact__subtitle">
          ¿Tienes un proyecto en mente? Me encantaría conocer tu idea y cómo puedo ayudarte a hacerla realidad.
        </p>

        <div className="contact__grid">
          {/* Columna Izquierda - Formulario */}
          <div 
            className="contact__form-wrapper"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}
          >
            <div className="contact__intro">
              <h3 className="contact__intro-title">Hablemos de tu proyecto</h3>
              <p className="contact__intro-text">
                Especializado en <strong>microservicios</strong>, <strong>Blockchain</strong> y desarrollo <strong>Fullstack</strong>.
                Siempre abierto a nuevas oportunidades y colaboraciones.
              </p>
              <div className="contact__status">
                <span className="contact__status-dot" />
                <span className="contact__status-text">Disponible para proyectos</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact__form">
              {/* Nombre */}
              <div className="contact__form-group">
                <label className={labelCls}>Nombre completo</label>
                <div className={`${fieldWrap} ${errors.name ? 'contact__field-wrap--error' : ''}`} style={{
                  borderColor: errors.name 
                    ? "#EF4444" 
                    : focused === "name" 
                    ? "var(--accent)" 
                    : undefined,
                }}>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={e => handleChange("name", e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    className={inputCls}
                  />
                </div>
                {errors.name && <p className="contact__error">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="contact__form-group">
                <label className={labelCls}>Correo electrónico</label>
                <div className={`${fieldWrap} ${errors.email ? 'contact__field-wrap--error' : ''}`} style={{
                  borderColor: errors.email 
                    ? "#EF4444" 
                    : focused === "email" 
                    ? "var(--accent)" 
                    : undefined,
                }}>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={e => handleChange("email", e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    className={inputCls}
                  />
                </div>
                {errors.email && <p className="contact__error">{errors.email}</p>}
              </div>

              {/* Asunto */}
              <div className="contact__form-group">
                <label className={labelCls}>Asunto <span className="contact__optional">(opcional)</span></label>
                <div className={fieldWrap} style={{
                  borderColor: focused === "subject" ? "var(--accent)" : undefined,
                }}>
                  <input
                    type="text"
                    placeholder="Ej: Propuesta de proyecto Fintech"
                    value={formData.subject}
                    onChange={e => handleChange("subject", e.target.value)}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="contact__form-group">
                <div className="contact__label-row">
                  <label className={labelCls}>Mensaje</label>
                  <span className="contact__char-count">{formData.message.length} / 5000</span>
                </div>
                <div className={`${fieldWrap} ${errors.message ? 'contact__field-wrap--error' : ''}`} style={{
                  borderColor: errors.message 
                    ? "#EF4444" 
                    : focused === "message" 
                    ? "var(--accent)" 
                    : undefined,
                }}>
                  <textarea
                    placeholder="Cuéntame sobre tu proyecto, presupuesto y timeline esperado..."
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    className={`${inputCls} contact__textarea`}
                  />
                </div>
                {errors.message && <p className="contact__error">{errors.message}</p>}
              </div>

              {/* Submit */}
              <div className="contact__submit-wrapper">
                {status === "success" && (
                  <div className="contact__success">
                    <span className="contact__success-dot" />
                    <p>Mensaje enviado — te responderé en menos de 24h.</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="contact__error-box">
                    <span className="contact__error-dot" />
                    <p>Error al enviar. Intenta nuevamente.</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="contact__submit"
                >
                  {status === "loading" ? (
                    <>
                      <span className="contact__spinner" />
                      Enviando...
                    </>
                  ) : status === "success" ? (
                    <>✓ ¡Enviado!</>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>
                <p className="contact__footer-text">Solo texto plano · Sin spam · Respuesta garantizada</p>
              </div>
            </form>
          </div>

          {/* Columna Derecha - Sidebar */}
          <div 
            className="contact__sidebar"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.65s ease 0.16s, transform 0.65s ease 0.16s",
            }}
          >
            {/* Ubicación & horario */}
            <div className="contact__card">
              <p className="contact__card-label">Ubicación &amp; Horario</p>
              <div className="contact__info-list">
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="contact__info-title">Lima, Perú</p>
                    <p className="contact__info-sub">GMT-5 · Zona horaria</p>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <span>🕐</span>
                  </div>
                  <div>
                    <p className="contact__info-title">&lt; 24 horas</p>
                    <p className="contact__info-sub">Tiempo de respuesta</p>
                  </div>
                </div>
                <div className="contact__info-item contact__info-item--available">
                  <div className="contact__info-icon contact__info-icon--available">
                    <span>⚡</span>
                  </div>
                  <div>
                    <p className="contact__info-title contact__info-title--available">Disponible ahora</p>
                    <p className="contact__info-sub">Para nuevos proyectos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacto directo */}
            <div className="contact__card">
              <p className="contact__card-label">Contacto directo</p>
              <div className="contact__social-list">
                {socialLinks.map(({ name, icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-item"
                  >
                    <div className="contact__social-icon">
                      <span style={{ fontSize: '1rem' }}>{icon}</span>
                    </div>
                    <div>
                      <p className="contact__social-name">{name}</p>
                      <p className="contact__social-label">{label}</p>
                    </div>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Especialidades */}
            <div className="contact__card">
              <p className="contact__card-label">Especialidades</p>
              <div className="contact__specialties">
                {specialties.map((tech) => (
                  <span key={tech} className="contact__specialty">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;