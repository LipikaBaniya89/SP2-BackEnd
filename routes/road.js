var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Road = require ("../db/models/road");

/* GET road listing. */
router.get('/', (req, res, next) => {
  Road.find({}, (err,result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Create new road survey
router.post ("/",  (req,res,next) => {
  console.debug(req.body);
  const data = req.body;
  const road1 = new Road({
        image_id   : data.image_id,
        image_tag  : data.image_tag,
        image_link : data.image_link,
        isSelected : data.isSelected
  });
  road1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });

});



//Delete new road survey
router.delete("/", (req, res, next) => {
  const id = req.body._id;
  console.debug(id);
  Road.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

//Update new road survey
router.put("/", async (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const id = data._id;
  delete data._id;
  console.debug(data);

  Road.findByIdAndUpdate(id,data, (err,doc) => {
    if (err) {
      console.error("Hey look, Error !", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

module.exports = router;
