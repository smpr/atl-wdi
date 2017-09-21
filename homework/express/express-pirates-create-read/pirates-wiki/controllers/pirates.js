//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');
const bodyParser = require('body-parser')

//all routes for /pirate
//router.get()
//router.post(......)
router.get('/new', (req, res) => {
    res.render('views/new');
  })
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get('/', function(req,res){
    res.send('Argggg')
})
//exports
module.exports = router;