// Configuración de Google Analytics y Clarity
// Estas credenciales son de tu portafolio anterior

// Google Analytics 4 - ID de medición
// En Next.js usabas: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
// Necesitas el ID real de GA4. Si no lo tienes, puedes dejarlo como placeholder
export const GA_MEASUREMENT_ID = 'G-C6539JPYLK'; // ⚠️ Reemplaza con tu ID de GA4 real

// Microsoft Clarity - ID del proyecto
// De tu archivo anterior: "wjz6ddvkd9"
export const CLARITY_ID = 'wjz6ddvkd9';

// Google Search Console - Verificación
// De tu archivo anterior: "zOYn5n5ZZfjCzSpVUIRYfwdSM_4itg20a64MpaIm200"
export const GOOGLE_VERIFICATION = 'zOYn5n5ZZfjCzSpVUIRYfwdSM_4itg20a64MpaIm200';

// Configuración SEO - Tomada de tu metadata
export const SEO_CONFIG = {
  title: 'Diego Alexander Ramos | Analista de Sistemas & Fullstack Developer',
  description: '🚀 +10 años de experiencia en microservicios reactivos, Blockchain y desarrollo Fullstack con Java & Angular. Especialista en arquitecturas escalables para Fintech y Banca Digital.',
  siteUrl: 'https://darsys.pages.dev',
  image: '/og-image.jpg',
  twitterHandle: '@darsys_dev',
  keywords: [
    'Diego Alexander Ramos', 'Analista de Sistemas', 'Desarrollador Fullstack',
    'Java Spring Boot', 'Angular', 'Microservicios reactivos', 'Blockchain',
    'Fintech', 'Docker', 'Kubernetes', 'AWS'
  ],
  author: 'Diego Alexander Ramos',
  publisher: 'DARSYS Tech Solutions',
  applicationName: 'DARSYS Portfolio',
  locale: 'es_PE',
  // Redes sociales de tu portafolio anterior
  sameAs: [
    'https://github.com/DiegoRamosSanchez',
    'https://linkedin.com/in/diego-alexander-ramos-sanchez-0a988b253'
  ]
};

// Si quieres usar variables de entorno (recomendado para producción)
// export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
// export const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || 'wjz6ddvkd9';