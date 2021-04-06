import React, { useState } from 'react';
import "./css/Raportit.css"
import Tree from '@naisutech/react-tree'
import viikkoConnector from "./viikkoConnector"

const tesData = [
  {
  "label":"Viikko 14",
  "id":"6061d0c4c77f0355e8c7a19b",
  "parentId":null,
  "UserId":"6061d0c4c77f0355e8c7a19b",
  "vuosi":"2021"
  ,"viikko":"14",

  "items": [
    {
        "label":"maanantai",
        "parentId":"6061d0c4c77f0355e8c7a19b",
        "aloitus":"07:00",
        "lopetus":"15:30",
        "ruokatunti":true,
        "ylityö":false,
        "kommentti":""
    },
    {
      "label":"tiistai",
      "parentId":"6061d0c4c77f0355e8c7a19b",
      "aloitus":"07:00",
      "lopetus":"15:30",
      "ruokatunti":true,
      "ylityö":false,
      "kommentti":""
  },
  {
    "label":"keskiviikko",
    "parentId":"6061d0c4c77f0355e8c7a19b",
    "aloitus":"07:00",
    "lopetus":"15:30",
    "ruokatunti":true,
    "ylityö":false,
    "kommentti":""
}
  ]
}

]


const Sarakkeet = (props) => {

  return (
    <tr id={props.day}>

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


export default  function Raportit(props) {
  const [week, setWeek] = useState([])
  const [day, setDay] = useState([])

  
  
  function data() { viikkoConnector
  .getAll().then(respo => {
    console.log("here")
    setWeek(respo)
  })}

  const onSelect = selectedNode => {
    console.log(selectedNode)
    setDay(JSON.stringify(selectedNode))
    
  }
  const Test = () =>{
    return(
      <div>
        {day.toString()}
      </div>
    )
  }

  return(
    <div style={{ display: 'flex', flexWrap: 'nowrap', flexGrow: 1 }}>
    <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
    <Tree nodes={tesData} showEmptyItems size="half" theme={'light'} onSelect={onSelect}/>
    </div>
    <Test/>
  </div>
)
}

/*
const tesData = [
  {
  "label":"Viikko 14",
  "id":"6061d0c4c77f0355e8c7a19b",
  "parentId":null,
  "UserId":"6061d0c4c77f0355e8c7a19b",
  "vuosi":"2021"
  ,"viikko":"14",

  "items": [
    {
        "label":"maanantai",
        "parentId":"6061d0c4c77f0355e8c7a19b",
        "aloitus":"07:00",
        "lopetus":"15:30",
        "ruokatunti":true,
        "ylityö":false,
        "kommentti":""
    }
  ]
}

]

class ApiCall extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data : null
    };
  }

  componentWillMount() {
      this.renderMyData();
  }

  renderMyData(){
      fetch('http://localhost:3001/api/viikko/')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ data : responseJson })
          })
          .catch((error) => {
            console.error(error);
          });
  }

  render() {
    if (this.state.data === null) {
      console.log("null")
        return (
            <div className="MyView">
                loading
            </div>
        );
    }
    else {
      
        return(
          <div style={{ display: 'flex', flexWrap: 'nowrap', flexGrow: 1 }}>
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
            {console.log(this.state.data[0])}
            <Tree nodes={tesData} showEmptyItems size="half" theme={'light'} />
          </div>
        </div>
        );
    }
}
}

export default ApiCall;*/