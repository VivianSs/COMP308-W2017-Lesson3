const express = require('express');

const app = express();

const localport = 3000;



/**
 * Get port from environment and store in Express
 */
let port = process.env.PORT || localport;
app.set('port', port);


app.listen(port);
console.log('Server running at http://localhost:3000/');




// second route is'/hello'
app.use('/hello', (req, res, next) =>{ 
  res.send("Hello World!");
 
});

//first route is '/' - root of my website
app.use('/', (req, res, next) =>{
  
  res.send("Welcome!");
});

module.exports = app;