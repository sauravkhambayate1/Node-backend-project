const express = require('express')
const apiData = require("../API/api")

const data = express.Router()
data.route('/').get(apiData.apiController)
module.exports = data