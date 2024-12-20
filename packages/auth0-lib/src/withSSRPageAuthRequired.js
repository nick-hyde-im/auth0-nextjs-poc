import getAuth0Client from './getAuth0Client';

const withSSRPageAuthRequired = ({ getServerSideProps, returnTo }) => async (ctx) => {
  // Adjust this to get the siteKey from a call to the site config bff endpoint
  const siteKey = 'goodfood'; 
  const auth0Client = getAuth0Client(siteKey);

  console.log('withSSRPageAuthRequired', ctx.resolvedUrl);
  console.log('returnTo', returnTo);

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