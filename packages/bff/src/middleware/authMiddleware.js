import 'dotenv/config'; 
import { GetVerificationKey, expressjwt as jwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;
 
export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ['RS256'],
});