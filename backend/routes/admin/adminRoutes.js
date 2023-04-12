const express = require('express')

const router = express.Router()
const {getMe, registerAdmin, loginAdmin} = require('../../controllers/adminController')
const {protectAdmin } = require('../../middleware/userAuthmiddleware')



router.post('/', registerAdmin) // Adding a user ==> registration
router.post('/login', loginAdmin) // authenticate a user ==> registration
router.get('/me',protectAdmin, getMe) // get a user data ==> registration // Added protect middleware, so before doing get me it will first verify the token using the protect function

module.exports = router

