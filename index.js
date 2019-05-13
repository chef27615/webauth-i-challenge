require('dotenv').config();
const server = require('./server');
const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`\n**************\n    server running on ${port}   \n**************\n`))