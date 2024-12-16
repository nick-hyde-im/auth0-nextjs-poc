// import { createProxyMiddleware } from 'http-proxy-middleware';
// import { getAccessToken } from '@auth0/nextjs-auth0';

// export default function handler(req, res) {
//   const proxy = createProxyMiddleware({
//     // target: 'http://articles:3000',
//     // changeOrigin: true,
//     pathRewrite: {
//       '^/auth/api/articles': '/api/articles',
//     },
//     onProxyReq: async (proxyReq, req, res) => {
//       try {
//         const { accessToken } = await getAccessToken(req, res);
//         if (accessToken) {
//           proxyReq.setHeader('Authorization', `Bearer ${accessToken}`);
//         } else {
//           res.status(401).send('Unauthorized');
//           return;
//         }
//       } catch (error) {
//         console.error('Error getting access token:', error);
//         res.status(401).send('Unauthorized');
//         return;
//       }
//     },
//   });

//   return proxy(req, res);
// }