import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Highlights() {
  const {  weatherData } = useContext(WeatherContext);
  // console.log(weatherData);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { current, location } = weatherData;

  const highlights = [
    {
      type: "Wind Speed",
      value: `${current.wind_kph}`,
      unit: "Km/h",
    },
    {
      type: "Humidity",
      value: `${current.humidity}`,
      unit: "_",
    },
    {
      type: "UV Index",
      value: `${current.uv}`,
      unit: "low",
    },
    {
      type: "Weather Location",
      value: `${location.name}`,
      unit: `${location.country}`,
    },
    {
      type: "cloud",
      value: `${current.cloud}`,
      unit: "",
    },
    {
      type: "Temprature",
      value: `${current.temp_c}°C`,
      unit: "Celsius",
    },
  ];
  return (
    <div>
    
      <h2 className="title text-4xl font-extrabold mb-5 ">Today s Highlights</h2>
      <div className="grid grid-cols-3 gap-4">
        {highlights.map((e) => (
          <div key={e.type} className="blur-bg px-4 p-2">
            <span className="font-bold">{e.type}</span>
            <div className="flex gap-2 justify-center items-center min-h-20">
              <p className="font-bold text-3xl">{e.value}</p>
            </div>
            <p>{e.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
