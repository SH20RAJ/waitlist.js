// Integrations configuration for Waitlist.js

export const integrationCategories = [
  {
    name: "CRM & Marketing",
    integrations: [
      { name: "Salesforce", logo: "/images/integrations/salesforce.svg", description: "Sync waitlist data with your Salesforce CRM to manage leads and customer relationships." },
      { name: "HubSpot", logo: "/images/integrations/hubspot.svg", description: "Connect your waitlist to HubSpot for seamless lead management and marketing automation." },
      { name: "Mailchimp", logo: "/images/integrations/mailchimp.svg", description: "Automatically add waitlist members to your Mailchimp email campaigns." },
      { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.svg", description: "Trigger automated workflows in ActiveCampaign based on waitlist activity." },
      { name: "Klaviyo", logo: "/images/integrations/klaviyo.svg", description: "Sync waitlist data with Klaviyo for targeted email and SMS marketing." }
    ]
  },
  {
    name: "Analytics & Tracking",
    integrations: [
      { name: "Google Analytics", logo: "/images/integrations/google-analytics.svg", description: "Track waitlist performance and user behavior with Google Analytics integration." },
      { name: "Mixpanel", logo: "/images/integrations/mixpanel.svg", description: "Gain deeper insights into user engagement and conversion with Mixpanel." },
      { name: "Amplitude", logo: "/images/integrations/amplitude.svg", description: "Analyze user behavior and optimize your waitlist experience with Amplitude." },
      { name: "Segment", logo: "/images/integrations/segment.svg", description: "Use Segment to route your waitlist data to multiple destinations." },
      { name: "Hotjar", logo: "/images/integrations/hotjar.svg", description: "Understand how users interact with your waitlist forms using Hotjar's heatmaps and recordings." }
    ]
  },
  {
    name: "Website & CMS",
    integrations: [
      { name: "WordPress", logo: "/images/integrations/wordpress.svg", description: "Easily embed your waitlist on any WordPress site with our plugin." },
      { name: "Webflow", logo: "/images/integrations/webflow.svg", description: "Add your waitlist to Webflow sites with our custom embed code." },
      { name: "Shopify", logo: "/images/integrations/shopify.svg", description: "Collect waitlist signups for product launches on your Shopify store." },
      { name: "Wix", logo: "/images/integrations/wix.svg", description: "Integrate your waitlist with Wix websites using our custom widget." },
      { name: "Squarespace", logo: "/images/integrations/squarespace.svg", description: "Add your waitlist to any Squarespace site with our embed code." }
    ]
  },
  {
    name: "Communication & Collaboration",
    integrations: [
      { name: "Slack", logo: "/images/integrations/slack.svg", description: "Get real-time notifications in Slack when users join your waitlist." },
      { name: "Discord", logo: "/images/integrations/discord.svg", description: "Send waitlist updates and alerts to your Discord channels." },
      { name: "Intercom", logo: "/images/integrations/intercom.svg", description: "Connect your waitlist with Intercom for seamless customer support and engagement." },
      { name: "Zendesk", logo: "/images/integrations/zendesk.svg", description: "Manage waitlist-related support tickets directly in Zendesk." },
      { name: "Microsoft Teams", logo: "/images/integrations/teams.svg", description: "Receive waitlist notifications and collaborate with your team in Microsoft Teams." }
    ]
  }
];

export const apiEndpoints = [
  {
    category: "Waitlist Management",
    endpoints: [
      { method: "GET", path: "/v1/waitlists", description: "List all waitlists" },
      { method: "POST", path: "/v1/waitlists", description: "Create a new waitlist" },
      { method: "GET", path: "/v1/waitlists/{id}", description: "Get waitlist details" },
      { method: "PUT", path: "/v1/waitlists/{id}", description: "Update a waitlist" },
      { method: "DELETE", path: "/v1/waitlists/{id}", description: "Delete a waitlist" }
    ]
  },
  {
    category: "Entries",
    endpoints: [
      { method: "GET", path: "/v1/entries", description: "List all waitlist entries" },
      { method: "POST", path: "/v1/entries", description: "Add a new entry to a waitlist" },
      { method: "GET", path: "/v1/entries/{id}", description: "Get entry details" },
      { method: "PUT", path: "/v1/entries/{id}", description: "Update an entry" },
      { method: "DELETE", path: "/v1/entries/{id}", description: "Remove an entry" }
    ]
  },
  {
    category: "Referrals",
    endpoints: [
      { method: "GET", path: "/v1/referrals", description: "List all referrals" },
      { method: "POST", path: "/v1/referrals", description: "Create a referral" },
      { method: "GET", path: "/v1/referrals/{id}", description: "Get referral details" },
      { method: "GET", path: "/v1/entries/{id}/referrals", description: "Get referrals by entry" }
    ]
  },
  {
    category: "Analytics",
    endpoints: [
      { method: "GET", path: "/v1/analytics/overview", description: "Get waitlist overview stats" },
      { method: "GET", path: "/v1/analytics/conversion", description: "Get conversion metrics" },
      { method: "GET", path: "/v1/analytics/growth", description: "Get growth metrics" },
      { method: "GET", path: "/v1/analytics/referrals", description: "Get referral metrics" }
    ]
  }
];
