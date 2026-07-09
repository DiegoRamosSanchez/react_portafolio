import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../../config/analytics';

function SEO({ title, description, image, url, keywords, type = 'website', children }) {
  const siteTitle = title ? `${title} | ${SEO_CONFIG.title.split('|')[0].trim()}` : SEO_CONFIG.title;
  const metaDescription = description || SEO_CONFIG.description;
  const metaImage = image || SEO_CONFIG.image;
  const metaUrl = url || SEO_CONFIG.siteUrl;
  const metaKeywords = keywords || SEO_CONFIG.keywords;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(', ')} />
      <link rel="canonical" href={metaUrl} />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={SEO_CONFIG.title} />
      <meta property="og:locale" content="es_PE" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      
      <meta name="google-site-verification" content="zOYn5n5ZZfjCzSpVUIRYfwdSM_4itg20a64MpaIm200" />
      
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      
      <meta name="author" content="Diego Alexander Ramos" />
      <meta name="publisher" content="DARSYS Tech Solutions" />
      <meta name="application-name" content="DARSYS Portfolio" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Diego Alexander Ramos",
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
          "knowsAbout": ["Java Spring Boot", "Angular", "Microservicios", "Blockchain"],
          "yearsOfExperience": "10"
        })}
      </script>
      
      {children}
    </Helmet>
  );
}

export default SEO;