
// Api Requests to google maps api
const axios = require('axios');

// Get the near by places
exports.getNearByPlaces = (req, res, next) => {
    const { lat, lng } = req.body;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    axios
        .get(url)
        .then((response) => {
            console.log(response.data);
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Get the place details
exports.getPlaceDetails = (req, res, next) => {
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
}

// Get the place photos
exports.getPlacePhotos = (req, res, next) => {
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
    }

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
    }

// Get the place opening hours
exports.getPlaceOpeningHours = (req, res, next) => {
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
    }


