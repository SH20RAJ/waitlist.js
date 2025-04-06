import { siteConfig } from './config';

// Base metadata that applies to all pages
const baseMetadata = {
  title: {
    default: siteConfig.website.name,
    template: `%s | ${siteConfig.website.name}`
  },
  description: siteConfig.website.description,
  keywords: siteConfig.website.keywords,
  authors: [{ name: siteConfig.website.author }],
  creator: siteConfig.website.author,
  publisher: siteConfig.website.name,
  metadataBase: new URL(siteConfig.website.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.website.url,
    title: siteConfig.website.name,
    description: siteConfig.website.description,
    siteName: siteConfig.website.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.website.name,
    description: siteConfig.website.description,
    creator: siteConfig.website.twitter,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.website.url}/site.webmanifest`,
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    ...baseMetadata,
    title: `${siteConfig.website.name} - Transform Your Waitlist Into a Growth Engine`,
  },
  features: {
    ...baseMetadata,
    title: `Features | ${siteConfig.website.name}`,
    description: 'Discover the powerful features that make Waitlist.js the most comprehensive waitlist management platform on the market.',
    keywords: [...siteConfig.website.keywords, 'features', 'waitlist management', 'referral system', 'analytics'],
  },
  pricing: {
    ...baseMetadata,
    title: `Pricing | ${siteConfig.website.name}`,
    description: "Simple, transparent pricing plans that scale with your business. Choose the plan that's right for you.",
    keywords: [...siteConfig.website.keywords, 'pricing', 'plans', 'subscription', 'free trial'],
  },
  integrations: {
    ...baseMetadata,
    title: `Integrations | ${siteConfig.website.name}`,
    description: 'Connect Waitlist.js with your favorite tools and platforms to create a unified workflow.',
    keywords: [...siteConfig.website.keywords, 'integrations', 'API', 'webhooks', 'connections'],
  },
  enterprise: {
    ...baseMetadata,
    title: `Enterprise Solutions | ${siteConfig.website.name}`,
    description: 'Powerful waitlist management tools designed for large organizations with complex needs.',
    keywords: [...siteConfig.website.keywords, 'enterprise', 'security', 'compliance', 'custom solutions'],
  },
  security: {
    ...baseMetadata,
    title: `Security & Compliance | ${siteConfig.website.name}`,
    description: 'Learn about our comprehensive approach to keeping your information safe and secure.',
    keywords: [...siteConfig.website.keywords, 'security', 'compliance', 'GDPR', 'CCPA', 'data protection'],
  },
  docs: {
    ...baseMetadata,
    title: `Documentation | ${siteConfig.website.name}`,
    description: 'Comprehensive guides and resources to help you get the most out of Waitlist.js.',
    keywords: [...siteConfig.website.keywords, 'documentation', 'guides', 'tutorials', 'help'],
  },
  api: {
    ...baseMetadata,
    title: `API Reference | ${siteConfig.website.name}`,
    description: 'Comprehensive documentation for the Waitlist.js API. Integrate waitlist functionality directly into your applications.',
    keywords: [...siteConfig.website.keywords, 'API', 'developers', 'integration', 'endpoints'],
  },
  blog: {
    ...baseMetadata,
    title: `Blog | ${siteConfig.website.name}`,
    description: 'Insights, strategies, and best practices for optimizing your waitlist and maximizing conversions.',
    keywords: [...siteConfig.website.keywords, 'blog', 'articles', 'insights', 'best practices'],
  },
  guides: {
    ...baseMetadata,
    title: `Guides & Resources | ${siteConfig.website.name}`,
    description: 'Comprehensive guides, templates, and resources to help you create and optimize successful waitlists.',
    keywords: [...siteConfig.website.keywords, 'guides', 'resources', 'templates', 'best practices'],
  },
  community: {
    ...baseMetadata,
    title: `Community | ${siteConfig.website.name}`,
    description: 'Connect with fellow waitlist enthusiasts, share knowledge, and stay up-to-date with the latest trends and best practices.',
    keywords: [...siteConfig.website.keywords, 'community', 'forum', 'events', 'networking'],
  },
  about: {
    ...baseMetadata,
    title: `About Us | ${siteConfig.website.name}`,
    description: 'Learn about our mission, values, and the team behind Waitlist.js.',
    keywords: [...siteConfig.website.keywords, 'about', 'mission', 'values', 'team'],
  },
  customers: {
    ...baseMetadata,
    title: `Customer Success Stories | ${siteConfig.website.name}`,
    description: 'Discover how businesses across industries use Waitlist.js to drive growth, engagement, and conversion.',
    keywords: [...siteConfig.website.keywords, 'customers', 'case studies', 'success stories', 'testimonials'],
  },
  careers: {
    ...baseMetadata,
    title: `Careers | ${siteConfig.website.name}`,
    description: 'Join our team and help us build the future of waitlist management.',
    keywords: [...siteConfig.website.keywords, 'careers', 'jobs', 'hiring', 'team'],
  },
  contact: {
    ...baseMetadata,
    title: `Contact Us | ${siteConfig.website.name}`,
    description: "Get in touch with our team. We're here to help with any questions or feedback you may have.",
    keywords: [...siteConfig.website.keywords, 'contact', 'support', 'help', 'feedback'],
  },
  legal: {
    ...baseMetadata,
    title: `Legal Information | ${siteConfig.website.name}`,
    description: 'Access our terms of service, privacy policy, and other legal documents.',
    keywords: [...siteConfig.website.keywords, 'legal', 'terms', 'privacy', 'compliance'],
  },
  privacy: {
    ...baseMetadata,
    title: `Privacy Policy | ${siteConfig.website.name}`,
    description: 'Learn how we collect, use, and protect your personal information.',
    keywords: [...siteConfig.website.keywords, 'privacy', 'data protection', 'GDPR', 'CCPA'],
  },
  terms: {
    ...baseMetadata,
    title: `Terms of Service | ${siteConfig.website.name}`,
    description: 'The agreement between you and Waitlist.js governing your use of our services.',
    keywords: [...siteConfig.website.keywords, 'terms', 'conditions', 'agreement', 'legal'],
  },
};
