import styles from './App.module.css';

function App() {
  return (
    <>
      <h1>Weather App</h1>
      <main className={styles.searchBar}>
        <input type='text' placeholder='Search your location'/>
        <button>Search</button>
        {/* Here we will put SearchBar component */}
      </main>
      <section className={styles.weatherCard}>
        <div>
          <h2>Location: New York</h2>
          <p>Temperature: 25°C</p>
          <p>Condition: Sunny</p>
        </div>
        {/* Here we will put WeatherDisplay component */}
      </section>
    </>
  );
}

export default App;
