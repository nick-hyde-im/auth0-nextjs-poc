import React from 'react';

const Footer = () => (
  <footer className="text-center text-gray-800 my-4">
    <div className="text-sm">
      &copy; Immediate Media Co. {new Date().getFullYear()}{' '}
      | <a
        href="https://github.com/auth0/nextjs-auth0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Next.js Auth0 SDK
      </a>{' '}
      - Proof of Concept
    </div>
  </footer>
);

export default Footer;