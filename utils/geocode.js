const request = require('request');

const mapboxAccessCode = "pk.eyJ1IjoicmFuZ2xlIiwiYSI6ImNrOTY1bWd2YzA5Y3kzZXA3MjI2NXQ5aDQifQ.71hbrzlqdSgv9_MFJmIYsQ";

const geoCode = (address, callback ) => {
    address = encodeURIComponent(address);
    const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=" + mapboxAccessCode;
    //console.log(mapBoxUrl);
    request ({ url:mapBoxUrl, json:true}, (error, {body}) => {
        if( error ){
            callback( "Unable to connect to MapBox.", undefined);
        }else if (body.features.length === 0){
            callback('Unable to find location, try again.', undefined);
        }else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                place: body.features[0].place_name  
            } 
        )};
    });
}

module.exports = geoCode;