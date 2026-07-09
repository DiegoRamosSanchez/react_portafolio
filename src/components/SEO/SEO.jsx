import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../../config/analytics';

function SEO({ title, description, image, url, keywords, type = 'website', children }) {
  // Siempre priorizar tu nombre completo
  const siteTitle = title 
    ? `${title} | Diego Alexander Ramos Sanchez` 
    : 'Diego Alexander Ramos - Fullstack Developer & Systems Analyst';
  
  const metaDescription = description || 'Portafolio profesional de Diego Alexander Ramos. Analista de Sistemas con 10+ años de experiencia en Java, Angular, Microservicios y Blockchain. Especialista en arquitecturas escalables para Fintech.';
  const metaImage = image || SEO_CONFIG.image;
  const metaUrl = url || SEO_CONFIG.siteUrl;
  
  // Keywords con tu nombre como prioridad
  const metaKeywords = [
    'Diego Alexander Ramos',
    'Diego Ramos',
    'Diego Alexander',
    'Analista de Sistemas',
    'Fullstack Developer',
    'Java Spring Boot',
    'Angular Developer',
    'Microservicios',
    'Blockchain Developer',
    'Fintech Developer',
    'Arquitecto de Software'
  ];

  return (
    <Helmet>
      {/* Título con tu nombre */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(', ')} />
      <link rel="canonical" href={metaUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content="Diego Alexander Ramos - Portfolio" />
      <meta property="og:locale" content="es_PE" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content="@darsys_dev" />
      
      {/* Robots - Asegurar indexación */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      
      {/* Author y Publisher */}
      <meta name="author" content="Diego Alexander Ramos" />
      <meta name="publisher" content="Diego Alexander Ramos" />
      
      {/* Schema.org - Person con tu nombre */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Diego Alexander Ramos",
          "alternateName": ["Diego Ramos", "Diego Alexander"],
          "givenName": "Diego Alexander",
          "familyName": "Ramos",
          "jobTitle": "Senior Fullstack Developer & Systems Analyst",
          "worksFor": {
            "@type": "Organization",
            "name": "DARSYS Tech Solutions"
          },
          "url": SEO_CONFIG.siteUrl,
          "sameAs": [
            "https://github.com/DiegoRamosSanchez",
            "https://linkedin.com/in/diego-alexander-ramos-sanchez-0a988b253"
          ],
          "knowsAbout": [
            "Java Spring Boot",
            "Angular",
            "Microservicios",
            "Blockchain",
            "Arquitectura de Software",
            "Fintech"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Análisis de Sistemas"
          }
        })}
      </script>
      
      {/* Schema.org - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Diego Alexander Ramos - Portfolio",
          "url": SEO_CONFIG.siteUrl,
          "author": {
            "@type": "Person",
            "name": "Diego Alexander Ramos"
          },
          "description": metaDescription,
          "inLanguage": "es"
        })}
      </script>
      
      {children}
    </Helmet>
  );
}

export default SEO;