import { useState , useEffect } from 'react'

import './App.css'

function App() {
    const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
  <>
   <div style={styles.container}>
      
      <h1>React Counter App</h1>

      <h2>{count}</h2>

      <div>
        <button onClick={increment} style={styles.button}>
          Increment
        </button>

        <button onClick={decrement} style={styles.button}>
          Decrement
        </button>

        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>

    </div>
  
  </>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },

  button: {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


export default App
