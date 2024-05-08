// App.jsx
import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count={count} baseNumber={2} />
        <ExponentThree count={count} baseNumber={3} />
        <ExponentFour count={count} baseNumber={4} />
        <ExponentFive count={count} baseNumber={5} />
        <ExponentSix count={count} baseNumber={6} />
      </div>
    </div>
  );
}

export default App;
