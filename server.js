const express = require('express');
const helmet = require('helmet');

const regRouter = require('./register/regRouter.js');
const loginRouter = require('./login/loginRouter.js');
const usersRouter = require('./users/usersRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/register', regRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
});

module.exports = server;