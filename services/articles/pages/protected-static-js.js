import React from 'react';
import Script from 'next/script';

const ProtectedStaticJs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-gray-800">
        Protected Static JS Page
      </h1>
      <p className="my-4 text-center">
        This page loads a custom static JavaScript file that logs a message to the console when the page loads.
      </p>
      <div id="userAuthStatus" className="flex justify-center" />
      <div id="serverData" className="flex justify-center" />
      <Script src="/js/custom.js" strategy="beforeInteractive" />
    </div>
  )
}

export default ProtectedStaticJs;

