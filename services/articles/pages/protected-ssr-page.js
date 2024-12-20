import React from 'react';
import { withSSRPageAuthRequired } from '@auth0-nextjs-example/auth0-lib';
import { ProfileCard } from '@auth0-nextjs-example/service-components';

const ProtectedSSRPage = ({ message, user }) => {
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
    </div>
  );
};

export const getServerSideProps = withSSRPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // Custom logic here if needed
    return {
      props: {
        message: 'This message comes from a prop that has been returned by a protected <code>getServerSideProps</code> function.',
      },
    };
  },
  returnTo: '/articles',
});

export default ProtectedSSRPage;