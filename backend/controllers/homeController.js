// controller to load the home page with near by restaurants
const asyncHandler = require("express-async-handler");
const getNearByPlaces = require("../services/api-requests.js");
const getPlaceDetails = require("../services/api-requests.js");
// const getPlacePhotos = require("../services/api-requests.js");
const getFindPlaceFromText = require("../services/api-requests.js");

exports.getHomePage = (req, res) => {
  getNearByPlaces.getNearByPlaces(req, res);
  //   res.status(200).json({ message: "Get Home Page" });
};

exports.getPlaceDetails = (req, res) => {
  getPlaceDetails.getPlaceDetails(req, res);
};

// exports.getPlacePhotos = (req, res) => {
//   getPlacePhotos.getPlacePhotos(req, res);
// };

exports.getHomePageByName = (req, res) => {
  getFindPlaceFromText.getFindPlaceFromText(req, res);
};
