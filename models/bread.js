// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

//Schema 
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean }, // shorthand way to write this : Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' }
})

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread 