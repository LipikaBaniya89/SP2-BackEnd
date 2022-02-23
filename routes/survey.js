var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Survey = require ("../db/models/survey");

/* GET survey listing. */
router.get('/', (req, res, next) => {
  Survey.find({}, (err,result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Create new survey
router.post ("/",  (req,res,next) => {
  console.debug(req.body);
  const data = req.body;
  const survey1 = new Survey({
        image_id   : data.image_id,
        image_tag  : data.image_tag,
        image_link : data.image_link,
        isSelected : data.isSelected
  });
  survey1.save((err, newInstance) => {
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
  Survey.findByIdAndDelete(id, (err, doc) => {
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
  var survey1 = await Survey.findOne({ code: data.code });
  survey1.name = data.name;
  survey1.image_id   = data.image_id;
  survey1.image_tag  = data.image_tag;
  survey1.image_link = data.image_link;
  survey1.isSelected = data.isSelected
  
  await survey1.save();
  res.status(200).json(survey1);
});

module.exports = router;
