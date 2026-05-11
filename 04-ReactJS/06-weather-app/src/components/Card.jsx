import { useWeather } from "../context/Weather";


const Card = () => {

  const weather = useWeather();

  return (
    <div className="weather-card">
      <img src={weather.data?.current?.condition?.icon} />
      <p>{weather.data?.current?.condition?.text}</p>
      <h3>{weather.data?.current?.temp_c} &deg;C</h3>
      <p>Feels Like {weather.data?.current?.feelslike_c} &deg;C</p>
      <h5>{weather.data?.location?.name}, {weather.data?.location?.country}</h5>
      <div className="icons-data">
        <div className="item">
          {/* <img src="/icons/humidity.png" /> */}
          <p>Humidity: {weather.data?.current?.humidity}%</p>
        </div>

        <div className="item">
          {/* <img src="/icons/rain.png" /> */}
          <p>Rain: {weather.data?.current?.precip_mm} mm</p>
        </div>

        <div className="item">
          {/* <img src="/icons/wind.png" /> */}
          <p>Wind:{weather.data?.current?.wind_kph} kph</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
