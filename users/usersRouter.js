const router = require('express').Router();
const Users = require('./users-model');
const restrictions = require('../middelware/restricted');


router.get('/', restrictions, (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err =>{res.status(500).json(err)})
})

router.use((req, res, next) => {
    res.status(404).json({message:"in users route"})
})

module.exports = router;