var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Dog = require ("../db/models/dog");

/* GET dog listing. */
router.get('/', (req, res, next) => {
  Dog.find({}, (err,result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Create new dog survey
router.post ("/",  (req,res,next) => {
  console.debug(req.body);
  const data = req.body;
  const dog1 = new Dog({
        image_id   : data.image_id,
        image_tag  : data.image_tag,
        image_link : data.image_link,
        isSelected : data.isSelected
  });
  dog1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });

});



//Delete new dog survey

router.delete("/", (req, res, next) => {
  const id = req.body._id;
  console.debug(id);
  Dog.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

//Update new dog survey
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
