
const Review = require('../models/reviewModel');
const handleFactor = require('./handlefactory');


// exports.getAllreviews =catchAsync(async(req,res,next)=>{
//     let filter = {};
//     if(req.params.tourId) filter = {tour:req.params.tourId}
//     const reviews = await Review.find(filter);
//     res.status('200').json({
//         success:'success',
//         results: reviews.length,
//         data:{
//             reviews
//         }
//     })
// });


exports.setTourUserIds = (req, res, next) => {
    // Allow nested routes
    if (!req.body.tour) req.body.tour = req.params.tourId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
  };
  

// exports.createReview = catchAsync(async(req,res,next)=>{
//     if(!req.body.tour) req.body.tour = req.params.tourId;
//     if(!req.body.user) req.body.user = req.user.id;

//     const newReview = await Review.create(req.body);
//     res.status('201').json({
//         status:'success',
//         data:{
//             review:newReview
//         }
//     })
// });
 
exports.getReview  =  handleFactor.getOne(Review)
exports.createReview = handleFactor.createOne(Review)
exports.updateReview = handleFactor.updateOne(Review)
exports.deleteReview = handleFactor.deleteOne(Review)
exports.getAllreviews = handleFactor.getAll(Review);