import React from 'react';
import './props.css';
function Propsprimer(prop) {
  return (
    <div className="okvir">
    <h1>{prop.text}</h1>
    <p>{prop.opis}</p>
  </div>
  );
}
export default Propsprimer;
