
if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require("express");
const path = require("path");
const cors = require('cors');
const mongoose = require("mongoose");
const campgroundRoutes = require("./routes/campground");
const Campground = require("./models/campground");
const User = require("./models/user");
const Review = require("./models/review");
const morgan = require("morgan");

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

// setup express
app.use(express.urlencoded({ extended: true }));

//campground route
// app.use("/campgrounds", async (req, res, next) => {
//   const campgrounds = await Campground.find({});
//   res.render("campgrounds/index", { campgrounds });
// });

app.use("/api/campgrounds", campgroundRoutes);

// listen to //localhost:5000
app.listen(5000, () => {
  console.log("Serving on port 5000");
});
