import React, {useState} from 'react';
import Switch from "react-switch";
import { findByLabelText } from '@testing-library/react';

const switchStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: "#fff",
  paddingLeft: 5,
}
const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(checked)
  }
  return (     
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Switch 
            onChange={handleChange} 
            checked={checked}
            checkedIcon={
            <div style={switchStyle}>on</div>
          }
            uncheckedIcon={
            <div style={switchStyle}>off</div>
          }
          />
        </div> 
      </div>
    </div>
  )
}


export default Toggle
