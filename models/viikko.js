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

    label: String,
    id: String,
    parentId: String,
    UserId: String,
    vuosi: Number,
    viikko: Number,
        maanantai: {
            label: String,
            parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        },
        tiistai: {
          label: String,
           parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        }, 
        keskiviikko: {
          label: String,
          parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        },
        torstai: {
          label: String,
          parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        },  
        perjantai: {
          label: String,
          parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        }, 
        launtai: {
          label: String,
          parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        }, 
        sunnuntai: {
          label: String,
          parentId: String,
            aloitus: String,
            lopetus: String,
            ruokatunti: Boolean,
            ylityö: Boolean,
            kommentti: String
        }, 
  })


noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('työtunnit', noteSchema)