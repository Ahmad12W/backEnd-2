const request = require("request")

const geocode = (adrees, callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + adrees + ".json?access_token=pk.eyJ1Ijoia2lsYXIiLCJhIjoiY2xoam1jY2w1MGpnYzNkbnhzZnBnOWx2dCJ9.u9n2GLqm_GjYwQe_Co4MDA"


    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback("Error unKnow", undefined)
        }
        else if (response.body.message) {
            callback(response.body.message, undefined)
        }
        else if (response.body.features.length == 0) {
            callback("unable to fienf location", undefined)
        }
        else {
            callback(undefined, {
                longtitude: response.body.features[0].center[0],
                largtitude: response.body.features[1].center[1],
            })
        }
    })
}

module.exports = geocode;