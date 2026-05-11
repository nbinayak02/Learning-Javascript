const baseURL = "https://api.weatherapi.com/v1/current.json?key=f04cd527dcae44a598f63910250806%20";

export const getWeatherOfCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherOfLocaion = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();

}