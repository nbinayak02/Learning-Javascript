import { useEffect, useState } from "react";

const TimerComponent = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => setTime(time - 1), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Timer value is: {time}</p>
    </div>
  );
};

export default TimerComponent;
