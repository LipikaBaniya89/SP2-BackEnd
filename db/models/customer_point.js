// File: ./models/customer_point.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CustomerPointSchema = new Schema({
  customer_id   : Number,
  customer_points : Number
});

//Export function to create "CustomerPointSchema" model class
module.exports = mongoose.model('Customer_Point', CustomerPointSchema );