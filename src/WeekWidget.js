
import React from 'react';
import DayCard from './DayCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row} from 'react-bootstrap';
class WeekWidget extends React.Component {

  state = {
    fullData: [],
    dailyData: [],
    //degreeType: "fahrenheit"
  }

  updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value
    }, () => console.log(this.state))
  }
  componentDidMount = () => {
  var d = new Date();
  var m = d.getMonth();
  var j = d.getDate();
  var y = d.getFullYear();


  console.log(y+'-'+(m+1)+'-'+(j+1))
  const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";

  const weatherURL =
  `http://api.openweathermap.org/data/2.5/forecast?lat=48.76695612&lon=2.2811135&units=metric&APPID=${API_KEY}`
 // `https://api.openweathermap.org/data/2.5/forecast/daily?q=Paris&units=metrics&APPID=${API_KEY}`
  fetch(weatherURL)
  .then(res => res.json())
  .then(data => {
    const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
   //const dailyData = data.list.filter(reading => reading.dt_txt.includes(y+'-'+(m+1)+'-'+(j+1)))
    this.setState({
      fullData: data.list,
      dailyData: dailyData,
    }, () => console.log(this.state))
  })
  }
  
  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <div class="row"><DayCard reading={reading} key={index} /></div> )
  }


  render() {

    return (
      <div>
      {/*<h1 className="display-1 jumbotron">5-Day Forecast.</h1>*/}
      <h5 className="display-5 text-muted">Sceaux</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
        </div>

    )
  }
}

export default WeekWidget;