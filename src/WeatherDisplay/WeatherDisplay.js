import React from "react";
import styles from './WeatherDisplay.module.css';

function WeatherDisplay({ weatherData }) {
    return (
            weatherData && (
            <section className={styles.weatherCard}>
            <div>
              <h2>Location: {weatherData.name}</h2>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Condition: {weatherData.weather[0].description}</p>
            </div>
          </section>)
    )
}

export default WeatherDisplay;