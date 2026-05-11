import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";


function App() {
  
  useEffect(() => {
    weather.fetchCurrentLocation();
  },[]);


  const weather = useWeather();
  

  return (
    <div className="App">
      <div className="ip-btn">
        <Input />
        <Button onClick={weather.fetchData} name="Search" />
      </div>
      <Card />
    </div>
  );
}

export default App;
