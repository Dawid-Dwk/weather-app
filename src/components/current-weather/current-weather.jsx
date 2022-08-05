import "./current-weather.css";
import React from "react";

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="weather-top">
                <div>
                <p className="weather-city">{data.city}</p>
                <p className="weather-description">{data.weather[0].main}</p>
            </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
            </div>
            <div className="weather-bottom">
                <p className="weather-temperature">{Math.round(data.main.temp) }°C</p>
                <div className="weather-details">
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label main">Details</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Feels like</span>
                        <span className="weather-parameter-value">{Math.round(data.main.feels_like)} °C</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Wind</span>
                        <span className="weather-parameter-value">{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Humidity</span>
                        <span className="weather-parameter-value">{Math.round(data.main.humidity)} %</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Pressure</span>
                        <span className="weather-parameter-value">{Math.round(data.main.pressure)} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;