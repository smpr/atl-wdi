// app.js

//require express package
var express = require('express');
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views')
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

app.get('/topping/:type', function(req, res, next) {
    
        res.send(`Good Choice!`);
    });
app.get('/order/:amount/:size', function(req, res, next) {
        
             res.send( );
         });
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});