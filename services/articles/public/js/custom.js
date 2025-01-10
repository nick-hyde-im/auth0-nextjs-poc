function getFeatureFlagFromSiteContext(featureFlag) {
  // Get the script element by its ID
  const siteContextElement = document.getElementById('__SITE_CONTEXT__');
  
  // Parse its JSON content if it exists
  if (siteContextElement) {
      try {
          const siteContext = JSON.parse(siteContextElement.textContent);
          // Access the desired feature flag
          return siteContext.featureFlags[featureFlag];
      } catch (error) {
          console.error('Failed to parse site context JSON:', error);
      }
  } else {
      console.error('Site context element not found.');
  }
  
  return null; // Return null if the element or key is not found
}

function updateFeatureFlagStatus(featureFlag) {
  const featureFlagStatus = document.getElementById('featureFlagStatus');

  if (featureFlagStatus) {
    console.log('Feature flag:', featureFlag);

    featureFlagStatus.innerHTML = `
      <p class="text-center mb-4">
        The feature flag <code>${featureFlag}</code> from <code>_SITE_CONTEXT_</code> is ${getFeatureFlagFromSiteContext(featureFlag) ? 'enabled' : 'disabled'}.  
      </p>
    `;
  }
}

function updateUserAuthStatus(isAuthenticated) {
  const userAuthStatus = document.getElementById('userAuthStatus');
  if (userAuthStatus) {
    userAuthStatus.innerHTML = `
      <p class="text-center mb-4">
        User is ${isAuthenticated ? '' : 'not'} authenticated${isAuthenticated ? ' 🎉' : ''}.
      </p>
    `;
  }
}

function updateServerData(data) {
  const serverData = document.getElementById('serverData');

  console.log(`typeof data`, typeof data);

  if (serverData) {
    serverData.innerHTML = `
      <p class="text-center mb-4">
        User profile information fetched from the /auth/user/me endpoint via static JavaScript:
      </p>
      <div style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem; overflow: auto; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
        <pre><code style="white-space: pre-wrap;">${JSON.stringify(data, null, 2).trim()}</code></pre>
      </div>
    `;
  }
}

function onClientLoad() {
  console.log('The client-side custom.js script has been loaded.');

  fetch('/api/auth/me')
    .then((response) => {
      if (response.ok && response.status === 200) {
        console.log('The user is authenticated.');
        updateUserAuthStatus(true);

        response?.json()
          .then((data) => {
            console.log('User profile information:', data);

            updateServerData(data);
          });
        
      } else {
        console.log('The user is not authenticated.');
        updateUserAuthStatus(false);
      }

      updateFeatureFlagStatus('FEATURE_AUTH0_ENABLED');
    })
    .catch((error) => {
      console.error('There was an error fetching the user profile information:', error);
    });
}

window.addEventListener('load', onClientLoad);
