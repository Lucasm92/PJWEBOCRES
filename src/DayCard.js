import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-12">
      <div class="container-fluid"  style={{margin: '30px'}}>
      <div class="card  text-dark shadow-lg p-3 mb-5 bg-white rounded" >
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <div className="card-body">
       <p className="card-text">{reading.weather[0].description}</p>
          <p>{reading.weather[0].name}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DayCard;
