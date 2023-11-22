//Create a component that displays a timer that counts seconds and can be started, paused, and reset.


import React, { useState, useEffect } from 'react';
const Timer = () => {
  let interval;
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const start = () => {
    setIsActive(true)
  }
  const pause = () => {
    setIsActive(false)
  }
  const reset = () => {
    setTimer(0);
    setIsActive(false);
  }
  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        setTimer((sec) => sec + 1)
      }, 1000)
    }
      return ()=>clearInterval(interval);
    
  }, [isActive])
  return (
    <>
      <p>Timer:{timer}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

    </>
  )
}

export default Timer;