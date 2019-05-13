
const bcrypt = require('bcryptjs');
const db = require('../data/dbConfig');
const Users = require('../users/users-model');



function restrictions(req, res, next){
    const{ username, password} = req.headers;
    if(username&&password){
        Users.findBy({username})
        .first()
        .then(user => {
            user&&bcrypt.compareSync(password, user.password)?next(): res.status(401).json({message:"not the right creds"})
        })
    }else{
        res.status(404).json({message:"incomplete creds"})
    }
}


module.exports = restrictions;