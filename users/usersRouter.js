const usersRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const dbUsers = require('../data/dbConfig');
const Users = require('./users-model');






usersRouter.use((req, res, next) => {
    res.status(404).json({message:"in users route"})
})

module.exports = usersRouter;