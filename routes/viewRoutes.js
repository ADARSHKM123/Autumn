const express = require('express');
const viewController = require('../controllers/viewController');
const router = express.Router();
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

// 3) ROUTES



router.get('/',bookingController.createBookingCheckout, authController.isLoggedIn,viewController.getoverview);

router.get('/tour/:slug',authController.isLoggedIn,viewController.gettour)

router.get('/login',authController.isLoggedIn,viewController.getLogin)

router.get('/me', authController.protect, viewController.getAccount);

router.get('/my-tours', authController.protect, viewController.getMyTours);

router.post(
    '/submit-user-data',
    authController.protect,
    viewController.updateUserData
  );
  
  
module.exports = router;   