const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const { storeReturnTo } = require("../middleware");
const users = require("../controllers/users.js");

router
  .route("/register")
  // Create user
  .post(catchAsync(users.createUser));
router.route("/check-auth").get(users.IsAuthenticated);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    message: "Logged in successfully",
    user: { id: req.user._id, username: req.user.username },
  });
});
// router.route('/login')
//     // Render user login form
//     .get(users.renderLoginForm)
//     // Login
//     .post(storeReturnTo, passport.authenticate('local', {failureFlash:true, failureRedirect: '/login'}),users.login)

// Logout
router.post("/logout", users.logout);

module.exports = router;
