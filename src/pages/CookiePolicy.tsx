import React from "react";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">
        Effective Date: [Insert Date]
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files placed on your device when you visit a website.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Enhance site functionality.</li>
        <li>Analyze site performance and user behavior.</li>
        <li>Personalize content and marketing.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-4">Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. Disabling
        cookies may affect site performance.
      </p>
    </div>
  );
};

export default CookiePolicy;
