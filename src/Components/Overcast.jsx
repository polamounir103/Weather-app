import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Overcast() {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { forecast } = weatherData;
  const hourlyWeather = forecast.forecastday[0].hour;

  const overcast = [
    {
      time: "00:00",
      icon: hourlyWeather[0].condition.icon,
      temperature: hourlyWeather[0].temp_c,
    },
    {
      time: "03:00",
      icon: hourlyWeather[3].condition.icon,
      temperature: hourlyWeather[3].temp_c,
    },
    {
      time: "06:00",
      icon: hourlyWeather[6].condition.icon,
      temperature: hourlyWeather[6].temp_c,
    },
    {
      time: "09:00",
      icon: hourlyWeather[9].condition.icon,
      temperature: hourlyWeather[9].temp_c,
    },
    {
      time: "12:00",
      icon: hourlyWeather[12].condition.icon,
      temperature: hourlyWeather[12].temp_c,
    },
    {
      time: "15:00",
      icon: hourlyWeather[15].condition.icon,
      temperature: hourlyWeather[15].temp_c,
    },
    {
      time: "18:00",
      icon: hourlyWeather[18].condition.icon,
      temperature: hourlyWeather[18].temp_c,
    },
    {
      time: "21:00",
      icon: hourlyWeather[21].condition.icon,
      temperature: hourlyWeather[21].temp_c,
    },
  ];

  return (
    <div>
      <h2 className="title text-4xl font-extrabold mb-5">Overcast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 min-h-32">
        {overcast.map((e) => (
          <div
            key={e.time}
            className="blur-bg p-3 flex flex-col items-center justify-center gap-2"
          >
            <span>{e.time}</span>
            <div className="separator"></div>
            <div
              className="img-icon w-16 h-16 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${e.icon})`,
              }}
            ></div>
            <h2>{e.temperature}°C</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overcast;
