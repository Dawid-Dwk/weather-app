import "./current-weather.css";
import React from "react";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="weather-top">
                <div>
                <p className="weather-city">Gliwice</p>
                <p className="weather-description">Sunny</p>
            </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
            </div>
            <div className="weather-bottom">
                <p className="weather-temperature">18°C</p>
                <div className="weather-details">
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label main">Details</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Feels like</span>
                        <span className="weather-parameter-value">22°C</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Wind</span>
                        <span className="weather-parameter-value">2 m/s</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Humidity</span>
                        <span className="weather-parameter-value">15%</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Pressure</span>
                        <span className="weather-parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;