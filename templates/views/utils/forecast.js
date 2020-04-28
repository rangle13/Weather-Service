const request = require('request');

const weatherstackAccessCode = "7f5a8675f97b0111fc311e96e91db737";

const forecast = (latitude, longitude, callback ) => {
    const weatherStackUrl = "http://api.weatherstack.com/current?access_key=" + weatherstackAccessCode;
    url = weatherStackUrl + "&query=" + latitude + "," + longitude + "&units=f"; 
    //console.log(url)
    request ({ url, json:true}, (error, {body}) => {
        if( error ){
            callback( "Unable to connect to WeatherStack.", undefined);
        }else if (body.current.length === 0){
            callback('Unable to find location.', undefined);
        }else {
            callback(undefined, {
                temperature: body.current.temperature,
                weatherDescription: body.current.weather_descriptions
            } 
        )};
    });
}

module.exports = forecast;