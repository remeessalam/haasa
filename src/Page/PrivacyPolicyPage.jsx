import React from "react";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../assets/image/aboutusbanner.png"; // Reusing about us banner for now

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <PageBanner image={bannerImage} title="Privacy Policy" />
      
      <div className="wrapper py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1a237e] mb-6">Privacy Policy</h1>
          
          <p className="mb-6">
            At Haasa Software Solutions, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy outlines how we collect, use, and protect the information you provide through our website.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            When you fill out a form on our website, we may collect the following personal information:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
          </ul>
          <p className="mb-6">
            We only collect information necessary to respond to your inquiries, provide services, or improve our offerings.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            The information you provide may be used to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Respond to your queries or requests</li>
            <li>Contact you regarding our services or offers</li>
            <li>Improve our website and services</li>
            <li>Maintain internal records</li>
          </ul>
          <p className="mb-6">
            We will never sell, rent, or share your information with third parties without your consent, unless required by law.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">3. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your data against unauthorized access, 
            disclosure, alteration, or destruction.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">4. Cookies & Tracking</h2>
          <p className="mb-6">
            Our website may use cookies or similar technologies to enhance user experience. 
            You can control cookie preferences through your browser settings.
          </p>
          
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">5. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Access the personal data we hold about you</li>
            <li>Request corrections to inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>
          <p className="mb-6">
            To exercise your rights, contact us at: <a href="mailto:digitalservices@haasa.ai" className="text-blue-600 hover:underline">digitalservices@haasa.ai</a>
          </p>
          
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">6. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this policy from time to time. Changes will be posted on this page with the revised effective date.
          </p>
          
          <div className="mt-10 border-t pt-6">
            <p className="text-sm text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;