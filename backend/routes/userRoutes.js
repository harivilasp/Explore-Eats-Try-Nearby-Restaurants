const express = require('express')

const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')
const { protect } = require('../middleware/authmiddleware')



router.post('/', registerUser) // Adding a user ==> registration
router.post('/login', loginUser) // authenticate a user ==> registration
router.get('/me',protect, getMe) // get a user data ==> registration // Added protect middleware, so before doing get me it will first verify the token using the protect function

module.exports = router

