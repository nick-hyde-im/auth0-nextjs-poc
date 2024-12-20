import NodeCache from 'node-cache';
import { initAuth0 } from '@auth0/nextjs-auth0';
import getAuth0Config from './getAuth0Config';

const auth0ClientCache = new NodeCache({ stdTTL: 60 });

const getAuth0Instance = (config) => initAuth0({ ...config });

const getAuth0Client = (siteKey) => {
  const cachedAuth0Client = auth0ClientCache.get(siteKey);

  if (cachedAuth0Client) {
    return cachedAuth0Client;
  }

  const config = getAuth0Config(siteKey);

  if (!config) {
    throw new Error(`No Auth0 config found for siteKey: ${siteKey}`);
  }

  const auth0Client = getAuth0Instance(config);

  auth0ClientCache.set(siteKey, auth0Client);

  return auth0Client;
};

export default getAuth0Client;