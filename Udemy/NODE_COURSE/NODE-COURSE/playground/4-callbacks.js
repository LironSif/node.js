// import request from "postman-request";
// import axios from 'axios';

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

// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})