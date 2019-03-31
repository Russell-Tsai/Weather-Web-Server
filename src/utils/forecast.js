const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/42dd4ba446f577acc07bd5769cb00ef9/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?lang=es'

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service !', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.currently.temperature + ' degree out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast