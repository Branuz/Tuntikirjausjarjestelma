import React, { useState, useEffect } from 'react'
import "./css/tyoaika.css"
import serverConnector from "./viikkoConnector"

const CurrentWeek = () =>{
  var date1 = new Date();  
  var oneJan =  new Date(date1.getFullYear(), 0, 1);   
 var numberOfDays =  Math.floor((date1 - oneJan) / (24 * 60 * 60 * 1000));   
 var result = Math.ceil(( date1.getDay() + 1 + numberOfDays) / 7);   

 return(result)
}

const normalWeek = () =>{
  let i = 0;
  document.querySelectorAll('[id=aloitus]').forEach(y =>{
    if(i<5){
      y.value = "07:00"
      i++
    }
  })

  let t = 0;
  document.querySelectorAll('[id=lopetus]').forEach(y =>{
    if(t<5){
      y.value = "15:30"
      t++
    }
  })

  let ylityö = 0;
document.querySelectorAll('[id=ylityöEi]').forEach(y =>{
  if(ylityö<5){
    y.checked = true
    ylityö++
  }
})

let ruokatunti = 0;
document.querySelectorAll('[id=ruokatuntiKyllä]').forEach(y =>{
  if(ruokatunti<5){
    y.checked = true
    ruokatunti++
  }
})
}


const Sarakkeet = (props) => {

  return (
    <tr id={props.day}>
      <td>{props.day}</td>
      <td><input id="aloitus" type="time"  /></td>
      <td><input id="lopetus" type="time"  /></td>
      <td>   
         Kyllä<input type="checkbox" id="ruokatuntiKyllä"/>
         Ei<input type="checkbox" id="ruokatuntiEi" />
      </td>
      <td>   
         Kyllä<input type="checkbox" id="ylityöKyllä"/>
         Ei<input type="checkbox" id="ylityöEi" />
      </td>
      <td> <input type="text" id="kommentti" /></td>
  </tr>
  )
}

function hmsToSeconds(s) {
  var b = s.split(':');
  return b[0]*3600 + b[1]*60 ;
}

function secondsToHMS(secs) {
  function z(n){return (n<10?'0':'') + n;}
  var sign = secs < 0? '-':'';
  secs = Math.abs(secs);
  return sign + z(secs/3600 |0) + ':' + z((secs%3600) / 60 |0) + ':' + z(secs%60);
}

