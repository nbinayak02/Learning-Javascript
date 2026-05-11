import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("My component is mounting...");

    return(() => {
        console.log("My component is un-mounting...");
        //works when my component is being cleared out from screen
    });

  }, []); //works on mounting state

  useEffect(() => {
    console.log("My component is updating...", count);

    return (() => {
        console.log("Count value is un-mounting...",count);
    })
  }, [count]); //works on updating state because of dependency list

  return (
    <div>
      <p>This is my component</p>
      <p>Count value is {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Value</button>
    </div>
  );
};

export default MyComponent;
