// File: ./models/survey.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
        image_id   : Number,
        image_tag  : String,
        image_link : String,
        isSelected : Boolean

});

//Export function to create "SurveySchema" model class
module.exports = mongoose.model('Survey', SurveySchema );