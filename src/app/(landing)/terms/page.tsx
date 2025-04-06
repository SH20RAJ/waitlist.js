'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <>
      <PageHeader 
        title="Terms of Service"
        subtitle="Last updated: April 1, 2025"
        gradient={false}
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="lead">
              These Terms of Service ("Terms") govern your access to and use of the Waitlist.js platform and services. Please read these Terms carefully before using our services.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
            </p>
            
            <h2>2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we make material changes, we will notify you by email or through our services prior to the changes becoming effective. Your continued use of our services after the effective date of the revised Terms constitutes your acceptance of the changes.
            </p>
            
            <h2>3. Account Registration</h2>
            <p>
              To use certain features of our services, you may need to create an account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or no longer valid.
            </p>
            
            <h2>4. Subscription and Payments</h2>
            <h3>4.1 Subscription Plans</h3>
            <p>
              We offer various subscription plans with different features and pricing. You can find details about our current plans on our pricing page.
            </p>
            
            <h3>4.2 Payment Terms</h3>
            <p>
              By subscribing to a paid plan, you agree to pay all fees in accordance with the pricing and payment terms presented to you. Fees are non-refundable except as required by law or as explicitly stated in these Terms.
            </p>
            
            <h3>4.3 Billing Cycle</h3>
            <p>
              We will bill you on a recurring basis (monthly or annually, depending on your subscription). You authorize us to charge your payment method for all fees incurred.
            </p>
            
            <h3>4.4 Taxes</h3>
            <p>
              All fees are exclusive of taxes, which we will charge as applicable. You are responsible for paying all taxes associated with your use of our services.
            </p>
            
            <h3>4.5 Price Changes</h3>
            <p>
              We may change our prices at any time. If we increase prices for your subscription plan, we will notify you at least 30 days before the change takes effect.
            </p>
            
            <h3>4.6 Cancellation</h3>
            <p>
              You may cancel your subscription at any time through your account settings or by contacting us. If you cancel, you will continue to have access to your subscription until the end of your current billing period.
            </p>
            
            <h2>5. User Content</h2>
            <h3>5.1 Ownership</h3>
            <p>
              You retain all rights to any content you submit, post, or display on or through our services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, transmit, and display the User Content for the purpose of providing and improving our services.
            </p>
            
            <h3>5.2 Responsibility</h3>
            <p>
              You are solely responsible for your User Content and the consequences of posting or publishing it. You represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary rights to the User Content</li>
              <li>The User Content does not infringe or violate the rights of any third party</li>
              <li>The User Content complies with these Terms and all applicable laws</li>
            </ul>
            
            <h3>5.3 Prohibited Content</h3>
            <p>
              You may not post or transmit User Content that:
            </p>
            <ul>
              <li>Is illegal, harmful, threatening, abusive, harassing, defamatory, or invasive of privacy</li>
              <li>Infringes any intellectual property or other rights of any party</li>
              <li>Contains software viruses or any other code designed to interrupt, destroy, or limit the functionality of any computer software or hardware</li>
              <li>Constitutes unauthorized or unsolicited advertising, junk or bulk email ("spamming")</li>
              <li>Impersonates any person or entity</li>
            </ul>
            
            <h2>6. Intellectual Property</h2>
            <h3>6.1 Our Intellectual Property</h3>
            <p>
              Our services and all content, features, and functionality thereof, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, are owned by us, our licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h3>6.2 License to Use</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our services for your internal business purposes.
            </p>
            
            <h3>6.3 Restrictions</h3>
            <p>
              You may not:
            </p>
            <ul>
              <li>Copy, modify, or create derivative works based on our services</li>
              <li>Reverse engineer, decompile, or disassemble our services</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
              <li>Transfer, sublicense, lease, lend, rent, or otherwise distribute our services to any third party</li>
              <li>Use our services in any way that violates any applicable law or regulation</li>
            </ul>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p>
              Our total liability to you for all claims arising from or relating to these Terms or our services shall not exceed the amount paid by you to us during the 12 months immediately preceding the event giving rise to the claim.
            </p>
            
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless us and our officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul>
              <li>Your access to and use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right</li>
              <li>Your User Content</li>
              <li>Any claim that your User Content caused damage to a third party</li>
            </ul>
            
            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use our services will immediately cease.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms or our services shall be brought exclusively in the federal or state courts located in San Francisco, California, and you consent to the personal jurisdiction of such courts.
            </p>
            
            <h2>11. Dispute Resolution</h2>
            <p>
              Any dispute arising from or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules. The arbitration shall be conducted in San Francisco, California, and judgment on the arbitration award may be entered in any court having jurisdiction thereof.
            </p>
            
            <h2>12. Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
            </p>
            
            <h2>13. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding our services and supersede all prior agreements and understandings.
            </p>
            
            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@waitlistjs.com<br />
              Address: 123 Market Street, Suite 456, San Francisco, CA 94105
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
