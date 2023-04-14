// controller to load the home page with near by restaurants
const asyncHandler = require("express-async-handler");
const getNearByPlaces = require("../services/api-requests.js");

exports.getHomePage = (req, res) => {
  getNearByPlaces.getNearByPlaces(req, res);
  //   res.status(200).json({ message: "Get Home Page" });
};
