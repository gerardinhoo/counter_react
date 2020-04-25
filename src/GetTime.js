import React from 'react';
import "./GetTime.css";

const GetTime = (props) => {
  return (
    <div>
     <h3 style={{color: "white"}}>{props.time}</h3> 
      <button onClick={() => setTimeout(props.getCurrentTime, 2000)}>GET CURRENT TIME</button>
    </div>
  )
}

export default GetTime;




