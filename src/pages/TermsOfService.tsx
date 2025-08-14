import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Effective Date: [Insert Date]
      </p>
      <p className="mb-4">
        By accessing or using NuroLytix’s website or services, you agree to these
        Terms of Service. If you do not agree, please do not use our site.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-4">User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Do not misuse our website or services.</li>
        <li>Do not attempt unauthorized access to our systems.</li>
        <li>Do not use our services for unlawful purposes.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-4">Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of [Insert Applicable Jurisdiction].
      </p>
    </div>
  );
};

export default TermsOfService;
