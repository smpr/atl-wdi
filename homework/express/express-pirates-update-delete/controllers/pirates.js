//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates.seededPirates
	});
});


router.get('/new', (req, res)=>{
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){
const id = parseInt(req.params.id)
	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirates: showPirate
	});
});

router.post('/', (req,res)=>{
	const newPirate = req.body
	pirates.seededPirates.push(newPirate);
	res.redirect('/pirates')
})
//==============================
// CREATE
//==============================
router.get('/new', (req,res)=>{
	res.render('pirates/new')
})
//==============================
// UPDATE
//==============================
router.get('/:id/edit', (req,res)=>{
    res.render('pirates/edit', {
        tondont: {
            id: {
                id:req.params.id,
                name: pirates.seededPirates[req.params.id],
				birthplace: pirates.seededPirates[req.params.id],
				death_year: pirates.seededPirates[req.params.id],
				base: pirates.seededPirates[req.params.id],
				nickname: pirates.seededPirates[req.params.id],
            }
        }
    })
})

router.put('/id', (req,res)=>{
	const piratesEdit = pirates.seededPirate
	[req.params/id]
	piratesEdit.name = req.body.name;
	piratesEdit.birthplace = req.body.birthplace;
	piratesEdit.death_year = req.body.death_year;
	piratesEdit.base = req.body.base;
	piratesEdit.nickname = req.body.nickname;
	res.redirect('/pirates')
})

//==============================
// DESTROY
//==============================

//==============================
// EXPORTS
//==============================

module.exports = router;
