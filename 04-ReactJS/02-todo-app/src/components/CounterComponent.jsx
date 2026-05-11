import React, { useState } from "react";

const CounterComponent = () => {

    // use state is a hook 
    // useState returns array where 0: variable and 1: fn that changes value of 0th var

  const [count, setCount] = useState(0);


  //whenever value of the state variable (here, count) changes, the whole component re-renders with updated value

  return(
    <div>
      <p>Counter value - {count}</p>
      <p>The number is {count % 2 == 0 ? "Even" : "Odd"} </p>
      <button onClick = { () => setCount(count + 1) }>Increment</button>
    </div>
  );
};

export default CounterComponent;
