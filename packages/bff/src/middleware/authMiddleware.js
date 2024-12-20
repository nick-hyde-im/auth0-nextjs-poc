import 'dotenv/config'; 
import { expressjwt as jwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { getAuth0Config } from '@auth0-nextjs-example/auth0-lib';

export const checkJwt = (req, res, next) => {
  const siteKey = 'goodfood';
  const auth0Config = getAuth0Config(siteKey);
  const { audience, issuerBaseURL } = auth0Config;

  const jwtMiddleware = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${issuerBaseURL}/.well-known/jwks.json`,
    }),
    audience: audience,
    issuer: `${issuerBaseURL}/`,
    algorithms: ['RS256'],
  });

  jwtMiddleware(req, res, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  });
};