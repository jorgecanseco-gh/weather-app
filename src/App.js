import styles from './App.module.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';


function App() {

  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    if (location.trim() === '') {
      return;
    } 
    fetchWeather(location);
  }

  async function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'1b40c63a7c75edcf91d91173db3506a6'}&units=metric`;
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json()
      setWeatherData(json);
    } catch (error) {
      console.error(error.status);
    }
}

  return (
    <>
      <h1>Weather App</h1>
      <main className={styles.searchBar}>
        <SearchBar 
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
         />
      </main>
      {weatherData && <WeatherDisplay
      weatherData={weatherData}
      />}
    </>
  );
}


export default App;
