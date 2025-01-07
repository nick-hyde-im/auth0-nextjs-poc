import express from 'express';
import { checkJwt } from '../middleware/authMiddleware';

const createRouter = (serviceName) => {
  const router = express.Router();

  router.get('/example-get-endpoint', (req, res) => {
    return res.json({ message: `This is an example bff endpoint for the ${serviceName} service that does not require user authorisation.` });
  });

  router.get('/protected-get-endpoint', checkJwt, (req, res) => {
    return res.json({ message: `This is a protected bff endpoint of the ${serviceName} service.` });
  });

  router.post('/protected-post-endpoint', checkJwt, (req, res) => {
    const { email } = req.body;
    const user = req.auth;

    res.status(200).json({
      message: `Form submitted successfully with email: ${email}`,
      user: user || null,
    });
  });

  return router;
};

export default createRouter;