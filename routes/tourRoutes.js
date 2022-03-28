const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');
// const reviewController = require('../controllers/reviewController');
const reviewRouter = require('../routes/reviewRoutes');


const router = express.Router();




//POST /tour/234fad3/reviews
//GET /tour/234fad3/reviews
//GET /tour/234fad3/reviews/3bdfgyeb3

// router
// .route('/:tourId/reviews')
// .post(authController.protect,
// authController.restrictTo('user'),
// reviewController.createReview)

router.use('/:tourId/reviews', reviewRouter)

// router.param('id', tourController.checkID);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(authController.protect, authController.restrictTo('admin', 'lead-guide'), tourController.getMonthlyPlan);



router
.route('/tours-within/:distance/center/:latlng/unit/:unit')
.get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/11.256418, 75.824346/unit/mi

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/') 
  .get(
    tourController.getAllTours)
  .post(authController.protect, authController.restrictTo('admin', 'lead-guide','user'), tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(authController.protect, authController.restrictTo('admin', 'lead-guide'),tourController.uploadTourImages,tourController.resizeTourImages,tourController.updateTour)
  .delete(authController.protect, tourController.deleteTour);
 

module.exports = router;
