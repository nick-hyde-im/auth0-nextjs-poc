import { handleAuth, handleCallback, getAccessToken } from '@auth0/nextjs-auth0';

const afterCallback = (req, res, session, state) => {
  session.user.customProperty = 'foo';

  // Note: This works, but isn't the secure option we want.
  // const { accessToken } = session;
  // res.setHeader('Set-Cookie', `access_token=${accessToken}; path=/; httponly; samesite=lax; secure;`);

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end();
    }
  },
  async proxy(req, res) {
    const accessToken = await getAccessToken(req, res);

    console.log({ accessToken });
  },
});

// export default handleAuth();