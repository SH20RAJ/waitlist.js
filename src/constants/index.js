// Essential site configuration

export const siteConfig = {
  website: {
    name: "Waitlist.js",
    description: "Transform your waitlist from a passive email collector into an active growth engine with AI-powered engagement, gamification, and conversion optimization.",
    url: "https://waitlist.js",
    ogImage: "/images/og-image.jpg"
  },
  cta: {
    primary: {
      text: "Get Started Free",
      url: "/signup"
    },
    secondary: {
      text: "Request Demo",
      url: "/demo"
    }
  }
};

export const mainNavigation = [
  {
    title: "Features",
    href: "/features",
    submenu: [
      { title: "Smart Analytics", href: "/features#analytics" },
      { title: "Viral Growth Mechanics", href: "/features#viral-growth" },
      { title: "Widget Builder", href: "/features#widget-builder" },
      { title: "AI-Powered Engagement", href: "/features#ai-engagement" },
      { title: "Advanced Segmentation", href: "/features#segmentation" }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Resources",
    href: "#",
    submenu: [
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/api" },
      { title: "Blog", href: "/blog" },
      { title: "Guides", href: "/guides" }
    ]
  },
  {
    title: "Company",
    href: "#",
    submenu: [
      { title: "About Us", href: "/about" },
      { title: "Customers", href: "/customers" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" }
    ]
  }
];

export const pricingPlans = [
  {
    name: 'Free',
    price: {
      monthly: 0,
      yearly: 0
    },
    description: 'Perfect for testing the waters',
    features: [
      'Up to 250 waitlist entries',
      'Basic waitlist widget',
      'Email notifications',
      'Simple analytics',
      'Community support'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Growth',
    price: {
      monthly: 49,
      yearly: 470
    },
    description: 'For growing businesses and startups',
    features: [
      'Up to 5,000 waitlist entries',
      'Advanced widget customization',
      'Referral system',
      'A/B testing',
      'Basic segmentation',
      'Email support',
      'API access'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Pro',
    price: {
      monthly: 149,
      yearly: 1430
    },
    description: 'For established businesses',
    features: [
      'Up to 25,000 waitlist entries',
      'Advanced segmentation',
      'AI-powered insights',
      'Custom branding',
      'Priority support',
      'Advanced analytics',
      'Webhook integrations',
      'Team collaboration'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      yearly: 'Custom'
    },
    description: 'For large organizations',
    features: [
      'Unlimited waitlist entries',
      'All Pro features',
      'Dedicated success manager',
      'Custom integrations',
      'White labeling',
      'Advanced security features',
      'Multi-product management',
      'Priority feature requests'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export const footerNavigation = {
  product: [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Integrations", href: "/integrations" },
    { title: "Enterprise", href: "/enterprise" },
    { title: "Security", href: "/security" }
  ],
  resources: [
    { title: "Documentation", href: "/docs" },
    { title: "API Reference", href: "/api" },
    { title: "Blog", href: "/blog" },
    { title: "Guides", href: "/guides" }
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Customers", href: "/customers" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" }
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" }
  ]
};
