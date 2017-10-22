const express = require('express'),
app = express(),
c = console.log,
ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine','ejs');

app.get("/",(req,res)=> res.render('index'));

app.listen(3001,()=> c('listening 3001'));