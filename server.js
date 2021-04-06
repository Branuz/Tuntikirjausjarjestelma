const express = require('express');
require("dotenv").config()
const cors = require('cors');
const app = express();
app.use(express.json())
const User = require("./models/note")
const Viikko = require("./models/viikko");


app.use(cors());

app.use('/api/login', (req, res) => {
  const body = req.body

User.find( { username: body.username } ).then(x =>{

  if(x[0].password===body.password){
    res.send({
      token: x[0].token
    })
    }
    console.log("Wrong password")
   }).catch(error =>{
     console.log("Wrong pw or username")
   })
  })

  app.post('/api/viikko', (request, response) => {
    const body = request.body
    
    const viikko = new Viikko({
      label: body.label,
      id: body.id,
      parentId: body.parentId,
      UserId: body.UserId,
      vuosi: body.vuosi,
      viikko: body.viikko,
        maanantai : {
          label: body.maanantai.label,
          parentId: body.maanantai.parentId,
          aloitus: body.maanantai.aloitus,
          lopetus: body.maanantai.lopetus,
          ruokatunti: body.maanantai.ruokatunti,
          ylityö: body.maanantai.ylityö,
          kommentti: body.maanantai.kommentti,
        },
        tiistai : {
          label: body.tiistai.label,
          parentId: body.tiistai.parentId,
          aloitus: body.tiistai.aloitus,
          lopetus: body.tiistai.lopetus,
          ruokatunti: body.tiistai.ruokatunti,
          ylityö: body.tiistai.ylityö,
          kommentti: body.tiistai.kommentti,
        },
        keskiviikko : {
          label: body.keskiviikko.label,
          parentId: body.keskiviikko.parentId,
          aloitus: body.keskiviikko.aloitus,
          lopetus: body.keskiviikko.lopetus,
          ruokatunti: body.keskiviikko.ruokatunti,
          ylityö: body.keskiviikko.ylityö,
          kommentti: body.keskiviikko.kommentti,
        },
        torstai : {
          label: body.torstai.label,
          parentId: body.torstai.parentId,
          aloitus: body.torstai.aloitus,
          lopetus: body.torstai.lopetus,
          ruokatunti: body.torstai.ruokatunti,
          ylityö: body.torstai.ylityö,
          kommentti: body.torstai.kommentti,
        },
        perjantai : {
          label: body.perjantai.label,
          parentId: body.perjantai.parentId,
          aloitus: body.perjantai.aloitus,
          lopetus: body.perjantai.lopetus,
          ruokatunti: body.perjantai.ruokatunti,
          ylityö: body.perjantai.ylityö,
          kommentti: body.perjantai.kommentti,
        },
        launtai : {
          label: body.launtai.label,
          parentId: body.launtai.parentId,
          aloitus: body.launtai.aloitus,
          lopetus: body.launtai.lopetus,
          ruokatunti: body.launtai.ruokatunti,
          ylityö: body.launtai.ylityö,
          kommentti: body.launtai.kommentti,
        },
        sunnuntai : {
          label: body.sunnuntai.label,
          parentId: body.sunnuntai.parentId,
          aloitus: body.sunnuntai.aloitus,
          lopetus: body.sunnuntai.lopetus,
          ruokatunti: body.sunnuntai.ruokatunti,
          ylityö: body.sunnuntai.ylityö,
          kommentti: body.sunnuntai.kommentti,
        },
    })

    viikko.save().then(savedData => {
      response.json(savedData)
    })
  })

  app.get('/api/viikko', (req, resp) => {
    Viikko.find({}).then(x => {
        resp.json(x)
    })
  })

  app.get('/api/viikko/:id/:vuosi/:viikko', (request, response, next) => {

    Viikko.find( { UserId: request.params.id, vuosi:request.params.vuosi, viikko: request.params.viikko } ).then(x =>{
      response.json(x)
    })
   })



  const PORT = process.env.PORT || 3001
  app.listen(PORT, () =>{
      console.log("Server running on port", PORT)
  }) 