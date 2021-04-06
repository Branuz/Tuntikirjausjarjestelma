const mongoose = require('mongoose')


const url = "mongodb+srv://Branuz:NOkia6280!@fullstack.fujal.mongodb.net/tuntikirjausjärjestelmä?retryWrites=true&w=majority"

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const noteSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    token: String
  })


noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', noteSchema)