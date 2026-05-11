import React, {createContext, useContext, useState} from "react";
import { getWeatherOfCity, getWeatherOfLocaion } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherOfCity(searchCity);
        setData(response);
    }

    const fetchCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherOfLocaion(position.coords.latitude, position.coords.longitude).then((data) => setData(data));
        })
    }

    return ( 
    
    <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchCurrentLocation}}>
        {props.children}
    </WeatherContext.Provider>

    );
}