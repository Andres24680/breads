const { application } = require('express')
const express = require('express')

//config 
require('dotenv').config()
const PORT = process.env.PORT 
console.log(PORT)

//routes 
application.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/breads_controllers.js')
application.use('/breads, breadsController')

//listen 
application.listen(PORT, () => {
    console.log('listening on port, PORT')
})