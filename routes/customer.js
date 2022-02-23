var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Customer = require ("../db/models/customer");

/* GET survey listing. */
router.get('/', (req, res, next) => {
  Customer.find({}, (err,result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Create new survey
router.post ("/", (req,res,next) => {
  console.debug(req.body);
  const data = req.body;
  const customer1 = new Survey({
    customer_id  : data.customer_id,
    image_id     : data.image_id,
    customer_tag : data.customer_tag
  });
  customer1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});

//Delete new survey
router.delete("/", (req, res, next) => {
  const id = req.body._id;
  console.debug(id);
  Customer.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

//Update new survey
router.put("/", async (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  var customer1 = await Customer.findOne({ customer_id: data.customer_id });
  customer1.customer_id  = data.newCustomer_id,
  customer1.image_id     = data.image_id,
  customer1.customer_tag = data.customer_tag
  await customer1.save();
  res.status(200).json(customer1);
});

module.exports = router;
