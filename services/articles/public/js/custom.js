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
  if (serverData) {
    serverData.innerHTML = `
      <p class="text-center">
        User profile information fetched from the /auth/user/me endpoint via static JavaScript:
        <br />
        <code>${JSON.stringify(data, null, 2)}</code>
      </p>
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
    })
    .catch((error) => {
      console.error('There was an error fetching the user profile information:', error);
    });
}

window.addEventListener('load', onClientLoad);
