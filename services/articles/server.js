const createServer = require('@auth0-nextjs-example/bff').createServer;

createServer('articles', {
  dir: 'services/articles',
  apiBasePath: '/api/articles',
});