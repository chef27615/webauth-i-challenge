const express = require('express');
const helmet = require('helmet');

const usersRouter = require('./users/usersRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', usersRouter);


server.get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
});

module.exports = server;