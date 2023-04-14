const express = require("express");

const router = express.Router();

const { getHomePage } = require("../../controllers/homeController.js");

router.route("/").post(getHomePage);

module.exports = router; // Will export this router const
