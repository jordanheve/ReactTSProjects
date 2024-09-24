import styles from "./App.module.css";
import Form from "./components/form/Form";
import useWeather from "./hooks/useWeather";
function App() {
  const { fetchWeather } = useWeather();
  return (
    <>
      <h1 className={styles.title}>clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
      </div>
    </>
  );
}

export default App;
