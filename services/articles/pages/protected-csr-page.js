import React from 'react';
import { useUser, withCSRPageAuthRequired } from '@auth0-nextjs-example/auth0-lib/client';
import { ProfileCard } from '@auth0-nextjs-example/service-components';

const ProtectedCSRPage = ({ user }) => {
  const { user: userFromHook } = useUser();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-gray-800">
        Protected Client Side Rendered (CSR) Page
      </h1>
      <p className="my-4 text-center">
        The user profile below is only visible to authenticated users. The user data has been
        injected into the page via a client-side version of the <code>withPageAuthRequired</code> HOC component provided by the Next.js Auth0 SDK,
        which wraps the page component. This automatically adds a user object to the page props, where this user object has been obtained via 
        the client-side React Hook <code>useUser</code>.
      </p>
      <ProfileCard heading="User from withPageAuthRequired higher order component (HOC)" user={user} />
      <br />
      <ProfileCard heading="User from useUser React Hook" user={userFromHook} />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Protected Client Side Rendered (CSR) Page',
    },
  };
}

export default withCSRPageAuthRequired(ProtectedCSRPage);