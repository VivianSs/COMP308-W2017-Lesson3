const express = require('express');

const app = express();

app.listen(3000);
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