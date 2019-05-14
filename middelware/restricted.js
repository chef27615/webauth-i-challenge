
function restrictions(req, res, next){
 req.session&&req.session.user ? next() : res.status(401).json({ message:'additional info needed'})
}


module.exports = restrictions;


// below are the original code (inside the function above) for the middleware, however require imports:
//const bcrypt = require('bcryptjs'); <-- this will link the bcrypt
//const db = require('../data/dbConfig'); <-- this will get the data from migration
//const Users = require('../users/users-model'); <-- this will get user data functions


// const{ username, password} = req.headers;
//     if(username&&password){
//         Users.findBy({username})
//         .first()
//         .then(user => {
//             user&&bcrypt.compareSync(password, user.password)?next(): res.status(401).json({message:"not the right creds"})
//         })
//     }else{
//         res.status(404).json({message:"incomplete creds"})
//     }