import styles from "./App.module.css";
import Form from "./components/form/Form";
function App() {
  return (
    <>
      <h1 className={styles.title}>clima</h1>
      <div className={styles.container}>
        <Form />
      </div>
    </>
  );
}

export default App;
