const express = require('express');

const app = express();



app.listen(3000);
console.log('Server running at http://localhost:3000/');

app.use('/hello', (req, res, next) =>{
 
  res.end("hello world");
  next();
});

app.use('/', (req, res, next) =>{
  
  res.end("Welcome");
  next();
});