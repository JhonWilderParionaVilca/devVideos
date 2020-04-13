const express = require('express');

const config = require('./config');

const server = express();

server.set('PORT', config.port);
server.use(express.json());

server.use('/', (req, res) => {
  res.send('Hello World 🎉');
});

server.listen(server.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log(` 🚀  API server Listening on ${server.get('PORT')}`);
});
