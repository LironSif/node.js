import request from "postman-request";
import axios from 'axios';



// fetching data with postman...........................................
// request(
//   "http://api.weatherstack.com/current?access_key=7b4ac00c25150f94eed53e4fbb676b4f&query=New York",
//   function (error, response, body) {
//     console.log("error:", error); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//     console.log("body:", body); // Print the response body.
//   }
// );

// fetching data with Axios...........................................
// axios.get('http://api.weatherstack.com/current', {
//     params: {
//         access_key: '7b4ac00c25150f94eed53e4fbb676b4f',
//         query: 'New York'
//     }
// })
// .then(response => {
//     console.log('body:','its currntly: ' + response.data.current.temperature + ' deegress out. there is a '  + response.data.current.precip + ' % chance of rain'); // Print the response body
// })
// .catch(error => {
//     console.log('error:', error); // Print the error if one occurred
// });


const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + ''
}