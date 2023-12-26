import fs from 'fs'
// import { json } from 'stream/consumers'


// const book = {
// title:"ego is the enemy",
// auther: "ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON )
// const book2JSON = JSON.stringify(book2)
// fs.writeFileSync('1-json.json',book2JSON )


// const book2 ={"name":"Liron","planet":"Earth","age":33} 


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON  = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'gunther'
user.age = 54

const uesrJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', uesrJSON)

