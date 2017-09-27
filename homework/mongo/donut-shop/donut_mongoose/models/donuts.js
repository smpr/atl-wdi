//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
//create your donut schema:
var newDonut = new Schema({
    name: String,
    description: String,
    imd: String,
    price: Number,
    qty: Number,
    
    });
    
const donutModel = mongoose.model('Donuts', newDonut);
//export your donut with module.exports()
module.exports = {
   donutModel: donutModel
};