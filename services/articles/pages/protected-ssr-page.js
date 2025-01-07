import React from 'react';
import { DEFAULT_SITE_KEY, getAuth0Client, withSSRPageAuthRequired } from '@auth0-nextjs-example/auth0-lib';
import { ProfileCard, Table } from '@auth0-nextjs-example/service-components';

const ProtectedSSRPage = ({ message, user, isLoggedIn, idToken }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-gray-800">
        Protected Server Side Rendered (SSR) Page
      </h1>
      <p className="my-4 text-center" dangerouslySetInnerHTML={{ __html: message }}></p>
      <p className="my-4 text-center">
        The user profile below is only visible to authenticated users. The user data has been
        injected into the page via a server-side version of the <code>withPageAuthRequired</code> HOC component provided by the Next.js Auth0 SDK,
        which wraps the <code>getServerSideProps</code> function of the page.
      </p>
      <ProfileCard user={user} />
      <p className="my-4 text-center">
        The following parameters have been injected into the page via the <code>getServerSideProps</code> function, 
        having been dervied from the <code>getSession</code> function of the active Auth0 client instance:
      </p>
      <div className="p-4 rounded-lg shadow-lg">
        <Table data={[
          {  label: 'isLoggedIn:', value: isLoggedIn ? 'true' : 'false' },
          {  label: 'idToken:', value: idToken },
        ]} />
      </div>
    </div>
  );
};

export const getServerSideProps = withSSRPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    // Custom logic here if needed
    const client = getAuth0Client(DEFAULT_SITE_KEY);
    const session = await client.getSession(req, res);

    const isLoggedIn = session && session.user;
    const idToken = session?.idToken;

    return {
      props: {
        message: 'This message comes from a prop that has been returned by a protected <code>getServerSideProps</code> function.',
        isLoggedIn,
        idToken,
      },
    };
  },
  returnTo: '/',
});

export default ProtectedSSRPage;