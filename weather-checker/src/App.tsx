import styles from "./App.module.css";
import Form from "./components/form/Form";
import Spinner from "./components/spinner/Spinner";
import WeatherDetails from "./components/weatherDetail/WeatherDetails";
import useWeather from "./hooks/useWeather";
function App() {
  const { fetchWeather, weather, hasWeatherData, loading, notFound } = useWeather();
  return (
    <>
      <h1 className={styles.title}>clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {notFound && <p className={styles.error}>No se encontró la ciudad</p>}
        {!loading && hasWeatherData && (
          <WeatherDetails
            weather={weather}/>
        )}
      </div>
    </>
  );
}

export default App;
