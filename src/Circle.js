import React, { PureComponent } from 'react';
import ReactSpeedometer from "react-d3-speedometer"


const Circle = ({h}) => {
    return (
        <div>
    <h2> Humidité (en %)</h2>      
  <ReactSpeedometer
  maxValue={100}
  value={h}
  needleColor="black"
  startColor="#33D4FF"
  segments={10}
  textColor="black"
  endColor="#3339FF"/>
        </div>
    )
}

export default Circle
