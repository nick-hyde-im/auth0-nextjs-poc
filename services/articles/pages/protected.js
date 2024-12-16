import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import getAuth0Client from '@auth0-nextjs-example/auth0-lib';

const Protected = ({ accessToken, user }) => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This is the protected page.</p>
      <p>Access Token: {accessToken}</p>
      {user && (
        <p>
          User: {user.name} <br />
          Email: {user.email} <br />
          Sub: {user.sub} <br />
          SID: {user.sid} <br />
          Custom Property: {user.customProperty} <br />
          Fabric ID: {user['fabric-user-id']}
        </p>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const auth0Client = getAuth0Client = getAuth0Client('goodfood');
  const { user } = await auth0Client.getSession(req, res) || {};

  if (!user) {
    return {
      redirect: {
        destination: '../api/auth/login',
        permanent: false,
      },
    };
  }

  const { accessToken } = await auth0Client.getAccessToken(req, res);

  // Return the access token as a prop
  return {
    props: {
      accessToken,
      user,
    },
  };
};

export default withPageAuthRequired(Protected);