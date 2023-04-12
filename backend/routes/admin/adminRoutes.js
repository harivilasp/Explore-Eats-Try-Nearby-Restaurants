const express = require('express')

const router = express.Router()
const {getMe, registerAdmin, loginAdmin, getPendingResuests} = require('../../controllers/adminController')
const {protectAdmin } = require('../../middleware/adminAuthmiddleware')



router.post('/', registerAdmin) // Adding a user ==> registration
router.post('/login', loginAdmin) // authenticate a user ==> registration
router.get('/me',protectAdmin, getMe) // get a user data ==> registration // Added protect middleware, so before doing get me it will first verify the token using the protect function

// Show pending requests for restaurant approval

router.get('/pending', protectAdmin, getPendingResuests)


// Approve restaurant   

// Disapprove restaurant

module.exports = router

