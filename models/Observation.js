const mongoose = require('mongoose')

const observationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add the birds name'],
    trim: true
  },
  rarity: {
    type: String
  },
  notes: {
    type: String
  },
  observationImage: {
    type: String
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Change _id property to id
observationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Observation', observationSchema)
