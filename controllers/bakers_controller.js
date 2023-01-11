// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')


// Index: http://localhost:3003/bakers
baker.get('/', (req, res) => {
    Baker.find()
    .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    

//routes
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
})

//delete route 
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
    .then(deleteBaker => {
        res.status(303).redirect('/breads')
    })
})

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit:10 } // sets limit to how many breads show on baker page 
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})








// export
module.exports = baker                    
