/* 
This is a template of creating a server and connecting pages to it. This is a beginning process
of what can be greater with inginuity. 
*/

//embedding express
const express = require('express')
//Init express
const app = express()
//Creating a port with 3000 as name
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

//Created Route -- request, respond works just as well

app.get('/', (req, res) => {
    res.sendFile('/public/html-page.html', {root: __dirname})
})

app.get('/index.html', (req, res) => {
    try {
        res.sendFile('/public/index.html', {root:__dirname})
    } catch (err) {
        console.log(err)
    }
})

app.get('/project-page', (req, res) => {
    try {
        res.sendFile('/public/project-page.html', {root:__dirname} )
    } catch (err) {
        console.log(err)
    }
}) 
//The response to the request
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

require('dotenv').config()
console.log('Host:' + process.env.DATABASE_HOST)
console.log('Database:' + process.env.DATABASE_NAME)
console.log('Username:' + process.env.DATABASE_USER)
console.log('Password:' + process.env.DATABASE_PASSWORD)

/* 
To find the connecting code,  you must go to the main.env file. The rest of the shenanigans is right
here. Pages connect perfectly. Just need to build from here. 
*/