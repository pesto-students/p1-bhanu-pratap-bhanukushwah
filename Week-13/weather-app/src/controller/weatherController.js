const weatherService = require('../services/weatherService');

async function getCurrentWeatherList(req, res, next) {
    let cityList = ["Indore", "Bhopal", "Punjab", "Rishikesh", "Jaipur", "Delhi", "Jabalpur", "Gwalior", "Goa"]
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let start = (page - 1) * limit;
    let cities = cityList.splice(start, limit);

    try {
        let response = await weatherService.getCurrentWeatherForCities(cities);
        res.json({ statusCode: 200, data: response, total: cityList.length + limit, currentPage: page, nextPage: page + 1, limit });
    } catch (err) {
        next({ statusCode: 500, message: "Oops, Something went wrong!" })
    }
}

async function getCurrentWeatherByCity(req, res, next) {

    if (!req.query.city) {
        next({ statusCode: 400, message: "Please provide valid city name!" })
    }

    try {
        let response = await weatherService.getCurrentWeatherByCity(req.query.city);
        res.json({ statusCode: 200, data: response });

    } catch (err) {
        next({ statusCode: 500, message: "Oops, Something went wrong!" })
    }
}

async function getWeatherForecastByCity(req, res, next) {
    if (!req.query.city) {
        next({ statusCode: 400, message: "Please provide valid city name!" })
    }

    if (!req.query.days) {
        next({ statusCode: 400, message: "Please provide valid number of days!" })
    } else if (req.query.days > 10) (
        next({ statusCode: 400, message: "Please provide valid number of days between 1-10!" })
    )

    try {
        let response = await weatherService.getWeatherForecastByCity(req.query.city, Number(req.query.days));
        res.json({ statusCode: 200, data: response });

    } catch (err) {
        next({ statusCode: 500, message: "Oops, Something went wrong!" })
    }
}

async function getHistoricalWeatherDataByCity(req, res, next) {
    if (!req.query.city) {
        next({ statusCode: 400, message: "Please provide valid city name!" })
    }
    if (!req.query.date) {
        next({ statusCode: 400, message: "Please provide valid date!" })
    }
    try {
        let response = await weatherService.getWeatherByCity(req.query.city, req.query.date);
        res.json({ statusCode: 200, data: response });

    } catch (err) {
        next({ statusCode: 500, message: "Oops, Something went wrong!" })
    }
}


module.exports = {
    getCurrentWeatherList,
    getCurrentWeatherByCity,
    getHistoricalWeatherDataByCity,
    getWeatherForecastByCity
}