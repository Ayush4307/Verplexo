import { Helmet } from 'react-helmet-async'
import { SITE_NAME, BASE_URL, OG_IMAGE, EMAIL, PHONE, LOCATION, SOCIAL_LINKS } from '../constants/brand'

interface SeoProps {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
}

// JSON-LD Organization schema — injected on every page for SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  image: OG_IMAGE,
  description: 'Full-stack software development agency building scalable web applications, AI solutions, and custom digital platforms.',
  email: EMAIL,
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: LOCATION,
  },
  sameAs: [
    SOCIAL_LINKS.github,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.twitter,
  ],
}

export function Seo({ title, description, canonical, image, type = 'website' }: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL
  const ogImage = image ?? OG_IMAGE

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${title}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@verplexo" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  )
}
