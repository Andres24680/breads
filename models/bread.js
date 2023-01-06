// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

//Schema 
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean }, // shorthand way to write this : Boolean,
  image: { type: String, default: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
  baker: {
    type: String, 
    enum: ['Panos', 'Jake', 'Andres', 'Jason', 'Diego', 'Stephen']
  }
})

//helper instance method 
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker}`
}


const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread 