//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
//router.get()
//router.post(......)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.get('/', function(req,res){
    res.send('Argggg')
})
//exports
module.exports = router;