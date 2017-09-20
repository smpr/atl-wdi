const express =require('express')
const hbs =require('hbs')
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser')
const controllerRecipes = require("./controllers/recipes")

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'hbs')
app.use('/recipes', controllerRecipes)
app.get('/', function(req,res){
    res.send('This is our home page')
})
app.listen(PORT, function(){
    console.log("Whatever")
})