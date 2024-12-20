import { withPageAuthRequired  } from '@auth0/nextjs-auth0/client';
import getAuth0Client from './getAuth0Client';
import getAuth0Config from './getAuth0Config';
import withSSRPageAuthRequired from './withSSRPageAuthRequired';

export {
  getAuth0Client,
  getAuth0Config,
  withPageAuthRequired as withCSRPageAuthRequired,
  withSSRPageAuthRequired,
};