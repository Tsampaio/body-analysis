import React from 'react'

const columnInput = ({dateProp, bodyWeightProp, bodyFatProp, handleInputProp, indexProp}) => {
  
  const validateInpute = () => {
    if(bodyFatProp.valid === "yes") {
      return "green"
    } else if(bodyFatProp.valid === "no") {
      return "red"
    }
  }
  
  return (
    <>
      <tr>
        <td>
          <input type="date" id="start" 
            name={`date-0-${indexProp}`}
            value={dateProp}
            min="2021-01-01" max={Date.now()} 
            onChange={handleInputProp}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" 
            name={`bodyWeight-1-${indexProp}`} 
            value={bodyWeightProp}
            onChange={handleInputProp}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input 
            type="text" 
            name={`bodyFat-2-${indexProp}`} 
            value={bodyFatProp.value}
            onChange={handleInputProp}
            className={validateInpute()}
          />
        </td>
      </tr>
    </>
  )
}

export default columnInput
