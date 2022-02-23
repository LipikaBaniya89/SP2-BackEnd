// File: ./models/flower.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var FlowerSchema = new Schema({
        image_id   : Number,
        image_tag  : String,
        image_link : String,
        isSelected : Boolean
    
});

//Export function to create "FlowerSchema" model class
module.exports = mongoose.model('Flower', FlowerSchema );