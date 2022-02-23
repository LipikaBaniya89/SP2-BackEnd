// File: ./models/road.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var RoadSchema = new Schema({
        image_id   : Number,
        image_tag  : String,
        image_link : String,
        isSelected : Boolean
    
});

//Export function to create "RoadSchema" model class
module.exports = mongoose.model('Road', RoadSchema );