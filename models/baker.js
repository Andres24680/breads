// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Panos', 'Jake', 'Andres', 'Jason', 'Diego', 'Stephen']
    }, 
    startDate: {
        type: Date, 
        required: true
    }, 
    bio: String
}, { toJSON: { virtuals: true}})

// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
