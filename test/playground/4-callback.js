setTimeout(() => {
    console.log("two secound are up")
}, 2000);

const names = ['andrew','jen','jess']
const shortNames = names.filter((name) => {
 return name.length <= 4
    })

    const geocode = (address, callback) => {
       setTimeout(() => {
         const data = {
             latitude: 0,
             longitude:0,
         }
         callback(data) 
       }, 2000);
    }
    
 geocode('new york', (data) => {
     console.log(data)
 })