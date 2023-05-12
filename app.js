const request = require("request");
const forecast = require("./dataA.js/forecast");
const geocode = require("./dataA.js/geocode");
const country = process.argv[2];

geocode(country, (error, data) => {
    console.log("ERROR : ", error);
    console.log("DAtA : ", data);
    if (data) {
        forecast(data.longtitude, data.largtitude, (error, data) => {
            console.log("ERROR : ", error);
            console.log("DAtA : ", data);
        });
    } else {
        console.log("Eroooooooooooooooooor");
    }
});
////////////////////////////////////////////////////
