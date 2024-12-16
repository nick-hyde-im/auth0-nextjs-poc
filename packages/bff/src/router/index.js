// services/articles/router.js
import express from 'express';
import { checkJwt } from '../middleware/authMiddleware';

const createRouter = (serviceName) => {
  const router = express.Router();

  // Define your API routes here
  router.get('/custom-route', (req, res) => {
    console.log('CUSTOM ROUTE CALLED 2');

    return res.send(`This is a custom route for ${serviceName}`);
  });

  router.get('/protected-route', checkJwt, (req, res) => {
    console.log('PROTECTED ROUTE CALLED');

    return res.send(`This is a protected route for ${serviceName}`);
  });

  // Add more routes as needed

  return router;
};

export default createRouter;