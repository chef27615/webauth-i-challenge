const router = require('express').Router();
const bcrypt = require('bcryptjs');
const dbUsers = require('../data/dbConfig');
const Users = require('./users-model');
const restrictions = require('../middelware/restricted');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err =>{res.status(500).json(err)})
})

router.post('/login', (req,res) => {
    let {username, password} = req.body;
    
    Users.findBy({username})
    .first()
    .then(user => {
        if(user&&bcrypt.compareSync(password, user.password)){
            res.status(200).json({message:`Welcome ${user}`})
        }else{res.status(401).json({message:"creds not right"})}
    })
    .catch(err =>{res.status(500).json(err)})
})

router.get('/users', restrictions, (req, res) => {
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