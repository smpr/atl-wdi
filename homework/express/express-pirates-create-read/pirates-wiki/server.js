//your code here
var path        = require('path');
var express     = require('express');
var hbs         = require('hbs');
var port        = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const app = express();
var pirateController = require('./controllers/pirates.js');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');

app.use("/pirates", pirateController);



/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});
app.listen(port, function() {
    console.info('Arrg.....', port,"//", new Date());
  });