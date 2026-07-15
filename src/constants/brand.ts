/**
 * BRAND CONSTANTS — Single source of truth for all brand values.
 * Update this file whenever contact info, social links, or domain changes.
 * Do NOT hardcode these values in individual components.
 */

export const SITE_NAME = 'Verplexo'
export const TAGLINE = 'Full-stack software development for ambitious teams'
export const BASE_URL = 'https://verplexo.vercel.app' // Update after custom domain is configured
export const OG_IMAGE = `${BASE_URL}/og-image.png`

// Contact
export const EMAIL = 'verplexo@gmail.com'
export const PHONE = '+91 99999 99999'
export const WHATSAPP_NUMBER = '919999999999' // E.164 format without +, for wa.me links
export const LOCATION = 'India · Remote Worldwide'
export const FORMSPREE_CONTACT = 'https://formspree.io/f/your-form-id-here'
export const FORMSPREE_ESTIMATOR = 'https://formspree.io/f/xpwzgkeo'

// Social Media
export const SOCIAL_LINKS = {
  github: 'https://github.com/verplexo',
  linkedin: 'https://linkedin.com/company/verplexo',
  twitter: 'https://twitter.com/verplexo',
}

// Analytics (add your real IDs after setting up GA4 and Clarity)
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'       // Replace with your GA4 ID
export const CLARITY_PROJECT_ID = 'XXXXXXXXXX'          // Replace with your Clarity ID
