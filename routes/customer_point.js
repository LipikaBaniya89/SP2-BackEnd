var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var CustomerPoint = require ("../db/models/customer_point");

/* GET survey listing. */
router.get('/', (req, res, next) => {
  CustomerPoint.find({}, (err,result) => {
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
  const customer_point1 = new Survey({
    customer_id     : data.customer_id,
    customer_points : data.customer_points
  });
  customer_point1.save((err, newInstance) => {
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
  CustomerPoint.findByIdAndDelete(id, (err, doc) => {
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
  var customer_point1 = await CustomerPoint.findOne({ customer_id: data.customer_id });
  customer_point1.customer_id  = data.newCustomer_id,
  customer_point1.customer_points = data.customer_points
  await customer_point1.save();
  res.status(200).json(customer_point1);
});

module.exports = router;
