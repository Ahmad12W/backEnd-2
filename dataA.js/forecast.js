const request = require("request")

const forecast = (longtitude, largtitude, callback) => {
  const url = "https://api.weatherapi.com/v1/current.json?key=1e47149bf0124379bb6192331230905&q=" + longtitude + "," + largtitude

  request({ url, json: true }, (error, response) => {

    if (error) {
      callback("Error unable to conact wether service", undefined)
    } else if (response.body.error) {
      callback(response.body.error.message, undefined)
    } else {
      callback(undefined, response.body.location.name + 'it is' + response.body.current.condition.text
        + "And temp   " + response.body.current.temp_c)
    }
  })
}

module.exports = forecast;
