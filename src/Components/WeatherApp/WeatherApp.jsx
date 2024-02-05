import React from 'react'
import './WeatherApp.css'


import searchIcon from '../Assets/search.png';
import clearIcon from '../Assets/clear.png';
import drizzleIcon from '../Assets/drizzle.png';
import rainIcon from '../Assets/rain.png';
import humidityIcon from '../Assets/humidity.png'
import snowIcon from '../Assets/snow.png'
import windIcon from '../Assets/wind.png'
import cloudIcon from '../Assets/cloud.png'
const WeatherApp = () => {

    let api_key ="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key"
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput"  placeholder=' search city'/>
        <div className="search-icon">
            <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloudIcon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
            <div className="element"><img src={humidityIcon} alt="" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element"><img src={windIcon} alt="" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
