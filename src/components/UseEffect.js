//  src > components > UseEffect.js

import React, { useState, useEffect } from 'react';

const UseEffect = ()  => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

// useEffect to set our document title to isOn's default state
  useEffect(() => {
    document.title = isOn;
    console.log('first render');
  });

const handleClick = () => {
  setIsOn(!isOn);
  setCount(count + 1)
}
  return (
  <div>
    <h1>{isOn ? "ON" : "OFF"}</h1>
    <h1>I was clicked {count} times</h1>
    <button onClick={handleClick} className="btn">Click me</button>
  </div>
  );
}

export default UseEffect;