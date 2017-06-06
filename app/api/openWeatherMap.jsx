const axios = require('axios');

const APP_ID = '0636f26293b6eb348319d8d8f7c9dab0';

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APP_ID}`;


module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${BASE_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    })
  }
}
