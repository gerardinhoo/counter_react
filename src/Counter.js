import React, {useState} from 'react';
import "./Counter.css";
import { Switch } from 'antd';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [toggleButton, setToggleButton] = useState(true);
  const [disable, setDisabled] = useState(true);

  const toggle = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(true)
  }


  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  } 

  const disableButton = () => {
    disable ? setDisabled(false) : setDisabled(true);
  }


  return (
    <div>
      <h4 style={{color: "white"}}>CLICK ON THE SWITCH TO ACTIVATE THE BUTTONS</h4>
      <Switch onClick={toggle} />
      <h1 style={{color: "white"}}>{counter}</h1>
        {toggleButton ? 
        <div className="counter-button">
          <button type="button" onClick={increaseCounter} disabled={disableButton} className="disableOption">INCREASE +</button> 
          <button type="button" onClick={decreaseCounter} disabled={disableButton} className="disableOption">DECREASE -</button>
        </div> :
        <div className="counter-button">
          <button type="button" onClick={increaseCounter}>INCREASE +</button> 
          <button type="button" onClick={decreaseCounter}>DECREASE -</button>
        </div>
        }
    </div>
  )
}


export default Counter;
