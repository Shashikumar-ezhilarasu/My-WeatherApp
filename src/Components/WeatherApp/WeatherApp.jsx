import React, { useState } from 'react';
import './WeatherApp.css';

import searchIcon from '../Assets/search.png';
import clearIcon from '../Assets/clear.png';
import drizzleIcon from '../Assets/drizzle.png';
import rainIcon from '../Assets/rain.png';
import humidityIcon from '../Assets/humidity.png';
import snowIcon from '../Assets/snow.png';
import windIcon from '../Assets/wind.png';
import cloudIcon from '../Assets/cloud.png';

const WeatherApp = () => {
    let api_key = "place your keyy";

    const [wicon,setWicon]=useState(cloudIcon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }
        let url = `{apikey here}?q=${element[0].value}&units=metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon=="01n")
        {
          setWicon(clearIcon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon=="02n"){
          setWicon(cloudIcon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon=="03n"){
          setWicon(drizzleIcon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon=="04n"){
          setWicon(drizzleIcon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon=="09n"){
          setWicon(rainIcon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon=="10n"){
          setWicon(rainIcon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon=="13n"){
          setWicon(snowIcon);
        }
        else{
          setWicon(clearIcon);
        }
    }
//hello
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder=' search city' />
                <div className="search-icon" onClick={() => search()}>
                    <img src={searchIcon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
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
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;

