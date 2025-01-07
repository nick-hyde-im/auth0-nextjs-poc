import fetch from 'node-fetch';
import { DEFAULT_SITE_KEY, getAuth0Client } from '@auth0-nextjs-example/auth0-lib';

const getAccessToken = async (req, res) => {
  const auth0Client = getAuth0Client(DEFAULT_SITE_KEY);

  try {
    const accessToken = await auth0Client.getAccessToken(req, res);

    return accessToken;
  } catch (error) {
    console.error(error);

    return { accessToken: null };
  }
}

export default async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);

  if (!accessToken) {
    res.status(401).json({
      message: 'Unauthorized',
    });

    return;
  }

  const { path } = req.query;
  const url = `http://articles:3000/api/${path.join('/')}`;

  const method = req.method;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const body = req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined;

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  if (response.ok) {
    const data = await response.json();

    res.status(200).json(data);
  } else {
    console.error('Failed to fetch API:', response.status, response.statusText);

    res.status(response.status).json({
      message: response.status === 401 ? 'Unauthorized' : 'An error occurred',
    });
  }
}