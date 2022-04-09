const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync')
const createError = require('http-errors');
const AppError = require('../utils/appError');
const User = require('../models/userModal');
const bookings = require('../models/bookingModel');


exports.getoverview = catchAsync(async (req, res) => {
    const tours = await Tour.find();
    console.log(tours.length);

    res.status(200).render('overview', {
        title: 'All Tours',
        tours
    });
});


exports.gettour = catchAsync(async (req, res, next) => {
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
    })

    if (!tour) {
        return next(new AppError('There is no tour with that name', 404));
    }
    res.status(200).render('tour', {
        // title:'The forest Hiker',
        tour
    });

});

exports.getLogin = catchAsync(async (req, res) => {


    res.status(200).render('login', {
        title: 'Login into your account'
    });
});


exports.getAccount = (req, res) => {
    res.status(200).render('account', {
        title: 'Your account'
    });
};

exports.updateUserData = catchAsync(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        email: req.body.email
    },
        {
            new: true,
            runValidators: true
        }
    );
    res.status(200).render('account', {
        title: 'Your account',
        user: updatedUser
    });
})

exports.getMyTours = async (req, res, next) => {

    const booking = await bookings.find({ user: req.user.id });
    const tourID = booking.map(el => el.tour);

    const tours = await Tour.find({ _id: { $in: tourID } })

    res.status(200).render('overview', {
        title: 'My Tours',
        tours
    })
}