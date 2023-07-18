import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const incrementValue = () => {
    setCounter(counter + 1);
  };
  const decrementValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 className="bg-red-500">Vite + React</h1>

      <button onClick={incrementValue}>increment</button>
      <p>{counter}</p>
      <button onClick={decrementValue}>decrement</button>
    </>
  );
}

export default App;
