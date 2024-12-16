import express from 'express';
import next from 'next';
import path from 'path';
import createRouter from './router';

const createServer = (serviceName, options = {}) => {
  const dev = process.env.NODE_ENV !== 'production';
  const dir = options.dir || path.join(__dirname, 'services', serviceName);
  
  console.log(`Starting server for service: ${serviceName}`);
  console.log(`Next.js app directory: ${dir}`);

  const app = next({
    dev,
    dir,
    turbopack: true,
  });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = express();

    // Create and use the router
    const router = createRouter(serviceName);
    const apiBasePath = options.apiBasePath || `/api/${serviceName}`;

    server.use(apiBasePath, async (req, res, next) => {
      console.log('ROUTER CALLED');

      next();
    }, router);

    // Default Next.js handler
    server.all('*', async (req, res) => {
      // console.log('DEFAULT HANDLER CALLED!');      

      return handle(req, res);
    });

    const port = process.env.PORT || 3000;
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
};

export default createServer;