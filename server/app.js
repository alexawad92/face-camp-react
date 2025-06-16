if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const campgroundRoutes = require("./routes/campground");
const userRoutes = require("./routes/user");
const session = require("express-session");

const Campground = require("./models/campground");
const User = require("./models/user");
const Review = require("./models/review");
const morgan = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// connect to mongo
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected!");
});

// set up express app
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sessionConfig = {
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    //                    ms     s    m    h    d => set to expire in a week
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

// use poassport for authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// setup express

//campground route
// app.use("/campgrounds", async (req, res, next) => {
//   const campgrounds = await Campground.find({});
//   res.render("campgrounds/index", { campgrounds });
// });

// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

app.use("/api/campgrounds", campgroundRoutes);
app.use("/api", userRoutes);

// listen to //localhost:5000
app.listen(5000, () => {
  console.log("Serving on port 5000");
});
