import React from 'react';
import "./GetTime.css";

const GetTime = (props) => {
  console.log(props)
  return (
    <div>
     <h3>{props.time}</h3> 
      <button onClick={setTimeout(props.getCurrentTime, 2000)}>GET CURRENT TIME</button>
    </div>
  )
}

export default GetTime;




