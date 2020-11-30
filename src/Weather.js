import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = ({description, city, country, error, temperature,name,wind,humidity}) => {

    function matchValues () {
    if(description) {
        const weatherDescription = description.split(' ')
        const keyWords = ['cloudy','clouds', 'cloud', 'overcast']
        for(let i = 0; i < weatherDescription.length; i++) {
            if(keyWords.includes(weatherDescription[i])) {
                return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />
            }
        }
    }}

    return (

        <div class="result">
            <span>{name}</span>
            {temperature && <p>{temperature}  °C</p>}
            {description && <p> Conditions: {description}</p>}
 
        </div>

        
    )
}

export default Weather; 