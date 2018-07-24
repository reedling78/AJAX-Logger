'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PixelSchema = new Schema({
  service: {
    type: String,
    required: 'Enter the name of the third party pixel you are using'
  },
  data: {
    type: Object,
    required: 'Enter the data object you are sending to the service'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Pixel', PixelSchema);