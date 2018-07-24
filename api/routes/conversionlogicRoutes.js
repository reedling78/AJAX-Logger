'use strict';
module.exports = function(app) {
  var pixeltracking = require('../controllers/conversionlogicController');

  app.route('/pixelviewer')
  	.get(function(req, res){
  		res.json({
  			foo: 'bar'
  		});
  	});

  // pixeltracking Routes
  app.route('/pixels')
    .get(pixeltracking.list_all_pixels)
    .post(pixeltracking.create_a_pixel);


  app.route('/pixels/:pixelId')
    .get(pixeltracking.read_a_pixel)
    .put(pixeltracking.update_a_pixel)
    .delete(pixeltracking.delete_a_pixel);
};
