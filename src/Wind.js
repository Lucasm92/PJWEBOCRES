import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

const Wind = ({speed}) => {
    return (
        <div>
    <h2> Vitesse du vent (en Km/h</h2>      
  <ReactSpeedometer
  maxValue={100}
  value={speed}
  needleColor="black"
  startColor="green"
  segments={10}
  endColor="red"/>
        </div>
    )
}

export default Wind
