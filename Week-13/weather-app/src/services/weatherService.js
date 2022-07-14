require('dotenv').config()
const axios = require('axios');

let baseUrl = `http://api.weatherapi.com/v1`

let apiKey = process.env.API_KEY || "";

async function getCurrentWeatherForCities(cities) {
    let promises = cities.map((city) => {
        return new Promise((resolve, reject) => {
            axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`).then(data => resolve(data)).catch(err => reject(err))
        })
    })

    try {
        let response = await Promise.all(promises).then(values => {
            return values.map(value => {
                return value?.data
            })
        }).catch(err => { throw new Error(err) });

        return response
    }
    catch (error) {
        throw new Error(error)
    }
}

async function getCurrentWeatherByCity(city) {
    try {
        let { data } = await axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`)
        return data
    }
    catch (error) {
        throw new Error(error)
    }
}

async function getWeatherForecastByCity(city, days) {
    try {
        let { data } = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=${days}`)
        return data
    }
    catch (error) {
        throw new Error(error)
    }
}

async function getHistoricalWeatherDataByCity(city, date) {
    try {
        let { data } = await axios.get(`${baseUrl}/history.json?key=${apiKey}&q=${city}&dt=${date}`)
        return data
    }
    catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    getCurrentWeatherByCity,
    getHistoricalWeatherDataByCity,
    getWeatherForecastByCity,
    getCurrentWeatherForCities
}