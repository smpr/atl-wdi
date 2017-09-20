// app.js

const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views')


// assigning 3000 as our port
var port = 3000;
app.get("/topping/:type", function(req, res){ 
    res.render("toppings", { 
        message: req.params.type}); });



app.get('/order/:amount/:size', function(req, res) {
        
             res.render('toppings', {
                 message: req.params.size
             });
         });
app.get('/:name',function(req,res){
    res.render('index', {
        message: req.params.name
    })
})
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});