import './Counter.css'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] =useState(16);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const doReset = () => {
    setCount(0);
  };
  return (
    <div>
        <div className="card">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={doReset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter