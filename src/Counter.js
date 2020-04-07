import React, {useState} from 'react';
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  } 


  return (
    <div>
      <h1>{counter}</h1>
      <div className="counter-button">
        <button onClick={increaseCounter}>INCREASE +</button>
        <button onClick={decreaseCounter}>DECREASE +</button>
      </div>
    </div>
  )
}

export default Counter;
