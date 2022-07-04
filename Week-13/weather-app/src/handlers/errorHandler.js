function errorHandler(err, req, res, next) {
    res.status(err.statusCode).send(err)
}

module.exports = errorHandler;