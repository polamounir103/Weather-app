import { createContext, useEffect, useState } from "react";
import { getWeatherData } from "../services/weatherService";

export const  WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [country, setCountry] = useState("cairo");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (countryName) => {
    try {
      const data = await getWeatherData(countryName);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(country);
  }, [country]);

  return (
    <WeatherContext.Provider value={{ weatherData, country, setCountry }}>
      {children}
    </WeatherContext.Provider>
  );
};
