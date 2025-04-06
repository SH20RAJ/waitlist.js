'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <>
      <PageHeader 
        title="Privacy Policy"
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
              At Waitlist.js, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our waitlist management platform.
            </p>
            
            <h2>1. Information We Collect</h2>
            
            <h3>1.1 Information You Provide to Us</h3>
            <p>
              We collect information that you voluntarily provide when you:
            </p>
            <ul>
              <li>Create an account with us</li>
              <li>Use our services</li>
              <li>Contact our customer support</li>
              <li>Participate in surveys or promotions</li>
              <li>Post on our forums or community pages</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, billing information, and any other information you choose to provide.
            </p>
            
            <h3>1.2 Information We Collect Automatically</h3>
            <p>
              When you use our services, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Device type and operating system</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h3>1.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from third parties, such as:
            </p>
            <ul>
              <li>Business partners</li>
              <li>Service providers</li>
              <li>Social media platforms (if you connect your account)</li>
              <li>Marketing partners</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending technical notices, updates, security alerts, and support messages</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, preventing, and addressing fraud and abuse</li>
              <li>Personalizing and improving your experience</li>
              <li>Communicating with you about products, services, offers, and events</li>
            </ul>
            
            <h2>3. How We Share Your Information</h2>
            <p>
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>With business partners with whom we jointly offer products or services</li>
              <li>In connection with a business transaction (e.g., merger, acquisition, or sale)</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your consent or at your direction</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
            
            <h2>4. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@waitlistjs.com.
            </p>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>6. International Data Transfers</h2>
            <p>
              Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We take steps to ensure that your information receives an adequate level of protection in the countries in which we process it.
            </p>
            
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the data, and applicable legal requirements.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as quickly as possible.
            </p>
            
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through our services prior to the changes becoming effective. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              Email: privacy@waitlistjs.com<br />
              Address: 123 Market Street, Suite 456, San Francisco, CA 94105
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
