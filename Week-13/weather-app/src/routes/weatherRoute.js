const express = require('express');
const weatherController = require('../controller/weatherController');
const router = express.Router();


router.get('/all', weatherController.getCurrentWeatherList)
router.get('/current', weatherController.getCurrentWeatherByCity)
router.get('/forecast', weatherController.getWeatherForecastByCity)
router.get('/history', weatherController.getHistoricalWeatherDataByCity)

module.exports = router;