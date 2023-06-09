const express = require('express')

const router = express.Router()
const {registerCustomer, loginCustomer, getMe, updateMe, pendingCall} = require('../../controllers/customerController')
const {protectCustomer} = require('../../middleware/customerAuthMiddleware')



router.post('/', registerCustomer) // Adding a customer ==> registration
router.post('/login', loginCustomer) // authenticate a customer ==> login
router.get('/me',protectCustomer, getMe) // get the customer data ==> login // Added protect middleware, so before doing get me it will first verify the token using the protect function
router.post('/profile', protectCustomer, updateMe)  
router.post('/callrestaurant', protectCustomer, pendingCall)

module.exports = router

