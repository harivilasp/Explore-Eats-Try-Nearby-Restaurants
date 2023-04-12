// const express = require('express')

// const router = express.Router()

// const {getFavorites, addFavorites, updateFavorites, deleteFavorites} = require('../controllers/favoritesController')

// router.route('/fav').get(getFavorites).post(addFavorites) // Chained the requests going to the same route

// router.route('fav/:id').put(updateFavorites).delete(deleteFavorites)

// module.exports = router // Will export this router const

const { Router } = require('express')
const express = require('express')
const { getFavorites, addFavorites, updateFavorites, deleteFavorites } = require('../controllers/favoritesController')
const { protectCustomer } = require('../middleware/customerAuthMiddleware')

const router = express.Router()

// console.log("Here")
const {protect} = require('../middleware/userAuthmiddleware')

router.route('/').get(protectCustomer, getFavorites).post(protectCustomer, addFavorites)
router.route('/:id').put(protectCustomer, updateFavorites).delete(protectCustomer, deleteFavorites)

module.exports = router   