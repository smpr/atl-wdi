const express = require('express')
const hbs = require('hbs')
const app =express()
const port = 3000;
const methodOverride = require('method-override')
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engone", "hbs")
app.set('views', './views')
const pirateController = require('./controllers/pirates.js')
app.use(methodOverride('_method'))
app.use('/pirates', pirateController)
app.get('/',(req,res)=>{
  res.send("Homepage")
})
app.listen(port,()=>{
  console.log("Im watching you....")
})