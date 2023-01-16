const express = require('express')
const sportapi = require('../Api/Sport');

const sport = express.Router();
sport.route("/sport").get(sportapi.apiController)

module.exports = sport;