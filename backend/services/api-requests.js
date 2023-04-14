// Api Requests to google maps api
const axios = require("axios");

// Get the near by places
exports.getNearByPlaces = (req, res) => {
  const { lat, lng } = req.body;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      var data = response.data.results;
      data = data.slice(0, 3);
      data.forEach((element) => {
        element["photos"][0][
          "photo_reference"
        ] = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${element["photos"][0]["photo_reference"]}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
      });
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get the place details
exports.getPlaceDetails = (req, res) => {
  const { placeId } = req.body;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number,formatted_address,opening_hours,website,geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get the place photos
exports.getPlacePhotos = (req, res) => {
  const { photoReference } = req.body;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get the place reviews
exports.getPlaceReviews = (req, res, next) => {
  const { placeId } = req.body;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get the place opening hours
exports.getPlaceOpeningHours = (req, res) => {
  const { placeId } = req.body;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=opening_hours&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// get findplacefromtext
exports.getFindPlaceFromText = (req, res) => {
  const { placeName } = req.params.placeName;
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${placeName}&inputtype=textquery&fields=name%2Crating%2Cuser_ratings_total%2Cformatted_address%2Cphotos&&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
