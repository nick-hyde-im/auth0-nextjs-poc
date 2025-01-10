import 'dotenv/config'; 
import { expressjwt as jwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { DEFAULT_SITE_KEY, getAuth0Config } from '@auth0-nextjs-example/auth0-lib';

export const checkOptionalJwt = (req, res, next) => {
  const auth0Config = getAuth0Config(DEFAULT_SITE_KEY);
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
    credentialsRequired: false, // This allows the request to proceed even if no Authorization header is present
  });

  jwtMiddleware(req, res, (err) => {
    if (err) {
      // If there's an error in token verification, log the error and proceed without setting req.auth
      console.error('JWT verification error:', err);
    } else if (req.auth) {
      // If token is successfully verified, req.auth will be set
      console.log('JWT verified, auth object:', req.auth);
    }

    next();
  });
};
