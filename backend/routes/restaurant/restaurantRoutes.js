const express = require('express')

const router = express.Router()
const {registerRestaurant, loginRestaruant, getMe, updateMe} = require('../../controllers/restaurantController')
const {protectRestaurant} = require('../../middleware/restaurantAuthMiddleware')



router.post('/', registerRestaurant) // Adding a restaurant ==> registration
router.post('/login', loginRestaruant) // authenticate a restaurant ==> login
router.get('/me',protectRestaurant, getMe) // get the restaurant data ==> login // Added protect middleware, so before doing get me it will first verify the token using the protect function
router.post('/profile', protectRestaurant, updateMe)
module.exports = router