//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require("hbs");
var logger = require('morgan');
const port =3000;

//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
var donutsController = require('./controllers/donuts.js');
app.use('/', donutsController);
const db=mongoose.connection
//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"
//error log for db startup
db.on('error', function(err){
    console.log(err)
})
db.once('open', function(){
    console.log("DB connected without any issues....surprised? me too....")
})
mongoose.connect('mongodb://localhost/donut_shop');

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
app.listen(port,()=>{
    console.log('EAT DONUTS!!')
})