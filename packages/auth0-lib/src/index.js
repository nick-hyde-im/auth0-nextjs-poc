import NodeCache from 'node-cache';
import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0Config = JSON.parse(process.env.AUTH0_CONFIG);

const getAuth0Config = (siteKey) => {
  const config = auth0Config[siteKey] || null;

  if (!config) {
    throw new Error(`Invalid siteKey: ${siteKey}`);
  }

  const { audience, ...restConfig } = config;

  return { ...restConfig }
}

const getAuth0Instance = (config) => initAuth0({ ...config });

const auth0ClientCache = new NodeCache({ stdTTL: 60 });

export default getAuth0Client = (siteKey) => {
  const cachedAuth0Client = auth0ClientCache.get(siteKey);

  if (cachedAuth0Client) {
    console.log('RETURNING CACHED AUTH0 CLIENT');
    return cachedAuth0Client;
  }

  const config = getAuth0Config(siteKey);

  if (!config) {
    throw new Error(`No Auth0 config found for siteKey: ${siteKey}`);
  }

  const auth0Client = getAuth0Instance(config);

  auth0ClientCache.set(siteKey, auth0Client);

  console.log('CREATED NEW AUTH0 CLIENT');

  return auth0Client;
};