
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const mesure = [
  {
    name: '1:00 AM', Temperature: 1.08, pv: 2400, amt: 2400,
  },
  {
    name: '4:00 AM', Temperature: 2.42, pv: 1398, amt: 2210,
  },
  {
    name: '7:00 AM', Temperature: 3.53, pv: 9800, amt: 2290,
  },
  {
    name: '10:00 AM', Temperature: 5.70, pv: 3908, amt: 2000,
  },
  {
    name: '1:00 PM', Temperature: 9.63, pv: 4800, amt: 2181,
  },
  {
    name: '4:00 PM', Temperature: 9.24, pv: 3800, amt: 2500,
  },
  {
    name: '7:00 PM', Temperature: 7.52, pv: 4300, amt: 2100,
  },
  {
    name: '10:00 PM', Temperature: 4.3, pv: 4300, amt: 2100,
  },
];



 

export default class Graph extends PureComponent {

  

  render() {

    return (
      
        <div class="container">
        <div className=" card-deck mb-1 text-center">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded text-dark mb-4 shadow-sm offset-sm-1 ">
        <div class="card-header">
        <h3>Temperature heure par heure</h3>
        </div>
        <div class="card-body">
      <LineChart
        width={500}
        height={300}
        data={mesure}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Temperature" stroke="#82ca9d" />
      </LineChart>
      </div>
      </div>
      </div>
     </div>
      
    );
  }
}

