import { DEFAULT_SITE_KEY, getAuth0Client } from '@auth0-nextjs-example/auth0-lib';

const afterCallback = (req, res, session, state) => {
  session.user.customProperty = 'foo';

  // Note: This works, but isn't the secure option we want.
  // const { accessToken } = session;
  // res.setHeader('Set-Cookie', `access_token=${accessToken}; path=/; httponly; samesite=lax; secure;`);

  return session;
};

export default async function auth(req, res) {
  const auth0Client = getAuth0Client(DEFAULT_SITE_KEY);

  return auth0Client.handleAuth({
    async callback(req, res) {
      try {
        await auth0Client.handleCallback(req, res, { afterCallback });
      } catch (error) {
        res.status(error.status || 500).end();
      }
    },
    login: auth0Client.handleLogin({
      authorizationParams: {
        audience: 'http://localhost:3000/api',
        scope: 'openid profile email offline_access',
      }
    }),
    signup: auth0Client.handleLogin({
      authorizationParams: {
        screen_hint: 'signup',
      },
    }),
  })(req, res);
};
