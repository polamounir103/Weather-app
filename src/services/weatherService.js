import axios from "axios";

// const API_KEY = "GXAKDX7ZK498XL94M5WCXWGRG";
// const BASE_URL =
//   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
// https://api.weatherapi.com/v1/forecast.json?key=12266571587f4203ab7172523241908&q=London&days=1&aqi=no&alerts=no

// const API_KEY = "12266571587f4203ab7172523241908";
// const BASE_URL =
  // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
// http://api.weatherapi.com/v1/forecast.json?key=12266571587f4203ab7172523241908&q=London&days=3&aqi=no&alerts=no

export const getWeatherData = async (loc) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=12266571587f4203ab7172523241908&q=${loc}&days=3&aqi=no&alerts=no`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
