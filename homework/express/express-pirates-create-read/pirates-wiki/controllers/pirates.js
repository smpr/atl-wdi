//your code below
//requirements
var express = require("express");
var router = express.Router();
//var pirates = require('../models/pirates.js');
const bodyParser = require('body-parser')
const pirates = require('../models/pirates.js')
//all routes for /pirate
//router.get()
//router.post(......)
router.get('../new', (req, res) => {
    res.render('views/new');
  })
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//router.get('/', function(req,res){
//    res.send('Argggg')
//})
router.get('/', function(req, res){
	res.render("./index.hbs", {
		//pirates.seededPirates grabs the data from the pirates.js and looks for the seededPirates var
		pirates: pirates.seededPirates
	});
});


router.get('/new', (req, res)=>{
	res.render("/new.hbs");
});
//exports
router.get('/:id', function(req, res){
    const id = parseInt(req.params.id)
        //grab the pirate by id
        var showPirate = pirates[req.params.id];
    
        res.render("./show.hbs", {
            pirates: showPirate
        });
    });


router.post('/', (req,res)=>{
const newPirate = req.body
pirates.seededPirates.push(newPirate);
res.redirect('/pirates')
})
module.exports = router;