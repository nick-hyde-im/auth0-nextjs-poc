import getAuth0Client from './getAuth0Client';
import { DEFAULT_SITE_KEY } from './constants.js';

const withSSRPageAuthRequired = ({ getServerSideProps, returnTo }) => async (ctx) => {
  const auth0Client = getAuth0Client(DEFAULT_SITE_KEY);

  return auth0Client.withPageAuthRequired({
    getServerSideProps: async (ctx) => {
      if (getServerSideProps) {
        return getServerSideProps(ctx);
      }

      return { props: {} };
    },
    returnTo: returnTo || ctx.resolvedUrl,
  })(ctx);
};

export default withSSRPageAuthRequired;