const sendForm = () =>{
  const Aloitus = []
  const Lopetus = []
  const Ruokatunti = []
  const Ylityö = []
  const Kommentti = []

  document.querySelectorAll('[id=aloitus]').forEach(y =>{
    const userObject = {
     aloitus: y.value
    }
    Aloitus.push(userObject)
  })

  document.querySelectorAll('[id=lopetus]').forEach(y =>{
    const userObject = {
     lopetus: y.value
    }
    Lopetus.push(userObject)
  })

  document.querySelectorAll('[id=ruokatuntiKyllä]').forEach(y =>{
    const userObject = {
     ruokatunti: y.checked
    }
    Ruokatunti.push(userObject)
  })

  document.querySelectorAll('[id=ylityöKyllä]').forEach(y =>{
    const userObject = {
     ylityö: y.checked
    }
    Ylityö.push(userObject)
  })

  document.querySelectorAll('[id=kommentti]').forEach(y =>{
    const userObject = {
     kommentti: y.value
    }
    Kommentti.push(userObject)
  })

  const token = sessionStorage.getItem('token')
  var a = token.split('"')

  var d = new Date();
  var n = d.getFullYear();

  const viikkoTiedot = {
    
    label: "Viikko "+CurrentWeek(),
    UserId: a[3],
    id: a[3],
    vuosi: n,
    viikko: CurrentWeek(),
    parentId: null,

    maanantai: {
      label: "maanantai",
      parentId: a[3],
      aloitus: Aloitus[0].aloitus,
      lopetus : Lopetus[0].lopetus,
      ruokatunti: Ruokatunti[0].ruokatunti,
      ylityö: Ylityö[0].ylityö,
      kommentti: Kommentti[0].kommentti,
    },
    tiistai: {
      label: "tiistai",
      parentId: a[3],
      aloitus: Aloitus[1].aloitus,
      lopetus : Lopetus[1].lopetus,
      ruokatunti: Ruokatunti[1].ruokatunti,
      ylityö: Ylityö[1].ylityö,
      kommentti: Kommentti[1].kommentti,
    },
    keskiviikko: {
      label: "keskiviikko",
      parentId: a[3],
      aloitus: Aloitus[2].aloitus,
      lopetus : Lopetus[2].lopetus,
      ruokatunti: Ruokatunti[2].ruokatunti,
      ylityö: Ylityö[2].ylityö,
      kommentti: Kommentti[2].kommentti,
    },
    torstai: {
      label: "torstai",
      parentId: a[3],
      aloitus: Aloitus[3].aloitus,
      lopetus : Lopetus[3].lopetus,
      ruokatunti: Ruokatunti[3].ruokatunti,
      ylityö: Ylityö[3].ylityö,
      kommentti: Kommentti[3].kommentti,
    },
    perjantai: {
      label: "perjantai",
      parentId: a[3],
      aloitus: Aloitus[4].aloitus,
      lopetus : Lopetus[4].lopetus,
      ruokatunti: Ruokatunti[4].ruokatunti,
      ylityö: Ylityö[4].ylityö,
      kommentti: Kommentti[4].kommentti,
    },
    launtai: {
      label: "launtai",
      parentId: a[3],
      aloitus: Aloitus[5].aloitus,
      lopetus : Lopetus[5].lopetus,
      ruokatunti: Ruokatunti[5].ruokatunti,
      ylityö: Ylityö[5].ylityö,
      kommentti: Kommentti[5].kommentti,
    },
    sunnuntai: {
      label: "sunnuntai",
      parentId: a[3],
      aloitus: Aloitus[6].aloitus,
      lopetus : Lopetus[6].lopetus,
      ruokatunti: Ruokatunti[6].ruokatunti,
      ylityö: Ylityö[6].ylityö,
      kommentti: Kommentti[6].kommentti,
    }
  }

  return (
 serverConnector.create(viikkoTiedot).then(response => {

   const päivät = ["maanantai", "tiistai", "keskiviikko","torstai", "perjantai", "launtai", "sunnuntai"]
   const vastaus = response

    var i = 0
    var summa = 0
while(i<päivät.length){
  
  
  const aloitus = vastaus[päivät[i]].aloitus
  const lopetus = vastaus[päivät[i]].lopetus

  if(isNaN(aloitus)){
    summa += hmsToSeconds(lopetus) - hmsToSeconds(aloitus)
  }
  i++
}
return secondsToHMS(summa)
 })
)
}





export default function Dashboard() {
  const [week, setWeek] = useState([])

  const token = sessionStorage.getItem('token')
  var a = token.split('"')


  useEffect(() => {

    var d = new Date();
    var n = d.getFullYear();
    
    serverConnector.getOne(a[3],n,CurrentWeek()).then(response =>{

    const päivät = ["maanantai", "tiistai", "keskiviikko","torstai", "perjantai", "launtai", "sunnuntai"]
    const vastaus = response[0]
 
     var i = 0
     var summa = 0
if(response.length>0)
     
{ while(i<päivät.length){
   
   
   const aloitus = vastaus[päivät[i]].aloitus
   const lopetus = vastaus[päivät[i]].lopetus
 
   if(isNaN(aloitus)){
     summa += hmsToSeconds(lopetus) - hmsToSeconds(aloitus)
   }
   i++
 }

 setWeek(secondsToHMS(summa))}
  })
  }, [a])


 
  return(
    <div className="main">
         <h3>Työaikamerkinnät viikolla <CurrentWeek/></h3>
    <table>
      <tr>
        <th>Viikonpäivä</th>
        <th>Aloitus</th>
        <th>Lopetus</th>
        <th>Ruokatunti</th>
        <th>Ylitöitä</th>
        <th>Kommentti</th>
    </tr>
    <Sarakkeet day="Maanantai"/>
    <Sarakkeet day="Tiistai"/>
    <Sarakkeet day="Keskiviikko"/>
    <Sarakkeet day="Torstai"/>
    <Sarakkeet day="Perjantai"/>
    <Sarakkeet day="Launtai"/>
    <Sarakkeet day="Sunnuntai"/>
    </table>
  <button className="normaali" onClick={() => normalWeek()}>Normaali viikko</button> <button className="lähetä" onClick={(x =>{
    sendForm().then(x => {setWeek(x)})
  })}>Lähetä</button>
 <h4>Viikolla tehdyt tunnit: {week}</h4> 
 
  </div>
  );
}