const usersRouter = require('express').Router();








usersRouter.use((req, res, next) => {
    res.status(404).json({message:"in users route"})
})

module.exports = usersRouter;