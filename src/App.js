import { useState } from 'react'
import ColumnHeaders from './components/ColumnHeaders';
import ColumnInputs from './components/ColumnInputs';
import './App.css';

function App() {
  const [state, setState] = useState([
    [
      {
        name: "date",
        value: "2018-07-22",
      },
      {
        name: "Body Weight",
        value: "",
      },
      {
        name: "Body Fat",
        value: "",
        rangeMin: 10,
        rangeMax: 20,
        valid: ""
      }
    ],
    [
      {
        name: "date",
        value: "2021-09-26",
      },
      {
        name: "Body Weight",
        value: "",
      },
      {
        name: "Body Fat",
        value: "",
        rangeMin: 2,
        rangeMax: 10,
        valid: ""
      }
    ],
  ])

  const handleInputFunction = (event) => {
    console.log(event.target.name)
    const targetNameSplit = event.target.name.split("-");
    const targetPropIndex = targetNameSplit[1];
    const targetStateIndex = targetNameSplit[2];
    

    const oldState = [...state];

    oldState[targetStateIndex][targetPropIndex].value = event.target.value

    if(oldState[targetStateIndex][targetPropIndex].value === "") {
      
      oldState[targetStateIndex][targetPropIndex].valid = ""
    
    } else if(oldState[targetStateIndex][targetPropIndex].rangeMax) {
      
      if( oldState[targetStateIndex][targetPropIndex].rangeMin < oldState[targetStateIndex][targetPropIndex].value && oldState[targetStateIndex][targetPropIndex].value < oldState[targetStateIndex][targetPropIndex].rangeMax) {
        oldState[targetStateIndex][targetPropIndex].valid = "yes"
      } else {
        oldState[targetStateIndex][targetPropIndex].valid = "no"
      }

    }

    setState(oldState)
  }

  const myInputs = [];
  for(let i=0 ; i < 2; i++) {
    myInputs.push(
      <table>
        <ColumnInputs 
          dateProp={state[i][0].value}
          bodyWeightProp={state[i][1].value}
          bodyFatProp={state[i][2]}
          handleInputProp={handleInputFunction}
          indexProp={i}
        />
      </table>
    )
  }

  return (
    <div className="App">
      <table>

          <ColumnHeaders />
        </table>
        
          {myInputs}
        
      
    </div>
  );
}

export default App;
