import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <button id="increment-btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <div id="counter-value">{count}</div>
    </div>
  );
}

export default App;
