import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import styles from './WeatherDetails.module.css'

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({weather}: WeatherDetailsProps) {
  return (
    <div className={styles.container}>
      <h2>Clima de {weather.name}</h2>
      <p className={styles.current}>{formatTemperature(weather.main.temp)}</p>
      <div className={styles.temperatures}>
        <p>Min: <span>{formatTemperature(weather.main.temp_min)}</span></p>
        <p>Max: <span>{formatTemperature(weather.main.temp_max)}</span></p>
      </div>
    </div>
  )
}