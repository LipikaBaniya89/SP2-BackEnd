// File: ./models/customer.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  customer_id   : Number,
  image_id  : String,
  customer_tag : String
});

//Export function to create "CustomerSchema" model class
module.exports = mongoose.model('Customer', CustomerSchema );