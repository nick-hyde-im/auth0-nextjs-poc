import React from 'react';
import { getAccessToken, getSession } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

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
  const { user } = await getSession(req, res) || {};

  if (!user) {
    return {
      redirect: {
        destination: '../api/auth/login',
        permanent: false,
      },
    };
  }

  const { accessToken } = await getAccessToken(req, res);

  // Return the access token as a prop
  return {
    props: {
      accessToken,
      user,
    },
  };
};

export default withPageAuthRequired(Protected);