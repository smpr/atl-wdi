const express = require("express");
const router = express.Router();
const hbs = require('hbs')

router.get("/", (req,res)=>{
    const str = req.query.words.split("").reverse().join("");
    res.render("reverse", {
        reverse: str
    });
 
  
})

//res.render("reverse", {
  //  reverse: reverse})





module.exports = router;