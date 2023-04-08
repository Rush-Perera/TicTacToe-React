import { useState,useEffect } from "react";
import React from "react";
//import app.css file
import "./App.css";

const App = () => {
const [count, setCount] = useState(0);

useEffect(() => {
    document.title = `You clicked ${count} times`;
    }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;