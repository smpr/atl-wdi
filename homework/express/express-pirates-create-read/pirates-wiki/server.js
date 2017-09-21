//your code here
var path        = require('path');
var express     = require('express');
var hbs         = require('hbs');
const bodyParser = require('body-parser')
const app = express();
var pirateController = require('./controllers/pirates.js');


app.use("/pirates", pirateController);

var port        = process.env.PORT || 3000;

app.listen(port, function() {
    console.info('Arrg.....', port,"//", new Date());
  });