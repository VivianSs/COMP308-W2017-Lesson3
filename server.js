const express = require('express');

const app = express();



app.listen(3000);
console.log('Server running at http://localhost:3000/');

app.use('/hello', (req, res, next) =>{
 
  res.send("Hello World!");
 
});

app.use('/', (req, res, next) =>{
  
  res.send("Welcome!");
  
  
});

module.exports = app;