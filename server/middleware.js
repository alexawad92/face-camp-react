const { campgroundSchema, reviewSchema } = require("./schemas.js");
const ExpressError = require("./utils/ExpressError");
const Campground = require("./models/campground");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
  console.log("MiddleWare isLoggedIn");
  console.log("Req.User....", req.user);
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      message: "you must be signed in!",
    });
  } else {
    next();
  }
};
// req.session.returnTo = req.originalUrl;
// req.flash("error", "you must be signed in!");
// return res.redirect("/login");
// module.exports.storeReturnTo = (req, res, next)=>{
//   if(req.session.returnTo){
//     res.locals.returnTo = req.session.returnTo;
//     }
//     next();
// }

// middleware
// module.exports.validateCampground = (req, res, next) => {
//   const { error } = campgroundSchema.validate(req.body);
//   if (error) {
//     const message = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(message, 400);
//   } else {
//     next();
//   }
// };

module.exports.isAuthor = async (req, res, next) => {
  console.log("HERE isAuthor");
  // const {id} = req.params;
  // const campground = await Campground.findById(id);
  // if(!campground.author.equals(req.user._id)){
  //     req.flash('error', 'you do not have permission to do that!');
  //     return res.redirect(`/campgrounds/${campground._id}`);
  // }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  // const {id, reviewId} = req.params;
  // const review = await Review.findById(reviewId);
  // if(!review.author.equals(req.user._id)){
  //     req.flash('error', 'you do not have permission to do that!');
  //     return res.redirect(`/campgrounds/${id}`);
  // }
  next();
};

// module.exports.validateReview = (req, res, next) => {
//   const { error } = reviewSchema.validate(req.body);
//   if (error) {
//     const message = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(message, 400);
//   } else {
//     next();
//   }
// };
