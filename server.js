const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);


const sessionConfig = {
    name: 'Const2A',
    secret:'Molon Labe',
    cookie:{
        maxAge: 1000*60*60,
        secure: false
    },
    
    httpOnly: true,
    resave: false,
    saveUninitialized: false,

    store: new KnexSessionStore({
        knex:require('./data/dbConfig'),
        tablename: 'session',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000*60*60
    })
}

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/usersRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
});

module.exports = server;