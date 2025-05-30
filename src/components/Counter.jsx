
import './Counter.css';
import React, {useState} from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="counter">
        <button onClick={decrementCount} className="decrement">-</button>
        <div className="count">{count} </div>
        <button onClick={incrementCount} className="increment">+</button>
    </div>
  )

}

export default Counter;
