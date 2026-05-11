import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from 'react';
import TimerComponent from "./components/Timer";

function App() {

  const [isVisible, setVisible] = useState(true);
  
  return (
    <div>
      <h3>Use Effect Hook</h3>
      {/* conditional rendering */}
      { isVisible ? <MyComponent /> : <></>} 
      <button onClick={() => setVisible(!isVisible)}>Toggle MyComponent</button>

      <TimerComponent />
    </div>
  );
}

export default App;
