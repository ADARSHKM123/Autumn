
const Review = require('../models/reviewModel');
const handleFactor = require('./handlefactory');




exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};



exports.getReview = handleFactor.getOne(Review)
exports.createReview = handleFactor.createOne(Review)
exports.updateReview = handleFactor.updateOne(Review)
exports.deleteReview = handleFactor.deleteOne(Review)
exports.getAllreviews = handleFactor.getAll(Review);