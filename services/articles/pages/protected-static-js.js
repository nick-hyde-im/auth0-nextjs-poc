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
      <div id="featureFlagStatus" className="flex justify-center" />
      <div id="serverData" className="justify-center" />
      <Script src="/js/custom.js" strategy="beforeInteractive" />
      <Script
        id="__SITE_CONTEXT__"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            env: "preproduction",
            siteKey: "goodfood",
            featureFlags: {
              FEATURE_AUTH0_ENABLED: true,
            },
          }),
        }}
        strategy="beforeInteractive"
      />
    </div>
  )
}

export default ProtectedStaticJs;

