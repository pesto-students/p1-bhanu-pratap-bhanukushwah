require('dotenv').config();
const express = require('express');
const weatherRoutes = require('./src/routes/weatherRoute')
const errorHandler = require('./src/handlers/errorHandler')

const app = express();

app.get("/", (req, res) => {
    res.send("API is up and running!!");
})

app.use('/weather', weatherRoutes)
app.use(errorHandler)

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log("Server started successfully!")
})