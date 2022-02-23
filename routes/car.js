var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Car = require ("../db/models/car");

/* GET car listing. */
router.get('/', (req, res, next) => {
  Car.find({}, (err,result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Create new car survey
router.post ("/",  (req,res,next) => {
  console.debug(req.body);
  const data = req.body;
  const car1 = new Car({
        image_id   : data.image_id,
        image_tag  : data.image_tag,
        image_link : data.image_link,
        isSelected : data.isSelected
  });
  car1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });

});

//Delete new car survey

router.delete("/", (req, res, next) => {
  const id = req.body._id;
  console.debug(id);
  Car.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

//Update new car survey
router.put("/", async (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const id = data._id;
  delete data._id;
  console.debug(data);

  Dog.findByIdAndUpdate(id,data, (err,doc) => {
    if (err) {
      console.error("Hey look, Error !", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

module.exports = router;
