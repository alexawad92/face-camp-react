const User = require("../models/user");
module.exports.renderRegisterForm = (req, res) => {
  res.render("users/register");
};

module.exports.createUser = async (req, res, next) => {
  console.log("in create user ");
  console.log(req.body);
  // try {
  const { email, username, password } = req.body;
  const user = new User({ email, username });
  const registeredUser = await User.register(user, password);
  req.login(registeredUser, (err) => {
    if (err) return next(err);
    res.status(201).json({
      message: "Registered and logged in successfully",
      user: { id: registeredUser._id, username: registeredUser.username },
    });
  });

  //   req.login(registeredUser, (err) => {
  //     if (err) {
  //       return next();
  //     }
  //     // console.log(registeredUser);
  //     // req.flash("success", "Welcome to Yelp Camp!");
  //     res.redirect("/campgrounds");
  //   });
  // } catch (e) {
  //   req.flash("error", e.message);
  //   res.redirect("/register");
  // }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login");
};

module.exports.login = (req, res) => {
  req.login(registeredUser, (err) => {
    if (err) return next(err);
    res.status(201).json({
      message: "Logged in successfully",
      user: { id: registeredUser._id, username: registeredUser.username },
    });
  });
};

module.exports.IsAuthenticated = (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ authenticated: true, user: req.user });
  } else {
    return res.json({ authenticated: false });
  }
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // optional: clear cookie
      res.json({ message: "Logged out successfully" });
    });
  });
};
