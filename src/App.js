import React, {useState} from 'react';
import Counter from "./Counter";
import GetTime from './GetTime';
import CounterModal from "./CounterModal"
import './App.css';

const App = () => {
  const current = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = useState(current);

  const getCurrentTime = () => {
    let determineTime = new Date().toLocaleTimeString();    
    setCurrentTime(determineTime)  
  }

  return (
    <div className="App">
      <header className="App-header">
        <CounterModal />
       <Counter />
       <GetTime time={currentTime} getCurrentTime={getCurrentTime} />
      </header>
    </div>
  );
}

export default App;
