// Navigation configuration for Waitlist.js

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
      { title: "Guides", href: "/guides" },
      { title: "Community", href: "/community" }
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
    { title: "Guides", href: "/guides" },
    { title: "Community", href: "/community" }
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Customers", href: "/customers" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Legal", href: "/legal" }
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "DPA", href: "/dpa" },
    { title: "Acceptable Use", href: "/acceptable-use" }
  ]
};

export const dashboardNavigation = {
  main: [
    { title: "Dashboard", href: "/dashboard", icon: "Home" },
    { title: "Waitlists", href: "/dashboard/waitlists", icon: "List" },
    { title: "Analytics", href: "/dashboard/analytics", icon: "BarChart2" },
    { title: "Widgets", href: "/dashboard/widgets", icon: "Layout" },
    { title: "Integrations", href: "/dashboard/integrations", icon: "Link" },
    { title: "Settings", href: "/dashboard/settings", icon: "Settings" }
  ],
  user: [
    { title: "Profile", href: "/dashboard/profile", icon: "User" },
    { title: "Billing", href: "/dashboard/billing", icon: "CreditCard" },
    { title: "Team", href: "/dashboard/team", icon: "Users" },
    { title: "API Keys", href: "/dashboard/api-keys", icon: "Key" },
    { title: "Help", href: "/help", icon: "HelpCircle" },
    { title: "Logout", href: "/logout", icon: "LogOut" }
  ]
};
