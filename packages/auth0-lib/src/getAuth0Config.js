const getAuth0Config = (siteKey) => {
  const auth0Config = JSON.parse(process.env.AUTH0_CONFIG);
  const config = auth0Config[siteKey] || null;

  if (!config) {
    throw new Error(`Invalid siteKey: ${siteKey}`);
  }

  return { ...config }
}

export default getAuth0Config;