// File: ./models/dog.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var DogSchema = new Schema({
        image_id   : Number,
        image_tag  : String,
        image_link : String,
        isSelected : Boolean
});

//Export function to create "DogSchema" model class
module.exports = mongoose.model('Dog', DogSchema );