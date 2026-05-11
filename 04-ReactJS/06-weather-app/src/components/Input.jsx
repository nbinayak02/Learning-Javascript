import { useWeather } from "../context/Weather";

const Input = () => {

    const weather = useWeather();
    console.log("Weather: ", weather);

  return (
    <div className="input-field">
      <input
        placeholder="City Name"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
    </div>
  );
};

export default Input;
