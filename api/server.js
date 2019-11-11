const express = require('express');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js')

const server = express();

configureMiddleware(server)     // configureMiddleware file will take the server and configure all the middlewares for you

server.use('/api', apiRouter);

module.exports = server;
