'use strict';

var mongoose = require('mongoose'),
  Pixel = mongoose.model('Pixel');

exports.list_all_pixels = function(req, res) {
  Pixel.find({}, function(err, pixel) {
    if (err) {
      res.send(err);
    }
    res.json(pixel);
  });
};

exports.create_a_pixel = function(req, res) {
  var new_pixel = new Pixel(req.body);
  new_pixel.save(function(err, pixel) {
    if (err) {
      res.send(err);
    }
    res.json(pixel);
  });
};

exports.read_a_pixel = function(req, res) {
  Pixel.findById(req.params.pixelId, function(err, pixel) {
    if (err) {
      res.send(err);
    }
    res.json(pixel);
  });
};

exports.update_a_pixel = function(req, res) {
  Pixel.findOneAndUpdate({_id: req.params.pixelId}, req.body, {new: true}, function(err, pixel) {
    if (err) {
      res.send(err);
    }
    res.json(pixel);
  });
};


exports.delete_a_pixel = function(req, res) {
  console.log(req.params.pixelId);
  Pixel.remove({
    _id: req.params.pixelId
  }, function(err, pixel) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Pixel successfully deleted' });
  });
};
