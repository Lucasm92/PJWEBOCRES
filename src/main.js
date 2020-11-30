
import './App.css';


import React, { Component,useState } from 'react';
import './App.css';
import WeekWidget from './WeekWidget';
import Form from './Form';
import Weather from './Weather';
import Wind from './Wind';
import Graph from './Graph'
import Data from './Data';
import Circle from './Circle';


function Main() {

  const [weather,setWeather] = useState([])
  const APIKEY = '00517648ed782c3f434fed840bcfd50e'
  const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";

  async function fetchData(e) {
    const city = e.target.elements.city.value
      e.preventDefault()
      const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
      .then( res => res.json())
      .then(data => data)

        setWeather({
          data: apiData,
        city: apiData.city,
        name:apiData.name,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp),
        error:"",
        wind: apiData.wind.speed,
        humidity:apiData.main.humidity

      }
      )
  }

    return (

      <div className="App">
      <div class="container-fluid">
      <div class="row">
      <div class="col-md-2 btnadmin">
      <a class="btn btn-primary" href="/admin" role="button">Admin</a>
      </div>
      <div class="col-md-8">
      <h1 class="title">WEATHER APP</h1>
      </div>

      </div>
      <WeekWidget />

      
      <div class="row">
      <div class="col-md-6">
      <Graph/>
      </div>

      <div class="col-md">
      <Data/>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
      <Wind
      speed={weather.wind}
      />
      </div>
 
      <div class="col-md-4">

      <div className=" card-deck mb-1 text-center">
      <div class=" card cardshadow-lg p-3 mb-5 bg-white rounded text-dark mb-4 shadow-sm offset-sm-1 rounded ">
      <div class="card-header">
      <h3>Entrez une ville</h3>
      
      <Form getWeather={fetchData} />
      </div>
      <div class="card-body">
      <Weather
      city={weather.city}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      name={weather.name}
      humidity={weather.humidity}
      />
      </div>
      </div>


      {console.log(weather.data)}
      
      </div>
       
        </div>

      <div class="col-md-4">

      <Circle
      h={weather.humidity}
      />
      </div>
        
        </div>
        </div>
        </div>

    );
  }

export default Main;