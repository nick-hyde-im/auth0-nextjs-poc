import React from 'react';

const Footer = () => (
  <footer className="text-center text-gray-800 my-4">
    <div className="text-sm">
      &copy;
      {` Immediate Media Co. ${new Date().getFullYear()} | `}
      <a
        href="https://github.com/auth0/nextjs-auth0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Next.js Auth0 SDK
      </a>
      {' - Proof of Concept | '}
      <a href="https://github.com/nick-hyde-im/auth0-nextjs-poc/tree/main" className='text-blue-500 hover:text-blue-700 underline' target='_blank' >
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;