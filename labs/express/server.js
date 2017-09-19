const express = require('express');
const app = express();
const hbs = require('hbs');
const mathController = require('./controllers/math.js')
const greetingController = require('./controllers/greeting.js')
const reverseController = require('./controllers/reverse.js');
app.set('view engine', "hbs")

app.use('/math', mathController);
app.use('/greeting', greetingController);
app.use('/reverse', reverseController);

const PORT = 3000;
app.listen (PORT, () => {
    console.log("Express is listening on,", PORT);
})