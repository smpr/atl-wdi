const express = require('express')
const router = express.Router();
const data = require("../data.js")

router.get('/', (req,res)=>{
    res.render('recipes/index', {
        recipes: data.seededRecipes
    })
})
router.get("/new", (req,res)=> {
    res.render("recipes/new")
})
router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const recipes = data.seededRecipes[id];
    res.render('recipes/show', {
        recipes: recipes
    })
})
router.post('/', (req,res)=>{
    const newRecipe = req.body;
    data.seededRecipes.push(newRecipe);
    res.redirect('/recipes')
})
module.exports = router;