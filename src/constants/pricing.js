


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
        name: 'Scale',
        price: {
            monthly: 399,
            yearly: 3830
        },
        description: 'For high-growth companies',
        features: [
            'Up to 100,000 waitlist entries',
            'All Pro features',
            'Dedicated success manager',
            'Custom integrations',
            'White labeling',
            'Advanced security features',
            'Multi-product management',
            'Priority feature requests'
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
            'All Scale features',
            'Custom development',
            'Enterprise SLA',
            'Dedicated infrastructure',
            'On-premise deployment option',
            'Advanced compliance features',
            'Strategic partnership'
        ],
        cta: 'Contact Sales',
        highlighted: false
    }
];

export const pricingFAQs = [
    {
        question: "Can I change plans later?",
        answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your plan will be reflected in your next billing cycle."
    },
    {
        question: "What happens when I reach my waitlist entry limit?",
        answer: "You'll receive a notification when you're approaching your limit. You can choose to upgrade to a higher tier or continue with your current plan, but new entries will be paused until you have available capacity."
    },
    {
        question: "Do you offer discounts for startups or non-profits?",
        answer: "Yes, we offer special pricing for eligible startups, non-profits, and educational institutions. Please contact our sales team for more information."
    },
    {
        question: "Can I try all features before committing?",
        answer: "Absolutely! Our 14-day free trial gives you access to all features of the Pro plan, allowing you to fully explore the platform before making a decision."
    },
    {
        question: "Is there a long-term contract?",
        answer: "No, all our plans are month-to-month or annual with no long-term commitment. You can cancel at any time."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we can also accommodate invoicing and wire transfers."
    }
];

export const pricingComparisonFeatures = [
    { feature: "Waitlist Entries", free: "250", growth: "5,000", pro: "25,000", scale: "100,000", enterprise: "Unlimited" },
    { feature: "Custom Branding", free: "Limited", growth: "Yes", pro: "Yes", scale: "Yes", enterprise: "Yes" },
    { feature: "Referral System", free: "Basic", growth: "Advanced", pro: "Advanced", scale: "Advanced", enterprise: "Advanced" },
    { feature: "Analytics", free: "Basic", growth: "Standard", pro: "Advanced", scale: "Enterprise", enterprise: "Custom" },
    { feature: "A/B Testing", free: "No", growth: "Yes", pro: "Yes", scale: "Yes", enterprise: "Yes" },
    { feature: "API Access", free: "No", growth: "Limited", pro: "Full", scale: "Full", enterprise: "Full" },
    { feature: "Team Members", free: "1", growth: "3", pro: "10", scale: "Unlimited", enterprise: "Unlimited" },
    { feature: "Email Support", free: "Limited", growth: "Standard", pro: "Priority", scale: "Dedicated", enterprise: "24/7 Dedicated" },
    { feature: "Custom Domain", free: "No", growth: "No", pro: "Yes", scale: "Yes", enterprise: "Yes" },
    { feature: "White Labeling", free: "No", growth: "No", pro: "No", scale: "Yes", enterprise: "Yes" },
    { feature: "AI-Powered Insights", free: "No", growth: "Basic", pro: "Advanced", scale: "Advanced", enterprise: "Custom" },
    { feature: "SSO Integration", free: "No", growth: "No", pro: "No", scale: "Yes", enterprise: "Yes" },
    { feature: "Custom Development", free: "No", growth: "No", pro: "No", scale: "No", enterprise: "Yes" }
];
