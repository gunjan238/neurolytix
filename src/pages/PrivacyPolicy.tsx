import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: [Insert Date]
      </p>
      <p className="mb-4">
        NeuroLytix (“we,” “our,” “us”) values your privacy. This Privacy Policy
        explains how we collect, use, disclose, and protect your personal
        information when you visit our website, use our services, or interact
        with us.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Information: Name, email, phone number, company details.</li>
        <li>Technical Data: IP address, browser type, operating system.</li>
        <li>Usage Data: Pages visited, time spent, interactions.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to provide and improve services, respond to
        inquiries, send updates, and ensure website security.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>
        Email: <a href="mailto:enquire@neurolytix.com" className="text-primary">enquire@neurolytix.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
